import React, { useState } from "react";
import { useSelector } from "react-redux";
import RemarqueIcon from "../assets/icons/RemarqueIcon";
import InputConverter from "./InputConverter";
import { converte } from "../data/data";

export default function Converter() {
  const { unitItem, convertItem } = useSelector((state) => state);
  const [index, setIndex] = useState(null);
  const [conv, setConv] = useState(null);

  const converter = (i, el, type) => {
    if (type === "unite") {
      setIndex(i);
      const result = converte.find((c) => c.unite === el);

      setConv(unitItem.indexOf(result.convert));
    } else {
      setConv(i);
      const result = converte.find((c) => c.unite === el);

      setIndex(unitItem.indexOf(result.convert));
    }
  };

  return (
    <div className="container">
      <div className="container-text">
        <div className="icon-remarque">
          <p className="text-remarque">
            Using the unit converter you can convert values ( Metric and Field
            unit system ) navigatting easily through both lists . All units are
            categorized in various menus such as Drilling , Production , Force
            and power et cetera , there menus are also divised to various units
            categories such as Mud weight units , Drilling rate units et cerera{" "}
          </p>
          <RemarqueIcon />
        </div>
        <h3>Unit Converter </h3>
      </div>
      <div className="two-lists">
        <div className="contain-convertir">
          <InputConverter unite={true} />
          <div className="container-list">
            {/* <div className="text-list">Please pick a conversion category and sub-menu to access this list </div> */}
            {unitItem.length ? (
              <>
                <div className="text-list">
                  {unitItem.map((el, i) => {
                    return (
                      <p
                        key={i}
                        className={`item-text ${
                          index !== null && index === i ? "gray" : ""
                        }`}
                        onClick={() => converter(i, el, "unite")}
                      >
                        {el}
                      </p>
                    );
                  })}
                </div>
              </>
            ) : (
              <div className="text-list message-text">
                Please pick a conversion category and sub-menu to access this
                list{" "}
              </div>
            )}
          </div>
        </div>
        <div className="contain-convertir">
          <InputConverter converter={true} />
          <div className="container-list">
            {convertItem.length ? (
              <>
                <div className="text-list">
                  {convertItem.map((el, i) => {
                    return (
                      <p
                        key={i}
                        className={`item-text ${
                          conv !== null && conv === i ? "gray" : ""
                        }`}
                        onClick={() => converter(i, el, "converter")}
                      >
                        {el}
                      </p>
                    );
                  })}
                </div>
              </>
            ) : (
              <div className="text-list message-text">
                Please pick a conversion category and sub-menu to access this
                list{" "}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
