import { Logo } from "@/components/Logo";
import { Menu } from "@/components/Menu";
import styles from "./Header.module.scss";
export const Header = () => {
  return (
    <div className={styles.header}>
      <Logo />
      <Menu />
    </div>
  );
};
