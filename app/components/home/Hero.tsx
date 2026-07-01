"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./hero.module.css";

const slides = [
  {
    eyebrow: "Ventu Plaza Desamparados",
    title: (
      <>
        Urbano y<br />Moderno
      </>
    ),
    cta: "Descubre más",
    image: "/desamparados/desamparados1.webp",
  },
  {
    eyebrow: "Ventu Plaza Liberia",
    title: (
      <>
        Turismo y<br />Negocios
      </>
    ),
    cta: "Explora Liberia",
    image: "/liberia/solarium-6.jpg",
  },
  {
    eyebrow: "Ventu Plaza San Sebastián",
    title: (
      <>
        Vida, Comercio<br />y Cercanía
      </>
    ),
    cta: "Conoce más",
    image: "/sansebas/sansebas5.jpeg",
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

  const slide = slides[current];

  return (
    <section className={styles.hero}>
      <div className={styles.slider}>
    {slides.map((item, i) => (
  <Image
    key={`${item.image}-${i}`}
    src={item.image}
    alt={`Imagen ${i + 1} de Ventu Plaza`}
    fill
    priority={i === current}
    sizes="100vw"
    className={`${styles.image} ${
      i === current ? styles.activeImage : ""
    }`}
  />
))}

        <div className={styles.overlay} />

        <div className={styles.content}>
          <div className={styles.copy}>
            <span className={styles.eyebrow}>{slide.eyebrow}</span>
            <h1 className={styles.title}>{slide.title}</h1>

            <button type="button" className={styles.btnPrimary}>
              {slide.cta}
            </button>
          </div>
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