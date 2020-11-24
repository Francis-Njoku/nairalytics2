export const sluggify = (inputString) =>
  inputString.toLowerCase().replace(/\s/gi, "-");

export const indicatorTypes = ["macro", "corporate", "intelligence"];

export const getActiveNav = (activeItem) => {
  if (!activeItem) return 0;
  export const activeItemIndex = indicatorTypes.indexOf(activeItem);
  if (activeItemIndex === -1) return 0;
  return activeItemIndex;
};

export const dataItems = [
  "Macro-economic",
  "Corporate",
  "Market Intelligence/ Research",
];
