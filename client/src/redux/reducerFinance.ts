import {
  financeActionAddTicker,
  financeActionInterfaces,
  financeActionRemoveTicker,
  financeState,
  financeStateTickerList,
} from "../interfaces/interfaces";
import { actionType } from "./actionTypesFinance";

const initialState: financeState = {
  data: [],
  error: null,
  connection: false,
  interval: "5000",
  pause: [],
};

const initialStateTickerList: financeStateTickerList = {
  tickersList: [],
};

export const reducerFinance = (
  state = initialState,
  action: financeActionInterfaces
): financeState => {
  switch (action.type) {
    case actionType.GET_DATA:
      return {
        error: null,
        data: action.payload,
        connection: true,
        interval: state.interval,
        pause: state.pause,
      };

    case actionType.GET_DATA_ERROR:
      return {
        error: action.payload,
        data: [],
        connection: false,
        interval: state.interval,
        pause: state.pause,
      };

    case actionType.SET_INTERVAL:
      return {
        error: null,
        data: state.data,
        connection: true,
        interval: action.payload,
        pause: state.pause,
      };

    case actionType.ADD_PAUSED_TICKER:
      return {
        error: null,
        data: state.data,
        connection: true,
        interval: state.interval,
        pause: [...state.pause, action.payload],
      };

    case actionType.REMOVE_PAUSED_TICKER:
      return {
        error: null,
        data: state.data,
        connection: true,
        interval: state.interval,
        pause: [...state.pause.filter((ticker) => ticker !== action.payload)],
      };

    default:
      return state;
  }
};

export const reducerTickerList = (
  state = initialStateTickerList,
  action: financeActionAddTicker | financeActionRemoveTicker
): financeStateTickerList => {
  switch (action.type) {
    case actionType.ADD_TICKER:
      return { tickersList: [...state.tickersList, action.payload] };

    case actionType.REMOVE_TICKER:
      return {
        tickersList: [
          ...state.tickersList.filter((ticker) => ticker !== action.payload),
        ],
      };

    default:
      return state;
  }
};
