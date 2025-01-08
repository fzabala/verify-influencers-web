import { fetchAPI } from "@/lib/api";
import { InfluencerType } from "@/types/influencer.type";

type searchClaimsParams = {
  username: string;
  startTime: number | null;
  limit: number;
  journalsIds: number[];
};

export const searchClaims = async ({
  username,
  startTime,
  limit,
  journalsIds,
}: searchClaimsParams) => {
  type ResponseType = {
    data: InfluencerType;
  };

  const params = {
    username,
    startTime,
    limit,
    journalsIds,
  };

  const options = {
    method: "POST",
    body: JSON.stringify(params),
  };

  return await fetchAPI<ResponseType>("/claims", {}, options);
};
