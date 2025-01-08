import { fetchAPI } from "@/lib/api";
import { JournalType } from "@/types/journal.type";

export const getJournals = async () => {
  type ResponseType = {
    data: JournalType[];
  };

  return await fetchAPI<ResponseType>("/journals");
};
