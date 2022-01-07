import React from "react";
import * as singleSpa from "single-spa";

import "./style.css";

const App: React.FC = () => {
  return (
    <div>
      <ul className="topnav">
        <li onClick={() => singleSpa.navigateToUrl("/")} className="active">
          <p>Home</p>
        </li>
        <li onClick={() => singleSpa.navigateToUrl("react")}>
          <p>REACT APP</p>
        </li>
        <li onClick={() => singleSpa.navigateToUrl("vue")}>
          <p>VUE APP</p>
        </li>
        <li>
          <p>ANGULAR APP</p>
        </li>
      </ul>
    </div>
  );
};

export default App;
