import React from "react";
import ReactDOM from "react-dom";

import "bootstrap-css-only";
import "./styles.css";

function App() {
  return (
    <div className="app container">
      <div className="row">
        <div className="col-3 col-sm-3 col-md-3">c1</div>
        <div className="col-6 col-sm-6 col-md-6">c2</div>
        <div className="col-3 col-sm-3 col-md-3">c3</div>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
