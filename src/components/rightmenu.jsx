import React from "react";
import OutsideClickHandler from "react-outside-click-handler";
const RightMenu = ({setMenu,menu}) => {

  const contents = [
    "Existing Inventory",
    "Used Inventory",
    "Trade-In",
    "Test Drive",
    "Insurance",
    "Cybertruck",
    "Roadster",
    "Semi",
    "Charging",
    "Powerwall",
    "Commercial Energy",
    "Utilities",
    "Find Us",
    "Support",
    "Investor Relations",
  ];
  return (
    <OutsideClickHandler onOutsideClick={() => setMenu(false)}>
      <div
        className="rightmenu"
        style={{
          display: menu ? "block" : "none",
        }}
      >
        <div className="menu-header">
          <img
            src="closeicon.svg"
            alt="close"
            onClick={() => setMenu(false)}
            style={{
              height: "24px",
              width: "24px",
              margin: "8px",
              cursor: "pointer",
            }}
          />
        </div>
        <div className="menu-content">
          <ol
            style={{
              listStyle: "none",
            }}
          >
            {contents.map((item, index) => (
              <li className="item">
                <a href="/">{item}</a>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </OutsideClickHandler>
  );
};

export default RightMenu;
