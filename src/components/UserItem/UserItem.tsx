import { Typography } from "@/components/Typography";
import Link from "next/link";
import styles from "./UserItem.module.scss";

type UserItemProps = {
  avatar: string;
  username: string;
};

export const UserItem = ({ avatar, username }: UserItemProps) => {
  return (
    <Link href="/influencers/1" className={styles["user_item"]}>
      <div className={styles["user_item-img"]}>
        <img src={avatar} alt={username} />
      </div>
      <Typography element="span" className={styles["user_item-username"]}>
        {username}
      </Typography>
    </Link>
  );
};
