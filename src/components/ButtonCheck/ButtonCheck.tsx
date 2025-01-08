import { MouseEvent, PropsWithChildren } from "react";
import styles from "./ButtonCheck.module.scss";

type ButtonCheckProps = PropsWithChildren & {
  active?: boolean;
  onClick?: (event: MouseEvent) => void;
  disabled?: boolean;
};

export const ButtonCheck = ({
  onClick,
  children,
  active = false,
  disabled = false,
}: ButtonCheckProps) => {
  const onClickHandler = (event: MouseEvent) => {
    if (disabled) {
      event.preventDefault();
      return;
    } else {
      if (onClick) {
        onClick(event);
      }
    }
  };

  return (
    <div
      onClick={onClickHandler}
      className={`${styles["button_check"]} ${
        active ? styles["button_check--active"] : ""
      } ${disabled ? styles["button_check--disabled"] : ""}`}
    >
      {children}
    </div>
  );
};
