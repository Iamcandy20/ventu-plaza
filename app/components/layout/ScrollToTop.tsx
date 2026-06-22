"use client";

import { useEffect, useState } from "react";
import styles from "./scrollToTop.module.css";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const firstSectionHeight = window.innerHeight; // altura de la primera sección
      setVisible(window.scrollY > firstSectionHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className={`${styles.scrollTop} ${visible ? styles.show : ""}`}
      onClick={scrollTop}
      aria-label="Volver arriba"
    >
      ↑
    </button>
  );
}
