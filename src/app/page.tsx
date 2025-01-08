import { Chips } from "@/components/Chips";
import { Header } from "@/components/Header";
import { Table } from "@/components/Table";
import { Tiles } from "@/components/Tiles";
import { Typography } from "@/components/Typography";
import { UserItem } from "@/components/UserItem";
import { getInfluencers } from "@/services/influencers";
import { getStatisctics } from "@/services/statistics";
import { abbreviateNumber } from "@/utils/numbers";
import { FaCheckCircle, FaUsers } from "react-icons/fa";
import { FaChartColumn } from "react-icons/fa6";
import styles from "./page.module.scss";

export default async function Home() {
  const { data: influencers } = await getInfluencers();
  const { data: statistics } = await getStatisctics();

  return (
    <>
      <Header />
      <div className={styles.page}>
        <Typography element="h1">Influencers Trust Leaderboard</Typography>
        <Typography color="alt">
          Real-time reanking of health incluencers based on scientific accuracy,
          credibility, and transparency. Updated daily using AI-powered analysis
        </Typography>
        <Tiles>
          <Tiles.Dashboard
            icon={<FaUsers />}
            title={statistics.activeInfluencersCount.toString()}
            text="Active influencers"
          />
          <Tiles.Dashboard
            icon={<FaCheckCircle />}
            title={statistics.verifiedClaimsCount.toString()}
            text="Claims Verified"
          />
          <Tiles.Dashboard
            icon={<FaChartColumn />}
            title={`${statistics.trustAvgScore.toFixed(2)}%`}
            text="Average Trust Score"
          />
        </Tiles>
        <Chips>
          <Chips.Item active>Top 100</Chips.Item>
          <Chips.Item>Top 1000</Chips.Item>
          <Chips.Item>Top 5000</Chips.Item>
          <Chips.Item>All Influencers</Chips.Item>
        </Chips>
        <Table>
          <thead>
            <tr>
              <th>Rank</th>
              <th>Influencer</th>
              <th>Followers</th>
              <th>Trust Score</th>
              <th>Verified Claims</th>
            </tr>
          </thead>
          <tbody>
            {influencers.map((influencer, index) => (
              <tr key={`influencer-${index}`}>
                <td>#{index + 1}</td>
                <td>
                  <UserItem
                    username={influencer.username}
                    avatar={influencer.avatar}
                  />
                </td>
                <td>{abbreviateNumber(influencer.followers)}</td>
                <td>
                  <Typography element="span" color="primary">
                    {influencer.score ? `${influencer.score.toFixed(2)}%` : "-"}
                  </Typography>
                </td>
                <td>{influencer.claims.length}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
}
