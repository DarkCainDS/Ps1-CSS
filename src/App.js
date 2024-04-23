import React, { useEffect, useState } from "react";
import "./App.css";
import { Ps1_2 } from "./components/newPs1/ps1v2";
import { Logo } from "./components/LogoPsx/logo";

function App() {
  return (
    <div className="App">
      {/*  <Ps1_2/>*/}
      <div className="logoWhite">
        <Logo />
      </div>
    </div>
  );
}

export default App;
