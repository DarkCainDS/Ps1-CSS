import React, { useState } from "react";
import "./Carousel.css";
export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cards = [
    {
      id: 1,
      imageUrl:
        "https://m.media-amazon.com/images/M/MV5BNDdkNGE3MzEtNzViYy00ZTA0LTg0YTAtMDExY2RjNTM0Njg0XkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_.jpg",
      imageUrl2:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlwIZszM_3K4WLq8Pu659u7-SfcPMfv458kyINHD4_5Q&s"
    },
    {
      id: 2,
      imageUrl:
        "https://www.retroplace.com/pics/ps/packshots/56014--dragon-valor.png",
      imageUrl2:
        "https://images.launchbox-app.com/c75924a2-6a04-4419-b244-1aa80f5e7542.png",
    },
    {
      id: 3,
      imageUrl:
        "https://m.media-amazon.com/images/I/71350ljw7SL.jpg",
      imageUrl2:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-po2gMA8av6c5GuHt9quqol_Q7uHl9Zl7NsOSOcn0bX4b-HDVBmQhW572Vt5XScpPHfI&usqp=CAU"
    },
    {
      id: 4,
      imageUrl:
        "https://i.pinimg.com/474x/ea/c7/e2/eac7e28b5c04bff8f1a55900bfaff087.jpg",
      imageUrl2:
      "https://commondatastorage.googleapis.com/images.pricecharting.com/AMIfv97V_0EQ4r08HPjczSYNEtdlkFcUvbAxY5dHvojK68-hxJ-rZYnbByRbJm0ibBwm0jjmSk3t8vYIiMVsWFbAOvCUdn4k11UHypAE91drAkP98NnHb4ls01FfhJ_dR0rK1HIpVoZB_7hETBKmjvBHkLQbNm4Xtg/240.jpg"
    },
    {
      id: 5,
      imageUrl:
      "https://http2.mlstatic.com/D_NQ_NP_627383-MLC46562226070_062021-O.webp",
      imageUrl2:
      "https://cdn.mobygames.com/covers/6769054-tekken-3-playstation-media.jpg"
    },
    {
      id: 6,
      imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStcxV_8R2rqHLZiqDyj_VFUzy-17XOUI59UmVATjrblA&s",
      imageUrl2:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm7yiPaTtIWWjvbGQr3JixEUjuvE-xELOvTkwwSzYZ5A&s"
    },
    {
      id: 7,
      imageUrl:
        "https://m.media-amazon.com/images/M/MV5BNDdkNGE3MzEtNzViYy00ZTA0LTg0YTAtMDExY2RjNTM0Njg0XkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_.jpg",
    },
    {
      id: 8,
      imageUrl:
        "https://m.media-amazon.com/images/M/MV5BNDdkNGE3MzEtNzViYy00ZTA0LTg0YTAtMDExY2RjNTM0Njg0XkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_.jpg",
    },
    {
      id: 9,
      imageUrl:
        "https://m.media-amazon.com/images/M/MV5BNDdkNGE3MzEtNzViYy00ZTA0LTg0YTAtMDExY2RjNTM0Njg0XkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_.jpg",
    },
    {
      id: 10,
      imageUrl:
        "https://m.media-amazon.com/images/M/MV5BNDdkNGE3MzEtNzViYy00ZTA0LTg0YTAtMDExY2RjNTM0Njg0XkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_.jpg",
    },
    {
      id: 11,
      imageUrl:
        "https://m.media-amazon.com/images/M/MV5BNDdkNGE3MzEtNzViYy00ZTA0LTg0YTAtMDExY2RjNTM0Njg0XkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_.jpg",
    },
    {
      id: 12,
      imageUrl:
        "https://m.media-amazon.com/images/M/MV5BNDdkNGE3MzEtNzViYy00ZTA0LTg0YTAtMDExY2RjNTM0Njg0XkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_.jpg",
    },
    // Añade más objetos aquí para más tarjetas
  ];
  const handleNext = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex === cards.length - 1) {
        return 0; // Reiniciar el índice a 0 cuando llegue al final del array
      } else {
        return prevIndex + 1; // Incrementar el índice normalmente
      }
    });
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? cards.length - 1 : prevIndex - 1
    );
  };
  const handleCardClick = (index) => {
    console.log(`Clicked card ${index + 1}`);
    // Aquí puedes realizar cualquier acción que desees al hacer clic en una tarjeta
  };

  return (
    <div className="carousel-container">
      <div
        className="carousel"
        style={{ transform: `translateX(-${currentIndex * 120}px)` }}
      >
        {cards.map((card, index) => (
          <div
            className={`card ${index === currentIndex ? "active" : ""}`}
            key={index}
          >
            <div className="card-content">
              <img src={card.imageUrl} alt={`Card ${card.id}`} />
              <button
                className="buttonInsideCard"
                onClick={() => handleCardClick(index)}
                style={{ backgroundImage: `url(${card.imageUrl2})` }}
              >
                <span class="holeCd"></span>
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="buttonBox">
        <button className="prev" onClick={handlePrev}>
          Prev
        </button>
        <button className="next" onClick={handleNext}>
          Next
        </button>
      </div>
    </div>
  );
}
