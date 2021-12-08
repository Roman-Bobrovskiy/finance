import React from "react";
import { Button, Card, Col, Icon, Row } from "react-materialize";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { useTypeSelector } from "../../hooks/useTypeSecector";
import { addTicker } from "../../redux/actionFinance";
import { getTickerName } from "../../utils/getTickerName";

export const CompanyList: React.FC = () => {
  const { data } = useTypeSelector((state) => state.ticker);
  const { tickersList } = useTypeSelector((state) => state.customTickerList);
  const dispatch = useDispatch();

  const addTickers = (event: React.BaseSyntheticEvent) => {
    !tickersList.includes(event.target.parentNode.dataset.ticker) &&
      dispatch(addTicker(event.target.parentNode.dataset.ticker));
  };

  return (
    <ul className="companyList center-align " onClick={addTickers}>
      {data.map((elem) => {
        return (
          <li className="listItems" key={uuidv4()}>
            <Row>
              <Col>
                <Card
                  title={getTickerName(elem.ticker)}
                  textClassName="white-text"
                  className="teal hoverable "
                >
                  <span data-ticker={elem.ticker} className="white-text">
                    {elem.exchange} {elem.price}$
                    <Button
                      data-ticker={elem.ticker}
                      className="#42a5f5 blue lighten-1 pa "
                      floating
                      icon={<Icon right>add</Icon>}
                      small
                      node="button"
                      waves="light"
                    />
                  </span>
                </Card>
              </Col>
            </Row>
          </li>
        );
      })}
    </ul>
  );
};
