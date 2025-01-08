import { Typography } from "@/components/Typography";
import Link from "next/link";
import { PropsWithChildren } from "react";
import { FaCalendar, FaExternalLinkAlt } from "react-icons/fa";
import { LuBrain } from "react-icons/lu";
import styles from "./Claims.module.scss";

type ClaimsProps = PropsWithChildren;

const Claims = ({ children }: ClaimsProps) => {
  return <div className={styles.claims}>{children}</div>;
};

type ClaimsItemProps = PropsWithChildren & {
  verified: boolean;
  date: string;
  content: string;
  source: string;
  aiAnalysis?: string;
  trustScore?: string;
};

const ClaimItem = ({
  verified,
  date,
  content,
  source,
  aiAnalysis,
  trustScore,
}: ClaimsItemProps) => {
  return (
    <div className={styles["claims_item"]}>
      <div className={styles["claims_item-wrapper"]}>
        <div className={styles["claims_item-main"]}>
          <div className={styles["claims_item-info"]}>
            {verified ? (
              <div className={styles["claims_item-info-verified"]}>
                verified
              </div>
            ) : null}
            <div className={styles["claims_item-info-date"]}>
              <FaCalendar />
              {date}
            </div>
          </div>
          <div className={styles["claims_item-content"]}>
            <div className={styles["claims_item-content-text"]}>{content}</div>
            <Link className={styles["claims_item-content-link"]} href={source}>
              View Source <FaExternalLinkAlt />
            </Link>
          </div>
        </div>
        <div className={styles["claims_item-score"]}>
          <div className={styles["claims_item-score-value"]}>
            {trustScore || "-"}
          </div>
          <Typography small color="alt">
            Trust Score
          </Typography>
        </div>
      </div>
      <div className={styles["claims_item-ai"]}>
        <div className={styles["claims_item-ai-title"]}>
          <LuBrain />
          <Typography element="span">AI Analysis</Typography>
        </div>
        <div className={styles["claims_item-ai-content"]}>
          <Typography element="span" color="alt">
            {aiAnalysis || "-"}
          </Typography>
        </div>
      </div>
    </div>
  );
};

Claims.Item = ClaimItem;

export { Claims };
