import React from "react";
import "../ps1/ps1.css";
import { useState } from "react";
export const Ps1_2 = () => {
  const [animate, setAnimate] = useState("outer");
  const [power, setPower] = useState("span");

  const handleClick = () => {
    setPower("span2");
    setTimeout(() => {
      setAnimate("outerPlusAnimation");
    }, 2000);
    
    
  };

  return (
    <div>
      {/**/}
      <button onClick={handleClick}>dsad</button>
      <div className={animate}>
        <div className="ps1">
          <div className="left">
            <div className="reset">RESET</div>
            <div className="power">POWER</div>
            <span className={power}></span>
          </div>
          <div className="center">
            <span></span>
          </div>
          <div className="right">
            <div className="open">OPEN</div>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
};
