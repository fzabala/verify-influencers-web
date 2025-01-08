import { Typography } from "@/components/Typography";
import styles from "./UserHeader.module.scss";

type UserHeaderProps = {
  avatar: string;
  username: string;
};

export const UserHeader = ({ avatar, username }: UserHeaderProps) => {
  return (
    <div className={styles["user_header"]}>
      <div className={styles["user_header-avatar"]}>
        <img src={avatar} alt={username} />
      </div>
      <div className={styles["user_header-content"]}>
        <Typography
          element="h1"
          className={styles["user_header-content-username"]}
        >
          {username}
        </Typography>
      </div>
    </div>
  );
};
