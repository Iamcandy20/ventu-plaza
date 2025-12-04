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
          <div className={`scroll-fade-right ${styles.aboutMedia}`}>
            <Image
              src="/sansebas/sansebas5.jpeg"
              alt="Ventu Plaza Costa Rica"
              width={1600}
              height={900}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
