(function () {
  const pageLanguage = document.documentElement.lang.startsWith("zh") ? "zh" : "en";
  const approachItems = {
    zh: [
      {
        num: "01",
        title: "孵化优先",
        desc: "很多时候我们在品类尚未变成显学之前就进入，帮助创始团队一起定义市场地图、产品楔子与第一轮叙事。",
      },
      {
        num: "02",
        title: "高带宽尽调",
        desc: "尽调会深入到架构、激励、风控与安全边界，确保投资 memo 本身就能反哺产品和上线准备。",
      },
      {
        num: "03",
        title: "上线准备",
        desc: "围绕审计、生态伙伴、白名单、流动性与市场反馈做联动，降低产品前期最脆弱阶段的执行风险。",
      },
      {
        num: "04",
        title: "按长弧线配置资本",
        desc: "我们更在意品类占位与网络形成，而不是短期速度感。工作的衡量标准是耐久性，不是热度。",
      },
    ],
    en: [
      {
        num: "01",
        title: "Incubation First",
        desc: "We often enter before a category is obvious, helping define the market map, product wedge, and the first financing narrative with the founding team.",
      },
      {
        num: "02",
        title: "High-Bandwidth Diligence",
        desc: "Diligence goes deep on architecture, incentives, risk, and security boundaries so the memo itself becomes useful operating material.",
      },
      {
        num: "03",
        title: "Launch Readiness",
        desc: "We coordinate audits, ecosystem partners, whitelist planning, liquidity setup, and market feedback to reduce early execution fragility.",
      },
      {
        num: "04",
        title: "Long-Arc Capital",
        desc: "We care more about category ownership and network formation than short-term speed optics. Durability is the real KPI.",
      },
    ],
  };

  function renderApproach() {
    const grid = document.getElementById("approach-grid");
    if (!grid) return;

    grid.innerHTML = approachItems[pageLanguage].map(
      (item, index) => `
        <article class="approach-item reveal delay-${Math.min(index + 1, 3)}">
          <span class="approach-num">${item.num}</span>
          <h3 class="approach-title">${item.title}</h3>
          <p class="approach-desc">${item.desc}</p>
        </article>
      `
    ).join("");
  }

  document.addEventListener("DOMContentLoaded", renderApproach);
})();
