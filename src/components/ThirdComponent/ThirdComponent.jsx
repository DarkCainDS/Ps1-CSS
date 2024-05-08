import React from "react";


export default function ThirdComponent({ videoId = 0}) {
  const videos = [
    { id: "e4RsLBCNbrU", title: "Video 1" },
    { id: "another-video-id", title: "Video 2" },
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
      <p>Sony</p>
    </div>
  );
}
