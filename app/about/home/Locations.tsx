"use client";

import styles from "./locations.module.css";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { FaMapMarkerAlt, FaClock } from "react-icons/fa";
import Image from "next/image";

export default function Locations() {
  useScrollAnimation();

  const locations = [
    {
      name: "Desamparados",
      desc: "Ubicada en una zona de rápido crecimiento urbano, Ventu Plaza Desamparados ofrece restaurantes y áreas abiertas para toda la familia.",
      img: "/desamparados/desamparados4.webp",
      place: "Desamparados",
    },
    {
      name: "Solarium Liberia",
      desc: "Con un hotel AC Marriott de 140 habitaciones,  y casi 40 comercios, Ventu Plaza Solarium se posiciona como el nuevo epicentro comercial y corporativo de Liberia.",
      img: "/liberia/solarium-10.jpg",
      place: "Liberia",
      status: "En desarrollo",
    },
    {
      name: "San Sebastián",
      desc: "Ubicada en una zona de rápido crecimiento urbano, Ventu Plaza San Sebastian ofrece restaurantes y áreas abiertas para toda la familia.",
      img: "/sansebas/sansebas4.webp",
      place: "San Sebastián",
    },
  ];

  return (
    <section id="ubicaciones" className={styles.locations}>
      <div className="container">
        <header className={`scroll-fade ${styles.locationsHead}`}>
          <p className={styles.locationsEyebrow}>Nuestras Ubicaciones</p>
          <h2 className={styles.locationsTitle}>
            Descubre las Plazas Ventu en Costa Rica
          </h2>
          <p className={styles.locationsText}>
            Cada ubicación ofrece una experiencia única, pensada para disfrutar al aire libre.
          </p>
        </header>

        <div className={styles.locGrid}>
          {locations.map((loc, i) => (
            <article
              key={i}
              className={`scroll-zoom ${styles.locCard}`}
              style={{ transitionDelay: `${i * 0.3}s` }}
            >
              <div className={styles.locMedia}>
                <Image
                  src={loc.img}
                  alt={`Ventu Plaza ${loc.name}`}
                  width={800}
                  height={500}
                  className={styles.locImage}
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              <div className={styles.locBody}>
                <h3>Ventu Plaza {loc.name}</h3>
                <p className={styles.locDesc}>{loc.desc}</p>

                <div className={styles.locMeta}>
                  <span>
                    <FaMapMarkerAlt className={styles.icon} />
                    {loc.place}
                  </span>
                 
                </div>

                <a
                  href="#"
                  className={styles.btnLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ver más
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
