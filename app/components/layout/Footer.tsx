"use client";

import Image from "next/image";
import Link from "next/link";
import type { FormEvent, ReactNode } from "react";
import styles from "./Footer.module.css";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaGlobe,
} from "react-icons/fa";

type SocialLink = {
  label: string;
  href: string;
  icon: ReactNode;
};

type Brand = {
  name: string;
  logoSrc: string;
  logoAlt: string;
  width: number;
  height: number;
  priority?: boolean;
  unoptimized?: boolean;
  socials: SocialLink[];
};

const brands: Brand[] = [
  {
    name: "Ventu Plaza",
    logoSrc: "/logob.webp",
    logoAlt: "Ventu Plaza",
    width: 110,
    height: 60,
    priority: true,
    socials: [
      {
        label: "Facebook de Ventu Plaza",
        href: "#",
        icon: <FaFacebookF />,
      },
      {
        label: "LinkedIn de Ventu Plaza",
        href: "#",
        icon: <FaLinkedinIn />,
      },
      {
        label: "Instagram de Ventu Plaza",
        href: "#",
        icon: <FaInstagram />,
      },
    ],
  },
  {
    name: "Corporación Lady Lee",
    logoSrc:
      "https://corporacionladylee.com/wp-content/uploads/2025/05/logo-padding-1.png",
    logoAlt: "Corporación Lady Lee",
    width: 180,
    height: 70,
    unoptimized: true,
    socials: [
      {
        label: "Facebook de Corporación Lady Lee",
        href: "#",
        icon: <FaFacebookF />,
      },
      {
        label: "Instagram de Corporación Lady Lee",
        href: "#",
        icon: <FaInstagram />,
      },
      {
        label: "Sitio web de Corporación Lady Lee",
        href: "#",
        icon: <FaGlobe />,
      },
    ],
  },
];

const policyLinks = [
  { label: "Términos y condiciones", href: "#" },
  { label: "Política de privacidad", href: "#" },
  { label: "Política de cookies", href: "#" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.main}>
        <div className={styles.brands}>
          {brands.map((brand) => (
            <div key={brand.name} className={styles.brand}>
              <Image
                src={brand.logoSrc}
                alt={brand.logoAlt}
                width={brand.width}
                height={brand.height}
                style={{ height: "auto" }}
                priority={brand.priority}
                unoptimized={brand.unoptimized}
              />

              <div className={styles.socials} aria-label={`Redes de ${brand.name}`}>
                {brand.socials.map((social) => (
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
            </div>
          ))}
        </div>

        <div className={styles.newsletter}>
          <h4 className={styles.newsletterTitle}>BOLETÍN</h4>
          <p className={styles.newsletterText}>
            Recibe novedades, rutas y ofertas exclusivas directo en tu correo.
          </p>

          <form className={styles.form} onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Tu correo electrónico"
              aria-label="Tu correo electrónico"
            />
            <button type="submit">Suscribirme</button>
          </form>
        </div>
      </div>

      <nav className={styles.policies} aria-label="Políticas del sitio">
        {policyLinks.map((link) => (
          <Link key={link.label} href={link.href}>
            {link.label}
          </Link>
        ))}
      </nav>

      <div className={styles.bottom}>
        © {currentYear} Ventu Plaza. Todos los derechos reservados.
      </div>
    </footer>
  );
}