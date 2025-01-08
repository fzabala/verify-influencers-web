import { PropsWithChildren } from "react";
import styles from "./Message.module.scss";

type ColorVariant = "danger";

type MessageProps = PropsWithChildren & {
  color?: ColorVariant;
};

export const Message = ({ children, color = "danger" }: MessageProps) => {
  return (
    <div className={`${styles.message} ${styles[`message-color--${color}`]}`}>
      {children}
    </div>
  );
};
