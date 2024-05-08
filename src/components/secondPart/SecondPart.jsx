import React from "react";
import { Ps1Console } from "../ConsolePS1/Ps1Console";
import PS1CaseDisplay from "./../cdCase/PS1CaseDisplay";

export default function SecondPart({ onDatosCambiados }) {
  return (
    <div className="main-layer">
      <div className="mainMenu_Box">
        <p>MAIN MENU</p>
      </div>

      <div className="layerBalls">
        <div className="upperBalls">
          <div className="firstBall"></div>
          <div className="firstBall"></div>
        </div>
        <div className="lowerBalls">
          <div className="firstBall"></div>
          <div className="firstBall"></div>
        </div>
      </div>
      <div className="MemoryAndPlayer">
        <p>MEMORY CARD</p>
        <div className="colorButton"></div>
        <p>CD PLAYER</p>
        <div className="colorButton"></div>
      </div>

      <div className="cdCasePosition">
        <PS1CaseDisplay onDatosCambiados={onDatosCambiados} />
      </div>
      
      <div className="ps1">
        <Ps1Console />
      </div>

    </div>
  );
}
