import { Header } from "@/components/Header";
import { ResearchForm } from "@/components/ResearchForm";
import { Typography } from "@/components/Typography";
import { getJournals } from "@/services/journals";
import { FaCog } from "react-icons/fa";
import styles from "./page.module.scss";

export default async function Research() {
  const { data: journals } = await getJournals();
  return (
    <>
      <Header />
      <div className={styles.page}>
        <Typography element="h1">Research</Typography>
        <div className="inner_container">
          <Typography element="h3">
            <FaCog color="rgb(var(--primary-color))" /> Research Configuration
          </Typography>

          <ResearchForm journals={journals} />
        </div>
      </div>
    </>
  );
}
