import React, { useEffect } from "react";
import { DataList } from "./components/DataList";
import { useDispatch } from "react-redux";
import { getServerData } from "./redux/actionFinance";
import { CompanyList } from "./components/CompanyList/CompanyList";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getServerData());
  }, [dispatch]);

  return (
    <div>
      <CompanyList />
      <DataList />
    </div>
  );
}

export default App;
