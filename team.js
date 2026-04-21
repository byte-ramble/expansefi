(function () {
  const pageLanguage = document.documentElement.lang.startsWith("zh") ? "zh" : "en";
  const team = {
    zh: [
      {
        initials: "FP",
        name: "创始合伙人",
        role: "投资与公司构建",
        bio: "负责 thesis 形成、创始人选择与首轮融资策略，重点判断项目是否具备成为基础设施的结构性条件。",
        strengths: ["Seed 判断", "融资策略", "公司构建"],
      },
      {
        initials: "RP",
        name: "研究合伙人",
        role: "协议设计与安全边界",
        bio: "深度参与机制设计、市场结构与安全面分析，帮助团队把复杂技术主张转化成可执行的产品与研究表达。",
        strengths: ["机制设计", "安全评估", "市场结构"],
      },
      {
        initials: "PP",
        name: "平台合伙人",
        role: "生态入口与上线推进",
        bio: "围绕生态对接、设计伙伴、上线节奏与 LP 关系做平台支持，确保项目进入市场时具备足够密度的外部协同。",
        strengths: ["生态 BD", "上线规划", "LP 网络"],
      },
    ],
    en: [
      {
        initials: "FP",
        name: "Founding Partner",
        role: "Capital Formation and Company Building",
        bio: "Leads thesis formation, founder selection, and first-round financing strategy with a bias toward infrastructure-grade opportunities.",
        strengths: ["Seed Conviction", "Fundraising", "Company Building"],
      },
      {
        initials: "RP",
        name: "Research Partner",
        role: "Protocol Design and Security",
        bio: "Works deeply on mechanism design, market structure, and security surfaces so technical conviction translates into product and research clarity.",
        strengths: ["Mechanism Design", "Security Review", "Market Structure"],
      },
      {
        initials: "PP",
        name: "Platform Partner",
        role: "Network Access and Launch Support",
        bio: "Helps portfolio teams with ecosystem introductions, design partners, go-to-market timing, and LP-facing launch preparation.",
        strengths: ["BD Network", "Launch Planning", "LP Access"],
      },
    ],
  };

  function renderTeam() {
    const grid = document.getElementById("team-grid");
    if (!grid) return;

    grid.innerHTML = team[pageLanguage].map(
      (member, index) => `
        <article class="team-card reveal delay-${Math.min(index + 1, 3)}">
          <div class="team-top">
            <div class="team-avatar" aria-hidden="true">${member.initials}</div>
            <span class="team-role-tag">${member.initials}</span>
          </div>
          <h3 class="team-name">${member.name}</h3>
          <p class="team-role">${member.role}</p>
          <p class="team-bio">${member.bio}</p>
          <div class="team-skills">
            ${member.strengths.map((strength) => `<span>${strength}</span>`).join("")}
          </div>
        </article>
      `
    ).join("");
  }

  document.addEventListener("DOMContentLoaded", renderTeam);
})();
