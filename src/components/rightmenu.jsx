import React from "react";
import OutsideClickHandler from "react-outside-click-handler";
const RightMenu = ({ setMenu, menu }) => {
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
      <div className={`rightmenu ${menu ? "active" : "close"}`}>
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
            className="right-menu-items"
            style={{
              listStyle: "none",
            }}
          >
            {contents.map((item, index) => (
              <li className="item">
                <a href="#">{item}</a>
              </li>
            ))}
          </ol>
          <div className="container">
            <img src="global.svg" alt="global" className="global-icon" />
            <div className="text">
              <h1>United States</h1>
              <h2>English</h2>
            </div>
          </div>
        </div>
      </div>
    </OutsideClickHandler>
  );
};

export default RightMenu;
