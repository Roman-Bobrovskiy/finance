import React from "react";
import { v4 as uuidv4 } from "uuid";
import { ListItemsForDataListProps } from "../../../interfaces/interfaces";
import { getTickerName } from "../../../utils/getTickerName";
import { getTime } from "../../../utils/getTime";
import { ListItemsBtn } from "./ListItemsBtn";
import { PriceData } from "./PriceData/PriceData";

export const ListItemsForDataList: React.FC<ListItemsForDataListProps> = ({
  refPrevPrice,
  elem,
  pause,
}) => {
  return (
    <>
      <li className="collection-item #42a5f5 blue-text center-align df">
        <span>{getTickerName(elem.ticker)}</span>

        <div className="wrapPriceData center-align">
          {refPrevPrice ? (
            refPrevPrice.map(
              ({ price, ticker }) =>
                elem.ticker === ticker && (
                  <PriceData
                    key={uuidv4()}
                    prevPrice={price}
                    currentPrice={elem.price}
                    currentChange={elem.change}
                    currentPercent={elem.change_percent}
                  />
                )
            )
          ) : (
            <PriceData
              currentPrice={elem.price}
              currentChange={elem.change}
              currentPercent={elem.change_percent}
            />
          )}
        </div>

        <span className="right grey-text valign-wrapper">
          {getTime(elem.last_trade_time)}
          <ListItemsBtn pause={pause} elem={elem} />
        </span>
      </li>
    </>
  );
};
