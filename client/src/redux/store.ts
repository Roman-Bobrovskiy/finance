import { applyMiddleware, createStore, combineReducers } from "redux";
import { reducerFinance, reducerTickerList } from "./reducerFinance";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

let rootReducer = combineReducers({
  ticker: reducerFinance,
  customTickerList: reducerTickerList,
});

export type RootState = ReturnType<typeof rootReducer>;

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
