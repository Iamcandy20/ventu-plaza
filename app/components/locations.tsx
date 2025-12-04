"use client";

import styles from "./locations.module.css";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { FaMapMarkerAlt, FaClock } from "react-icons/fa";

export default function Locations() {
  useScrollAnimation();

  const locations = [
    {
      name: "Desamparados",
      desc: "Ubicada en una zona de rápido crecimiento urbano, Ventu Plaza Desamparados ofrece tiendas, restaurantes y áreas abiertas para toda la familia.",
      img: "/desamparados/desamparados4.webp",
      place: "Desamparados",
      status: "Próximamente",
    },
    {
      name: "Liberia",
      desc: "Con un hotel AC Marriott de 140 habitaciones y un moderno centro de convenciones, Ventu Plaza Liberia se posiciona como el nuevo epicentro comercial y corporativo del norte del país.",
      img: "/liberia/liberia6.png",
      place: "Liberia",
      status: "En desarrollo",
    },
    {
      name: "San Sebastián",
      desc: "Un espacio pensado para el día a día, con tiendas, restaurantes y áreas verdes que impulsan la convivencia y el bienestar de las familias josefinas.",
      img: "/sansebas/sansebas4.jpeg",
      place: "San Sebastián",
      status: "Próximamente",
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
                <img src={loc.img} alt={`Ventu Plaza ${loc.name}`} />
              </div>

              <div className={styles.locBody}>
                <h3>Ventu Plaza {loc.name}</h3>
                <p className={styles.locDesc}>{loc.desc}</p>

                <div className={styles.locMeta}>
                  <span>
                    <FaMapMarkerAlt className={styles.icon} />
                    {loc.place}
                  </span>
                  <span>
                    <FaClock className={styles.icon} />
                    {loc.status}
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
