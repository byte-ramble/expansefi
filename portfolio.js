(function () {
  const pageLanguage = document.documentElement.lang.startsWith("zh") ? "zh" : "en";
  const portfolio = {
    zh: [
      {
        id: "opland",
        number: "001",
        name: "opland",
        tag: "AI 驱动的 DeFi 流动性平台",
        description:
          "来自 sibling repo 的链上流动性平台，统一多链池子发现、收益拆分、资产总览、借贷入口与监控配置，同时保持非托管执行边界。",
        bgLetter: "O",
        link: "https://github.com/byte-ramble/opland",
        status: "Repo",
        cta: "查看仓库",
      },
      {
        id: "omniguard",
        number: "002",
        name: "omniguard",
        tag: "AI 原生 Web3 安全平台",
        description:
          "把链上监测、交易仿真、协议评级与响应流程收敛到统一安全控制面，面向 Web3 团队提供研究驱动的机构级安全能力。",
        bgLetter: "G",
        link: "https://omniguard.pro",
        status: "Site",
        cta: "查看官网",
      },
      {
        id: "catal",
        number: "003",
        name: "Catal",
        tag: "LP 抵押信用市场",
        description:
          "聚合 LP-backed credit markets、curated vaults 与受约束的 permissionless market creation，让 LP 头寸可以进入更完整的借贷与资金配置轨道。",
        bgLetter: "C",
        link: "https://catal.pro",
        status: "Site",
        cta: "查看产品",
      },
    ],
    en: [
      {
        id: "opland",
        number: "001",
        name: "opland",
        tag: "AI-Driven DeFi Liquidity Platform",
        description:
          "A sibling-repo product surface for multi-chain pool discovery, yield decomposition, portfolio views, lending entry points, and monitoring workflows while keeping execution non-custodial.",
        bgLetter: "O",
        link: "https://github.com/byte-ramble/opland",
        status: "Repo",
        cta: "Open Repository",
      },
      {
        id: "omniguard",
        number: "002",
        name: "omniguard",
        tag: "AI-Native Web3 Security Platform",
        description:
          "A unified security control plane combining runtime telemetry, transaction simulation, protocol ratings, and response workflows for research-driven institutional Web3 security.",
        bgLetter: "G",
        link: "https://omniguard.pro",
        status: "Site",
        cta: "Visit Site",
      },
      {
        id: "catal",
        number: "003",
        name: "Catal",
        tag: "LP-Backed Credit Markets",
        description:
          "An LP credit product line combining LP collateral markets, curated vaults, and constrained permissionless market creation into one lending rail.",
        bgLetter: "C",
        link: "https://catal.pro",
        status: "Site",
        cta: "Open Product",
      },
    ],
  };

  function renderPortfolio() {
    const grid = document.getElementById("portfolio-grid");
    if (!grid) return;

    const projects = portfolio[pageLanguage];
    grid.innerHTML = projects.map(
      (item, index) => `
        <article class="port-card reveal delay-${Math.min(index + 1, 3)}" data-id="${item.id}">
          <div class="port-top">
            <span class="port-num">${item.number}</span>
            <span class="port-status">${item.status}</span>
          </div>
          <h3 class="port-name">${item.name}</h3>
          <span class="port-tag">${item.tag}</span>
          <p class="port-desc">${item.description}</p>
          <a class="port-link" href="${item.link}" target="_blank" rel="noopener noreferrer">
            ${item.cta} <span aria-hidden="true">→</span>
          </a>
          <div class="port-bg-letter" aria-hidden="true">${item.bgLetter}</div>
        </article>
      `
    ).join("");

    const count = String(projects.length).padStart(2, "0");
    document.querySelectorAll("[data-portfolio-count]").forEach((node) => {
      node.textContent = count;
    });

    const summary = document.querySelector("[data-portfolio-summary]");
    if (summary) {
      summary.textContent = pageLanguage === "zh" ? `${count} / 平行工程` : `${count} / Parallel Builds`;
    }
  }

  document.addEventListener("DOMContentLoaded", renderPortfolio);
})();
