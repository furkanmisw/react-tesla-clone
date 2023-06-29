import React from "react";

const Button = ({ text, l = true }) => {
  return (
    <div className={"button " + (l ? "button1" : "button2")}>
      <a href="#">{text}</a>
    </div>
  );
};

export default Button;
