

import React, { useState, useRef } from 'react';

const MusicToggleButton = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const audioRef = useRef(null);

  const toggleMusic = () => {
    if (!isLoaded) {
      audioRef.current.src = "/backsound.mp3";
      setIsLoaded(true);
    }

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div>
       <img id='musik'
        src={isPlaying ? "/onmusik.png" : "/offmusik.png"}
        alt={isPlaying ? "Pause" : "Play"}
        onClick={toggleMusic}
       
      />

      
      <audio ref={audioRef} />
    </div>
  );
};

export default MusicToggleButton;
