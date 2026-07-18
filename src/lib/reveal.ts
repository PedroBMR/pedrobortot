import { gsap, ScrollTrigger, prefersReducedMotion } from "./smoothScroll";

export function initReveals() {
  const items = gsap.utils.toArray<HTMLElement>("[data-reveal]");
  if (!items.length) return;

  if (prefersReducedMotion()) {
    gsap.set(items, { opacity: 1, y: 0 });
    return;
  }

  gsap.set(items, { opacity: 0, y: 40 });

  ScrollTrigger.batch(items, {
    start: "top 85%",
    once: true,
    onEnter: (batch) =>
      gsap.to(batch, {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.1,
      }),
  });
}
