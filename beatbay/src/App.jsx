import React from "react";
import "./styles/main.scss";

import Aside from "./components/elements/Aside/Aside";
import Home from "./components/pages/Home/Home";

const App = () => {
  return (
    <div className="wrapper">
      <Aside />
      <Home />
    </div>
  );
};

export default App;
