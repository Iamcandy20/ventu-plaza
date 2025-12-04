"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./footer.module.css";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.curve}></div>

      <div className={styles.content}>
        {/* Columna izquierda */}
        <div className={styles.leftColumn}>
          <div className={styles.logoWrapper}>
            <Image
              src="/logob.png"
              alt="Ventu Plaza Logo"
              fill
              style={{ objectFit: "contain" }}
              className={styles.logo}
              unoptimized
            />
          </div>

          <div className={styles.socials}>
            <Link href="#" aria-label="Instagram">
              <FaInstagram />
            </Link>
            <Link href="#" aria-label="Facebook">
              <FaFacebookF />
            </Link>
            <Link href="#" aria-label="LinkedIn">
              <FaLinkedinIn />
            </Link>
          </div>
        </div>

        {/* Columna derecha */}
        <div className={styles.rightColumn}>
          <h4 className={styles.newsletterTitle}>BOLETÍN</h4>
          <p className={styles.newsletterText}>
            Recibe novedades, rutas y ofertas exclusivas directo en tu correo.
          </p>
          <form className={styles.form}>
            <input
              type="email"
              placeholder="Tu correo electrónico"
              className={styles.input}
            />
            <button type="submit" className={styles.button}>
              Suscribirme
            </button>
          </form>
        </div>
      </div>

      {/* Derechos reservados */}
      <div className={styles.bottom}>
        <p className="text1">© {new Date().getFullYear()} Ventu Plaza Liberia. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
