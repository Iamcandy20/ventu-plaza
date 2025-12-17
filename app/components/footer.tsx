"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./footer.module.css";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaGlobe,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.main}>
        {/* ===== MARCAS ===== */}
        <div className={styles.brands}>
          {/* Ventu Plaza */}
          <div className={styles.brand}>
            <Image
              src="/logob.png"
              alt="Ventu Plaza"
              width={110}
              height={60}
              style={{ height: "auto" }}
              priority
            />

            <div className={styles.socials}>
              <FaFacebookF />
              <FaLinkedinIn />
              <FaInstagram />
            </div>
          </div>

          {/* Corporación Lady Lee */}
          <div className={styles.brand}>
            <Image
              src="https://corporacionladylee.com/wp-content/uploads/2025/05/logo-padding-1.png"
              alt="Corporación Lady Lee"
              width={180}
              height={70}
              style={{ height: "auto" }}
              unoptimized
            />

            <div className={styles.socials}>
              <FaFacebookF />
              <FaInstagram />
              <FaGlobe />
            </div>
          </div>
        </div>

        {/* ===== NEWSLETTER ===== */}
        <div className={styles.newsletter}>
          <h4 className={styles.newsletterTitle}>BOLETÍN</h4>
          <p className={styles.newsletterText}>
            Recibe novedades, rutas y ofertas exclusivas directo en tu correo.
          </p>

          <form className={styles.form}>
            <input type="email" placeholder="Tu correo electrónico" />
            <button type="submit">Suscribirme</button>
          </form>
        </div>
      </div>

      {/* ===== POLÍTICAS ===== */}
      <div className={styles.policies}>
        <Link href="#">Términos y condiciones</Link>
        <Link href="#">Política de privacidad</Link>
        <Link href="#">Política de cookies</Link>
      </div>

      {/* ===== DERECHOS ===== */}
      <div className={styles.bottom}>
        © {new Date().getFullYear()} Ventu Plaza. Todos los derechos reservados.
      </div>
    </footer>
  );
}
