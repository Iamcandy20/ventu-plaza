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
    "/liberia/solarium-1.jpg",
    "/liberia/solarium-9.jpg",
    "/liberia/solarium-3.jpg",
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
        {/* 🖼️ LADO IZQUIERDO */}
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

        {/* LADO DERECHO */}
        <div className={styles.textContent}>
          <span className={styles.eyebrow}>INNOVACIÓN Y DESARROLLO</span>
          <h2>Esto es Ventu Plaza Solarium</h2>
          <div className={styles.line}></div>

          <blockquote className={styles.quote}>
            “Donde la modernidad se encuentra con la tradición para impulsar el crecimiento del norte del país.”
          </blockquote>

          <p>
            Ventu Plaza Solarium será un proyecto de uso mixto y moderno de la región de Guanacaste.
            Cuenta con un inmejorable desarrollo comercial, hotelero, gastronómico y de servicios, entre otros,
            lo cual permite que las empresas dentro y fuera del proyecto aprovechen uno de los mejores entornos
            de negocios en la Provincia de Guanacaste.
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
          // Cerrar al hacer clic fuera del slider (clic en el fondo)
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

          {/* Slider interno: usamos VW para el translateX */}
          <div
            className={styles.modalSlider}
            // ********** CLAVE: usar vw para desplazar exactamente N pantallas **********
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

          {/* Navegación izq - der */}
          <div className={styles.modalNav}>
            <button onClick={prev} aria-label="Anterior">◀</button>
            <button onClick={next} aria-label="Siguiente">▶</button>
          </div>
        </div>
      )}
    </section>
  );
}
