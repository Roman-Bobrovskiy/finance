import React from "react";
import { useDispatch } from "react-redux";
import { setInterval } from "../../../redux/actionFinance";
export const UpdateInterval = () => {
  const dispatch = useDispatch();

  const handleChangeInterval = (event: React.BaseSyntheticEvent) => {
    dispatch(setInterval(event.target.selectedOptions[0].value));
  };

  return (
    <div className="input-field">
      <label className="selectLabel">
        update interval
        <select
          defaultValue=""
          className="browser-default"
          onClick={handleChangeInterval}
        >
          <option value="" disabled>
            Choose interval
          </option>
          <option value="1000">1 sec</option>
          <option value="2000">2 sec</option>
          <option value="3000">3 sec</option>
          <option value="4000">4 sec</option>
          <option value="5000">5 sec</option>
        </select>
      </label>
    </div>
  );
};
