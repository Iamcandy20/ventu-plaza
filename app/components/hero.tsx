"use client";
import { useState, useEffect } from "react";
import styles from "./hero.module.css";

const slides = [
  {
    eyebrow: "Ventu Plaza Desamparados",
   title: (
      <>
        Urbano y<br />Moderno
      </>
    ),
    subtitle:
      "",
    cta: "Descubre más",
    image:
      "/desamparados/desamparados1.webp",
  },
  {
    eyebrow: "Ventu Plaza Liberia",
    title: (
      <>
        Turismo y<br />Negocios
      </>
    ),
    subtitle:
      "Con un hotel AC Marriott de 140 habitaciones y un moderno centro de convenciones, Ventu Plaza Liberia se posiciona como el nuevo epicentro comercial y corporativo del norte del país.",
    cta: "Explora Liberia",
    image:
      "/liberia/liberia7.png",
  },
  {
    eyebrow: "Ventu Plaza San Sebastián",
    title: (
      <>
        Vida, Comercio<br />y Cercanía
      </>
    ),
    subtitle:
      "Un espacio pensado para el día a día, con tiendas, restaurantes y áreas verdes que impulsan la convivencia y el bienestar de las familias josefinas.",
    cta: "Conoce la plaza",
    image:
      "/sansebas/sansebas5.jpeg",
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(false);

  
  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % slides.length);
        setFade(false);
      }, 700); 
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const slide = slides[index];

  return (
    <section className={styles.hero}>
      <div className={styles.heroSurface}>
       
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
          <div className={`${styles.heroCopy} ${fade ? styles.textFadeOut : styles.textFadeIn}`}>
            <div className={styles.eyebrow}>{slide.eyebrow}</div>
            <h1 className={styles.title}>{slide.title}</h1>
            <p className={styles.subtitle}>{slide.subtitle}</p>
            <div className={styles.ctaRow}>
              <button className={`${styles.btn} ${styles.btnPrimary}`}>
                {slide.cta}
              </button>
            </div>
          </div>
        </div>
        
        {/* Tarjeta inferior estática */}
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
