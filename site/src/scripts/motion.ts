// Draws лоція labels, rivers on the scheme etc. once when a [data-draw] figure enters the viewport.
// Without JS or with reduced motion everything is already in place (styles apply hidden states only under .js + no-preference).
const targets = document.querySelectorAll<HTMLElement>("[data-draw]");
const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
if (reduce || !("IntersectionObserver" in window)) {
  targets.forEach((el) => el.classList.add("is-drawn"));
} else {
  const io = new IntersectionObserver((entries) => {
    for (const e of entries) {
      if (e.isIntersecting) {
        e.target.classList.add("is-drawn");
        io.unobserve(e.target);
      }
    }
  }, { rootMargin: "0px 0px -15% 0px", threshold: 0.2 });
  targets.forEach((el) => { el.classList.add("will-draw"); io.observe(el); });
}
