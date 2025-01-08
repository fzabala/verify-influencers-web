import { Typography } from "@/components/Typography";
import { PropsWithChildren, ReactNode } from "react";
import styles from "./Tiles.module.scss";

type TilesProps = PropsWithChildren;

const Tiles = ({ children }: TilesProps) => {
  return <div className={styles.tiles}>{children}</div>;
};

type DashboardTileProps = {
  icon: ReactNode;
  title: string;
  text: string;
};

const DashboardTile = ({ icon, title, text }: DashboardTileProps) => {
  return (
    <div className={`${styles["tiles-tile"]} ${styles["tiles_dashboard"]}`}>
      <div className={styles["tiles_dashboard-icon"]}>{icon}</div>
      <div className={styles["tiles_dashboard-content"]}>
        <Typography className={styles["tiles_dashboard-content-title"]}>
          {title}
        </Typography>
        <Typography className={styles["tiles_dashboard-content-text"]}>
          {text}
        </Typography>
      </div>
    </div>
  );
};

Tiles.Dashboard = DashboardTile;

type UserTileProps = {
  icon: ReactNode;
  title: string;
  content: string;
  text: string;
};

const UserTile = ({ icon, title, content, text }: UserTileProps) => {
  return (
    <div className={`${styles["tiles-tile"]} ${styles["tiles_user"]}`}>
      <div className={styles["tiles_user-title"]}>
        <Typography className={styles["tiles_user-title-text"]}>
          {title}
        </Typography>
        <div className={styles["tiles_user-title-icon"]}>{icon}</div>
      </div>
      <div className={styles["tiles_user-content"]}>{content}</div>
      <Typography
        className={styles["tiles_user-text"]}
        color="alt"
        element="span"
      >
        {text}
      </Typography>
    </div>
  );
};

Tiles.User = UserTile;

export { Tiles };
