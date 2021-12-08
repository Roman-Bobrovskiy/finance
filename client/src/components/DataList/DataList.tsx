import React, { useRef, useEffect } from "react";
import { useTypeSelector } from "../../hooks/useTypeSecector";
import { v4 as uuidv4 } from "uuid";
import { ListItemsForDataList } from "./ListItemsForDataList/ListItemsForDataList";
import { useDispatch } from "react-redux";
import {
  addPausedTicker,
  removePausedTicker,
  removeTicker,
} from "../../redux/actionFinance";

export const DataList: React.FC = () => {
  const { data, pause } = useTypeSelector((state) => state.ticker);

  const tickersList = useTypeSelector(
    (state) => state.customTickerList.tickersList
  );

  const dispatch = useDispatch();

  let refPrice: any = useRef();
  let refPrevPrice: any = useRef();

  useEffect(() => {
    refPrevPrice.current = refPrice.current;
  });

  const hendlesBtn = (event: React.BaseSyntheticEvent) => {
    if (event.target.nodeName === "I") {
      let dataSet = event.target.dataset.ticker;
      let dtnId = event.target.id;
      dtnId !== "pause"
        ? dispatch(removeTicker(dataSet)) &&
          dispatch(removePausedTicker(dataSet))
        : !pause.includes(dataSet)
        ? dispatch(addPausedTicker(dataSet))
        : dispatch(removePausedTicker(dataSet));
    }
  };

  return (
    <>
      <ul className="collection" onClick={hendlesBtn}>
        <li className="collection-item card-panel teal lighten-2">
          Watch list
        </li>
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
                    pause={elem.pause}
                  />
                )
              );
            })
          )}
      </ul>
    </>
  );
};
