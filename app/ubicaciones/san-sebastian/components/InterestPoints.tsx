"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { IMAGE_URL } from "@/lib/images";
import styles from "./InterestPoints.module.css";

type Punto = {
  id: string;
  title: string;
  description: string;
  icon: string;
};

const puntos: Punto[] = [
  {
    id: "parque",
    title: "Parque La Libertad",
    description: "Centro y cultura recreativo",
    icon: `${IMAGE_URL}/sansebas/Icons-02.png`,
  },
  {
    id: "museo",
    title: "Iglesia de los Desamparados",
    description: "Punto Religioso y tradicional",
    icon: `${IMAGE_URL}/sansebas/church.webp`,
  },
  {
    id: "estadio",
    title: "Polideportivo",
    description: "Cercanía a eventos deportivos masivos",
    icon: `${IMAGE_URL}/sansebas/stadium.webp`,
  },
  {
    id: "turistica",
    title: "Cerros de la Carpintera",
    description: "Área natural para senderismo y ciclismo",
    icon: `${IMAGE_URL}/sansebas/mountain.webp`,
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

        <h2 className={styles.title}>
          Puntos de interés
        </h2>

        <p className={styles.subtitle}>
          Ubicación estratégica y accesos que conectan con los principales puntos del cantón y región.
        </p>

        <br />
        <br />

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
  width={54}
  height={54}
  className={styles.icon}
  unoptimized
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
                <h3 className={styles.cardTitle}>
                  {p.title}
                </h3>

                <p className={styles.cardDesc}>
                  {p.description}
                </p>
              </div>

            </div>
          ))}
        </div>


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