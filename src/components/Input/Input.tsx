import { ReactNode } from "react";
import styles from "./Input.module.scss";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  leftDecorator?: ReactNode;
};

export const Input = ({ className, leftDecorator, ...props }: InputProps) => {
  const updatedClassName = `${styles.input} ${className || ""} ${
    leftDecorator ? styles["input--with_left_decorator"] : ""
  }`;

  return (
    <div className={updatedClassName}>
      {leftDecorator ? (
        <span
          className={`${styles["input-decorator"]} ${styles["input-decorator--left"]}`}
        >
          {leftDecorator}
        </span>
      ) : null}
      <input {...props} />
    </div>
  );
};
