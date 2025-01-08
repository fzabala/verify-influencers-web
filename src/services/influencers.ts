import { fetchAPI } from "@/lib/api";
import { InfluencerType } from "@/types/influencer.type";

export const getInfluencers = async () => {
  type ResponseType = {
    data: InfluencerType[];
  };

  return await fetchAPI<ResponseType>("/influencers");
};

export const getSingleInfluencer = async (id: string) => {
  type ResponseType = {
    data: InfluencerType;
  };

  return await fetchAPI<ResponseType>(`/influencers/${id}`);
};
