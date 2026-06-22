"use client";

import { useState, useEffect } from "react";
import styles from "./DesamparadosBanner.module.css";

const slides = [
  {
    title: <>Desamparados</>,
    image: "/desamparados/desamparados1.webp",
  },
  {
    title: <>Desamparados</>,
    image: "/desamparados/desamparados2.webp",
  },
  {
    title: <>Desamparados</>,
    image: "/desamparados/desamparados3.webp",
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true);

      setTimeout(() => {
        setIndex((prev) => (prev + 1) % slides.length);
        setFade(false);
      }, 700);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const slide = slides[index];

  return (
    <section className={styles.hero}>
      <div className={styles.heroSurface}>
        <div className={styles.heroBgWrapper}>
          <div
            key={index}
            className={`${styles.heroBg} ${
              fade ? styles.fadeOut : styles.fadeIn
            }`}
            style={{
              backgroundImage: `
                linear-gradient(180deg, rgba(10,15,30,.25), rgba(10,15,30,.45)),
                url(${slide.image})
              `,
            }}
          />
        </div>

        <div className={styles.heroInner}>
          <h1 className={styles.title}>{slide.title}</h1>
        </div>

        <div className={styles.navDots}>
          
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Ir al slide ${i + 1}`}
              className={`${styles.dotBtn} ${i === index ? styles.active : ""}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}