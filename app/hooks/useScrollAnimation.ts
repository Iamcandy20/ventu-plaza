import { useEffect } from "react";

/**
 * Hook global para animaciones al hacer scroll
 * (solo se activan al hacer scroll hacia abajo, no reversibles)
 */
export const useScrollAnimation = () => {
  useEffect(() => {
    const elements = document.querySelectorAll(
      ".scroll-fade, .scroll-fade-left, .scroll-fade-right, .scroll-zoom"
    );

    let lastScrollY = window.scrollY;

    const observer = new IntersectionObserver(
      (entries) => {
        const currentScrollY = window.scrollY;
        const isScrollingDown = currentScrollY > lastScrollY;
        lastScrollY = currentScrollY;

        // Solo aplicar animaciones si el usuario hace scroll hacia abajo
        if (!isScrollingDown) return;

        entries.forEach((entry, index) => {
          const el = entry.target as HTMLElement;

          if (entry.isIntersecting) {
            // Aplica delay escalonado en función del orden
            el.style.transitionDelay = `${index * 0.15}s`;
            el.classList.add("visible");
          }
        });
      },
      {
        threshold: 0.2, // porcentaje visible para activar la animación
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
};
