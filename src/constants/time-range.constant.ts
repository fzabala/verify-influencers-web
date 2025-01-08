export type TimeRangeType = {
  name: string;
  daysAgo: number | null;
};
export const timeRanges: TimeRangeType[] = [
  {
    name: "Last week",
    daysAgo: 7,
  },
  {
    name: "Last month",
    daysAgo: 30,
  },
  {
    name: "Last year",
    daysAgo: 365,
  },
  {
    name: "All time",
    daysAgo: null,
  },
];
