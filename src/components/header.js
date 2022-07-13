import React from "react";

const Header = () => {
  const midButtonTexts = [
    "Model S",
    "Model 3",
    "Model X",
    "Model Y",
    "Solar Roof",
    "Solar Panels",
  ];
  const rightButtonTexts = ["Shop", "Account", "Menu"];
  return (
    <div className="header">
      <div className="left">
        <img src="teslalogo.svg" alt="mainlogo" className="mainlogo" />
      </div>
      <div className="mid">
        {midButtonTexts.map((item) => (
          <a href="/">
            <span className="item">{item}</span>
          </a>
        ))}
      </div>
      <div className="right">
        {rightButtonTexts.map((item) => (
          <a href="/">
            <span className="item">{item}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Header;
