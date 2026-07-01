"use client";

import { useState } from "react";
import styles from "./galeria.module.css";
import { GaleriaItem } from "./types";
import GaleriaFilters from "./galleryfilters";
import GaleriaGrid from "./gallerygrid";
import GalleryLightbox from "./gallerylightbox";

const galeriaData: GaleriaItem[] = [
  { id: 1, city: "Desamparados", title: "Ventu Plaza Desamparados", image: "/desamparados/desamparados1.webp" },
  { id: 2, city: "Desamparados", title: "Ventu Plaza Desamparados", image: "/desamparados/desamparados2.webp" },
  { id: 3, city: "Desamparados", title: "Ventu Plaza Desamparados", image: "/desamparados/desamparados3.webp" },
  { id: 4, city: "Desamparados", title: "Ventu Plaza Desamparados", image: "/desamparados/desamparados4.webp" },
  { id: 5, city: "Desamparados", title: "Ventu Plaza Desamparados", image: "/desamparados/desamparados5.webp" },
  { id: 6, city: "Desamparados", title: "Ventu Plaza Desamparados", image: "/desamparados/desamparados6.webp" },
  { id: 7, city: "Desamparados", title: "Ventu Plaza Desamparados", image: "/desamparados/desamparados7.webp" },

  { id: 8, city: "Liberia", title: "Ventu Plaza Liberia", image: "/liberia/solarium-1.jpg" },
  { id: 9, city: "Liberia", title: "Ventu Plaza Liberia", image: "/liberia/solarium-2.jpg" },
  { id: 10, city: "Liberia", title: "Ventu Plaza Liberia", image: "/liberia/solarium-3.jpg" },
  { id: 11, city: "Liberia", title: "Ventu Plaza Liberia", image: "/liberia/solarium-4.jpg" },
  

  { id: 12, city: "San Sebastian", title: "Ventu Plaza San Sebastian", image: "/sansebas/sansebas1.webp" },
  { id: 13, city: "San Sebastian", title: "Ventu Plaza San Sebastian", image: "/sansebas/sansebas2.webp" },
  { id: 14, city: "San Sebastian", title: "Ventu Plaza San Sebastian", image: "/sansebas/sansebas3.webp" },
  { id: 15, city: "San Sebastian", title: "Ventu Plaza San Sebastian", image: "/sansebas/sansebas4.webp" },
  { id: 16, city: "San Sebastian", title: "Ventu Plaza San Sebastian", image: "/sansebas/sansebas5.webp" },
  { id: 17, city: "San Sebastian", title: "Ventu Plaza San Sebastian", image: "/sansebas/sansebas6.webp" },
  { id: 18, city: "San Sebastian", title: "Ventu Plaza San Sebastian", image: "/sansebas/sansebas7.webp" },
  { id: 19, city: "San Sebastian", title: "Ventu Plaza San Sebastian", image: "/sansebas/sansebas8.webp" },
  { id: 20, city: "San Sebastian", title: "Ventu Plaza San Sebastian", image: "/sansebas/sansebas9.webp" },
];

export default function GaleriaPage() {
  const [activeCity, setActiveCity] = useState<
    GaleriaItem["city"] | "Todas"
  >("Todas");


  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const filteredImages =
    activeCity === "Todas"
      ? galeriaData
      : galeriaData.filter(item => item.city === activeCity);

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Galería Ventu Plaza</h2>

      <GaleriaFilters
        active={activeCity}
        onChange={(city) => {
          setActiveCity(city);
          setActiveIndex(null); 
        }}
      />

      <GaleriaGrid
        items={filteredImages}
        onSelect={(index) => setActiveIndex(index)}
      />

      {activeIndex !== null && (
        <GalleryLightbox
          items={filteredImages}
          currentIndex={activeIndex}
          onChange={setActiveIndex}
          onClose={() => setActiveIndex(null)}
        />
      )}
    </section>
  );
}
