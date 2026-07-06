"use client";

import React, { useEffect, useRef, useState } from "react";
import styles from "./InterestPoints.module.css";

type Punto = {
  id: string;
  title: string;
  description: string;
  Icon: React.ElementType;
};

function TreeIcon() {
  return (
    <svg
      viewBox="0 0 120 120"
      className={styles.customIcon}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Tronco */}
      <path
        d="M60 95V70"
        stroke="#ffffff"
        strokeWidth="4"
        strokeLinecap="round"
      />

      {/* Suelo sutil */}
      <path
        d="M42 95H78"
        stroke="#ffffff"
        strokeWidth="4"
        strokeLinecap="round"
        opacity="0.5"
      />

      {/* Copa del árbol */}
      <path
        d="M60 22
           C48 22 38 32 38 44
           C28 46 22 54 22 64
           C22 78 34 86 46 86
           H74
           C86 86 98 78 98 64
           C98 54 92 46 82 44
           C82 32 72 22 60 22Z"
        stroke="#ffffff"
        strokeWidth="4.5"
        strokeLinejoin="round"
        strokeLinecap="round"
      />

      {/* Detalle interno */}
      <path
        d="M60 30
           C52 34 48 42 50 50
           C52 58 58 62 60 66"
        stroke="#ffffff"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.35"
      />
    </svg>
  );
}
function MuseumIcon() {
  return (
    <svg viewBox="0 0 120 120" className={styles.customIcon}>
      <path d="M22 92h76" />
      <path d="M28 82h64" />
      <path d="M32 42h56" />
      <path d="M60 20 24 42h72L60 20Z" />
      <path d="M38 42v40" />
      <path d="M52 42v40" />
      <path d="M68 42v40" />
      <path d="M82 42v40" />
    </svg>
  );
}

function StadiumIcon() {
  return (
    <svg viewBox="0 0 120 120" className={styles.customIcon}>
      <path d="M24 48c8-18 64-18 72 0v34c-12 12-60 12-72 0V48Z" />
      <path d="M34 55c10-10 42-12 52 0" />
      <path d="M38 72c12 8 32 8 44 0" />
      <path d="M32 48v28" />
      <path d="M88 48v28" />
      <path d="M48 43v20" />
      <path d="M60 40v24" />
      <path d="M72 43v20" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg viewBox="0 0 120 120" className={styles.customIcon}>
      <path d="M60 98
               C60 98 34 72 34 48
               C34 33 46 22 60 22
               C74 22 86 33 86 48
               C86 72 60 98 60 98Z" />
      <circle cx="60" cy="48" r="9" />
    </svg>
  );
}

const puntos: Punto[] = [
  {
    id: "parque",
    title: "Parque La Paz",
    description: "Gran parque para paseos en familia.",
    Icon: TreeIcon,
  },
  {
    id: "museo",
    title: "Museo de los Niños",
    description: "Atracción educativa y cultural para los niños.",
    Icon: MuseumIcon,
  },
  {
    id: "estadio",
    title: "Estadio Nacional",
    description: "Cercanía a eventos deportivos masivos.",
    Icon: StadiumIcon,
  },
  {
    id: "turistica",
    title: "Cercanía Turística",
    description: "Zonas de centros turísticos de alta calidad.",
    Icon: LocationIcon,
  },
];

export default function InterestPoints() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
          }
        });
      },
      { threshold: 0.2 }
    );

    const sectionEl = sectionRef.current;

    if (sectionEl) observer.observe(sectionEl);

    return () => {
      if (sectionEl) observer.unobserve(sectionEl);
    };
  }, []);

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
        <h2 className={styles.title}>PUNTOS DE INTERES</h2>

        <p className={styles.subtitle}>
          Ubicación estratégica y accesos que conectan con los principales
          puntos del cantón y región.
        </p>

        <div ref={carouselRef} className={styles.grid} onScroll={handleScroll}>
          {puntos.map(({ id, title, description, Icon }) => (
            <div key={id} className={styles.card}>
              <div className={styles.top}>
                <div className={styles.iconWrapper}>
                  <Icon />
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
                <h3 className={styles.cardTitle}>{title}</h3>
                <p className={styles.cardDesc}>{description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.dots}>
          {puntos.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Ir al punto ${i + 1}`}
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