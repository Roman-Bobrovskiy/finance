import React, { useRef, useEffect } from "react";
import { useTypeSelector } from "../hooks/useTypeSecector";
import { v4 as uuidv4 } from "uuid";
import { ListItemsForDataList } from "./ListItemsForDataList/ListItemsForDataList";

export const DataList: React.FC = () => {
  const { connection, data, error } = useTypeSelector((state) => state.ticker);
  const tickersList = useTypeSelector(
    (state) => state.customTickerList.tickersList
  );

  let refPrice: any = useRef();
  let refPrevPrice: any = useRef();

  useEffect(() => {
    refPrevPrice.current = refPrice.current;
  });
  return (
    <ul>
      {tickersList.length !== 0 &&
        tickersList.map((ticker) =>
          data.map((elem) => {
            refPrice.current = data;
            return (
              elem.ticker === ticker && (
                <ListItemsForDataList
                  key={uuidv4()}
                  refPrevPrice={refPrevPrice.current}
                  elem={elem}
                />
              )
            );
          })
        )}
    </ul>
  );
};
