(function () {
  const pageLanguage = document.documentElement.lang.startsWith("zh") ? "zh" : "en";
  const marqueeItems = {
    zh: [
      "协议基础设施",
      "执行轨道",
      "链上资管",
      "安全控制面",
      "资本效率",
      "自动化协作",
      "种子判断",
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
