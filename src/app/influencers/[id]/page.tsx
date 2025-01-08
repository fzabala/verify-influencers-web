import { Claims } from "@/components/Claims";
import { Header } from "@/components/Header";
import { SearchClaims } from "@/components/SearchClaims";
import { Tiles } from "@/components/Tiles";
import { UserHeader } from "@/components/UserHeader";
import { getSingleInfluencer } from "@/services/influencers";
import { abbreviateNumber } from "@/utils/numbers";
import { FaArrowTrendUp } from "react-icons/fa6";
import styles from "./page.module.scss";

export default async function InfluencerPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;

  const { data: influencer } = await getSingleInfluencer(id);

  return (
    <>
      <Header />
      <div className={styles.page}>
        <UserHeader username={influencer.username} avatar={influencer.avatar} />
        <Tiles>
          <Tiles.User
            content={influencer.score ? `${influencer.score}%` : "0%"}
            icon={<FaArrowTrendUp />}
            text={`Based on ${influencer.claims.length} verified claims`}
            title="Trust score"
          />
          <Tiles.User
            content={influencer.score ? `${influencer.score}%` : "0%"}
            icon={<FaArrowTrendUp />}
            text={`Based on ${influencer.claims.length} verified claims`}
            title="Trust score"
          />
          <Tiles.User
            content={influencer.score ? `${influencer.score}%` : "0%"}
            icon={<FaArrowTrendUp />}
            text={`Based on ${influencer.claims.length} verified claims`}
            title="Trust score"
          />
          <Tiles.User
            content={abbreviateNumber(influencer.followers)}
            icon={<FaArrowTrendUp />}
            text="Total followers"
            title="Followers"
          />
        </Tiles>
        <SearchClaims />
        <Claims>
          {influencer.claims.map((claim) => (
            <Claims.Item
              key={`claim-${claim.id}`}
              content={claim.content}
              date={new Date(claim.createdAt).toISOString()}
              source={`https://x.com/Javier__IA/status/${claim.postId}`}
              verified={!!claim.trustScore}
              aiAnalysis={claim.aiAnalysis}
              trustScore={
                claim.trustScore ? `${claim.trustScore.toFixed(2)}%` : "-"
              }
            />
          ))}
        </Claims>
      </div>
    </>
  );
}
