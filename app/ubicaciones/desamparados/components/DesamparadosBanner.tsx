"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { IMAGE_URL } from "@/lib/images";
import styles from "./DesamparadosBanner.module.css";

const slides = [
  {
    image: `${IMAGE_URL}/desamparados/desamparados1.webp`,
  },
  {
    image: `${IMAGE_URL}/desamparados/desamparados2.webp`,
  },
  {
    image: `${IMAGE_URL}/desamparados/desamparados3.webp`,
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
    setCurrent((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  return (
    <section className={styles.hero}>
      <div className={styles.slider}>
        {slides.map((slide, i) => (
          <Image
            key={`${slide.image}-${i}`}
            src={slide.image}
            alt={`Imagen ${i + 1} de Ventu Plaza Desamparados`}
            fill
            priority={i === 0}
            sizes="100vw"
            unoptimized
            className={`${styles.image} ${
              i === current ? styles.activeImage : ""
            }`}
          />
        ))}

        <div className={styles.overlay} />

        <div className={styles.content}></div>

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