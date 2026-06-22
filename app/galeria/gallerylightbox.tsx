import Image from "next/image";
import { useEffect, useMemo, useRef, useCallback } from "react";
import styles from "./galeria.module.css";
import { GaleriaItem } from "./types";

type Props = {
  items: GaleriaItem[];
  currentIndex: number;
  onChange: (index: number) => void;
  onClose: () => void;
};

export default function GalleryLightbox({
  items,
  currentIndex,
  onChange,
  onClose,
}: Props) {
  const total = items.length;

  const overlayRef = useRef<HTMLDivElement | null>(null);
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);

  const prev = useCallback(() => {
    onChange((currentIndex - 1 + total) % total);
  }, [currentIndex, total, onChange]);

  const next = useCallback(() => {
    onChange((currentIndex + 1) % total);
  }, [currentIndex, total, onChange]);

  const active = useMemo(() => items[currentIndex], [items, currentIndex]);

  // ✅ Lock scroll + focus al abrir
  useEffect(() => {
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // Enfoca el botón cerrar para que el teclado funcione pro
    const raf = requestAnimationFrame(() => closeBtnRef.current?.focus());

    return () => {
      cancelAnimationFrame(raf);
      document.body.style.overflow = prevOverflow;
    };
  }, []);

  // ✅ Teclado: ESC / flechas
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [onClose, prev, next]);

  return (
    <div
      ref={overlayRef}
      className={styles.lightbox}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Vista ampliada de imagen"
    >
      <button
        type="button"
        className={styles.arrowLeft}
        onClick={(e) => {
          e.stopPropagation();
          prev();
        }}
        aria-label="Imagen anterior"
      >
        ‹
      </button>

      <div
        className={styles.lightboxContent}
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={active.image}
          alt={active.title}
          fill
          className={styles.lightboxImage}
          sizes="100vw"
          priority
        />
      </div>

      <button
        type="button"
        className={styles.arrowRight}
        onClick={(e) => {
          e.stopPropagation();
          next();
        }}
        aria-label="Imagen siguiente"
      >
        ›
      </button>

      <button
        ref={closeBtnRef}
        type="button"
        className={styles.close}
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        aria-label="Cerrar"
      >
        ✕
      </button>
    </div>
  );
}
