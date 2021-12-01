import React from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { useTypeSelector } from "../../hooks/useTypeSecector";
import { addTicker } from "../../redux/actionFinance";
import { getTickerName } from "../../utils/getTickerName";

export const CompanyList: React.FC = () => {
  const { data } = useTypeSelector((state) => state.ticker);
  const dispatch = useDispatch();

  const addTickers = (event: React.BaseSyntheticEvent) => {
    event.target.id === "companyName" &&
      dispatch(addTicker(event.target.dataset.ticker));
  };

  return (
    <ul className="containerCompanyList" onClick={addTickers}>
      {data.map((elem) => {
        return (
          <li
            id="companyName"
            data-ticker={elem.ticker}
            className="companyListItem"
            key={uuidv4()}
          >
            {getTickerName(elem.ticker)}
          </li>
        );
      })}
    </ul>
  );
};
