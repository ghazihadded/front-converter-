import React, { useState } from "react";
import { useDispatch } from "react-redux";
import DeleteIcon from "../assets/icons/DeleteIcon";
import AddIcon from "../assets/icons/AddIcon";
import { deleteData } from "../action/converterAction";

export default function InputConverter({ converter, unite }) {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");

  const Delete = (el) => {
    if (converter) {
      dispatch(deleteData(el, "converter"));
    } else {
      dispatch(deleteData(el, "unite"));
    }
    setValue("");
  };

  return (
    <div className="inp-convert">
      <input
        type="text"
        value={value}
        placeholder="Click to insert value"
        onChange={(e) => setValue(e.target.value)}
      />
      <div className="icon-one">
        <AddIcon />
      </div>
      <div className="icon-two" onClick={() => Delete(value)}>
        <DeleteIcon />
      </div>
    </div>
  );
}
