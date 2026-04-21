(function () {
  const supportsFinePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!supportsFinePointer || prefersReducedMotion) return;

  const cursor = document.getElementById("cursor");
  const ring = document.getElementById("cursor-ring");
  if (!cursor || !ring) return;

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let ringX = mouseX;
  let ringY = mouseY;
  let isPointerVisible = false;

  const hoverSelector = "a, button, .port-card, .team-card, .platform-card";

  document.addEventListener("mousemove", (event) => {
    mouseX = event.clientX;
    mouseY = event.clientY;
    cursor.style.transform = `translate(${mouseX - 5}px, ${mouseY - 5}px) scale(1)`;

    if (!isPointerVisible) {
      isPointerVisible = true;
      cursor.style.opacity = "1";
      ring.style.opacity = "0.55";
    }
  });

  document.addEventListener("mouseleave", () => {
    cursor.style.opacity = "0";
    ring.style.opacity = "0";
    isPointerVisible = false;
  });

  document.addEventListener("mouseover", (event) => {
    const target = event.target instanceof Element ? event.target.closest(hoverSelector) : null;
    if (target) {
      cursor.style.transform = `translate(${mouseX - 5}px, ${mouseY - 5}px) scale(2.4)`;
      ring.style.borderColor = "rgba(232, 201, 122, 0.85)";
      ring.style.opacity = "0.85";
      ring.dataset.hovering = "true";
    }
  });

  document.addEventListener("mouseout", (event) => {
    const target = event.target instanceof Element ? event.target.closest(hoverSelector) : null;
    if (target) {
      cursor.style.transform = `translate(${mouseX - 5}px, ${mouseY - 5}px) scale(1)`;
      ring.style.borderColor = "";
      ring.style.opacity = "0.55";
      ring.dataset.hovering = "false";
    }
  });

  function tick() {
    ringX += (mouseX - 18 - ringX) * 0.12;
    ringY += (mouseY - 18 - ringY) * 0.12;
    ring.style.transform = `translate(${ringX}px, ${ringY}px)`;
    requestAnimationFrame(tick);
  }

  cursor.style.opacity = "0";
  ring.style.opacity = "0";
  tick();
})();
