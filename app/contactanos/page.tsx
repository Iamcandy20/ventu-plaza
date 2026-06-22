import styles from "./contactanos.module.css";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";


export default function Contactanos() {
  return (
    
    <section className={styles.wrapper}>
      <div className={styles.card}>
        
        {/* Left */}
        <div className={styles.formSection}>
          <h2>Hablemos</h2>
          <p>
            Estamos listos para atenderte y brindarte información sobre
            Ventu Plaza.
          </p>

          <form className={styles.form}>
            <div className={styles.field}>
              <label>Nombre</label>
              <input type="text" />
            </div>

            <div className={styles.field}>
              <label>Correo electrónico</label>
              <input type="email" />
            </div>

            <div className={styles.field}>
              <label>Mensaje</label>
              <textarea rows={4}></textarea>
            </div>

            <button type="submit">Enviar mensaje</button>
          </form>
        </div>

        {/* Right */}
     <div className={styles.infoSection}>
  <div className={styles.illustration}>
    <Image
      src="/Logov.webp"
      alt="Contacto"
      width={240}
      height={240}
      priority
    />
  </div>

          <div className={styles.info}>
            <p>📍 Ventu Plaza, Honduras</p>
            <p>📞 +504 0000-0000</p>
            <p>✉️ info@ventuplaza.com</p>
          </div>

          <div className={styles.socials}>
  <a href="#" aria-label="Facebook">
    <FaFacebookF />
  </a>

  <a href="#" aria-label="X">
    <FaXTwitter />
  </a>

  <a href="#" aria-label="Instagram">
    <FaInstagram />
  </a>
</div>

        </div>

      </div>
    </section>
  );
}
