"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import Link from "next/link";
import { IMAGE_URL } from "@/lib/images";
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

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`${styles.section} ${styles.hidden}`}
    >

      {/* IZQUIERDA */}
      <div className={styles.left}>

        <h4 className={styles.subtitle}>
          DESARROLLO COMERCIAL
        </h4>

        <h2 className={styles.title}>
          Locales Comerciales
        </h2>

        <div className={styles.line}></div>

        <p className={styles.description}>
          Ventu Plaza ofrece una variedad de espacios comerciales creados para brindar
          comodidad, entretenimiento y experiencias únicas. Con casi 40 locales comerciales,
          restaurantes, kioskos y áreas de descanso, cada visitante disfruta un entorno
          moderno, accesible y vibrante.
        </p>


        <Link
          href="/tiendas"
          className={styles.button}
        >
          Ver más
          <span className={styles.circle}></span>
        </Link>

      </div>


      {/* GRID CREATIVO */}
      <div className={styles.grid}>

        <div className={styles.card}>
          <Image
            src={`${IMAGE_URL}/liberia/tiendas.webp`}
            alt="Tiendas"
            width={48}
            height={48}
            unoptimized
          />

          <span>
            Casi 40 locales
          </span>
        </div>


        <div className={styles.card}>
          <Image
            src={`${IMAGE_URL}/liberia/kioskos.webp`}
            alt="Kioskos"
            width={42}
            height={42}
            unoptimized
          />

          <span>
            1 Hotel AC Marriott
          </span>
        </div>



        <div className={styles.card}>
          <Image
            src={`${IMAGE_URL}/liberia/comida.webp`}
            alt="Plaza de comidas"
            width={42}
            height={42}
            unoptimized
          />

          <span>
            Zona Gastronómica
          </span>
        </div>



        <div className={styles.card}>
          <Image
            src={`${IMAGE_URL}/liberia/baresv.webp`}
            alt="Bares"
            width={42}
            height={42}
            unoptimized
          />

          <span>
            Servicios Varios
          </span>
        </div>

      </div>

    </section>
  );
}