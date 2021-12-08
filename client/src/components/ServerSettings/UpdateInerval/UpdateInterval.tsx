import React from "react";
import { useDispatch } from "react-redux";
import { setInterval } from "../../../redux/actionFinance";
import { Select } from "react-materialize";
import { Icon } from "react-materialize";

const UpdateInterval: React.FC = () => {
  const dispatch = useDispatch();

  const handleChangeInterval = (event: React.BaseSyntheticEvent) => {
    dispatch(setInterval(event.target.selectedOptions[0].value));
  };

  return (
    <Select
      icon={<Icon>access_time</Icon>}
      id="Select-15"
      multiple={false}
      options={{
        classes: "",
        dropdownOptions: {
          alignment: "left",
          autoTrigger: true,
          closeOnClick: true,
          constrainWidth: true,
          coverTrigger: true,
          hover: false,
          inDuration: 150,
          outDuration: 150,
        },
      }}
      value=""
      onChange={handleChangeInterval}
    >
      <option disabled value="">
        Choose update interval
      </option>
      <option value="1000">1 sec</option>
      <option value="2000">2 sec</option>
      <option value="3000">3 sec</option>
      <option value="4000">4 sec</option>
      <option value="5000">5 sec</option>
    </Select>
  );
};

export default React.memo(UpdateInterval);
