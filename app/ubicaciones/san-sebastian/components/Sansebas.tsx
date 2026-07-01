"use client";

import { useEffect, useState } from "react";
import styles from "./SansebasBanner.module.css";

const slides = [
  {
    title: "San Sebastian",
    image: "/sansebas/sansebas1.webp",
  },
  {
    title: "San Sebastian",
    image: "/sansebas/sansebas2.webp",
  },
  {
    title: "San Sebastian",
    image: "/sansebas/sansebas3.webp",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  const next = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prev = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <section className={styles.hero}>
      <div className={styles.slider}>
        {slides.map((slide, i) => (
          <img
            key={slide.image}
            src={slide.image}
            alt={slide.title}
            className={`${styles.image} ${
              i === current ? styles.activeImage : ""
            }`}
          />
        ))}

        <div className={styles.overlay} />

        <div className={styles.content}>
          <h1 key={current} className={styles.title}>
            {slides[current].title}
          </h1>
        </div>

        <button
          type="button"
          className={`${styles.arrow} ${styles.left}`}
          onClick={prev}
          aria-label="Imagen anterior"
        >
          ‹
        </button>

        <button
          type="button"
          className={`${styles.arrow} ${styles.right}`}
          onClick={next}
          aria-label="Imagen siguiente"
        >
          ›
        </button>

        <div className={styles.dots}>
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setCurrent(i)}
              className={`${styles.dot} ${
                current === i ? styles.activeDot : ""
              }`}
              aria-label={`Ver imagen ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}