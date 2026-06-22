import styles from "./galeria.module.css";
import { GaleriaItem } from "./types";
import GalleryCard from "./gallerycard";

type Props = {
  items: GaleriaItem[];
  onSelect: (index: number) => void;
};

export default function GaleriaGrid({ items, onSelect }: Props) {
  return (
    <div className={styles.grid}>
      {items.map((item, index) => (
        <GalleryCard
          key={item.id}
          item={item}
          onClick={() => onSelect(index)}
    
          priority={index < 2}
        />
      ))}
    </div>
  );
}
