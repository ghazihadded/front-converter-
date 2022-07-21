import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { readData, deleteAllData } from "../action/converterAction";

export default function Menu() {
  const [drop, setDrop] = useState(false);

  const dispatch = useDispatch();

  const onRead = (test = false) => {
    if (test) {
      dispatch(readData());
    } else {
      dispatch(deleteAllData());
    }
  };

  const changeDrop = (d) => {
    d ? setDrop(false) : setDrop(true);
  };

  return (
    <ul>
      <li
        id="drop"
        tabIndex="1"
        className={`${drop ? "li-drop" : ""}`}
        onClick={() => changeDrop(drop)}
      >
        <>
          {drop && <span> * </span>}
          Drilling conversions
        </>
      </li>
      <div className={`dropdown-content ${drop ? "drop-down" : ""}`}>
        <li tabIndex="2">Search</li>
        <li tabIndex="3" onClick={() => onRead(true)}>
          Mud Weight units
        </li>
        <li tabIndex="4" onClick={() => onRead()}>
          Axial Spring Constant..
        </li>
        <li tabIndex="5" onClick={() => onRead()}>
          Axial Dampening Coef..
        </li>
        <li tabIndex="6" onClick={() => onRead()}>
          Torsional Spring Cons..
        </li>
        <li tabIndex="7" onClick={() => onRead()}>
          Pressure Gradient uni..
        </li>
        <li tabIndex="8" onClick={() => onRead()}>
          Yield Slurry units
        </li>
        <li tabIndex="9" onClick={() => onRead()}>
          Footage Cost units
        </li>
        <li tabIndex="10" onClick={() => onRead()}>
          Dogleg units
        </li>
        <li tabIndex="11" onClick={() => onRead()}>
          Flow Rate units
        </li>
        <li tabIndex="12" onClick={() => onRead()}>
          Drilling Rate units
        </li>
        <li tabIndex="13" onClick={() => onRead()}>
          Weight Length units
        </li>
        <li tabIndex="14" onClick={() => onRead()}>
          Geothermal Gradient..
        </li>
      </div>
      <li tabIndex="15" onClick={() => onRead()}>
        Production conversions
      </li>
      <li tabIndex="16" onClick={() => onRead()}>
        Force and power conversio..
      </li>
      <li tabIndex="17" onClick={() => onRead()}>
        Fluid conversions
      </li>
      <li tabIndex="18" onClick={() => onRead()}>
        Gas conversions
      </li>
      <li tabIndex="19" onClick={() => onRead()}>
        General conversions
      </li>
    </ul>
  );
}
