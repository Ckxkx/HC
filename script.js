const toggle = document.querySelector('.theme-toggle');
const savedTheme = localStorage.getItem('cv-theme');
if (savedTheme === 'dark') document.body.classList.add('dark');
toggle?.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  localStorage.setItem('cv-theme', document.body.classList.contains('dark') ? 'dark' : 'light');
});
