import { useEffect } from "react";

export const useScrollAnimation = () => {
  useEffect(() => {
    const elements = document.querySelectorAll(
      ".scroll-fade, .scroll-fade-left, .scroll-fade-right, .scroll-zoom"
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          const el = entry.target as HTMLElement;

          if (entry.isIntersecting && !el.classList.contains("visible")) { 
            el.style.transitionDelay = `${index * 0.12}s`;
            el.classList.add("visible");
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -80px 0px", 
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
};
