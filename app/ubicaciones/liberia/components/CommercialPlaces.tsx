"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./CommercialPlaces.module.css";

export default function CommercialPlaces() {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  // Animación Scroll
  useEffect(() => {
    const cards = sectionRef.current?.querySelectorAll(`.${styles.card}`) ?? [];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add(styles.visible);
        });
      },
      { threshold: 0.25 }
    );

    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className={styles.section}>
      <div className={styles.header}>
        <h2>Locales comerciales</h2>
        <p>Categorías y oferta</p>
      </div>

      {/* GRID SUPERIOR */}
      <div className={styles.gridTop}>

        {/* TIENDAS */}
        <div className={styles.card}>
          <div className={styles.cardTop}>
            <div className={styles.topLeft}>
              <Image src="/icons/tiendas.png" width={34} height={34} alt="" />
              <h3>Tiendas</h3>
            </div>
            <span className={`${styles.tag} ${styles.tagRetail}`}>Retail</span>
          </div>

          <div className={styles.divider}></div>

          <ul className={styles.list}>
            <li>
              <Image src="/icons/item-moda.png" width={22} height={22} alt="" />
              Moda y accesorios
            </li>
            <li>
              <Image src="/icons/item-belleza.png" width={22} height={22} alt="" />
              Belleza y cuidado
            </li>
            <li>
              <Image src="/icons/item-gadgets.png" width={22} height={22} alt="" />
              Tecnología y gadgets
            </li>
          </ul>
        </div>

        {/* RESTAURANTES */}
        <div className={styles.card}>
          <div className={styles.cardTop}>
            <div className={styles.topLeft}>
              <Image src="/icons/restaurantes.png" width={34} height={34} alt="" />
              <h3>Restaurantes</h3>
            </div>
            <span className={`${styles.tag} ${styles.tagGastro}`}>Gastronomía</span>
          </div>

          <div className={styles.divider}></div>

          <ul className={styles.list}>
            <li>
              <Image src="/icons/item-cafe.png" width={22} height={22} alt="" />
              Bistrós y cafeterías
            </li>
            <li>
              <Image src="/icons/item-fastfood.png" width={22} height={22} alt="" />
              Comida rápida premium
            </li>
            <li>
              <Image src="/icons/item-postres.png" width={22} height={22} alt="" />
              Bebidas y postres
            </li>
          </ul>
        </div>

        {/* DEPORTE */}
        <div className={styles.card}>
          <div className={styles.cardTop}>
            <div className={styles.topLeft}>
              <Image src="/icons/deporte.png" width={34} height={34} alt="" />
              <h3>Deporte</h3>
            </div>
            <span className={`${styles.tag} ${styles.tagWellness}`}>Bienestar</span>
          </div>

          <div className={styles.divider}></div>

          <ul className={styles.list}>
            <li>
              <Image src="/icons/item-gym.png" width={22} height={22} alt="" />
              Gimnasio y fitness
            </li>
            <li>
              <Image src="/icons/item-bike.png" width={22} height={22} alt="" />
              Estudio de ciclismo
            </li>
            <li>
              <Image src="/icons/item-clinica.png" width={22} height={22} alt="" />
              Clínica deportiva
            </li>
          </ul>
        </div>

      </div>

      {/* GRID INFERIOR */}
      <div className={styles.gridBottom}>

        {/* CULTURA (antes educación) */}
        <div className={`${styles.card} ${styles.cardWide}`}>
          <div className={styles.cardTop}>
            <div className={styles.topLeft}>
              <Image src="/icons/cultura.png" width={34} height={34} alt="" />
              <h3>Cultura</h3>
            </div>
            <span className={`${styles.tag} ${styles.tagLearn}`}>Aprendizaje</span>
          </div>

          <div className={styles.divider}></div>

          <ul className={styles.list}>
            <li>
              <Image src="/icons/item-biblioteca.png" width={22} height={22} alt="" />
              Biblioteca
            </li>
            <li>
              <Image src="/icons/item-sala.png" width={22} height={22} alt="" />
              Sala de reuniones 1
            </li>
            <li>
              <Image src="/icons/item-sala.png" width={22} height={22} alt="" />
              Sala de reuniones 2
            </li>
          </ul>
        </div>

        {/* HOTEL */}
        <div className={`${styles.card} ${styles.cardWide}`}>
          <div className={styles.cardTop}>
            <div className={styles.topLeft}>
              <Image src="/icons/hotel.png" width={34} height={34} alt="" />
              <h3>Hotel</h3>
            </div>

            <span className={`${styles.tag} ${styles.tagHotel}`}>Hospitalidad</span>
          </div>

          <div className={styles.divider}></div>

          <div className={styles.hotelInfo}>
            <div>📐 6,800 m²</div>
            <div>🛏️ 120 habitaciones</div>
            <div>🏢 12 pisos</div>
            <div>🛎️ Servicios: lobby, salas, restaurante</div>
          </div>

          <p className={styles.note}>Orientado a turismo y negocios</p>
        </div>

      </div>
    </section>
  );
}
