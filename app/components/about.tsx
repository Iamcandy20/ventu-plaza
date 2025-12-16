"use client";

import styles from "./about.module.css";
import Image from "next/image";
import { CheckCircle } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function About() {
  useScrollAnimation();

  return (
    <section id="sobre-nosotros" className={styles.about}>
      <div className="container">
        <div className={styles.aboutGrid}>
          
          {/* Columna izquierda */}
          <div className="scroll-fade-left">
            <div className={styles.aboutEyebrow}>Sobre Nosotros</div>
            <h2 className={`scroll-fade ${styles.aboutTitle}`}>
              Creamos espacios que inspiran comunidad y bienestar
            </h2>
            <p className={`scroll-fade ${styles.aboutText}`}>
              Ventu Plaza es la nueva marca de centros comerciales de Corporación Lady Lee,
              enfocada en ofrecer experiencias de compra, gastronomía y entretenimiento
              al aire libre en Costa Rica. Cada plaza está diseñada para integrarse armoniosamente
              con su entorno natural, promoviendo el encuentro entre las personas.
            </p>

            <div className={styles.aboutHighlights}>
              <div className={`scroll-fade-left ${styles.aboutHighlight}`}>
                <CheckCircle size={22} />
                <span>Diseños arquitectónicos abiertos e integrados al entorno.</span>
              </div>
              <div className={`scroll-fade-left ${styles.aboutHighlight}`}>
                <CheckCircle size={22} />
                <span>Tiendas, restaurantes y áreas verdes para toda la familia.</span>
              </div>
              <div className={`scroll-fade-left ${styles.aboutHighlight}`}>
                <CheckCircle size={22} />
                <span>Compromiso con el desarrollo sostenible.</span>
              </div>
            </div>

            <div className={`scroll-zoom ${styles.statsRow}`}>
              <div className={styles.statCard}>
                <strong>3 ubicaciones</strong>
                <span>en desarrollo en Costa Rica</span>
              </div>
              <div className={styles.statCard}>
                <strong>+140 habitaciones</strong>
                <span>en hotel AC Marriott Liberia</span>
              </div>
              <div className={styles.statCard}>
                <strong>+1,000 empleos</strong>
                <span>generados directa e indirectamente</span>
              </div>
            </div>
          </div>
{/* Columna derecha */}
<div className={`scroll-fade-right ${styles.aboutMediaClean}`}>
  <div className={styles.mapWrapper}>
<Image
  src="/mapa.png"
  alt="Mapa de Costa Rica"
  className={styles.mapImage}
  draggable={false}
  width={1200}
  height={800}
  priority
/>

{/* Liberia */}
<div className={`${styles.pin} ${styles["pin--liberia"]}`}>
  <Image
    src="/pinb.png"
    alt="Pin de ubicación"
    width={26}
    height={26}
    className={styles.pinIcon}
    draggable={false}
  />
  <span className={styles.pinLabel}>Liberia</span>
</div>

{/* Desamparados */}
<div className={`${styles.pin} ${styles["pin--desamparados"]}`}>
  <Image
    src="/pinb.png"
    alt="Pin de ubicación"
    width={26}
    height={26}
    className={styles.pinIcon}
    draggable={false}
  />
  <span className={styles.pinLabel}>Desamparados</span>
</div>

{/* San Sebastián */}
<div className={`${styles.pin} ${styles["pin--sansebastian"]}`}>
  <Image
    src="/pinb.png"
    alt="Pin de ubicación"
    width={26}
    height={26}
    className={styles.pinIcon}
    draggable={false}
  />
  <span className={styles.pinLabel}>San Sebastián</span>
</div>

  </div>
</div>


        </div>
      </div>
    </section>
  );
}
