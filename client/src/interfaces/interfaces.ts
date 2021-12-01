import { actionType } from "../redux/actionTypesFinance";

export interface financeState {
  data: any[];
  error: null | string;
  connection: boolean;
}

interface financeAction {
  type: actionType.GET_DATA;
  payload: any[];
}

interface financeActionError {
  type: actionType.GET_DATA_ERROR;
  payload: string;
}

export interface financeStateTickerList {
  tickersList: any[];
}
export interface financeActionAddTicker {
  type: actionType.ADD_TICKER;
  payload: any;
}

export interface priceDataInterface {
  currentPrice: string;
  currentChange: string;
  currentPercent: string;
  prevPrice?: string;
  prevChange?: string;
}

export type financeActionInterfaces =
  | financeAction
  | financeActionError
  | financeActionAddTicker;
