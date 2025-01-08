import { PropsWithChildren } from "react";
import styles from "./Chips.module.scss";

type ChipsProps = PropsWithChildren;

const Chips = ({ children }: ChipsProps) => {
  return <div className={styles.chips}>{children}</div>;
};

type ChipsItemProps = PropsWithChildren & {
  active?: boolean;
  disabled?: boolean;
  dark?: boolean;
};

const ChipItem = ({
  active = false,
  disabled = false,
  children,
  dark = false,
}: ChipsItemProps) => {
  return (
    <div
      className={`${styles["chips_item"]} ${
        active ? styles["chips_item--active"] : ""
      } ${disabled ? styles["chips_item--disabled"] : ""} ${
        dark ? styles["chips_item--dark"] : ""
      }`}
    >
      <div className={styles["chips_item-text"]}>{children}</div>
    </div>
  );
};

Chips.Item = ChipItem;

export { Chips };
