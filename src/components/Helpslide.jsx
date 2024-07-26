import React, { useState } from 'react';
import home from "../assets/home.png"
import { useNavigate } from "react-router-dom";
const slides = [
  {
    url: '/Help1.png',
  },
  {
    url: '/Help2.png',
  },
];

function Helpslide() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const previousSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

    //navigate
    const navigate = useNavigate();

    const HandleToMenu = () => {
        navigate('/'); // navigate to home
    };
    


  return (
    <div className="App">
          <img onClick={HandleToMenu} id="home-button" src={home} alt="home" />
      <div className="slide-container">
        <img src={slides[currentIndex].url} alt={`Slide ${currentIndex + 1}`} />
      </div>
      <div className="buttonSlide-container">
        <img onClick={nextSlide} src="/prev_btn.png" alt="" />
        <img onClick={previousSlide} src="/next_btn.png" alt="" />
        
      </div>
    </div>
  );
}

export default Helpslide;
