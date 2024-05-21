import React from "react";


export default function ThirdComponent({ videoId = 0}) {
  const videos = [
    { id: "e4RsLBCNbrU", title: "Megaman X4" },
    { id: "HoG9jmXMdW0", title: "Tekken 3" },
    { id: "x6ivwknQN54", title: "Medal of Honor" },
    { id: "rEHQRDnyUgU", title: "Brave Fencer Musashi" },
    { id: "nCVjlcNByqg", title: "DBZ Final Bout" },
    { id: "WajTS0JSvOo", title: "RE 3" },
    { id: "xX4FWQVBr80", title: "Dragon Valor" },
    { id: "VFXXkhvCLMc", title: "FF 7" },
    { id: "0uogEkbAufg", title: "Dino Crisis 2" },
    
    
    // Agregar más videos según sea necesario
  ];
  const videoIndex = videoId != null ? videoId : 0;
  
  // Obtener el video correspondiente al índice
  const selectedVideo = videos[videoIndex];

  if (!selectedVideo) {
    return <p>Video no encontrado</p>;
  }
  return (

    <div className="tvsimulator2">
      
      <iframe 
        width="460"
        height="315"
        src={`https://www.youtube.com/embed/${selectedVideo.id}?autoplay=1&controls=0&mute=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      ></iframe>
      
    </div>
  );
}
