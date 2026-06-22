"use client";

import Image from "next/image";
import styles from "./WhyChooseUs.module.css";

export default function WhyChooseUs() {
  return (
    <section className={styles.why}>
      <div className={styles.whyHead}>
        <span className={styles.whyEyebrow}>¿POR QUÉ ELEGIRNOS?</span>

        <h2 className={styles.whyTitle}>
          Todo lo que necesitas en un solo lugar
        </h2>

        <p className={styles.whyText}>
          Esta ubicación en Desamparados ha sido diseñada para ofrecer comodidad,
          gastronomía y fácil acceso en un solo espacio.
        </p>
      </div>

      <div className={styles.whyGrid}>
        <div className={styles.whyCard}>
          <div className={styles.iconWrap}>
            <Image
              src="/sansebas/Icons-04.png"
              alt="Parqueo"
              width={64}
              height={64}
              loading="lazy"
              unoptimized
            />
          </div>

          <h3>18 Espacios de Parqueo</h3>

          <p>
            Amplio y seguro estacionamiento para tu comodidad. Visítanos sin
            preocupaciones de espacio.
          </p>
        </div>

        <div className={styles.whyCard}>
          <div className={styles.iconWrap}>
            <Image
              src="/sansebas/Icons-03.png"
              alt="Restaurantes"
              width={64}
              height={64}
              loading="lazy"
              unoptimized
            />
          </div>

          <h3>2 Restaurantes Exclusivos</h3>

          <p>
            Disfruta de una variada oferta gastronómica con opciones para todos
            los gustos en nuestros locales.
          </p>
        </div>
      </div>
    </section>
  );
}