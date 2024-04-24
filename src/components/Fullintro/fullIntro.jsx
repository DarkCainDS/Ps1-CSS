import React from "react";
import "../LogoPsx/logo.css";
import { Logo } from "../LogoPsx/logo";
export const FullIntro = () => {
  return (
    <div>
      <div className="allIntro">
        <div className="sonyWord">
          <h1>SONY</h1>
        </div>
        <div className="logoWhite">
          <Logo />
        </div>
        <div className="bottomWord">
          <div>
            <h2>COMPUTER</h2>
          </div>
          <div className="secondPart">
            <h3>ENTERTAINMENT </h3>
            <h6>TM</h6>
          </div>
        </div>
      </div>
    </div>
  );
};
