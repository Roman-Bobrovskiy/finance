import React from "react";
import { v4 as uuidv4 } from "uuid";
import { getTickerName } from "../../../utils/getTickerName";
import { getTime } from "../../../utils/getTime";
import { PriceData } from "./PriceData/PriceData";

import styles from "./DataList.module.css";

export const ListItemsForDataList = ({ refPrevPrice, elem }: any) => {
  return (
    <>
      <li data-ticker={elem.ticker} className={styles.tickersItem}>
        <span className={styles.companyName}>{getTickerName(elem.ticker)}</span>
        {refPrevPrice ? (
          refPrevPrice.map(
            ({ price, ticker }: any) =>
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

        <span className={styles.time}>
          {getTime(elem.last_trade_time)}
          <i className="tiny material-icons">delete</i>
        </span>
      </li>
    </>
  );
};
