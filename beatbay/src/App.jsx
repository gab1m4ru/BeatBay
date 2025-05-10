import React from "react";
import "./styles/main.scss";

import LeftSide from "./components/elements/Asides/LeftSide";
import RightSide from "./components/elements/Asides/RightSide";
import Home from "./components/pages/Home/Home";

const App = () => {
  return (
    <div className="wrapper">
      <LeftSide />
      <Home />
      <RightSide />
    </div>
  );
};

export default App;
