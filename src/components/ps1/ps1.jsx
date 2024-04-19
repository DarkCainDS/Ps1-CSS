import "./ps1.css";
import React, { useState } from 'react';

function template() {
  const [state, setState] = ("123");
  const handleClick  = () => {
    console.log(state);
    setState("456789");
    console.log(state);
  }
  return (
    <div>
      <button onClick={handleClick}>dsad</button>
      <div className="outer">
      <div className="ps1">
        <div className="left">
          <div>1</div>
          <div>2</div>
        </div>
        <div className="center">
          <span></span>
        </div>
        <div className="right"></div>
      
      </div>
      </div>


    </div>
  );
}

export default template;
