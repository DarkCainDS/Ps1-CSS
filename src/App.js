import React,{ useEffect, useState} from "react";
import "./App.css";
import { FullIntro } from "./components/Fullintro/fullIntro";
import {Howl, Howler} from 'howler';
import Intro from './components/Fullintro/PlayStationIntro.wav'
import SecondPart from './components/secondPart/SecondPart';
import ThirdComponent from "./components/ThirdComponent/ThirdComponent";



function App() {

  const [changeIntro,setChangeIntro] = useState(true)
  const [datosDesdeSecondPart, setDatosDesdeSecondPart] = useState(null);

  Howler.volume(0.45);
  const Intro1 = new Howl({
    src: [Intro]
  });

  setTimeout(() => {
    setChangeIntro(false)
  },10000)



  const manejarDatosDesdeSecondPart = (datos) => {
    setDatosDesdeSecondPart(datos);
  };

  const handleclick2 = () => {
    console.log(datosDesdeSecondPart);
  }
  return (
    <div className="App">
      { /*changeIntro ? <FullIntro/> : <SecondPart onDatosCambiados={manejarDatosDesdeSecondPart}  />*/}
    <div className="tvSimulator">
    <ThirdComponent />

    </div>
    
    </div>
  );
}

export default App;
