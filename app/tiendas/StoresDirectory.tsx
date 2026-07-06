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
    Moda: [
      {
        name: "Tienda Moda 1",
        logo: "/logos/stores/starbucks.webp",
        schedule: "Lun - Dom: 10:00 a.m. - 9:00 p.m.",
      },
      {
        name: "Tienda Moda 2",
        logo: "/logos/stores/starbucks.webp",
        schedule: "Lun - Dom: 10:00 a.m. - 9:00 p.m.",
      },
      {
        name: "Tienda Moda 3",
        logo: "/logos/stores/starbucks.webp",
        schedule: "Lun - Dom: 10:00 a.m. - 9:00 p.m.",
      },
      {
        name: "Tienda Moda 4",
        logo: "/logos/stores/starbucks.webp",
        schedule: "Lun - Dom: 10:00 a.m. - 9:00 p.m.",
      },
    ],
    "Restaurantes,Café y Heladerías": [
      {
        name: "Restaurante 3",
        logo: "/logos/stores/starbucks.webp",
        schedule: "Lun - Dom: 11:00 a.m. - 10:00 p.m.",
      },
      {
        name: "Café 4",
        logo: "/logos/stores/starbucks.webp",
        schedule: "Lun - Dom: 8:00 a.m. - 8:00 p.m.",
      },
        {
        name: "Restaurante 1",
        logo: "/logos/stores/starbucks.webp",
        schedule: "Lun - Dom: 11:00 a.m. - 10:00 p.m.",
      },
      {
        name: "Café 1",
        logo: "/logos/stores/starbucks.webp",
        schedule: "Lun - Dom: 8:00 a.m. - 8:00 p.m.",
      },
    ],
    "Salud y Cuidado Personal": 
    [
      {
        name: "Servicio 1",
        logo: "/logos/stores/starbucks.webp",
        schedule: "Lun - Sáb: 9:00 a.m. - 6:00 p.m.",
      },
      {
        name: "Servicio 2",
        logo: "/logos/stores/starbucks.webp",
        schedule: "Lun - Sáb: 9:00 a.m. - 6:00 p.m.",
      },
        {
        name: "Restaurante 3",
        logo: "/logos/stores/starbucks.webp",
        schedule: "Lun - Dom: 11:00 a.m. - 10:00 p.m.",
      },
      {
        name: "Café 4",
        logo: "/logos/stores/starbucks.webp",
        schedule: "Lun - Dom: 8:00 a.m. - 8:00 p.m.",
      },
    ],
    "Servicios y Otros": [
      {
        name: "Servicio 1",
        logo: "/logos/stores/starbucks.webp",
        schedule: "Lun - Sáb: 9:00 a.m. - 6:00 p.m.",
      },
      {
        name: "Servicio 2",
        logo: "/logos/stores/starbucks.webp",
        schedule: "Lun - Sáb: 9:00 a.m. - 6:00 p.m.",
      },
        {
        name: "Restaurante 3",
        logo: "/logos/stores/starbucks.webp",
        schedule: "Lun - Dom: 11:00 a.m. - 10:00 p.m.",
      },
      {
        name: "Café 4",
        logo: "/logos/stores/starbucks.webp",
        schedule: "Lun - Dom: 8:00 a.m. - 8:00 p.m.",
      },
    ],
  },

  desamparados: {
    Moda: [
      {
        name: "Tienda Moda 3",
        logo: "/logos/stores/starbucks.webp",
        schedule: "Lun - Dom: 10:00 a.m. - 9:00 p.m.",
      },
      {
        name: "Tienda Moda 4",
        logo: "/logos/stores/starbucks.webp",
        schedule: "Lun - Dom: 10:00 a.m. - 9:00 p.m.",
      },
    ],
    "Restaurantes y Café": [
      {
        name: "Restaurante 2",
        logo: "/logos/stores/starbucks.webp",
        schedule: "Lun - Dom: 11:00 a.m. - 10:00 p.m.",
      },
      {
        name: "Café 2",
        logo: "/logos/stores/starbucks.webp",
        schedule: "Lun - Dom: 8:00 a.m. - 8:00 p.m.",
      },
    ],
    Servicios: [
      {
        name: "Servicio 3",
        logo: "/logos/stores/starbucks.webp",
        schedule: "Lun - Sáb: 9:00 a.m. - 6:00 p.m.",
      },
      {
        name: "Servicio 4",
        logo: "/logos/stores/starbucks.webp",
        schedule: "Lun - Sáb: 9:00 a.m. - 6:00 p.m.",
      },
    ],
  },

  sanSebastian: {
    Moda: [
      {
        name: "Tienda Moda 5",
        logo: "/logos/stores/starbucks.webp",
        schedule: "Lun - Dom: 10:00 a.m. - 9:00 p.m.",
      },
      {
        name: "Tienda Moda 6",
        logo: "/logos/stores/starbucks.webp",
        schedule: "Lun - Dom: 10:00 a.m. - 9:00 p.m.",
      },
    ],
    "Restaurantes y Café": [
      {
        name: "Restaurante 3",
        logo: "/logos/stores/starbucks.webp",
        schedule: "Lun - Dom: 11:00 a.m. - 10:00 p.m.",
      },
      {
        name: "Café 3",
        logo: "/logos/stores/starbucks.webp",
        schedule: "Lun - Dom: 8:00 a.m. - 8:00 p.m.",
      },
    ],
    Servicios: [
      {
        name: "Servicio 5",
        logo: "/logos/stores/starbucks.webp",
        schedule: "Lun - Sáb: 9:00 a.m. - 6:00 p.m.",
      },
      {
        name: "Servicio 6",
        logo: "/logos/stores/starbucks.webp",
        schedule: "Lun - Sáb: 9:00 a.m. - 6:00 p.m.",
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