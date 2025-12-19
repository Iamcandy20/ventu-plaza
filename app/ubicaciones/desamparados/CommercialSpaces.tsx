"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import styles from "./CommercialSpaces.module.css";

export default function CommercialSpaces() {

  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
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
  }, []);

  return (
    <section ref={sectionRef} className={`${styles.section} ${styles.hidden}`}>

      {/* IZQUIERDA */}
      <div className={styles.left}>
        <h4 className={styles.subtitle}>DESARROLLO COMERCIAL</h4>

        <h2 className={styles.title}>Locales Comerciales</h2>

        <div className={styles.line}></div>

        <p className={styles.description}>
          Ventu Plaza ofrece una variedad de espacios comerciales creados para brindar
          comodidad, entretenimiento y experiencias únicas. Con más de 33 tiendas,
          restaurantes, kioskos y áreas de descanso, cada visitante disfruta un entorno
          moderno, accesible y vibrante.
        </p>

        <button className={styles.button}>
          Ver más
          <span className={styles.circle}></span>
        </button>
      </div>

      {/* GRID CREATIVO */}
      <div className={styles.grid}>

        <div className={`${styles.card} ${styles.cardLarge}`}>
          <Image src="/liberia/tiendas.webp" alt="Tiendas" width={48} height={48} />
          <span>+33 Tiendas</span>
        </div>

        <div className={styles.card}>
          <Image src="/liberia/kioskos.webp" alt="Kioskos" width={42} height={42} />
          <span>Kioskos</span>
        </div>

        <div className={styles.card}>
          <Image src="/liberia/restaurante.webp" alt="Restaurantes" width={42} height={42} />
          <span>Restaurantes</span>
        </div>

        <div className={styles.card}>
          <Image src="/liberia/comida.webp" alt="Plaza de comidas" width={42} height={42} />
          <span>Plaza de comidas</span>
        </div>

        <div className={styles.card}>
          <Image src="/liberia/baresv.webp" alt="Bares" width={42} height={42} />
          <span>Bares</span>
        </div>

        {/* NUEVA CARD — SALA DE DESCANSO */}
        <div className={styles.card}>
          <Image src="/liberia/descansov.webp" alt="Sala de descanso" width={42} height={42} />
          <span>Sala de descanso</span>
        </div>

      </div>
    </section>
  );
}
