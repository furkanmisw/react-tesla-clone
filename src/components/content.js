import React, { useEffect, useState } from "react";

const Content = (props) => {
  const [data, setData] = useState([]);
  const [number, setNumber] = useState(1);
  const [view, setView] = useState({
    id: 1,
    title: "",
    body: "",
    link: "",
    btn1: "",
    btn2: "",
  });
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((res) => {
        setData(res);
        setView(res[0]);
      });
  });
  const calc = (number) => {
    if (number < 0.5) {
      setNumber(1 - number * 2);
    } else {
      setNumber(number < 0.65 ? number * 0.65 : number);
    }
  };
  return (
    <>
      <div
        className="content"
        onScroll={(event) => {
          /* 0 - 1 */
          const current = event.currentTarget.scrollTop;
          const pageH = event.currentTarget.offsetHeight;
          calc((current / pageH) % 1);
        }}
      >
        {data.map((data, index) => (
          <div
            className={"content-item"}
            key={index}
            style={{
              backgroundImage: `url(images/${data.id}.png)`,
            }}
          ></div>
        ))}
      </div>
      <div
        className="display-data"
        style={{
          opacity: number,
        }}
      >
        <div className="title">
          <h1
            style={{
              marginBottom: "10px",
            }}
          >
            {view.title}
          </h1>
          <div className="line">
            <pre>{`${view.body} `}</pre>
            <a
              style={{
                borderBottom: "1px solid rgba(0,0,0,.2)",
                display: view.link ?? "none",
              }}
              href="/a"
            >
              {view.link}
            </a>
          </div>
        </div>
        <div className="btns"></div>
      </div>
    </>
  );
};

export default Content;
