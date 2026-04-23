(function () {
  const pageLanguage = document.documentElement.lang.startsWith("zh") ? "zh" : "en";
  const team = {
    zh: [
      {
        initials: "FP",
        name: "创始合伙人",
        role: "投资与公司构建",
        bio: "负责 thesis 形成、创始人选择与首轮融资策略，判断问题是否成立、产品方向是否清楚，以及团队是否适合长期推进。",
        strengths: ["Seed 判断", "融资策略", "公司构建"],
      },
      {
        initials: "RP",
        name: "研究合伙人",
        role: "协议设计与安全边界",
        bio: "参与机制设计、市场结构与安全分析，把复杂技术问题整理成可执行的产品方案和研究材料。",
        strengths: ["机制设计", "安全评估", "市场结构"],
      },
      {
        initials: "PP",
        name: "平台合伙人",
        role: "生态入口与上线推进",
        bio: "负责生态对接、设计伙伴、上线节奏与 LP 关系，帮项目在进入市场前把外部协作准备好。",
        strengths: ["生态 BD", "上线规划", "LP 网络"],
      },
    ],
    en: [
      {
        initials: "FP",
        name: "Founding Partner",
        role: "Capital Formation and Company Building",
        bio: "Leads thesis formation, founder selection, and first-round financing strategy, with a focus on whether the problem is real, the direction is clear, and the team can execute over time.",
        strengths: ["Seed Conviction", "Fundraising", "Company Building"],
      },
      {
        initials: "RP",
        name: "Research Partner",
        role: "Protocol Design and Security",
        bio: "Works on mechanism design, market structure, and security questions so technical complexity can be turned into clear product decisions and research materials.",
        strengths: ["Mechanism Design", "Security Review", "Market Structure"],
      },
      {
        initials: "PP",
        name: "Platform Partner",
        role: "Network Access and Launch Support",
        bio: "Helps teams with ecosystem introductions, design partners, go-to-market timing, and LP-facing launch preparation.",
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
