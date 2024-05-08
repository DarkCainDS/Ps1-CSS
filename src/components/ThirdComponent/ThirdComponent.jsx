import React from "react";

export default function ThirdComponent() {
    const videoId = "e4RsLBCNbrU"; // El ID del video de YouTube

  return (

    <div className="tvsimulator2">
      
      <iframe 
        width="460"
        height="315"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&controls=0&mute=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      ></iframe>
      <p>Sony</p>
    </div>
  );
}
