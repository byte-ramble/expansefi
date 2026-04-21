(function () {
  const pageLanguage = document.documentElement.lang.startsWith("zh") ? "zh" : "en";
  const approachItems = {
    zh: [
      {
        num: "01",
        title: "孵化优先",
        desc: "很多时候我们会在产品方向还不够清晰时进入，帮助团队一起梳理市场、确定产品楔子，并准备第一轮融资材料。",
      },
      {
        num: "02",
        title: "高带宽尽调",
        desc: "尽调会看到架构、激励、风控与安全边界，尽量让这套投资材料本身也能反过来帮助产品和上线准备。",
      },
      {
        num: "03",
        title: "上线准备",
        desc: "围绕审计、生态伙伴、白名单、流动性与市场反馈做联动，降低产品前期最脆弱阶段的执行风险。",
      },
      {
        num: "04",
        title: "按长期来判断",
        desc: "我们更在意团队能不能持续交付，而不是短期热度。衡量标准是业务能否站住，不是故事是否好听。",
      },
    ],
    en: [
      {
        num: "01",
        title: "Incubation First",
        desc: "We often get involved while the product direction is still forming, helping the team map the market, define the wedge, and prepare the first financing materials.",
      },
      {
        num: "02",
        title: "High-Bandwidth Diligence",
        desc: "Diligence goes into architecture, incentives, risk, and security boundaries so the resulting materials can also become useful operating material.",
      },
      {
        num: "03",
        title: "Launch Readiness",
        desc: "We coordinate audits, ecosystem partners, whitelist planning, liquidity setup, and market feedback to reduce early execution fragility.",
      },
      {
        num: "04",
        title: "Long-Term Judgment",
        desc: "We care more about whether a team can keep delivering than whether the story looks fast in the short term. Durability is the real KPI.",
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
