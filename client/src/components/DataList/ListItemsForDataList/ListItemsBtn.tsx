import React from "react";
import { ListItemsBtnProps } from "../../../interfaces/interfaces";

export const ListItemsBtn: React.FC<ListItemsBtnProps> = ({ pause, elem }) => {
  return (
    <>
      {pause ? (
        <i
          id="pause"
          data-ticker={elem.ticker}
          className="tiny material-icons right red-text cursorPointer"
        >
          play_circle_outline
        </i>
      ) : (
        <i
          id="pause"
          data-ticker={elem.ticker}
          className="tiny material-icons right teal-text cursorPointer"
        >
          pause_circle_outline
        </i>
      )}

      <i
        id="remove"
        data-ticker={elem.ticker}
        className="tiny material-icons right red-text cursorPointer"
      >
        delete
      </i>
    </>
  );
};
