"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "./InterestPoints.module.css";

type Punto = {
  id: string;
  title: string;
  description: string;
  icon: string;
};

const puntos: Punto[] = [
  {
    id: "ruta1",
    title: "Conexión con Ruta 1",
    description: "La ruta más importante de Costa Rica.",
    icon: "/liberia/carretera.png",
  },
  {
    id: "cantonc",
    title: "20 min del Cantón Central",
    description: "Cercanía directa al corazón de Liberia.",
    icon: "/liberia/canton.png",
  },
  {
    id: "aeropuerto",
    title: "Frente al Aeropuerto",
    description: "Aeropuerto Internacional Daniel Oduber.",
    icon: "/liberia/avion.png",
  },
  {
    id: "turistica",
    title: "Cercanía Turística",
    description: "Zonas de centros turísticos de alta calidad.",
    icon: "/liberia/turismo.png",
  },
];

export default function InterestPoints() {

  const sectionRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  /* Animación al hacer scroll */
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  /* Detecta qué card está centrada en móvil */
  const handleScroll = () => {
    if (!carouselRef.current) return;

    const scrollLeft = carouselRef.current.scrollLeft;
    const width = carouselRef.current.offsetWidth;

    const index = Math.round(scrollLeft / width);
    setActiveIndex(index);
  };

  const scrollToIndex = (index: number) => {
    if (!carouselRef.current) return;

    const width = carouselRef.current.offsetWidth;

    carouselRef.current.scrollTo({
      left: width * index,
      behavior: "smooth",
    });

    setActiveIndex(index);
  };

  return (
    <section ref={sectionRef} className={styles.section}>
      <div className={styles.container}>
        
        <h2 className={styles.title}>Puntos de interés</h2>
        <p className={styles.subtitle}>
          Ubicación estratégica y accesos que conectan con los principales puntos del cantón y región.
        </p>

        <div
          ref={carouselRef}
          className={styles.grid}
          onScroll={handleScroll}
        >
          {puntos.map((p) => (
            <div key={p.id} className={styles.card}>
              
              <div className={styles.top}>
                <div className={styles.iconWrapper}>
                  <Image
                    src={p.icon}
                    alt={p.title}
                    fill
                    className={styles.icon}
                  />
                </div>

                <svg
                  className={styles.wave}
                  viewBox="0 0 800 80"
                  preserveAspectRatio="none"
                >
                  <path d="M0,30 C160,50 320,10 480,28 C640,40 720,30 800,35 L800,80 L0,80 Z" />
                </svg>
              </div>

              <div className={styles.bottom}>
                <h3 className={styles.cardTitle}>{p.title}</h3>
                <p className={styles.cardDesc}>{p.description}</p>
              </div>

            </div>
          ))}
        </div>

        {/* INDICADORES (DOTS) */}
        <div className={styles.dots}>
          {puntos.map((_, i) => (
            <span
              key={i}
              className={`${styles.dot} ${
                activeIndex === i ? styles.activeDot : ""
              }`}
              onClick={() => scrollToIndex(i)}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
