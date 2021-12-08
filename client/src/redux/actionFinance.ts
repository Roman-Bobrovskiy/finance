import { Dispatch } from "redux";
import {
  financeActionInterfaces,
  financeAddActionPauseTicker,
  financeRemoveActionPauseTicker,
} from "../interfaces/interfaces";
import { io } from "socket.io-client";
import { actionType } from "./actionTypesFinance";

export const getServerData = (interval: string, pausedTicker: any[]) => {
  return async (dispatch: Dispatch<financeActionInterfaces>) => {
    let sentData = {
      interval,
      pausedTicker,
    };
    // await dispatch({ type: actionType.PAUSE_TICKER, payload: pausedTicker });
    const socket = await io("ws://localhost:4000");
    await socket
      .emit("start", sentData)
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

export const addPausedTicker = (pausedTicker: string) => {
  return async (dispatch: Dispatch<financeAddActionPauseTicker>) => {
    await dispatch({
      type: actionType.ADD_PAUSED_TICKER,
      payload: pausedTicker,
    });
  };
};

export const removePausedTicker = (pausedTicker: string) => {
  return async (dispatch: Dispatch<financeRemoveActionPauseTicker>) => {
    await dispatch({
      type: actionType.REMOVE_PAUSED_TICKER,
      payload: pausedTicker,
    });
  };
};
