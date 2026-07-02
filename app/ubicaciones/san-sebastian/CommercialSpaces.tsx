"use client";

import { useEffect, useRef } from "react";
import styles from "./CommercialSpaces.module.css";
import {
  CarFront,
  UtensilsCrossed,
} from "lucide-react";
/* ===========================
   SVG - PARQUEO
=========================== */

function ParkingIcon() {
  return (
    <svg
      viewBox="0 0 120 120"
      className={styles.customIcon}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="20"
        y="24"
        width="80"
        height="72"
        rx="12"
        stroke="currentColor"
        strokeWidth="5"
      />

      <path
        d="M48 82V40H67C79 40 87 48 87 60C87 72 79 82 67 82H48Z"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinejoin="round"
      />

      <path
        d="M48 61H66"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
      />
    </svg>
  );
}

/* ===========================
   SVG - RESTAURANTE
=========================== */

function RestaurantIcon() {
  return (
    <svg
      viewBox="0 0 120 120"
      className={styles.customIcon}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Tenedor */}
      <path
        d="M38 24V54"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <path
        d="M30 24V42"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <path
        d="M46 24V42"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
      />

      {/* Cuchillo */}
      <path
        d="M78 24C70 32 66 42 66 58V96"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
      />

      <path
        d="M78 24V96"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
      />
    </svg>
  );
}

/* ===========================
   DATA
=========================== */

const cards = [
  {
    id: "parking",
    title: "18 Espacios de Parqueo",
    icon: CarFront,
  },
  {
    id: "restaurant",
    title: "2 Restaurantes Exclusivos",
    icon: UtensilsCrossed,
  },
];

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

    const current = sectionRef.current;

    if (current) observer.observe(current);

    return () => {
      if (current) observer.unobserve(current);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`${styles.section} ${styles.hidden}`}
    >
      {/* ========= TEXTO ========= */}

      <div className={styles.left}>
        <h4 className={styles.subtitle}>DESARROLLO COMERCIAL</h4>

        <h2 className={styles.title}>Espacios Comerciales</h2>

        <div className={styles.line}></div>

        <p className={styles.description}>
          Ventu Plaza Desamparados ofrece espacios diseñados para brindar
          comodidad, accesibilidad y una experiencia práctica para cada
          visitante.
        </p>

        <button className={styles.button}>Ver más</button>
      </div>

      {/* ========= CARDS ========= */}

      <div className={styles.grid}>
  {cards.map((card) => {
    const Icon = card.icon;

    return (
      <div key={card.id} className={styles.card}>
        <div className={styles.iconWrap}>
          <Icon
            className={styles.icon}
            strokeWidth={2}
            size={56}
          />
        </div>

        <span>{card.title}</span>
      </div>
    );
  })}
</div>
    </section>
  );
}