(function () {
  const pageLanguage = document.documentElement.lang.startsWith("zh") ? "zh" : "en";
  const marqueeItems = {
    zh: [
      "协议基础设施",
      "执行层",
      "链上资管",
      "协议安全",
      "资本效率",
      "链上自动化",
      "种子阶段",
    ],
    en: [
      "Protocol Infrastructure",
      "Execution Rails",
      "On-Chain Asset Management",
      "Security Control Plane",
      "Capital Efficiency",
      "Autonomous Coordination",
      "Seed Conviction",
    ],
  };

  function renderMarquee() {
    const track = document.getElementById("marquee-track");
    if (!track) return;

    const items = marqueeItems[pageLanguage];
    const markup = items.map(
      (item) =>
        `<span class="marquee-item">${item}<span class="marquee-dot" aria-hidden="true"></span></span>`
    ).join("");

    track.innerHTML = markup + markup;
  }

  document.addEventListener("DOMContentLoaded", renderMarquee);
})();
