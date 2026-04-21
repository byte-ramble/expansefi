# Components — ExpanseFi（旷域资本）

> 组件文档：描述当前所有 UI 组件的结构、数据接口和扩展方式。

---

## 导航栏 `Navbar`

**文件：** `index.html` + `src/styles/global.css`（`.navbar`）  
**行为：** 滚动超过 40px 后触发 `.scrolled` 状态（加深背景，增强边框）

### HTML 结构

```html
<nav id="navbar" class="navbar">
  <a href="/" class="logo">
    <div class="logo-mark">EF</div>
    <span>ExpanseFi</span>
  </a>
  <div class="nav-links">
    <a href="#thesis">Thesis</a>
    <a href="#portfolio">Portfolio</a>
    <a href="#approach">Approach</a>
    <a href="#team">Team</a>
    <a href="#contact" class="nav-cta">Contact</a>
  </div>
  <button class="nav-hamburger" aria-label="Menu">
    <span></span><span></span><span></span>
  </button>
</nav>
```

### 扩展：新增导航项

直接在 `.nav-links` 内添加 `<a>` 标签即可。

---

## Hero Section

**文件：** `index.html` + `.hero` CSS

### 数据项（需手动修改 HTML）

| 字段 | 当前值 | 位置 |
|------|--------|------|
| 主标题 | "Expanding the Frontier of DeFi x AI" | `.hero-title` |
| 副标题 | "Native. Conviction. Perpetual." | `.hero-sub` |
| 统计1 | 3 / Portfolio Companies | `.hero-stats` |
| 统计2 | 100% / Crypto Native | `.hero-stats` |
| 统计3 | Seed / Focus Stage | `.hero-stats` |

### 背景装饰

- `.hero-bg`：两个 radial-gradient 光晕
- `.hero-grid`：60×60px 金色网格线
- `.hero-watermark`：右侧水印 "Ⅰ"（罗马数字，纯装饰）

---

## 滚动字幕 `Marquee`

**文件：** `src/lib/marquee.js`  
**渲染目标：** `#marquee-track`

### 修改内容

编辑 `marquee.js` 中的 `MARQUEE_ITEMS` 数组：

```js
const MARQUEE_ITEMS = [
  "On-Chain Asset Management",
  "Web3 Security Infrastructure",
  // 增删任意字符串
];
```

### 速度调整

在 `animations.css` 中修改 `marquee` 动画时长：

```css
.marquee-track {
  animation: marquee 30s linear infinite;  /* 改数字 */
}
```

---

## 投资原则 `Principles`

**文件：** `index.html`（静态 HTML）

### 修改原则内容

找到 `.principles` 块，直接修改 `.principle` 内的 HTML：

```html
<div class="principle">
  <span class="pnum">01</span>
  <span class="ptext"><strong>标题。</strong> 描述文字。</span>
</div>
```

---

## 投资组合卡片 `PortfolioCard`

**文件：** `src/lib/portfolio.js`  
**渲染目标：** `#portfolio-grid`

### 数据结构

```ts
interface PortfolioItem {
  id: string;          // 唯一 ID（小写无空格）
  number: string;      // 显示编号，如 "001"
  name: string;        // 项目名称
  tag: string;         // 分类标签（单行）
  description: string; // 项目描述（1-3句）
  bgLetter: string;    // 背景装饰大字母（1个字符）
  link: string;        // 项目官网链接
  status: string;      // 状态："Active" | "Stealth" | "Exited"
}
```

### 新增项目

在 `PORTFOLIO` 数组中追加对象：

```js
{
  id: "newproject",
  number: "004",
  name: "NewProject",
  tag: "Category",
  description: "项目描述...",
  bgLetter: "N",
  link: "https://newproject.xyz",
  status: "Active",
}
```

> 注意：超过3个项目时，`portfolio-grid` 会自动换行（CSS grid 三列）。

---

## 工作方式 `ApproachItem`

**文件：** `src/lib/approach.js`  
**渲染目标：** `#approach-grid`

### 数据结构

```ts
interface ApproachItem {
  num: string;     // 编号，如 "01"
  title: string;   // 小标题
  desc: string;    // 描述文字
}
```

---

## CTA Section

**文件：** `index.html`（静态 HTML）

### 需替换的内容

```html
<!-- 邮件地址 -->
<a href="mailto:pitch@expansefi.com" class="btn-primary">

<!-- 标题文案 -->
<h2>Building something<br /><em>unprecedented?</em></h2>
```

---

## 页脚 `Footer`

**文件：** `index.html`

### 页脚链接配置

```html
<div class="footer-links">
  <a href="./en/">English</a>
  <a href="https://www.expansefi.com" target="_blank">Website</a>
  <a href="mailto:pitch@expansefi.com">Pitch Email</a>
</div>
```

---

## 自定义光标 `Cursor`

**文件：** `src/lib/cursor.js`

- **圆点：** `#cursor` — 跟随鼠标位置，mix-blend-mode: difference
- **环形：** `#cursor-ring` — 弹性追随（延迟系数 0.12）
- **悬停放大：** 所有 `a`、`button`、`.port-card`、`.btn-*` 元素触发放大

### 禁用光标（移动端）

移动端默认不显示自定义光标（touch 设备不触发 mousemove）。  
如需强制隐藏，在 `global.css` 添加：

```css
@media (hover: none) {
  #cursor, #cursor-ring { display: none; }
  body { cursor: auto; }
}
```

---

## 滚动显示 `ScrollReveal`

**文件：** `src/lib/scroll.js`

对任何元素添加 `.reveal` 类即可激活入场动画。  
可叠加延迟类：`.delay-1`、`.delay-2`、`.delay-3`（0.1s / 0.2s / 0.3s）。

```html
<div class="reveal delay-2">内容</div>
```

**原理：** IntersectionObserver，threshold=0.12，触发后添加 `.revealed` 类。

---

## 未来待建组件

| 组件 | 优先级 | 说明 |
|------|--------|------|
| `TeamCard` | 高 | 团队成员卡片：头像、姓名、职位、简介、社交链接 |
| `ContactForm` | 高 | Pitch 联系表单：名称、邮箱、项目名、简介、阶段 |
| `InsightCard` | 中 | 文章卡片：封面图、标题、日期、标签、摘要 |
| `PortfolioDetail` | 中 | 项目详情页：全面介绍、指标、合作方 |
| `StatsCounter` | 低 | 滚动触发的数字动画（AUM、投资数等） |
| `MobileMenu` | 中 | 移动端全屏导航抽屉 |
