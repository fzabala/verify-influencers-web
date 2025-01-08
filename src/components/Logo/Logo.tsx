import Link from "next/link";
import styles from "./Logo.module.scss";

export const Logo = () => {
  return (
    <Link href="/">
      <img className={styles.logo} src="/logo.svg" alt="logo" />
    </Link>
  );
};
