# ExpanseFi（旷域资本） — Official Website

> **Brand Tagline:** Expanding the Frontier of DeFi x AI / 拓展 DeFi x AI 的边界  
> **Brand Name:** ExpanseFi（旷域资本）  
> **Logo Abbreviation:** EF  
> **Domain:** expansefi.com

---

## 项目概述

ExpanseFi（旷域资本）是专注于 crypto 种子轮投资的风险资本机构，已孵化 3 个原生 crypto 项目。本网站是其官方对外门户，定位对标 a16z / Paradigm，风格高端、极简、权威。

## 项目状态

| 模块 | 状态 |
|------|------|
| 静态 HTML/CSS/JS 主页 | ✅ 完成 |
| 设计 Token 系统 | ✅ 完成 |
| 响应式布局 | ✅ 完成 |
| 滚动动画 | ✅ 完成 |
| 移动端适配 | ✅ 完成 |
| 多页面路由 | 🔲 待开发 |
| 团队页面 | 🔲 待开发 |
| 博客/Insights | 🔲 待开发 |
| 联系表单后端 | 🔲 待开发 |

---

## 目录结构

```
expansefi/
├── index.html                  # 主页入口
├── public/
│   └── assets/
│       ├── icons/              # SVG 图标资源
│       └── fonts/              # 本地字体备用
├── src/
│   ├── styles/
│   │   ├── tokens.css          # 设计 Token（颜色、字体、间距）
│   │   ├── global.css          # 全局样式 + 所有组件样式
│   │   └── animations.css      # 动画关键帧 + 工具类
│   └── lib/
│       ├── cursor.js           # 自定义鼠标光标逻辑
│       ├── marquee.js          # 滚动字幕数据 + 渲染
│       ├── portfolio.js        # 投资组合数据 + 渲染
│       ├── approach.js         # 工作方式数据 + 渲染
│       └── scroll.js           # 滚动显示 + 导航栏状态
└── docs/
    ├── README.md               # 本文件
    ├── DESIGN_SYSTEM.md        # 设计规范
    ├── COMPONENTS.md           # 组件文档
    └── ROADMAP.md              # 开发路线图
```

---

## 快速启动

```bash
# 方式一：直接用浏览器打开（无需构建）
open index.html

# 方式二：本地开发服务器（推荐，避免 CORS 问题）
npx serve .
# 或
python3 -m http.server 3000

# 方式三：用 VS Code Live Server 插件
```

> ⚠️ 项目当前为纯静态站点（HTML + CSS + Vanilla JS），无需 Node.js 构建步骤。

---

## 技术栈

| 层级 | 技术 |
|------|------|
| 标记语言 | HTML5 语义化标签 |
| 样式 | CSS3 + CSS 自定义属性（无框架） |
| 脚本 | Vanilla JavaScript（ES6+） |
| 字体 | Google Fonts（Playfair Display + DM Mono + Syne） |
| 构建工具 | 无（可选 Vite 迁移） |

### 如需迁移到 React/Next.js

```bash
npx create-next-app@latest expansefi-next
# 参考 docs/ROADMAP.md 中的迁移指南
```

---

## 核心数据文件

### 投资组合（`src/lib/portfolio.js`）

```js
const PORTFOLIO = [
  {
    id: "opland",
    number: "001",
    name: "Opland",
    tag: "On-Chain Asset Management",
    description: "完全托管的链上资管平台...",
    bgLetter: "O",
    link: "#",          // 替换为实际项目网址
    status: "Active",
  },
  // ... OmniGuard, Catal.land
];
```

**修改方式：** 直接编辑 `PORTFOLIO` 数组即可新增/修改项目。

### 字幕栏（`src/lib/marquee.js`）

```js
const MARQUEE_ITEMS = [
  "On-Chain Asset Management",
  // 直接增删字符串
];
```

---

## 设计系统速查

详细规范见 `docs/DESIGN_SYSTEM.md`。

### 颜色

| 变量 | 值 | 用途 |
|------|----|------|
| `--gold` | `#C9A84C` | 主品牌色、强调色 |
| `--gold-light` | `#E8C97A` | 悬停态、数字展示 |
| `--ink` | `#0A0A08` | 页面主背景 |
| `--ink-2` | `#1A1A15` | 卡片背景 |
| `--text-primary` | `#E8E4DA` | 主要文字 |
| `--text-muted` | `#B8B4A8` | 次要文字 |

### 字体

| 变量 | 字族 | 用途 |
|------|------|------|
| `--font-display` | Playfair Display | 标题、品牌文字 |
| `--font-sans` | Syne | 正文、导航 |
| `--font-mono` | DM Mono | 数字、标签、代码 |

---

## 联系方式配置

修改 `index.html` 中的邮箱地址：

```html
<!-- 第 88 行附近 -->
<a href="mailto:pitch@expansefi.com" class="btn-primary">
  Pitch to ExpanseFi →
</a>
```

---

## 浏览器兼容性

| 浏览器 | 支持 |
|--------|------|
| Chrome 90+ | ✅ |
| Firefox 88+ | ✅ |
| Safari 14+ | ✅ |
| Edge 90+ | ✅ |
| IE 11 | ❌ 不支持 |

---

## Codex 开发说明

详细任务拆解见 `docs/ROADMAP.md`。

优先级顺序：
1. 配置实际域名和邮箱
2. 开发 Team 页面
3. 添加联系表单（带 API 端点）
4. 迁移到 Next.js（SEO 优化）
5. 开发 Insights/Blog 模块
