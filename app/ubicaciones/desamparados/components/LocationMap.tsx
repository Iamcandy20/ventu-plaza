"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./LocationMap.module.css";

export default function LocationMap() {
  return (
    <section className={styles.location}>
      <div className={styles.container}>
        {/* === Info === */}
        <div className={styles.info}>
          <span className={styles.eyebrow}> Estaremos disponibles</span>

          <h2 className={styles.title}>Proximamente</h2>

          <p className={styles.text}>
            Ubicados estratégicamente en Desamparados para que
            llegues fácil y rápido.
          </p>

          {/* === Puntos de interés === */}
          <ul className={styles.points}>
            <li>
              <Image
                src="/icons/parque.webp"
                alt="Parque La Paz"
                width={24}
                height={24}
              />
              <span>
                <strong>Parque La Paz</strong> – Gran parque para caminar y pasar
                en familia.
              </span>
            </li>

            <li>
              <Image
                src="/icons/museo.webp"
                alt="Museo de los Niños"
                width={24}
                height={24}
              />
              <span>
                <strong>Museo de los Niños</strong> – Atractivo cultural y
                educativo para familias.
              </span>
            </li>

            <li>
              <Image
                src="/icons/estadio.webp"
                alt="Estadio Nacional"
                width={24}
                height={24}
              />
              <span>
                <strong>Estadio Nacional</strong> – Eventos masivos que generan
                flujo hacia la zona.
              </span>
            </li>

            <li>
              <Image
                src="/icons/barrio-chino.webp"
                alt="Barrio Chino"
                width={24}
                height={24}
              />
              <span>
                <strong>Barrio Chino</strong> – Espacio cultural y gastronómico
                único en San José.
              </span>
            </li>
          </ul>

          {/* === CTA === */}
          <Link href="/contactanos" className={styles.button}>
            Contáctanos
          </Link>
        </div>

        {/* === Map === */}
        <div className={styles.map}>
          <Image
            src="/images/mapa-desamparados.webp"
            alt="Mapa Desamparados"
            fill
            className={styles.mapImage}
            sizes="(max-width: 900px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  );
}
