"use client";

import styles from "./contactanos.module.css";
import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaTiktok,
  FaLocationDot,
  FaEnvelope,
} from "react-icons/fa6";
import { IMAGE_URL } from "@/lib/images";

export default function Contactanos() {
  const locations = [
    {
      name: "Ventu Plaza Solarium Liberia",
      url: "https://maps.google.com/?q=Ventu+Plaza+Solarium+Liberia",
    },
    {
      name: "Ventu Plaza Desamparados",
      url: "https://maps.google.com/?q=Ventu+Plaza+Desamparados",
    },
    {
      name: "Ventu Plaza San Sebastián",
      url: "https://maps.google.com/?q=Ventu+Plaza+San+Sebastian",
    },
  ];

  return (
    <section className={styles.wrapper}>
      <div className={styles.card}>

        {/* Left */}
        <div className={styles.formSection}>
          <h2>
            Hablemos
          </h2>

          <p>
            Estamos listos para atenderte y brindarte información sobre
            Ventu Plaza.
          </p>


          <form className={styles.form}>

            <div className={styles.field}>
              <label>
                Nombre
              </label>
              <input type="text" />
            </div>


            <div className={styles.field}>
              <label>
                Correo electrónico
              </label>

              <input type="email" />
            </div>


            <div className={styles.field}>
              <label>
                Teléfono
              </label>

              <input type="tel" />
            </div>


            <div className={styles.field}>
              <label>
                Mensaje
              </label>

              <textarea rows={4}></textarea>
            </div>


            <button type="submit">
              Enviar mensaje
            </button>

          </form>
        </div>



        {/* Right */}
        <div className={styles.infoSection}>

          <div className={styles.illustration}>
            <Image
              src={`${IMAGE_URL}/global/Logov.webp`}
              alt="Ventu Plaza"
              width={240}
              height={240}
              priority
              unoptimized
            />
          </div>



          <div className={styles.info}>

            {locations.map((location) => (
              <a
  key={location.name}
  href={location.url}
  target="_blank"
  rel="noopener noreferrer"
  className={`${styles.infoItem} ${styles.linkItem}`}
>
                <FaLocationDot />
                <span>
                  {location.name}
                </span>
              </a>
            ))}


            <div className={styles.infoItem}>
              <a
  href="mailto:ventas.inmocr@ladylee.com"
  className={`${styles.infoItem} ${styles.linkItem}`}
>
  <FaEnvelope />

  <span>
    ventas.inmocr@ladylee.com
  </span>
</a>
            </div>

          </div>



        <div className={styles.socials}>

  <a
    href="https://www.facebook.com/people/Ventu-Plaza/61556263274822/?rdid=YwuQFxpifljsayLX&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1Dh8cjphU5%2F"
    aria-label="Facebook"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaFacebookF />
  </a>


  <a
    href="https://www.instagram.com/ventuplazacr?igsh=eWhzcG9yanUzcXVu"
    aria-label="Instagram"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaInstagram />
  </a>


  <a
    href="https://x.com/VentuPlazacr"
    aria-label="X Twitter"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaXTwitter />
  </a>


  <a
    href="https://www.tiktok.com/@ventuplazacr?_r=1&_t=ZS-97sFp4ZqZsW"
    aria-label="TikTok"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaTiktok />
  </a>

</div>

        </div>

      </div>
    </section>
  );
}