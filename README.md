# Zhu Huichen · 朱会琛 — 个人主页

个人单页主页，设计风格致敬 [krahets.com](https://krahets.com/)（Lato + 霞鹜文楷字体、OKLCH 中性配色、明暗双主题、GitHub star 徽章）。

使用原生 HTML、CSS 和 JavaScript 构建，无需构建步骤，可直接部署到 Vercel。

## 页面结构

- **About** — 圆形头像、姓名（Zhu Huichen 朱会琛）、简介、联系方式（Email / GitHub / Resume / 所在地）
- **Projects** — 4 个项目（MSEDNet、Plate Recognition、Recordthings、Code Memoirs），带 GitHub star 徽章
- **Experience** — 教育经历与开源维护经历卡片
- **Awards** — 8 项竞赛获奖

## 功能特性

- 明暗主题切换：遵循 `prefers-color-scheme`，可手动切换并记忆（localStorage），无闪烁
- GitHub star 徽章：调用 GitHub API 获取仓库 star 数，localStorage 缓存 6 小时
- 响应式：移动端单列布局

## 本地预览

```bash
python -m http.server 4173
```

## Vercel

零配置静态站点。导入仓库后，Framework Preset 选 `Other`，Build Command 留空，Output Directory 使用 `.`。
