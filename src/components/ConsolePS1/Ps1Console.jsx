import React from "react";
import "./ps1Console.css";
import { useState } from "react";

export const Ps1Console = () => {
  const [animate, setAnimate] = useState("outer");
  const [power, setPower] = useState("span");

  const handleClick = () => {
    setPower("span2");
    setTimeout(() => {
      setAnimate("outerPlusAnimation");
    }, 2000); 
  };

  const handleClick2 = () => {
    if(power === "span"){
      setPower("span2");
    }else{
      setPower("span");
    }
    
  };
  return (
    <div>
      {/**/}
      
      <div className='outer'>
        <div className="ps1">
          <div className="left">
            <div className="reset">RESET</div>
            <div className="power" onClick={handleClick2}>POWER</div>
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
