import { gsap, ScrollTrigger, prefersReducedMotion } from "./smoothScroll";

export function initScrollProgress() {
  const bar = document.querySelector<HTMLElement>("[data-scroll-progress]");
  if (!bar || prefersReducedMotion()) return;

  ScrollTrigger.create({
    start: 0,
    end: "max",
    onUpdate: (self) => {
      gsap.set(bar, { scaleX: self.progress });
    },
  });
}
