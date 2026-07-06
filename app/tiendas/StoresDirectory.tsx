"use client";

import { useMemo, useState } from "react";
import styles from "./StoresDirectory.module.css";

type LocationKey = "liberia" | "desamparados" | "sanSebastian";

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

const stores = {
  liberia: {
    Moda: [
      { name: "Tienda Moda 1", logo: "/logos/stores/store-placeholder.png" },
      { name: "Tienda Moda 2", logo: "/logos/stores/store-placeholder.png" },
    ],
    "Restaurantes y Café": [
      { name: "Restaurante 1", logo: "/logos/stores/store-placeholder.png" },
      { name: "Café 1", logo: "/logos/stores/store-placeholder.png" },
    ],
    Servicios: [
      { name: "Servicio 1", logo: "/logos/stores/store-placeholder.png" },
      { name: "Servicio 2", logo: "/logos/stores/store-placeholder.png" },
    ],
  },
  desamparados: {
    Moda: [
      { name: "Tienda Moda 3", logo: "/logos/stores/store-placeholder.png" },
      { name: "Tienda Moda 4", logo: "/logos/stores/store-placeholder.png" },
    ],
    "Restaurantes y Café": [
      { name: "Restaurante 2", logo: "/logos/stores/store-placeholder.png" },
      { name: "Café 2", logo: "/logos/stores/store-placeholder.png" },
    ],
    Servicios: [
      { name: "Servicio 3", logo: "/logos/stores/store-placeholder.png" },
      { name: "Servicio 4", logo: "/logos/stores/store-placeholder.png" },
    ],
  },
  sanSebastian: {
    Moda: [
      { name: "Tienda Moda 5", logo: "/logos/stores/store-placeholder.png" },
      { name: "Tienda Moda 6", logo: "/logos/stores/store-placeholder.png" },
    ],
    "Restaurantes y Café": [
      { name: "Restaurante 3", logo: "/logos/stores/store-placeholder.png" },
      { name: "Café 3", logo: "/logos/stores/store-placeholder.png" },
    ],
    Servicios: [
      { name: "Servicio 5", logo: "/logos/stores/store-placeholder.png" },
      { name: "Servicio 6", logo: "/logos/stores/store-placeholder.png" },
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
                  <article key={store.name} className={styles.card}>
                    <div className={styles.logoBox}>
                      <img src={store.logo} alt={store.name} />
                    </div>

                    <div className={styles.cardInfo}>
                      <h4>{store.name}</h4>
                      <p>{category}</p>
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