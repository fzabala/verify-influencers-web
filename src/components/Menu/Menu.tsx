import Link from "next/link";
import styles from "./Menu.module.scss";
export const Menu = () => {
  return (
    <div className={styles.menu}>
      <Link className={styles["menu-item"]} href="/">
        Home
      </Link>
      <Link className={styles["menu-item"]} href="/research">
        Research
      </Link>
      <Link className={styles["menu-item"]} href="#">
        Products
      </Link>
      <Link className={styles["menu-item"]} href="#">
        Contact
      </Link>
    </div>
  );
};
