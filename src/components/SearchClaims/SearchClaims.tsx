import { Chips } from "@/components/Chips";
import { Input } from "@/components/Input";
import { Typography } from "@/components/Typography";
import { BiSearchAlt2 } from "react-icons/bi";
import styles from "./SearchClaims.module.scss";

export const SearchClaims = () => {
  return (
    <div className={`inner_container ${styles["search_claims"]}`}>
      <Input placeholder="Search claims..." leftDecorator={<BiSearchAlt2 />} />
      <Typography small color="alt" className={styles["search_claims-label"]}>
        Categories
      </Typography>
      <Chips>
        <Chips.Item dark active>
          Neuroscience
        </Chips.Item>
        <Chips.Item dark>Sleep</Chips.Item>
        <Chips.Item dark>Performance</Chips.Item>
        <Chips.Item dark>Stress</Chips.Item>
      </Chips>
    </div>
  );
};
