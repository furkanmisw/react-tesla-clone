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
      {data.map((data, index) => (
        <div
          className={"content-item"}
          style={{
            backgroundImage: `url(images/${data.id}.png)`,
            width: "100vw",
            height: "100vh",
          }}
        ></div>
      ))}
    </div>
  );
};

export default Content;
