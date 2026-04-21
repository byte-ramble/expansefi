# Design System — ExpanseFi（旷域资本）

> 版本：1.0.0  
> 最后更新：2024  
> 负责文件：`src/styles/tokens.css`

---

## 品牌定位

| 维度 | 定义 |
|------|------|
| 视觉关键词 | 权威、极简、奢华、原生加密 |
| 参考对标 | a16z、Paradigm、Dragonfly Capital |
| 主色调 | 深墨黑 + 贵金属金 |
| 情感基调 | 沉稳、前瞻、精英 |

---

## 颜色系统

### 品牌色（Gold）

```css
--gold:        #C9A84C;   /* 主品牌金，按钮、强调 */
--gold-light:  #E8C97A;   /* 悬停态、数字展示 */
--gold-dim:    #8A6E30;   /* 标签号码、低对比场景 */
--gold-subtle: rgba(201, 168, 76, 0.12);  /* 边框、背景叠加 */
--gold-hover:  rgba(201, 168, 76, 0.25);  /* 悬停背景 */
```

### 背景色阶

```css
--ink:   #0A0A08;   /* 主背景，最深 */
--ink-2: #1A1A15;   /* 卡片背景 */
--ink-3: #2A2A22;   /* 悬停卡片 */
--ink-4: #3A3A30;   /* 深色分割线 */
```

### 文字色阶

```css
--text-primary: #E8E4DA;   /* 标题、主要文字 */
--text-muted:   #B8B4A8;   /* 正文、次要文字 */
--text-dim:     #7A7670;   /* 标签、辅助信息 */
```

### 辅助强调色

```css
--accent-teal: #4A9B8A;    /* 备用强调色（慎用） */
```

---

## 排版系统

### 字体家族

| 角色 | 字体 | 备用 | 引入方式 |
|------|------|------|----------|
| Display（标题） | Playfair Display | Georgia, serif | Google Fonts |
| Sans（正文/UI） | Syne | Helvetica Neue, sans-serif | Google Fonts |
| Mono（数字/标签） | DM Mono | Fira Code, monospace | Google Fonts |

### 字体大小规范

| 场景 | 大小 | 字体 | 字重 |
|------|------|------|------|
| Hero 标题 | clamp(52px, 7vw, 96px) | Display | 700 |
| Section 标题 | clamp(36px, 4vw, 52px) | Display | 700 |
| CTA 标题 | clamp(44px, 6vw, 80px) | Display | 700 |
| 正文 | 17px | Sans | 400 |
| 卡片描述 | 14-15px | Sans | 400 |
| 标签/导航 | 11-12px | Mono | 400 |
| 数字统计 | 28-36px | Mono | 500 |

### 行高规范

| 场景 | line-height |
|------|-------------|
| 大标题 | 1.0 ~ 1.15 |
| 正文段落 | 1.7 ~ 1.8 |
| 卡片描述 | 1.6 ~ 1.7 |
| 标签/单行 | 1.0 |

### 字间距规范

| 场景 | letter-spacing |
|------|----------------|
| 大标题 | -0.02em（收紧） |
| 标签/导航/Mono | +0.10em ~ +0.25em（放宽） |
| 正文 | 0（默认） |

---

## 间距系统

基于 8px 网格：

```css
--space-1:  8px
--space-2:  16px
--space-3:  24px
--space-4:  32px
--space-5:  40px
--space-6:  48px
--space-8:  64px
--space-10: 80px
--space-15: 120px   /* Section 上下内边距 */
--space-20: 160px   /* CTA Section 上下内边距 */
```

---

## 边框规范

```css
--border-subtle: 1px solid rgba(201, 168, 76, 0.10);  /* 导航栏、Section 分割 */
--border-dim:    1px solid rgba(201, 168, 76, 0.20);  /* 强调边框 */
--border-mid:    1px solid rgba(255, 255, 255, 0.06); /* 原则列表分割线 */
```

卡片边框（默认/悬停）：
```css
/* 默认 */
border: 1px solid rgba(201, 168, 76, 0.08);
/* 悬停 */
border: 1px solid rgba(201, 168, 76, 0.25);
```

---

## 动画规范

### Easing 函数

```css
--ease-out: cubic-bezier(0.16, 1, 0.3, 1);    /* 元素进入 */
--ease-in:  cubic-bezier(0.55, 0, 1, 0.45);    /* 元素离开 */
```

### 时长

```css
--duration-fast: 0.15s    /* 光标、微交互 */
--duration-base: 0.25s    /* 颜色过渡、链接 */
--duration-slow: 0.45s    /* 卡片、大元素 */
```

### 滚动入场

所有滚动显示元素使用 `.reveal` 类（由 IntersectionObserver 触发）：
- 初始：`opacity: 0; transform: translateY(32px)`
- 显示：`opacity: 1; transform: translateY(0)`
- 过渡：`0.7s ease-out`

---

## 组件视觉规范

### 按钮

| 类型 | 背景 | 文字 | 边框 |
|------|------|------|------|
| `.btn-primary` | `--gold` | `--ink` | 无 |
| `.btn-outline` | 透明 | `--gold` | `1px solid rgba(gold, 0.4)` |
| `.nav-cta` | 透明 | `--gold` | `1px solid rgba(gold, 0.45)` |

所有按钮 padding: `16px 40px`，字号 `13px`，字间距 `0.15em`，全大写。

### 卡片（Portfolio）

- 背景：`--ink-2`，悬停变 `--ink-3`
- 上边框线：悬停时出现金色渐变线（高度 2px）
- 位移：悬停 `translateY(-4px)`
- 过渡时长：`0.45s ease-out`

### Section 标签

统一格式：`40px 金线 + 11px Mono 大写金色文字`，使用 `::before` 伪元素实现。

---

## 响应式断点

| 断点 | 宽度 | 变化 |
|------|------|------|
| Desktop | > 1024px | 三列网格，双列 thesis |
| Tablet | 768px ~ 1024px | 两列 portfolio，两列 approach，单列 thesis |
| Mobile | < 768px | 全部单列，隐藏汉堡菜单显示，隐藏光标/水印 |

---

## 禁用规范（DON'T）

- ❌ 禁止使用 Inter、Roboto、Arial 等通用字体
- ❌ 禁止白底紫色渐变（AI 滥用风格）
- ❌ 禁止在深色背景上用 `#000000` 文字（应用 `--text-primary`）
- ❌ 禁止使用 `box-shadow: drop-shadow` 装饰（仅允许 focus ring）
- ❌ 禁止硬编码颜色值，统一使用 CSS 变量
