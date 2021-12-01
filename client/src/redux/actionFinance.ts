import { Dispatch } from "redux";
import { financeActionInterfaces } from "../interfaces/interfaces";
import { io } from "socket.io-client";
import { actionType } from "./actionTypesFinance";

export const getServerData = () => {
  return async (dispatch: Dispatch<financeActionInterfaces>) => {
    const socket = await io("ws://localhost:4000");
    await socket
      .emit("start")
      .on("ticker", (data) =>
        dispatch({ type: actionType.GET_DATA, payload: data })
      )
      .on("connect_error", (err) =>
        dispatch({ type: actionType.GET_DATA_ERROR, payload: err.message })
      );
  };
};

export const addTicker = (tickerName: string) => {
  return async (dispatch: Dispatch<financeActionInterfaces>) => {
    await dispatch({ type: actionType.ADD_TICKER, payload: tickerName });
  };
};
