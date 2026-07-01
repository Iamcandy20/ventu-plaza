"use client";

import { useState } from "react";
import styles from "./galeria.module.css";
import { GaleriaItem } from "./types";
import GaleriaFilters from "./galleryfilters";
import GaleriaGrid from "./gallerygrid";
import GalleryLightbox from "./gallerylightbox";

const galeriaData: GaleriaItem[] = [
  

  { id: 1, city: "Solarium Liberia", title: "Ventu Plaza Solarium Liberia", image: "/liberia/solarium-1.jpg" },
  { id: 2, city: "Solarium Liberia", title: "Ventu Plaza Solarium Liberia", image: "/liberia/solarium-2.jpg" },
  { id: 3, city: "Solarium Liberia", title: "Ventu Plaza Solarium Liberia", image: "/liberia/solarium-3.jpg" },
  { id: 4, city: "Solarium Liberia", title: "Ventu Plaza Solarium Liberia", image: "/liberia/solarium-4.jpg" },
  { id: 5, city: "Solarium Liberia", title: "Ventu Plaza Solarium Liberia", image: "/liberia/solarium-5.jpg" },
  { id: 6, city: "Solarium Liberia", title: "Ventu Plaza Solarium Liberia", image: "/liberia/solarium-6.jpg" },
  { id: 7, city: "Solarium Liberia", title: "Ventu Plaza Solarium Liberia", image: "/liberia/solarium-7.jpg" },
  { id: 8, city: "Solarium Liberia", title: "Ventu Plaza Solarium Liberia", image: "/liberia/solarium-8.jpg" },
  { id: 9, city: "Solarium Liberia", title: "Ventu Plaza Solarium Liberia", image: "/liberia/solarium-9.jpg" },
  { id: 10, city: "Solarium Liberia", title: "Ventu Plaza Solarium Liberia", image: "/liberia/solarium-10.jpg" },
  { id: 11, city: "Solarium Liberia", title: "Ventu Plaza Solarium Liberia", image: "/liberia/solarium-11.jpg" },
  
  { id: 12, city: "Desamparados", title: "Ventu Plaza Desamparados", image: "/desamparados/desamparados1.webp" },
  { id: 13, city: "Desamparados", title: "Ventu Plaza Desamparados", image: "/desamparados/desamparados2.webp" },
  { id: 14, city: "Desamparados", title: "Ventu Plaza Desamparados", image: "/desamparados/desamparados3.webp" },
  { id: 15, city: "Desamparados", title: "Ventu Plaza Desamparados", image: "/desamparados/desamparados4.webp" },
  { id: 16, city: "Desamparados", title: "Ventu Plaza Desamparados", image: "/desamparados/desamparados5.webp" },
  { id: 17, city: "Desamparados", title: "Ventu Plaza Desamparados", image: "/desamparados/desamparados6.webp" },
  { id: 18, city: "Desamparados", title: "Ventu Plaza Desamparados", image: "/desamparados/desamparados7.webp" },

  { id: 19, city: "San Sebastian", title: "Ventu Plaza San Sebastian", image: "/sansebas/sansebas1.webp" },
  { id: 20, city: "San Sebastian", title: "Ventu Plaza San Sebastian", image: "/sansebas/sansebas2.webp" },
  { id: 21, city: "San Sebastian", title: "Ventu Plaza San Sebastian", image: "/sansebas/sansebas3.webp" },
  { id: 22, city: "San Sebastian", title: "Ventu Plaza San Sebastian", image: "/sansebas/sansebas4.webp" },
  { id: 23, city: "San Sebastian", title: "Ventu Plaza San Sebastian", image: "/sansebas/sansebas5.webp" },
  { id: 24, city: "San Sebastian", title: "Ventu Plaza San Sebastian", image: "/sansebas/sansebas6.webp" },
  { id: 25, city: "San Sebastian", title: "Ventu Plaza San Sebastian", image: "/sansebas/sansebas7.webp" },
  { id: 26, city: "San Sebastian", title: "Ventu Plaza San Sebastian", image: "/sansebas/sansebas8.webp" },
  { id: 27, city: "San Sebastian", title: "Ventu Plaza San Sebastian", image: "/sansebas/sansebas9.webp" },
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
