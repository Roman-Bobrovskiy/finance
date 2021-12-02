import { Dispatch } from "redux";
import { financeActionInterfaces } from "../interfaces/interfaces";
import { io } from "socket.io-client";
import { actionType } from "./actionTypesFinance";

export const getServerData = (interval: string) => {
  return async (dispatch: Dispatch<financeActionInterfaces>) => {
    const socket = await io("ws://localhost:4000");
    await socket
      .emit("start", interval)
      .on("ticker", (data) =>
        dispatch({ type: actionType.GET_DATA, payload: data })
      )
      .on("connect_error", (err) =>
        dispatch({ type: actionType.GET_DATA_ERROR, payload: err.message })
      );
  };
};

export const setInterval = (interval: string) => {
  return async (dispatch: Dispatch<financeActionInterfaces>) => {
    await dispatch({ type: actionType.SET_INTERVAL, payload: interval });
  };
};

export const addTicker = (tickerName: string) => {
  return async (dispatch: Dispatch<financeActionInterfaces>) => {
    await dispatch({ type: actionType.ADD_TICKER, payload: tickerName });
  };
};

export const removeTicker = (tickerName: string) => {
  return async (dispatch: Dispatch<financeActionInterfaces>) => {
    await dispatch({
      type: actionType.REMOVE_TICKER,
      payload: tickerName,
    });
  };
};
