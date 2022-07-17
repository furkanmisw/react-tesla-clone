import React, { useState } from "react";
import Header from "./components/header";
import Impact from "./components/impact";
import Content from "./components/content";
import RightMenu from "./components/rightmenu";

const App = () => {
  const [menu, setMenu] = useState(false);

  return (
    <>
      <Impact />
      <Header setMenu={setMenu} />
      <Content />
      <RightMenu setMenu={setMenu} menu={menu} />
    </>
  );
};

export default App;
