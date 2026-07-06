"use client";

import Image from "next/image";
import type { FormEvent, ReactNode } from "react";
import styles from "./Footer.module.css";
import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaGlobe,
} from "react-icons/fa6";

type SocialLink = {
  label: string;
  href: string;
  icon: ReactNode;
};

const socials: SocialLink[] = [
  {
    label: "Facebook de Ventu Plaza",
    href: "#",
    icon: <FaFacebookF />,
  },
  {
    label: "Instagram de Ventu Plaza",
    href: "#",
    icon: <FaInstagram />,
  },
  {
    label: "TikTok de Ventu Plaza",
    href: "#",
    icon: <FaTiktok />,
  },
  {
    label: "Sitio web Corporación Lady Lee",
    href: "https://corporacionladylee.com/",
    icon: <FaGlobe />,
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.main}>

        {/* REDES SOCIALES - IZQUIERDA */}
        <div
          className={styles.socials}
          aria-label="Redes sociales de Ventu Plaza"
        >
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              aria-label={social.label}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/* LOGOS - CENTRO */}
        <div className={styles.center}>
          <div className={styles.logos}>
            <Image
              src="/Logob.png"
              alt="Ventu Plaza"
              width={95}
              height={52}
              priority
              className={styles.ventuLogo}
            />

            <span className={styles.divider} />

            <Image
              src="https://corporacionladylee.com/wp-content/uploads/2025/05/logo-padding-1.png"
              alt="Corporación Lady Lee"
              width={135}
              height={55}
              unoptimized
              className={styles.ladyLeeLogo}
            />
          </div>

          <a
            href="https://corporacionladylee.com/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.website}
          >
            www.corporacionladylee.com
          </a>
        </div>

        {/* NEWSLETTER - DERECHA */}
        <div className={styles.newsletter}>
          <h4 className={styles.newsletterTitle}>SUSCRÍBETE</h4>

          <form className={styles.form} onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Tu correo electrónico"
              aria-label="Tu correo electrónico"
              required
            />
            <button type="submit">Enviar</button>
          </form>
        </div>
      </div>

      <div className={styles.bottom}>
        © {currentYear} Ventu Plaza. Todos los derechos reservados.
      </div>
    </footer>
  );
}