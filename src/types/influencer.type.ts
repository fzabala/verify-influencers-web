import { ClaimType } from "@/types/claim.type";

export type InfluencerType = {
  id: number;
  publicName: string;
  avatar: string;
  followers: number;
  username: string;
  userId?: string;
  claims: ClaimType[];
  readonly score: number;
  createdAt: string;
  updatedAt: string;
};
