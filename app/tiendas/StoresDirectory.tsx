"use client";

import { useMemo, useState } from "react";
import styles from "./StoresDirectory.module.css";

type LocationKey = "liberia" | "desamparados" | "sanSebastian";

type Store = {
  name: string;
  logo: string;
  schedule: string;
};

type StoreCategories = Record<string, Store[]>;

const locations = [
  {
    key: "liberia" as LocationKey,
    name: "Solarium Liberia",
  },
  {
    key: "desamparados" as LocationKey,
    name: "Desamparados",
  },
  {
    key: "sanSebastian" as LocationKey,
    name: "San Sebastián",
  },
];

const stores: Record<LocationKey, StoreCategories> = {
  liberia: {
  "Moda y Accesorios": [
      {
        name: "Todo Jeans",
        logo: "/logos/liberia/JEANS.webp",
        schedule: "Lun - Dom: 10:00 a.m. - 9:00 p.m.",
      },
      {
        name: "Sportline",
        logo: "/logos/liberia/SPORLINE.webp",
        schedule: "Lun - Dom: 10:00 a.m. - 9:00 p.m.",
      },
      {
        name: "TOUS",
        logo: "/logos/liberia/TOUS.webp",
        schedule: "Lun - Dom: 10:00 a.m. - 9:00 p.m.",
      },
      {
        name: "Van Heusen",
        logo: "/logos/liberia/VANHEUSEN.webp",
        schedule: "Lun - Dom: 10:00 a.m. - 9:00 p.m.",
      },
      {
        name: "Wild West",
        logo: "/logos/liberia/WILDWEST.webp",
        schedule: "Lun - Dom: 10:00 a.m. - 9:00 p.m.",
      },
      {
        name: "Siman",
        logo: "/logos/liberia/SIMAN.webp",
        schedule: "Lun - Dom: 10:00 a.m. - 9:00 p.m.",
      },
       {
        name: "Miniso",
        logo: "/logos/liberia/MINISO.webp",
        schedule: "Lun - Dom: 10:00 a.m. - 9:00 p.m.",
      },
        {
        name: "Panda",
        logo: "/logos/liberia/PANDA.webp",
        schedule: "Lun - Dom: 10:00 a.m. - 9:00 p.m.",
      },
         {
        name: "Punto Favorito",
        logo: "/logos/liberia/point.webp",
        schedule: "Lun - Dom: 10:00 a.m. - 9:00 p.m.",
      },
      
    ],
    "Restaurantes,Café y Heladerías": [
      {
        name: "Burguer King",
        logo: "/logos/liberia/BK.webp",
        schedule: "Lun - Dom: 11:00 a.m. - 10:00 p.m.",
      },
        {
        name: "Posada Real",
        logo: "/logos/liberia/POSADA REAL.webp",
        schedule: "Lun - Dom: 11:00 a.m. - 10:00 p.m.",
      },
      {
        name: "Popeyes",
        logo: "/logos/liberia/POPEYES.webp",
        schedule: "Lun - Dom: 8:00 a.m. - 8:00 p.m.",
      },
        {
        name: "Heladisimo",
        logo: "/logos/liberia/HELADISIMO.webp",
        schedule: "Lun - Dom: 11:00 a.m. - 10:00 p.m.",
      },
      {
        name: "Naans & Curries",
        logo: "/logos/liberia/NAANS.webp",
        schedule: "Lun - Dom: 8:00 a.m. - 8:00 p.m.",
      },
       {
        name: "Rosso di Roma",
        logo: "/logos/liberia/ROSSO.webp",
        schedule: "Lun - Dom: 8:00 a.m. - 8:00 p.m.",
      },
    ],
    "Salud y Cuidado Personal": 
    [
      {
        name: "Medipiel",
        logo: "/logos/liberia/MEDIPIEL.webp",
        schedule: "Lun - Sáb: 9:00 a.m. - 6:00 p.m.",
      },
      {
        name: "Marcias Apothe",
        logo: "/logos/liberia/MARCIAS APOTHE.webp",
        schedule: "Lun - Sáb: 9:00 a.m. - 6:00 p.m.",
      },
        {
        name: "The Factory Salon",
        logo: "/logos/liberia/FACTORY SALON.webp",
        schedule: "Lun - Dom: 11:00 a.m. - 10:00 p.m.",
      },
      {
        name: "Super Salón",
        logo: "/logos/liberia/SUPER SALON.webp",
        schedule: "Lun - Dom: 8:00 a.m. - 8:00 p.m.",
      },
    ],
    "Entretenimiento": [
      {
        name: "Videojuegos Coqui",
        logo: "/logos/liberia/COQUI.webp",
        schedule: "Lun - Sáb: 9:00 a.m. - 6:00 p.m.",
      },
        {
        name: "Libreria Internacional",
        logo: "/logos/liberia/libreria.webp",
        schedule: "Lun - Sáb: 9:00 a.m. - 6:00 p.m.",
      },
  
    ],
     "Hogar": [
      {
        name: "Selther",
        logo: "/logos/liberia/SELTHER.webp",
        schedule: "Lun - Sáb: 9:00 a.m. - 6:00 p.m.",
      },
      {
        name: "Mielé",
        logo: "/logos/liberia/MIELE.webp",
        schedule: "Lun - Sáb: 9:00 a.m. - 6:00 p.m.",
      },
    ],
  },

  desamparados: {
    "Restaurantes y Café": [
      {
        name: "Popeyes",
        logo: "/logos/stores/popeyes.webp",
        schedule: "Lun - Dom: 11:00 a.m. - 10:00 p.m.",
      },
      {
        name: "Dominos Pizza",
        logo: "/logos/stores/dominos.webp",
        schedule: "Lun - Dom: 8:00 a.m. - 8:00 p.m.",
      },
    ],
  },

  sanSebastian: {
   
    "Restaurantes y Café": [
      {
        name: "Burguer King",
        logo: "/logos/stores/burguerking.webp",
        schedule: "Lun - Dom: 11:00 a.m. - 10:00 p.m.",
      },
      {
        name: "Dominos Pizza",
        logo: "/logos/stores/dominos.webp",
        schedule: "Lun - Dom: 8:00 a.m. - 8:00 p.m.",
      },
    ],
  },
};

export default function StoresDirectory() {
  const [activeLocation, setActiveLocation] = useState<LocationKey>("liberia");

  const activeStores = useMemo(() => {
    return stores[activeLocation];
  }, [activeLocation]);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.locationMenu}>
          {locations.map((location) => (
            <button
              key={location.key}
              type="button"
              className={`${styles.locationButton} ${
                activeLocation === location.key ? styles.active : ""
              }`}
              onClick={() => setActiveLocation(location.key)}
            >
              {location.name}
            </button>
          ))}
        </div>

        <div className={styles.heading}>
          <span>Directorio comercial</span>
          <h2>Explora nuestras tiendas por ubicación</h2>
          <p>
            Selecciona una sucursal y descubre las marcas disponibles,
            organizadas por categoría para una navegación más cómoda.
          </p>
        </div>

        <div className={styles.categories}>
          {Object.entries(activeStores).map(([category, items]) => (
            <div key={category} className={styles.categoryBlock}>
              <div className={styles.categoryHeader}>
                <span></span>
                <h3>{category}</h3>
              </div>

              <div className={styles.grid}>
                {items.map((store) => (
                  <article
                    key={store.name}
                    className={styles.card}
                    tabIndex={0}
                    aria-label={`${store.name}. Horario: ${store.schedule}`}
                  >
                    <div className={styles.cardContent}>
                      <div className={styles.logoBox}>
                        <img
                          src={store.logo}
                          alt={store.name}
                          loading="lazy"
                        />
                      </div>

                      <div className={styles.cardInfo}>
                        <h4>{store.name}</h4>
                      </div>
                    </div>

                    <div className={styles.scheduleOverlay}>
                      <span>Horario</span>
                      <strong>{store.schedule}</strong>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}