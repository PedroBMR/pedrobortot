import { gsap, ScrollTrigger, prefersReducedMotion } from "./smoothScroll";

export function initCounters() {
  const counters = gsap.utils.toArray<HTMLElement>("[data-counter]");
  if (!counters.length) return;

  counters.forEach((el) => {
    const target = parseFloat(el.dataset.target ?? "0");
    const decimals = parseInt(el.dataset.decimals ?? "0", 10);
    const prefix = el.dataset.prefix ?? "";
    const suffix = el.dataset.suffix ?? "";

    const format = (value: number) =>
      `${prefix}${value.toFixed(decimals)}${suffix}`;

    if (prefersReducedMotion()) {
      el.textContent = format(target);
      return;
    }

    const proxy = { value: 0 };
    ScrollTrigger.create({
      trigger: el,
      start: "top 85%",
      once: true,
      onEnter: () => {
        gsap.to(proxy, {
          value: target,
          duration: 1.6,
          ease: "power2.out",
          onUpdate: () => {
            el.textContent = format(proxy.value);
          },
        });
      },
    });
  });
}
