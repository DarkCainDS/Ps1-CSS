import React, { useEffect, useState } from "react";
import "./App.css";
import { FullIntro } from "./components/Fullintro/fullIntro";
import { Howl, Howler } from "howler";
import Intro from "./components/Fullintro/PlayStationIntro.wav";
import SecondPart from "./components/secondPart/SecondPart";
import ThirdComponent from "./components/ThirdComponent/ThirdComponent";
import { Quiz } from "./components/questions/Quiz";
import questions from '../src/components/questions/questions';
import questions20 from '../src/components/questions/questions20';
function App() {
  const [question,SetQuestion] = useState(false)
  const [changeIntro, setChangeIntro] = useState(true);
  const [datosDesdeSecondPart, setDatosDesdeSecondPart] = useState(null);
  const [questionsAppear,setQuestionsAppear] = useState(true)
  Howler.volume(0.45);
  const Intro1 = new Howl({
    src: [Intro],
  });

  setTimeout(() => {
    setChangeIntro(false);
  }, 10000);

  const manejarDatosDesdeSecondPart = (datos) => {
    setDatosDesdeSecondPart(datos);
  };

  const handleclick2 = () => {
    console.log(datosDesdeSecondPart);
  };
  const handleChangeQuestion = () => {
    if (setQuestionsAppear == false){
      setQuestionsAppear(true)
    }else{
      setQuestionsAppear(false)

    }
    SetQuestion(questions)
  }
  return (
    <div className="App2">
      {/*changeIntro ? <FullIntro/> : <SecondPart onDatosCambiados={manejarDatosDesdeSecondPart}  />*/}
    <div className="UpperBox">
      <button onClick={handleChangeQuestion}>Álgebra Lineal Aplicada para Machine Learning</button>
      <button>Analisis exploratorio</button>
      <button>Clustering con Python y scikit-learn</button>
      <button>Curso Profesional de Machine Learning con scikit-learn</button>
      <button>Decision Trees y Random Forest con Python y scikit-learn</button>
      <button>Entorno para ciencia de datos</button>
      <button>Estadística Descriptiva</button>
      <button>Estadística Inferencial</button>
      <button>Funciones Matematicas</button>
      <button>Fundamentos de Álgebra Lineal con Python</button>
      <button>Introduccion a machine learning</button>
      <button>Manejo de Datos Faltantes Detección y Exploración</button>
      <button>Manejo de Datos Faltantes Imputación</button>
      <button>Matplotlib y seaborn</button>
      <button>Numpy y Pandas</button>
      <button>PostgreSQL</button>
      <button>Probabilidad</button>
      <button>Regresión Lineal con Python y scikit-learn</button>
      <button>Regresión Logística con Python y scikit-learn</button>
      <button>Visualizacion de datos</button>

      </div>
      <div className="divideScreen">
        <div className="LeftSide">
        <button>disclaimer</button>
          <div className="tvSimulator">
            
            <ThirdComponent />
          </div>
        </div>

        <div className="RightSide">
          {questionsAppear ? <img src="https://http2.mlstatic.com/D_NQ_NP_732460-MLU70400143760_072023-O.webp"/> : <Quiz questions={question}/>}
          
        </div>
      </div>
    </div>
  );
}

export default App;
