export const getTime = (data: string) => {
  let Data = new Date(data);
  let Hour = Data.getHours();
  let Minutes = Data.getMinutes();

  let result = ` at ${Hour + 2}:${Minutes < 10 ? "0" + Minutes : Minutes}`;
  return result;
};
