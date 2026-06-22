"use client";
import Image from "next/image";
import { useEffect, useState, useCallback } from "react";
import { MapPin, X } from "lucide-react";
import styles from "./AboutSection.module.css";

export default function AboutSection() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Lista de imágenes
  const images = [
    "/desamparados/desamparados1.webp",
    "/desamparados/desamparados2.webp",
    "/desamparados/desamparados3.webp",
  ];

  useEffect(() => {
    const elements = document.querySelectorAll(`.${styles.imageBox}, .${styles.textContent}`); 
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) entry.target.classList.add(styles.visible);
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Handlers para teclado (Esc y flechas)
  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") {
        setIsOpen(false);
      } else if (e.key === "ArrowLeft") {
        setCurrentIndex(prev => (prev > 0 ? prev - 1 : images.length - 1));
      } else if (e.key === "ArrowRight") {
        setCurrentIndex(prev => (prev < images.length - 1 ? prev + 1 : 0));
      }
    },
    [isOpen, images.length]
  );

  useEffect(() => { 
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [onKeyDown]);

  // Navegación botones (wrap)
  const prev = () => setCurrentIndex(prev => (prev > 0 ? prev - 1 : images.length - 1));
  const next = () => setCurrentIndex(prev => (prev < images.length - 1 ? prev + 1 : 0));

  return (
    <section className={styles.aboutSection}>
      <div className={styles.container}>
        {/* Imagenes */}
        <div className={styles.imageGrid}>
          {images.map((img, index) => (
            <div
              key={index}
              className={`${styles.imageBox} ${index === 2 ? styles.wideImage : ""}`}
              onClick={() => {
                // Abrir modal en todas las resoluciones
                setCurrentIndex(index);
                setIsOpen(true);
              }}
            >
              <Image
                src={img}
                alt={`Imagen Ventu Plaza Liberia ${index + 1}`}
                width={300}
                height={300}
                className={styles.image}
              />
              
            </div>
          ))}
        </div>

        <div className={styles.textContent}>
          <span className={styles.eyebrow}>ACCESIBILIDAD Y DESARROLLO</span>
          <h2>Esto es Ventu Plaza Desamparados</h2>
          <div className={styles.line}></div>

          <blockquote className={styles.quote}>
            “Áreas modernas, iluminación natural y espacios diseñados para que cada visita se sienta especial.”
          </blockquote>

          <p>
            Esta ubicación en Desamparados ha sido diseñada para ofrecer comodidad, 
            gastronomía y fácil acceso en un solo espacio.
          </p>

          <button className={styles.btn}>
            <MapPin size={18} className={styles.icon} />
            Ver ubicación
          </button>
        </div>
      </div>

      {/* ===== MODAL (Móvil + PC) ===== */}
      {isOpen && (
        <div
          className={styles.modal}

          onClick={(e) => {
            if (e.target === e.currentTarget) setIsOpen(false);
          }}
        >
          {/* Botón X */}
          <button
            aria-label="Cerrar"
            className={styles.closeButton}
            onClick={() => setIsOpen(false)}
          >
            <X size={26} />
          </button>

          {/* Slider interno*/}
          <div
            className={styles.modalSlider}
            
            style={{ transform: `translateX(-${currentIndex * 100}vw)` }}
          >
            {images.map((img, i) => (
              <div key={i} className={styles.modalImageWrapper}>
                <Image
                  src={img}
                  alt={`Vista ampliada ${i + 1}`}
                  width={1600}
                  height={900}
                  className={styles.modalImage}
                />
              </div>
            ))}
          </div>

          <div className={styles.modalNav}>
            <button onClick={prev} aria-label="Anterior">◀</button>
            <button onClick={next} aria-label="Siguiente">▶</button>
          </div>
        </div>
      )}
    </section>
  );
}
