"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import styles from "./Navbar.module.css";

const MOBILE_BREAKPOINT = 980;

const locationLinks = [
  { label: "Desamparados", href: "/ubicaciones/desamparados" },
  { label: "Liberia", href: "/ubicaciones/liberia" },
  { label: "San Sebastián", href: "/ubicaciones/san-sebastian" },
];

export default function Navbar() {
  const pathname = usePathname();

  const [menuOpen, setMenuOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  const lastScrollYRef = useRef(0);
  const tickingRef = useRef(false);

  const getIsMobile = useCallback(() => {
    if (typeof window === "undefined") return false;
    return window.innerWidth <= MOBILE_BREAKPOINT;
  }, []);

  const closeMenus = useCallback(() => {
    setMenuOpen(false);
    setSubmenuOpen(false);
  }, []);

  const toggleMenu = useCallback(() => {
    setMenuOpen((prev) => {
      const next = !prev;

      if (!next) {
        setSubmenuOpen(false);
      }

      return next;
    });
  }, []);

  const toggleSubmenu = useCallback(() => {
    if (!getIsMobile()) return;
    setSubmenuOpen((prev) => !prev);
  }, [getIsMobile]);

  const scrollToSection = useCallback((id: string) => {
    const section = document.getElementById(id);

    if (!section) return;

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, []);

  const handleSectionNavigation = useCallback(
    (
      event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
      sectionId: string
    ) => {
      if (pathname === "/") {
        event.preventDefault();
        scrollToSection(sectionId);
      }

      closeMenus();
    },
    [pathname, scrollToSection, closeMenus]
  );

  const handleMouseEnter = useCallback(() => {
    if (getIsMobile()) return;
    setSubmenuOpen(true);
  }, [getIsMobile]);

  const handleMouseLeave = useCallback(() => {
    if (getIsMobile()) return;
    setSubmenuOpen(false);
  }, [getIsMobile]);

  const isHomeRoute = pathname === "/";
  const isGalleryRoute = pathname === "/galeria";
  const isContactRoute = pathname === "/contactanos";
  const isLocationsRoute = pathname.startsWith("/ubicaciones");

  useEffect(() => {
    const handleResize = () => {
      const mobile = getIsMobile();
      setIsMobile(mobile);

      if (!mobile) {
        setMenuOpen(false);
        setSubmenuOpen(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize, { passive: true });

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [getIsMobile]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    lastScrollYRef.current = window.scrollY;

    const handleScroll = () => {
      if (menuOpen && isMobile) {
        setShowNavbar(true);
        lastScrollYRef.current = window.scrollY;
        return;
      }

      if (tickingRef.current) return;
      tickingRef.current = true;

      requestAnimationFrame(() => {
        const currentScrollY = window.scrollY;
        const lastScrollY = lastScrollYRef.current;

        if (currentScrollY < 10) {
          setShowNavbar(true);
          lastScrollYRef.current = currentScrollY;
          tickingRef.current = false;
          return;
        }

        if (Math.abs(currentScrollY - lastScrollY) > 8) {
          if (currentScrollY > lastScrollY && currentScrollY > 80) {
            setShowNavbar(false);
          } else {
            setShowNavbar(true);
          }
        }

        lastScrollYRef.current = currentScrollY;
        tickingRef.current = false;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [menuOpen, isMobile]);

 useEffect(() => {
  const raf = requestAnimationFrame(() => {
    setMenuOpen(false);
    setSubmenuOpen(false);
  });

  return () => cancelAnimationFrame(raf);
}, [pathname]);

  useEffect(() => {
    if (!isMobile) return;

    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen, isMobile]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMenus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [closeMenus]);

  return (
    <header
      className={`${styles.header} ${
        showNavbar ? styles.visible : styles.hidden
      }`}
    >
      <div className={`${styles.nav} container`}>
        <Link href="/" className={styles.brand} onClick={closeMenus}>
          <Image
  src="/Logov.jpg"
  alt="Ventu Plaza logo"
  width={160}
  height={68}
  className={styles.logo}
  priority
/>
          
        </Link>

        <nav
          className={`${styles.links} ${menuOpen ? styles.menuOpen : ""}`}
          aria-label="Menú principal"
        >
          <Link
            href="/#sobre-nosotros"
            className={`${styles.navLink} ${isHomeRoute ? styles.linkActive : ""}`}
            onClick={(event) =>
              handleSectionNavigation(event, "sobre-nosotros")
            }
          >
            INICIO
          </Link>
         <Link
  href="/about"
  className={`${styles.navLink} ${
    pathname === "/about" ? styles.linkActive : ""
  }`}
  onClick={closeMenus}
>
  QUIENES SOMOS
</Link>

          <div
            className={styles.dropdown}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button
              type="button"
              className={`${styles.dropdownToggle} ${
                isLocationsRoute ? styles.linkActive : ""
              }`}
              onClick={toggleSubmenu}
              aria-expanded={submenuOpen}
              aria-controls="ubicaciones-submenu"
            >
              NUESTRAS UBICACIONES ▾
            </button>

            <div
              id="ubicaciones-submenu"
              className={`${styles.dropdownMenu} ${
                submenuOpen ? styles.dropdownMenuOpen : ""
              }`}
            >
              {locationLinks.map((location) => (
                <Link key={location.label} href={location.href} onClick={closeMenus}>
                  {location.label}
                </Link>
              ))}
            </div>
          </div>

          <Link
            href="/galeria"
            className={`${styles.navLink} ${
              isGalleryRoute ? styles.linkActive : ""
            }`}
            onClick={closeMenus}
          >
            GALERIA
          </Link>

          {isMobile && (
            <Link
              href="/contactanos"
              className={`${styles.bookNow} ${
                isContactRoute ? styles.linkActiveButton : ""
              }`}
              onClick={closeMenus}
            >
              Contáctanos
            </Link>
          )}
        </nav>

        {!isMobile && (
          <Link
            href="/contactanos"
            className={`${styles.bookNow} ${
              isContactRoute ? styles.linkActiveButton : ""
            }`}
          >
            Contáctanos
          </Link>
        )}

        <button
          type="button"
          className={`${styles.hamburger} ${
            menuOpen ? styles.hamburgerActive : ""
          }`}
          onClick={toggleMenu}
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}