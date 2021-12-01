import React from "react";

import { priceDataInterface } from "../../interfaces/interfaces";

export const PriceData = ({
  currentPrice,
  currentChange,
  currentPercent,
  prevPrice,
}: priceDataInterface) => {
  return (
    <>
      <span>
        Price: {currentPrice}$
        {prevPrice &&
          (+currentPrice > +prevPrice ? (
            <i className="tiny material-icons #1de9b6 teal-text accent-3 ">
              arrow_upward
            </i>
          ) : (
            <i className="tiny material-icons #f44336 red-text">
              arrow_downward
            </i>
          ))}
      </span>

      <span>Difference: {currentChange}</span>

      <span>Percentage difference: {currentPercent}%</span>
    </>
  );
};
