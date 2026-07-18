import { gsap } from "./smoothScroll";

export function initMagnetic() {
  const canHover = window.matchMedia(
    "(hover: hover) and (pointer: fine)"
  ).matches;
  if (!canHover) return;

  const items = gsap.utils.toArray<HTMLElement>("[data-magnetic]");
  const strength = 0.35;

  items.forEach((item) => {
    const xTo = gsap.quickTo(item, "x", { duration: 0.4, ease: "power3" });
    const yTo = gsap.quickTo(item, "y", { duration: 0.4, ease: "power3" });

    item.addEventListener("mousemove", (event) => {
      const rect = item.getBoundingClientRect();
      const relX = event.clientX - (rect.left + rect.width / 2);
      const relY = event.clientY - (rect.top + rect.height / 2);
      xTo(relX * strength);
      yTo(relY * strength);
    });

    item.addEventListener("mouseleave", () => {
      xTo(0);
      yTo(0);
    });
  });
}
