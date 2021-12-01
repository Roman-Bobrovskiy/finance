import React, { useRef, useEffect } from "react";
import { useTypeSelector } from "../../hooks/useTypeSecector";
import { v4 as uuidv4 } from "uuid";
import { ListItemsForDataList } from "../ListItemsForDataList/ListItemsForDataList";
import { useDispatch } from "react-redux";
import { removeTicker } from "../../redux/actionFinance";

export const DataList: React.FC = () => {
  const { connection, data, error } = useTypeSelector((state) => state.ticker);
  const tickersList = useTypeSelector(
    (state) => state.customTickerList.tickersList
  );

  const dispatch = useDispatch();

  let refPrice: any = useRef();
  let refPrevPrice: any = useRef();

  useEffect(() => {
    refPrevPrice.current = refPrice.current;
  });

  const removeTickers = (event: React.BaseSyntheticEvent) => {
    if (event.target.nodeName === "I") {
      let classes = event.target.parentElement.parentElement.dataset.ticker;
      dispatch(removeTicker(classes));
    }
  };

  return (
    <ul onClick={removeTickers}>
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
