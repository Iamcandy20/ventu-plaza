"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./LocationGallery.module.css";

const images = [
  { src: "/desamparados/desamparados1.webp", alt: "Fachada Ventu Plaza" },
  { src: "/desamparados/desamparados2.webp", alt: "Área de parqueo" },
  { src: "/desamparados/desamparados3.webp", alt: "Zona comercial" },
  { src: "/desamparados/desamparados4.webp", alt: "Ambiente nocturno" },
  { src: "/desamparados/desamparados5.webp", alt: "Restaurantes" },
  { src: "/desamparados/desamparados6.webp", alt: "Arquitectura" },
];

export default function LocationGallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const close = () => setActiveIndex(null);

  const next = () =>
    setActiveIndex((i) => (i! + 1) % images.length);

  const prev = () =>
    setActiveIndex((i) => (i! - 1 + images.length) % images.length);


  useEffect(() => {
    if (activeIndex === null) return;

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [activeIndex]);

  return (
    <>
      {/* ===== GRID ===== */}
      <section className={styles.gallery}>
        <div className={styles.galleryHead}>
          <span className={styles.galleryEyebrow}>CONOCE VENTU PLAZA</span>
          <h2 className={styles.galleryTitle}>Un vistazo a nuestros espacios</h2>
          <p className={styles.galleryText}>
            Áreas modernas, iluminación natural y espacios diseñados
            para que cada visita se sienta especial.
          </p>
        </div>

        <div className={styles.galleryGrid}>
          {images.map((img, i) => (
            <div
              key={i}
              className={styles.galleryItem}
              onClick={() => setActiveIndex(i)}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 640px) 100vw,
                       (max-width: 1024px) 50vw,
                       33vw"
                className={styles.image}
              />
            </div>
          ))}
        </div>
      </section>

      {/* ===== LIGHTBOX ===== */}
      {activeIndex !== null && (
        <div className={styles.lightbox}>
          <button className={styles.close} onClick={close}>✕</button>

          <button className={styles.prev} onClick={prev}>‹</button>

          <div className={styles.lightboxImage}>
            <Image
              src={images[activeIndex].src}
              alt={images[activeIndex].alt}
              fill
              className={styles.lightboxImg}
              priority
            />
          </div>

          <button className={styles.next} onClick={next}>›</button>
        </div>
      )}
    </>
  );
}
