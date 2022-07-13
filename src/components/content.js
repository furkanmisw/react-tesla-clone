import React, { useEffect, useState } from "react";

const Content = (props) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((res) => setData(res));
  });
  return (
    <div className="content">
      <div
        style={{
          backgroundImage: "url(../images/1.jpg)",
          height: "550px",
          width: "550px",
        }}
      ></div>
      <img src="../images/1.jpg" alt="" />
    </div>
  );
};

export default Content;
