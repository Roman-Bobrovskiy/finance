import React from "react";
import { useTypeSelector } from "../../hooks/useTypeSecector";
import { UpdateInterval } from "./UpdateInerval/UpdateInterval";

export const ServerSettings = () => {
  const { connection, error } = useTypeSelector((state) => state.ticker);
  return (
    <div className="wrapServerSettings">
      <span className="connectionState">Connection</span>
      <UpdateInterval />
      <span className="textErrorMsg">Text error:{error}</span>
    </div>
  );
};
