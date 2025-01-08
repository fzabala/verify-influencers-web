export const abbreviateNumber = (value: number): string => {
  const formatter = new Intl.NumberFormat("en", {
    notation: "compact",
    compactDisplay: "short",
    maximumSignificantDigits: 2,
  });

  return formatter.format(value);
};
