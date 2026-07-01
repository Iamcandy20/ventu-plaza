import styles from "./galeria.module.css";
import { GaleriaItem } from "./types";

type Props = {
  active: GaleriaItem["city"] | "Todas";
  onChange: (value: GaleriaItem["city"] | "Todas") => void;
};

const filters: Props["active"][] = [
  "Solarium Liberia",
  "Desamparados",
  "San Sebastian",
  "Todas",
];

export default function GaleriaFilters({ active, onChange }: Props) {
  return (
    <div className={styles.filters}>
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => onChange(filter)}
          className={`${styles.filterBtn} ${
            active === filter ? styles.active : ""
          }`}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}