"use client";

import { useEffect, useRef } from "react";
import {
  CarProfile,
  ForkKnife,
  MapPinArea,
} from "@phosphor-icons/react";
import styles from "./CommercialSpaces.module.css";

export default function CommercialSpaces() {
  const sectionRef = useRef<HTMLDivElement | null>(null);

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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className={`${styles.section} ${styles.hidden}`}>
      <div className={styles.left}>
        <h4 className={styles.subtitle}>DESARROLLO COMERCIAL</h4>

        <h2 className={styles.title}>Espacios Comerciales</h2>

        <div className={styles.line}></div>

        <p className={styles.description}>
          Ventu Plaza Desamparados ofrece espacios diseñados para brindar
          comodidad, accesibilidad y una experiencia práctica para cada
          visitante.
        </p>

      </div>

      <div className={styles.grid}>
        <div className={styles.card}>
          <CarProfile size={60} weight="duotone" className={styles.icon} />
          <span>16 Espacios de Parqueo</span>
        </div>

        <div className={styles.card}>
          <ForkKnife size={60} weight="duotone" className={styles.icon} />
          <span>2 Restaurantes Exclusivos</span>
        </div>

        <div className={styles.card}>
          <MapPinArea size={60} weight="duotone" className={styles.icon} />
          <span>Ubicación Estratégica</span>
        </div>
      </div>
    </section>
  );
}