import React from "react";

import { PriceDataProps } from "../../../../interfaces/interfaces";

export const PriceData: React.FC<PriceDataProps> = ({
  currentPrice,
  currentChange,
  currentPercent,
  prevPrice,
}) => {
  return (
    <>
      <span className="#42a5f5 blue-text">
        Price:{" "}
        {prevPrice && +currentPrice > +prevPrice ? (
          <span className="teal-text pr">
            {currentPrice}${" "}
            <i className="tiny material-icons #1de9b6 accent-3">arrow_upward</i>
          </span>
        ) : (
          <span className="red-text pr">
            {currentPrice}${" "}
            <i className="tiny material-icons #f44336 red-text">
              arrow_downward
            </i>
          </span>
        )}
        <span className="pr">
          Difference: <span className="teal-text">{currentChange}</span>$
        </span>
        <span className="pr">
          Percentage difference:{" "}
          <span className="teal-text">{currentPercent}</span>%
        </span>
      </span>
    </>
  );
};
