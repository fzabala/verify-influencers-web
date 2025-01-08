import { CategoryType } from "@/types/category.type";
import { InfluencerType } from "@/types/influencer.type";

export type ClaimType = {
  id: number;
  content: string;
  postId: string;
  source: string;
  categoryId?: number;
  category?: CategoryType;
  aiAnalysis?: string;
  trustScore?: number;
  influencerId: number;
  influencer: InfluencerType;
  createdAt: string;
  updatedAt: string;
};
