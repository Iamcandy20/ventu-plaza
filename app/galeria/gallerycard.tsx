import Image from "next/image";
import styles from "./galeria.module.css";
import { GaleriaItem } from "./types";

type Props = {
  item: GaleriaItem;
  onClick: () => void;
  priority?: boolean;
};

export default function GalleryCard({ item, onClick, priority = false }: Props) {
  return (
    <button
      type="button"
      className={styles.card}
      onClick={onClick}
      aria-label={`Abrir imagen: ${item.title}`}
    >
      <Image
        src={item.image}
        alt={item.title}
        fill
        className={styles.image}
        sizes="(max-width: 768px) 100vw, 33vw"
        priority={priority}
      />

      <div className={styles.overlay}>
        <span className={styles.city}>{item.city}</span>
        <h3>{item.title}</h3>
      </div>
    </button>
  );
}
