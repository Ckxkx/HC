/* ─── i18n dictionary ───────────────────────────────────── */
var I18N = {
  zh: {
    bio1: '我目前就读于山东师范大学计算机科学与技术专业，具有扎实的专业基础，并具备良好的英语能力，荣获多项国家级荣誉，目前正在保研择校。',
    bio2: '本科期间，我主要围绕计算机视觉与边缘智能开展研究，深度参与了智慧社区自主巡检机器人和植物病虫害精准诊断系统两个项目。平时喜欢打篮球、乒乓球和健身，对计算机相关的技术都非常感兴趣。',
    resume: '简历',
    location: '山东 · 济南',
    projectsTitle: '项目经历',
    p1badge: '2025 · 计算机视觉 · 边缘智能',
    p1title: '智慧社区自主巡检机器人',
    p1desc: '面向智慧社区场景的自主巡检机器人。围绕计算机视觉与边缘智能技术，实现自主导航、环境感知与智能巡检，为社区安防与物业管理提供自动化解决方案。',
    p1video: '演示视频',
    p2badge: '2025 · 计算机视觉 · 深度学习',
    p2title: '植物病虫害精准诊断系统',
    p2desc: '面向农业场景的植物病虫害精准识别与诊断系统。基于计算机视觉与深度学习技术，对作物病虫害进行快速检测与精准诊断，助力智慧农业。',
    p2video: '演示视频',
    expTitle: '教育经历',
    e1role: '山东师范大学 · 计算机科学与技术',
    e1mentor: '专业基础扎实 · 保研择校中',
    e1period: '2023 – 至今',
    e2role: '研究兴趣 · 计算机视觉与边缘智能',
    e2mentor: '智慧社区巡检机器人 · 植物病虫害精准诊断',
    e2period: '本科期间',
    awardsTitle: '获奖荣誉',
    a1: '第七届全球校园人工智能算法精英大赛',
    a1lvl: '国家一等奖 · 省级一等奖',
    a2: '第十七届服务外包创新创业大赛',
    a2lvl: '国家二等奖 · 省级一等奖',
    a3: '第 18 届中国大学生计算机设计大赛',
    a3lvl: '国家三等奖 · 省级一等奖',
    a4: '第 19 届中国大学生计算机设计大赛',
    a4lvl: '国家三等奖 · 省级一等奖',
    a5: '第十三届大学生新一代信息通信科技大赛',
    a5lvl: '工程实践赛道 · 国家三等奖 · 省级一等奖',
    a6: '睿抗机器人开发者大赛 RAICOM 全国总决赛',
    a6lvl: '大数据竞赛 · 国家三等奖 · 省级一等奖',
    a7: '第十二届全国大学生统计建模大赛',
    a7lvl: '山东赛区 · 省级二等奖',
    a8: '第十六届蓝桥杯全国软件和信息技术专业人才大赛',
    a8lvl: '山东赛区 · 二等奖',
    footerNote: '本站源码开放，欢迎借鉴 <a href="https://github.com/Ckxkx/HC" target="_blank" rel="noopener noreferrer">source code</a>。'
  },
  en: {
    bio1: 'I am currently an undergraduate student in Computer Science and Technology at Shandong Normal University. With a solid academic foundation, strong English proficiency, and multiple national-level honors, I am now preparing for postgraduate recommendation (baoyan).',
    bio2: 'During my undergraduate years, my research centers on computer vision and edge intelligence. I have been deeply involved in two projects: an autonomous patrol robot for smart communities and a precision diagnosis system for plant diseases and pests. In my spare time, I enjoy basketball, table tennis, and fitness, and I am genuinely passionate about all computer-related technologies.',
    resume: 'Resume',
    location: 'Jinan, China',
    projectsTitle: 'Projects',
    p1badge: '2025 · Computer Vision · Edge Intelligence',
    p1title: 'Smart Community Autonomous Patrol Robot',
    p1desc: 'An autonomous patrol robot for smart communities. Leveraging computer vision and edge intelligence, it achieves autonomous navigation, environmental perception and intelligent inspection, providing automated solutions for community security and property management.',
    p1video: 'Demo Video',
    p2badge: '2025 · Computer Vision · Deep Learning',
    p2title: 'Plant Disease & Pest Precision Diagnosis System',
    p2desc: 'A precision diagnosis system for plant diseases and pests in agriculture. Based on computer vision and deep learning, it rapidly detects and accurately diagnoses crop diseases, empowering smart agriculture.',
    p2video: 'Demo Video',
    expTitle: 'Experience',
    e1role: 'Shandong Normal University · Computer Science and Technology',
    e1mentor: 'Solid academic foundation · Applying for postgraduate recommendation',
    e1period: '2023 – Present',
    e2role: 'Research Interests · Computer Vision & Edge Intelligence',
    e2mentor: 'Smart-community patrol robot · Plant disease & pest diagnosis',
    e2period: 'Undergraduate',
    awardsTitle: 'Awards',
    a1: 'Global Campus AI Algorithm Elite Competition (7th)',
    a1lvl: 'National First Prize · Provincial First Prize',
    a2: 'Service Outsourcing Innovation & Entrepreneurship Competition (17th)',
    a2lvl: 'National Second Prize · Provincial First Prize',
    a3: 'China Collegiate Computing Contest (18th)',
    a3lvl: 'National Third Prize · Provincial First Prize',
    a4: 'China Collegiate Computing Contest (19th)',
    a4lvl: 'National Third Prize · Provincial First Prize',
    a5: 'National College Students ICT Competition (13th, Engineering Practice)',
    a5lvl: 'National Third Prize · Provincial First Prize',
    a6: 'RAICOM National Finals (Big Data Competition)',
    a6lvl: 'National Third Prize · Provincial First Prize',
    a7: 'National College Students Statistical Modeling Competition (12th)',
    a7lvl: 'Provincial Second Prize (Shandong)',
    a8: 'Blue Bridge Cup National Software & IT Talent Competition (16th)',
    a8lvl: 'Provincial Second Prize (Shandong)',
    footerNote: 'Feel free to borrow this website\'s <a href="https://github.com/Ckxkx/HC" target="_blank" rel="noopener noreferrer">source code</a>.'
  }
};

/* ─── Theme ──────────────────────────────────────────────── */
var ICONS = {
  light: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>',
  dark:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></svg>'
};

var btn = document.getElementById('theme-toggle');
var langBtn = document.getElementById('lang-toggle');

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  btn.innerHTML = ICONS[theme === 'dark' ? 'dark' : 'light'];
}

/* ─── Language ───────────────────────────────────────────── */
function applyLang(lang) {
  var dict = I18N[lang] || I18N.zh;
  document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
  document.querySelectorAll('[data-i18n]').forEach(function (el) {
    var key = el.getAttribute('data-i18n');
    if (dict[key]) el.innerHTML = dict[key];
  });
  langBtn.setAttribute('title', lang === 'zh' ? 'Switch to English' : '切换到中文');
  langBtn.setAttribute('aria-label', lang === 'zh' ? 'Switch to English' : '切换到中文');
  localStorage.setItem('lang', lang);
}

/* ─── Init ───────────────────────────────────────────────── */
applyTheme(document.documentElement.getAttribute('data-theme') || 'light');
var savedLang = localStorage.getItem('lang');
applyLang(savedLang === 'en' ? 'en' : 'zh');

btn.addEventListener('click', function () {
  var next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  localStorage.setItem('theme', next);
  applyTheme(next);
});

langBtn.addEventListener('click', function () {
  applyLang(document.documentElement.lang === 'zh-CN' ? 'en' : 'zh');
});

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function (e) {
  if (!localStorage.getItem('theme')) applyTheme(e.matches ? 'dark' : 'light');
});
