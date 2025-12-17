"use client";

import styles from "./cll.module.css";
import Image from "next/image";
import { useEffect } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function AchievementsSection() {
  useScrollAnimation();

  useEffect(() => {
    const cards = document.querySelectorAll(`.${styles.card}`);
    cards.forEach((card, i) => {
      card.setAttribute("style", `transition-delay: ${i * 0.1}s`);
    });
  }, []);

 return (
  <section
    id="AchievementsSection"
    className={`${styles.achievementsSection} scroll-fade`}
  >
    {/* === Columna izquierda === */}
    <div className={`scroll-fade-left ${styles.textContent}`}>
      <span className={styles.subtitle}>Nuestros Orígenes</span>
      <h2 className={styles.title}>Corporación Lady Lee</h2>
      <p className={styles.description}>
        Desde 1971, Corporación Lady Lee ha sido un pilar del desarrollo económico y social
        de Centroamérica. Con más de cinco décadas de trayectoria, ha diversificado sus
        operaciones en retail, inmobiliaria, alimentos, entretenimiento y hospitalidad,
        consolidándose como uno de los grupos empresariales más sólidos de la región.
      </p>

      <div className={styles.cardsGrid}>
        <div className={`${styles.card} scroll-zoom`}>
          <h3>+3,000</h3>
          <p>Colaboradores</p>
        </div>
        <div className={`${styles.card} ${styles.emphasis} scroll-zoom`}>
          <h3>141</h3>
          <p>Puntos de Venta</p>
        </div>
        <div className={`${styles.card} ${styles.emphasis} scroll-zoom`}>
          <h3>6</h3>
          <p>Divisiones Estratégicas</p>
        </div>
        <div className={`${styles.card} scroll-zoom`}>
          <h3>25</h3>
          <p>Ciudades</p>
        </div>
        <div className={`${styles.card}  scroll-zoom`}>
          <h3>4</h3>
          <p>Paises</p>
        </div>
        <div className={`${styles.card} ${styles.emphasis}  scroll-zoom`}>
           <h3>54</h3>
          <p>Años de Trayectoria</p>
        </div>
      </div>
    </div>
    {/* === Columna derecha === */}
    <div className={`scroll-fade-right ${styles.imageContainer}`}>
      <div className={styles.glow}></div>
      <div className={styles.shapeBehind}></div>
      <Image
        src="https://corporacionladylee.com/wp-content/uploads/2025/05/logo-padding-1.png"
        alt="Corporación Lady Lee"
        width={420}
        height={420}
        className={styles.image}
        priority
      /> 
    </div>
  </section>
);
}
