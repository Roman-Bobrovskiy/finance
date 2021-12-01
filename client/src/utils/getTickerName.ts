import nameList from "./namesList.json";
export const getTickerName = (name: string) => {
  let result = "";
  Object.keys(nameList).forEach((key, index) => {
    if (key === name) {
      result = Object.values(nameList)[index];
    }
  });
  return result;
};
