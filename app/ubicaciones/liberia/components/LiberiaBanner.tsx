"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./LiberiaBanner.module.css";

export default function LiberiaBanner() {
  return (
    <section className={styles.banner}>
      {/* Imagen de fondo */}
      <div className={styles.bannerImageWrapper}>
        <Image
          src="https://images.unsplash.com/photo-1519677100203-a0e668c92439"
          alt="Ventu Plaza Liberia"
          fill
          priority
          className={styles.bannerImage}
        />
        <div className={styles.overlay}></div>
      </div>

      {/* Contenido central */}
      <motion.div
        className={styles.bannerContent}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <span className={styles.eyebrow}>VENTU PLAZA LIBERIA</span>
        <h1 className={styles.title}>Turismo, Negocios y Modernidad</h1>
        <p className={styles.subtitle}>
          Un espacio estratégico que conecta comercio, gastronomía, hotelería y oficinas en el corazón de Guanacaste.
        </p>

        <motion.button
          className={styles.cta}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
          Conoce la plaza
        </motion.button>
      </motion.div>

      {/* Card inferior derecha */}
      <motion.div
        className={styles.projectCard}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        <p className={styles.projectLabel}>UN PROYECTO DE</p>
        <div className={styles.projectInfo}>
          <Image
            src="https://corporacionladylee.com/wp-content/uploads/2025/05/logo-padding-1.png"
            alt="Corporación Lady Lee"
            width={50}
            height={50}
            className={styles.projectLogo}
          />
          <div>
            <strong>Corporación Lady Lee</strong>
            <span>54 años de trayectoria</span>
          </div>
        </div>
        <motion.button
          className={styles.btnVerMas}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Ver más
        </motion.button>
      </motion.div>
    </section>
  );
}
