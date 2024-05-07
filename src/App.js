import React,{ useEffect, useState} from "react";
import "./App.css";
import { FullIntro } from "./components/Fullintro/fullIntro";
import {Howl, Howler} from 'howler';
import Intro from './components/Fullintro/PlayStationIntro.wav'
import SecondPart from './components/secondPart/SecondPart';



function App() {

  const [changeIntro,setChangeIntro] = useState(true)

  Howler.volume(0.45);
  const Intro1 = new Howl({
    src: [Intro]
  });

  setTimeout(() => {
    setChangeIntro(false)
  },10000)
  useEffect(() => {
    Intro1.play()
  },[])


  return (
    <div className="App">
      { changeIntro ? <FullIntro/> : <SecondPart />}


    
      
    </div>
  );
}

export default App;
