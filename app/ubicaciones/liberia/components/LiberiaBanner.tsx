"use client";
import { useState, useEffect } from "react";
import styles from "./LiberiaBanner.module.css";

const slides = [
  {
    title: <>Liberia</>,
    image: "/liberia/liberia10.webp",
  },
  {
   
    image: "/liberia/liberia6.webp",
  },
  {
   
    image: "/liberia/liberia4.webp",
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(false);

  // Cambio automático cada 6 s
  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % slides.length);
        setFade(false);
      }, 700); // sincronizado con la animación CSS
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const slide = slides[index];

  return (
    <section className={styles.hero}>
      <div className={styles.heroSurface}>
        {/* Contenedor de imagen con transición cruzada */}
        <div className={styles.heroBgWrapper}>
          <div
            key={index}
            className={`${styles.heroBg} ${fade ? styles.fadeOut : styles.fadeIn}`}
            style={{
              backgroundImage: `
                linear-gradient(180deg, rgba(10,15,30,.35), rgba(10,15,30,.55)),
                url(${slide.image})
              `,
            }}
          />
        </div>

        {/* Contenido del slide */}
       <div className={styles.heroInner}>
  <h1
    className={`${styles.title} ${
      fade ? styles.textFadeOut : styles.textFadeIn
    }`}
  >
    {slide.title}
  </h1>
</div>
        
        {/* Tarjeta inferior estática 
        <div className={styles.infoCard}>
          <h4>UN PROYECTO DE</h4>
          <div className={styles.infoRow}>
            <div className={styles.profile}>
              <div className={styles.avatar}></div>
              <div className={styles.name}>
                <strong>Corporación Lady Lee</strong>
                <span>54 años de trayectoria</span>
              </div>
            </div>
           <button
  className={styles.btnMini}
  onClick={() => {
    const section = document.getElementById("AchievementsSection");
    section?.scrollIntoView({ behavior: "smooth" });
  }}
>
  Ver más
</button>

          </div>
        </div>
*/}
        {/* Puntos de navegación */}
        <div className={styles.navDots}>
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`${styles.dotBtn} ${i === index ? styles.active : ""}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
