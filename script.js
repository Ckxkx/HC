var ICONS = {
  light: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>',
  dark:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></svg>'
};

var STAR_CACHE_TTL = 6 * 60 * 60 * 1000;

var btn = document.getElementById('theme-toggle');

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  btn.innerHTML = ICONS[theme === 'dark' ? 'dark' : 'light'];
}

function formatStars(count) {
  if (count < 1000) return String(count);
  var divisor = count >= 1000000 ? 1000000 : 1000;
  var suffix = count >= 1000000 ? 'M' : 'k';
  var value = count / divisor;
  var rounded = value >= 10 ? Math.round(value) : Math.round(value * 10) / 10;
  return String(rounded).replace(/\.0$/, '') + suffix;
}

function starCacheKey(repo) {
  return 'github-stars:' + repo;
}

function readCachedStars(repo) {
  try {
    var raw = localStorage.getItem(starCacheKey(repo));
    if (!raw) return null;
    var cached = JSON.parse(raw);
    if (!cached || typeof cached.count !== 'number') return null;
    return cached;
  } catch (err) {
    return null;
  }
}

function writeCachedStars(repo, count) {
  try {
    localStorage.setItem(starCacheKey(repo), JSON.stringify({
      count: count,
      updatedAt: Date.now()
    }));
  } catch (err) {}
}

function setGithubStars(badge, repo, count) {
  var countNode = badge.querySelector('.gh-badge__count');
  if (!countNode) return;
  countNode.hidden = false;
  countNode.textContent = formatStars(count);
  badge.setAttribute('aria-label', repo + ' has ' + count.toLocaleString() + ' GitHub stars');
}

function githubRepoUrl(repo) {
  return 'https://api.github.com/repos/' + repo.split('/').map(encodeURIComponent).join('/');
}

function loadGithubStars() {
  if (!window.fetch) {
    document.querySelectorAll('.gh-badge[data-repo]').forEach(function (badge) {
      var link = badge.closest('.badge-link');
      if (link) link.hidden = true;
    });
    return;
  }

  document.querySelectorAll('.gh-badge[data-repo]').forEach(function (badge) {
    var repo = badge.getAttribute('data-repo');
    var countNode = badge.querySelector('.gh-badge__count');
    var cached = readCachedStars(repo);

    if (cached) setGithubStars(badge, repo, cached.count);
    if (cached && Date.now() - cached.updatedAt < STAR_CACHE_TTL) return;

    fetch(githubRepoUrl(repo), {
      headers: { Accept: 'application/vnd.github+json' }
    })
      .then(function (response) {
        if (!response.ok) throw new Error('GitHub API error');
        return response.json();
      })
      .then(function (data) {
        if (typeof data.stargazers_count !== 'number') throw new Error('Missing star count');
        setGithubStars(badge, repo, data.stargazers_count);
        writeCachedStars(repo, data.stargazers_count);
      })
      .catch(function () {
        if (!cached) {
          var link = badge.closest('.badge-link');
          if (link) link.hidden = true;
        }
      });
  });
}

applyTheme(document.documentElement.getAttribute('data-theme') || 'light');
loadGithubStars();

btn.addEventListener('click', function () {
  var next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  localStorage.setItem('theme', next);
  applyTheme(next);
});

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function (e) {
  if (!localStorage.getItem('theme')) applyTheme(e.matches ? 'dark' : 'light');
});
