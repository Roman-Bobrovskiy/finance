import React, { useEffect } from "react";
import { DataList } from "./components/DataList/DataList";
import { useDispatch } from "react-redux";
import { getServerData } from "./redux/actionFinance";
import { CompanyList } from "./components/CompanyList/CompanyList";
import { ServerSettings } from "./components/ServerSettings/ServerSettings";
import { useTypeSelector } from "./hooks/useTypeSecector";

function App() {
  const { interval } = useTypeSelector((state) => state.ticker);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getServerData(interval));
  }, [interval]);

  return (
    <div>
      <CompanyList />
      <DataList />
      <ServerSettings />
    </div>
  );
}

export default App;
