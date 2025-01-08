import { fetchAPI } from "@/lib/api";
import { StatisticsType } from "@/types/statistics";

export const getStatisctics = async () => {
  type ResponseType = {
    data: StatisticsType;
  };

  return await fetchAPI<ResponseType>("/statistics");
};
