# Roadmap — ExpanseFi Website

> 面向 Codex 的开发任务清单，按优先级排列。

---

## Phase 1 — 上线准备（1-2天）

### 1.1 内容配置

- [ ] 替换邮件地址：`pitch@expansefi.com`
- [ ] 更新品牌链接（官网 / 邮箱 / 社媒）
- [ ] 更新版权年份（`footer`）
- [ ] 确认/更新 3 个 portfolio 项目的官网链接

### 1.2 SEO / Meta

- [ ] 补充 `<meta name="description">` 完整文案
- [ ] 添加 Open Graph 图片（`og:image`），建议 1200×630px
- [ ] 添加 `<link rel="canonical">`
- [ ] 生成并配置 `favicon.ico` + `apple-touch-icon.png`
- [ ] 创建 `sitemap.xml`
- [ ] 创建 `robots.txt`

### 1.3 性能优化

- [ ] 将 Google Fonts 改为自托管（减少外部请求）
- [ ] 压缩 CSS（可选 PostCSS）
- [ ] 添加 `<link rel="preconnect" href="https://fonts.googleapis.com">`

---

## Phase 2 — 功能完善（3-7天）

### 2.1 Team 页面（`/team`）

**新建文件：** `team.html`

需要的数据字段：
```js
const TEAM = [
  {
    name: "姓名",
    role: "Managing Partner",
    bio: "简介...",
    avatar: "/public/assets/team/name.jpg",
    twitter: "https://twitter.com/...",
    linkedin: "https://linkedin.com/...",
  }
];
```

布局参考：2列卡片网格，大头像 + 名字 + 职位 + Bio + 社交图标。

### 2.2 联系/Pitch 表单

**选项 A：使用 Formspree（无需后端）**

```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
  <input name="name" type="text" placeholder="Your name" required />
  <input name="email" type="email" placeholder="Email" required />
  <input name="project" type="text" placeholder="Project name" required />
  <select name="stage">
    <option value="idea">Idea Stage</option>
    <option value="mvp">MVP</option>
    <option value="traction">Traction</option>
  </select>
  <textarea name="description" placeholder="Tell us about your project"></textarea>
  <button type="submit">Submit Pitch →</button>
</form>
```

**选项 B：自建 API 端点（Node.js / Next.js）**

```
POST /api/pitch
Body: { name, email, project, stage, description }
Action: 发送邮件通知 + 存入 Airtable/Notion
```

### 2.3 移动端导航优化

当前 `.nav-hamburger` 点击后直接修改 style，需要改为：
- 创建 `.mobile-menu` 全屏遮罩
- 添加展开/收起动画（slide-down）
- 点击遮罩关闭菜单

### 2.4 Portfolio 详情页

**新建文件：** `portfolio/[id].html` 或 Next.js 动态路由

每个项目页包含：
- Hero：项目 Logo + 一句话介绍
- Problem / Solution 板块
- 核心指标（TVL、用户数、合作方等）
- 团队介绍
- 媒体报道
- 链接（网站、文档、GitHub、社交）

---

## Phase 3 — 进阶功能（2-4周）

### 3.1 迁移到 Next.js 14

**理由：** 更好的 SEO（SSG/ISR）、更方便的路由、组件化

```bash
npx create-next-app@latest expansefi-next --typescript --tailwind --app
```

**迁移步骤：**
1. 将 `tokens.css` / `global.css` 迁移到 Tailwind config + CSS modules
2. 拆分 HTML sections 为 React 组件（`Hero.tsx`, `Portfolio.tsx` 等）
3. 将 `PORTFOLIO` / `APPROACH` 数组迁移到 `/data/*.ts`
4. 配置 `next.config.js`（图片优化、字体优化）

### 3.2 Insights / Blog

**技术栈建议：** MDX + Next.js

```
/content/
  posts/
    2024-01-defi-thesis.mdx
    2024-02-web3-security.mdx
```

功能：
- 文章列表页（`/insights`）
- 文章详情页（`/insights/[slug]`）
- 标签分类筛选
- RSS Feed

### 3.3 数字动画（Counter）

当统计数字滚入视口时，从 0 动画到目标数值：

```js
function animateCounter(el, target, duration = 1500) {
  const start = performance.now();
  const update = (time) => {
    const progress = Math.min((time - start) / duration, 1);
    el.textContent = Math.floor(easeOut(progress) * target);
    if (progress < 1) requestAnimationFrame(update);
  };
  requestAnimationFrame(update);
}
```

### 3.4 暗色主题切换（可选）

当前已为深色主题，如需支持浅色：
- 添加 `data-theme="light"` 的 CSS 变量覆盖
- 本地存储主题偏好
- 监听 `prefers-color-scheme` 系统设置

---

## 部署建议

### Vercel（推荐）

```bash
# 静态站点
vercel --prod

# Next.js
vercel
```

### Cloudflare Pages

```bash
# 构建命令（静态）: 无
# 输出目录: /
```

### 环境变量

```env
# .env.local（不要提交到 Git）
NEXT_PUBLIC_FORMSPREE_ID=your_form_id
AIRTABLE_API_KEY=your_api_key
AIRTABLE_BASE_ID=your_base_id
```

---

## Git 规范

```
feat: 新功能
fix: Bug 修复
style: 样式调整
docs: 文档更新
refactor: 重构
perf: 性能优化
```

示例：
```
feat: add team page with 4 member cards
fix: mobile nav not closing on link click
style: adjust hero title letter-spacing for mobile
docs: update ROADMAP with Phase 3 tasks
```

---

## 检查清单（上线前）

- [ ] 所有链接可访问（无 `#` 占位）
- [ ] 所有图片有 `alt` 属性
- [ ] 表单有验证和错误提示
- [ ] Lighthouse 性能分数 > 90
- [ ] Lighthouse 无障碍分数 > 90
- [ ] 移动端三种尺寸测试（375px / 768px / 1024px）
- [ ] 跨浏览器测试（Chrome / Safari / Firefox）
- [ ] HTTPS 已配置
- [ ] 隐私政策页面（含联系表单时必须）
