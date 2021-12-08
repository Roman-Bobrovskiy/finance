import React from "react";
import { useTypeSelector } from "../../hooks/useTypeSecector";
import UpdateInterval from "./UpdateInerval/UpdateInterval";

import { Collapsible } from "react-materialize";
import { CollapsibleItem } from "react-materialize";
import { Icon } from "react-materialize";

const ServerSettings: React.FC = () => {
  const { connection, error } = useTypeSelector((state) => state.ticker);

  return (
    <>
      <Collapsible accordion={false}>
        <CollapsibleItem
          expanded={false}
          header="Server settings"
          icon={<Icon>settings</Icon>}
          node="div"
        >
          <div>
            <span className="customConnectionStyle valign-wrapper">
              <i
                className={
                  connection
                    ? "small material-icons teal-text pr"
                    : "small material-icons red-text pr"
                }
              >
                fiber_manual_record
              </i>
              Connection
            </span>
            <UpdateInterval />
            <span className="customConnectionStyle valign-wrapper">
              <i className="material-icons teal-text pr">error_outline</i> Text
              error:{error}
            </span>
          </div>
        </CollapsibleItem>
      </Collapsible>
    </>
  );
};

export default React.memo(ServerSettings);
