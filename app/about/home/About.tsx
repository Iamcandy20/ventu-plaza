"use client";

import styles from "./about.module.css";
import Image from "next/image";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { IMAGE_URL } from "@/lib/images";

export default function About() {
  useScrollAnimation();

  return (
    <section id="sobre-nosotros" className={styles.about}>
      <div className="container">
        <div className={styles.aboutHeader}>
          <div className={styles.aboutEyebrow}>Sobre Nosotros</div>
        </div>

        <div className={styles.aboutGrid}>
          {/* Columna izquierda */}
          <div className="scroll-fade-left">
            <h2 className={`scroll-fade ${styles.aboutTitle}`}>
              Creamos espacios que inspiran comunidad y bienestar
            </h2>

            <p className={`scroll-fade ${styles.aboutText}`}>
              Ventu Plaza es la nueva marca de centros comerciales de Corporación Lady Lee, enfocada en ofrecer experiencias de compra y entretenimiento en formatos de centro comercial abierto en Costa Rica. Actualmente, se están desarrollando las primeras tres plazas en Desamparados, Liberia y San Sebastián. Cada una de estas plazas está diseñada para integrarse armoniosamente con su entorno, proporcionando espacios abiertos que invitan a la comunidad a disfrutar de una variedad de tiendas, restaurantes y actividades culturales.

              La ubicación de Ventu Plaza en Liberia se distingue por contar con un hotel AC Marriott de 140 habitaciones, posicionándose como un destino clave para el turismo de negocios y eventos en la región.

              Con Ventu Plaza, Corporación Lady Lee reafirma su compromiso con el desarrollo inmobiliario de calidad, creando espacios que fomentan el crecimiento económico y social en las comunidades donde se establecen.
            </p>

            <div className={styles.aboutHighlights}></div>

            <div className={`scroll-zoom ${styles.statsRow}`}>
              <div className={styles.statCard}>
                <strong>3 Ubicaciones</strong>
                <span>En Costa Rica</span>
              </div>

              <div className={styles.statCard}>
                <strong>1 Hotel AC Marriott</strong>
                <span>140 Habitaciones</span>
              </div>

              <div className={styles.statCard}>
                <strong>+1,000 Empleos</strong>
                <span>Directos e Indirectos</span>
              </div>
            </div>
          </div>

          {/* Columna derecha */}
          <div className={`scroll-fade-right ${styles.aboutMediaClean}`}>
            <div className={styles.mapWrapper}>
              <Image
                src={`${IMAGE_URL}/global/mapa.webp`}
                alt="Mapa de Costa Rica"
                className={styles.mapImage}
                draggable={false}
                width={1200}
                height={800}
                priority
                unoptimized
              />

              <div className={`${styles.pin} ${styles["pin--liberia"]}`}>
                <Image
                  src={`${IMAGE_URL}/global/pinb.png`}
                  alt="Pin de ubicación"
                  width={26}
                  height={26}
                  className={styles.pinIcon}
                  draggable={false}
                  unoptimized
                />
                <span className={styles.pinLabel}>Liberia</span>
              </div>

              <div className={`${styles.pin} ${styles["pin--desamparados"]}`}>
                <Image
                  src={`${IMAGE_URL}/global/pinb.png`}
                  alt="Pin de ubicación"
                  width={26}
                  height={26}
                  className={styles.pinIcon}
                  draggable={false}
                  unoptimized
                />
                <span className={styles.pinLabel}>Desamparados</span>
              </div>

              <div className={`${styles.pin} ${styles["pin--sansebastian"]}`}>
                <Image
                  src={`${IMAGE_URL}/global/pinb.png`}
                  alt="Pin de ubicación"
                  width={26}
                  height={26}
                  className={styles.pinIcon}
                  draggable={false}
                  unoptimized
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