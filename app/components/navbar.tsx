"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import styles from "./navbar.module.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);

  // Usamos ref en lugar de state para lastScrollY para evitar recrear el listener
  const lastScrollYRef = useRef<number>(typeof window !== "undefined" ? window.scrollY : 0);
  const tickingRef = useRef(false);

  // Mostrar navbar al hacer scroll hacia arriba y ocultar al bajar
  useEffect(() => {
    // Inicializar ref al montar (si es que window está disponible)
    lastScrollYRef.current = window.scrollY || 0;

    const handleScroll = () => {
      // Si ya hay un rAF pendiente, no programamos otro
      if (tickingRef.current) return;
      tickingRef.current = true;

      // Usamos rAF para evitar demasiadas actualizaciones y parpadeos
      window.requestAnimationFrame(() => {
        const currentScrollY = window.scrollY || 0;
        const last = lastScrollYRef.current;

        // Pequeño margen para evitar parpadeos por movimientos mínimos
        if (Math.abs(currentScrollY - last) >= 5) {
          if (currentScrollY > last && currentScrollY > 80) {
            // Scroll hacia abajo → ocultar navbar
            setShowNavbar(false);
          } else {
            // Scroll hacia arriba → mostrar navbar
            setShowNavbar(true);
          }
        }
        lastScrollYRef.current = currentScrollY > 0 ? currentScrollY : 0;
        tickingRef.current = false;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []); // listener se registra una sola vez

  // Mostrar submenú solo en hover (para escritorio)
  const handleMouseEnter = () => {
    if (window.innerWidth > 980) setSubmenuOpen(true);
  };

  const handleMouseLeave = () => {
    if (window.innerWidth > 980) setSubmenuOpen(false);
  };

  return (
    <header className={`${styles.header} ${showNavbar ? styles.visible : styles.hidden}`}>
      <div className={`${styles.nav} container`}>
        {/* Marca */}
        <div className={styles.brand}>
          <Image
            src="/Logo-navbar.png"
            alt="Ventu Plaza logo"
            width={120}
            height={40}
            className={styles.logo}
          />
          <span>Ventu Plaza</span>
        </div>

        {/* Menú principal */}
        <nav
          className={`${styles.links} ${menuOpen ? styles.open : ""}`}
          aria-label="Menú principal"
        >
          <Link href="#sobre-nosotros" onClick={() => setMenuOpen(false)}>
            Quienes Somos
          </Link>

          {/* Dropdown */}
          <div
            className={`${styles.dropdown} ${
              submenuOpen ? styles.dropdownActive : ""
            }`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button
              className={styles.dropdownToggle}
              onClick={() =>
                window.innerWidth <= 980 && setSubmenuOpen(!submenuOpen)
              }
            >
              Nuestras Ubicaciones ▾
            </button>

            <div
              className={`${styles.dropdownMenu} ${
                submenuOpen ? styles.dropdownMenuOpen : ""
              }`}
            >
              <Link href="/ubicaciones/desamparados">Desamparados</Link>
              <Link href="/ubicaciones/liberia">Liberia</Link>
              <Link href="#">San Sebastián</Link>
            </div>
          </div>

          <Link href="#negocios" onClick={() => setMenuOpen(false)}>
            Negocios
          </Link>
          <Link href="#galeria" onClick={() => setMenuOpen(false)}>
            Galería
          </Link>
        </nav>

        {/* Botón principal */}
        <button className={styles.bookNow}>Contáctanos</button>

        {/* Botón hamburguesa */}
        <button
          className={`${styles.hamburger} ${menuOpen ? styles.active : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menú"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}
