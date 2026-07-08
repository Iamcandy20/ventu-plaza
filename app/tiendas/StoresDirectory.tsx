"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import styles from "./StoresDirectory.module.css";

type LocationKey = "liberia" | "desamparados" | "sanSebastian";

type Store = {
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
       
        logo: "/logos/liberia/JEANS.webp",
        schedule: "Lun - Dom: 10:00 a.m. - 9:00 p.m.",
      },
      {
       
        logo: "/logos/liberia/SPORLINE.webp",
        schedule: "Lun - Dom: 10:00 a.m. - 9:00 p.m.",
      },
      {
       
        logo: "/logos/liberia/TOUS.webp",
        schedule: "Lun - Dom: 10:00 a.m. - 9:00 p.m.",
      },
      {
       
        logo: "/logos/liberia/VANHEUSEN.webp",
        schedule: "Lun - Dom: 10:00 a.m. - 9:00 p.m.",
      },
      {
        
        logo: "/logos/liberia/WILDWEST.webp",
        schedule: "Lun - Dom: 10:00 a.m. - 9:00 p.m.",
      },
      {
     
        logo: "/logos/liberia/SIMAN.webp",
        schedule: "Lun - Dom: 10:00 a.m. - 9:00 p.m.",
      },
       {
       
        logo: "/logos/liberia/MINISO.webp",
        schedule: "Lun - Dom: 10:00 a.m. - 9:00 p.m.",
      },
        {
       
        logo: "/logos/liberia/PANDA.webp",
        schedule: "Lun - Dom: 10:00 a.m. - 9:00 p.m.",
      },
         {
      
        logo: "/logos/liberia/point.webp",
        schedule: "Lun - Dom: 10:00 a.m. - 9:00 p.m.",
      },
      
    ],
    "Restaurantes,Café y Heladerías": [
      {
       
        logo: "/logos/liberia/BK.webp",
        schedule: "Lun - Dom: 11:00 a.m. - 10:00 p.m.",
      },
        {
   
        logo: "/logos/liberia/POSADA REAL.webp",
        schedule: "Lun - Dom: 11:00 a.m. - 10:00 p.m.",
      },
      {
      
        logo: "/logos/liberia/POPEYES.webp",
        schedule: "Lun - Dom: 8:00 a.m. - 8:00 p.m.",
      },
        {
      
        logo: "/logos/liberia/HELADISIMO.webp",
        schedule: "Lun - Dom: 11:00 a.m. - 10:00 p.m.",
      },
      {
      
        logo: "/logos/liberia/NAANS.webp",
        schedule: "Lun - Dom: 8:00 a.m. - 8:00 p.m.",
      },
       {
   
        logo: "/logos/liberia/ROSSO.webp",
        schedule: "Lun - Dom: 8:00 a.m. - 8:00 p.m.",
      },
    ],
    "Salud y Cuidado Personal": 
    [
      {
     
        logo: "/logos/liberia/MEDIPIEL.webp",
        schedule: "Lun - Sáb: 9:00 a.m. - 6:00 p.m.",
      },
      {
    
        logo: "/logos/liberia/MARCIAS APOTHE.webp",
        schedule: "Lun - Sáb: 9:00 a.m. - 6:00 p.m.",
      },
        {
    
        logo: "/logos/liberia/FACTORY SALON.webp",
        schedule: "Lun - Dom: 11:00 a.m. - 10:00 p.m.",
      },
      {
       
        logo: "/logos/liberia/SUPER SALON.webp",
        schedule: "Lun - Dom: 8:00 a.m. - 8:00 p.m.",
      },
    ],
    "Entretenimiento": [
      {
    
        logo: "/logos/liberia/COQUI.webp",
        schedule: "Lun - Sáb: 9:00 a.m. - 6:00 p.m.",
      },
        {
      
        logo: "/logos/liberia/libreria.webp",
        schedule: "Lun - Sáb: 9:00 a.m. - 6:00 p.m.",
      },
  
    ],
     "Hogar": [
      {
       
        logo: "/logos/liberia/SELTHER.webp",
        schedule: "Lun - Sáb: 9:00 a.m. - 6:00 p.m.",
      },
      {
     
        logo: "/logos/liberia/MIELE.webp",
        schedule: "Lun - Sáb: 9:00 a.m. - 6:00 p.m.",
      },
    ],
  },

  desamparados: {
    "Restaurantes y Café": [
      {
       
        logo: "/logos/liberia/POPEYES.webp",
        schedule: "Lun - Dom: 8:00 a.m. - 8:00 p.m.",
      },
      {
    
       logo: "/logos/liberia/dominos.webp",
        schedule: "Lun - Dom: 8:00 a.m. - 8:00 p.m.",
      },
    ],
  },

  sanSebastian: {
   
    "Restaurantes y Café": [
        {
     
        logo: "/logos/liberia/BK.webp",
        schedule: "Lun - Dom: 11:00 a.m. - 10:00 p.m.",
      },
       {
       
       logo: "/logos/liberia/dominos.webp",
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
       <div className={styles.heading}>
          
          <h2>Explora nuestras tiendas por ubicación</h2>
         
        </div>
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
        </div>

        <div className={styles.categories}>
          {Object.entries(activeStores).map(([category, items]) => (
            <div key={category} className={styles.categoryBlock}>
              <div className={styles.categoryHeader}>
                <span></span>
                <h3>{category}</h3>
              </div>

              <div className={styles.grid}>
               {items.map((store, index) => (
  <article
    key={`${store.logo}-${index}`}
    className={styles.card}
    tabIndex={0}
    aria-label={`Horario: ${store.schedule}`}
  >
    <div className={styles.cardContent}>
      <div className={styles.logoBox}>
        <Image
          src={store.logo}
          alt="Logo de tienda"
          width={220}
          height={140}
          loading="lazy"
        />
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