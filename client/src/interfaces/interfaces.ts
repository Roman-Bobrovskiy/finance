import { actionType } from "../redux/actionTypesFinance";

export interface financeState {
  data: any[];
  error: null | string;
  connection: boolean;
  interval: string;
  pause: any[];
}

interface financeAction {
  type: actionType.GET_DATA;
  payload: any[];
}

interface financeActionError {
  type: actionType.GET_DATA_ERROR;
  payload: string;
}

interface financeActionSetInterval {
  type: actionType.SET_INTERVAL;
  payload: string;
}

export interface financeStateTickerList {
  tickersList: any[];
}
export interface financeActionAddTicker {
  type: actionType.ADD_TICKER;
  payload: string;
}

export interface financeActionRemoveTicker {
  type: actionType.REMOVE_TICKER;
  payload: string;
}

export interface financeAddActionPauseTicker {
  type: actionType.ADD_PAUSED_TICKER;
  payload: string;
}

export interface financeRemoveActionPauseTicker {
  type: actionType.REMOVE_PAUSED_TICKER;
  payload: string;
}

interface refPrevPrice {
  map(
    arg0: ({ price, ticker }: any) => false | JSX.Element
  ): import("react").ReactNode;
  ticker: string;
  exchange: string;
  price: string;
  change: string;
  change_percent: string;
  dividend: string;
  yield: string;
  last_trade_time: string;
  pause: boolean;
}

export interface ListItemsForDataListProps {
  refPrevPrice: refPrevPrice;
  elem: refPrevPrice;
  pause: boolean;
}

export interface ListItemsBtnProps {
  elem: refPrevPrice;
  pause: boolean;
}

export interface PriceDataProps {
  currentPrice: string;
  currentChange: string;
  currentPercent: string;
  prevPrice?: string | undefined;
}

export type financeActionInterfaces =
  | financeAction
  | financeActionError
  | financeActionAddTicker
  | financeActionRemoveTicker
  | financeAddActionPauseTicker
  | financeActionSetInterval
  | financeRemoveActionPauseTicker;
