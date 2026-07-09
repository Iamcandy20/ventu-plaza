"use client";

import Image from "next/image";
import type { FormEvent, ReactNode } from "react";
import styles from "./Footer.module.css";
import { IMAGE_URL } from "@/lib/images";
import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaXTwitter,
} from "react-icons/fa6";

type SocialLink = {
  label: string;
  href: string;
  icon: ReactNode;
};

const socials: SocialLink[] = [
  {
    label: "Facebook de Ventu Plaza",
    href: "https://www.facebook.com/people/Ventu-Plaza/61556263274822/?rdid=bVq7J8yrhR2H6kuf&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1Dh8cjphU5%2F",
    icon: <FaFacebookF />,
  },
  {
    label: "Instagram de Ventu Plaza",
    href: "https://www.instagram.com/ventuplazacr?igsh=eWhzcG9yanUzcXVu",
    icon: <FaInstagram />,
  },
  {
    label: "X de Ventu Plaza",
    href: "https://x.com/VentuPlazacr",
    icon: <FaXTwitter />,
  },
  {
    label: "TikTok de Ventu Plaza",
    href: "https://www.tiktok.com/@ventuplazacr",
    icon: <FaTiktok />,
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

        {/* REDES SOCIALES */}
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


        {/* LOGOS */}
        <div className={styles.center}>
          <div className={styles.logos}>

            <Image
              src={`${IMAGE_URL}/global/Logob.webp`}
              alt="Ventu Plaza"
              width={95}
              height={52}
              priority
              unoptimized
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


        {/* NEWSLETTER */}
        <div className={styles.newsletter}>

          <h4 className={styles.newsletterTitle}>
            SUSCRÍBETE
          </h4>


          <form
            className={styles.form}
            onSubmit={handleSubmit}
          >
            <input
              type="email"
              placeholder="Tu correo electrónico"
              aria-label="Tu correo electrónico"
              required
            />

            <button type="submit">
              Enviar
            </button>

          </form>

        </div>

      </div>


      <div className={styles.bottom}>
        © {currentYear} Ventu Plaza. Todos los derechos reservados.
      </div>

    </footer>
  );
}