import React from "react";

const Footer = ({ active }) => {
  const contents = [
    "Tesla © 2022",
    "Privacy & Legal",
    "Vehicle Recalls",
    "Contact",
    "Careers",
    "News",
    "Engage",
    "Locations",
  ];
  return (
    <div
      className="footer"
      style={{
        display: active ? "block" : "none",
      }}
    >
      <ul style={{listStyle:'none'}}>
        {contents.map((item, index) => (
          <li className="footer-item">{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Footer;
