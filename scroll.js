function initScrollReveal() {
  const elements = document.querySelectorAll(".reveal");
  if (!elements.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.16,
      rootMargin: "0px 0px -48px 0px",
    }
  );

  elements.forEach((element) => observer.observe(element));
}

function initNavbarScroll() {
  const navbar = document.getElementById("navbar");
  if (!navbar) return;

  const onScroll = () => {
    navbar.classList.toggle("scrolled", window.scrollY > 28);
  };

  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}

function initSectionSpy() {
  const sections = document.querySelectorAll("main section[id]");
  const links = document.querySelectorAll("[data-nav-link]");
  if (!sections.length || !links.length) return;

  const sectionMap = new Map();
  links.forEach((link) => {
    const href = link.getAttribute("href");
    if (href && href.startsWith("#")) {
      sectionMap.set(href.slice(1), link);
    }
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const link = sectionMap.get(entry.target.id);
        if (!link) return;
        if (entry.isIntersecting) {
          links.forEach((item) => item.classList.remove("is-active"));
          link.classList.add("is-active");
        }
      });
    },
    {
      threshold: 0.35,
      rootMargin: "-20% 0px -55% 0px",
    }
  );

  sections.forEach((section) => observer.observe(section));
}

function initMobileMenu() {
  const menu = document.getElementById("mobile-menu");
  const trigger = document.querySelector(".nav-hamburger");
  const closeButton = document.querySelector(".mobile-menu-close");
  const mobileLinks = document.querySelectorAll("[data-mobile-link]");
  if (!menu || !trigger || !closeButton) return;

  const openLabel =
    trigger.getAttribute("data-label-open") ||
    (document.documentElement.lang.startsWith("zh") ? "打开菜单" : "Open menu");
  const closeLabel =
    trigger.getAttribute("data-label-close") ||
    (document.documentElement.lang.startsWith("zh") ? "关闭菜单" : "Close menu");

  const setOpen = (isOpen) => {
    trigger.setAttribute("aria-expanded", String(isOpen));
    trigger.setAttribute("aria-label", isOpen ? closeLabel : openLabel);
    menu.hidden = !isOpen;
    document.body.classList.toggle("menu-open", isOpen);
  };

  trigger.addEventListener("click", () => {
    const isOpen = trigger.getAttribute("aria-expanded") === "true";
    setOpen(!isOpen);
  });

  closeButton.addEventListener("click", () => setOpen(false));
  mobileLinks.forEach((link) => link.addEventListener("click", () => setOpen(false)));

  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      setOpen(false);
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
      setOpen(false);
    }
  });
}

function setCurrentYear() {
  document.querySelectorAll("[data-current-year]").forEach((node) => {
    node.textContent = String(new Date().getFullYear());
  });
}

document.addEventListener("DOMContentLoaded", () => {
  setCurrentYear();
  initNavbarScroll();
  initScrollReveal();
  initSectionSpy();
  initMobileMenu();
});
