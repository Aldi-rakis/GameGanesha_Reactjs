import React, { useState, useEffect } from "react";
import "../Drag&Drop.css";
import { useNavigate } from "react-router-dom";
import benar from "../assets/benar.png";
import salah from "../assets/salah.png";
import home from "../assets/home.png";
import ScoreStorage from './ScoreStorage'; // Ditambahkan: Import komponen ScoreStorage

const images = [
    { id: 1, src: "/demung.png", name: "Demung" },
    { id: 2, src: "/saron.png", name: "Saron" },
    { id: 3, src: "/peking.png", name: "Peking" },
    { id: 4, src: "/slenthem.png", name: "Slenthem" },
];

const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};


const GameDragDropBalungan = () => {
    const [droppedItems, setDroppedItems] = useState([]);
    const [score, setScore] = useState(0);
    const [nyawa, setNyawa] = useState(5);
    const [shuffledBoxes, setShuffledBoxes] = useState([]);
    const [showPopup, setShowPopup] = useState(false);
    const [popupMessage, setPopupMessage] = useState("");
    const [gameOver, setGameOver] = useState(false);

    useEffect(() => {
        setShuffledBoxes(shuffleArray([...images]));
        const savedScore = localStorage.getItem("score");
        if (savedScore) {
            setScore(parseInt(savedScore, 10));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("score", score);
    }, [score]);

    const handleDragStart = (e, id) => {
        if (droppedItems.some((item) => item.imageId === id)) {
            e.preventDefault();
            return;
        }
        e.dataTransfer.setData("id", id);
    };

    const handleDrop = (e, boxId) => {
        const imageId = e.dataTransfer.getData("id");
        if (imageId == boxId && !droppedItems.some((item) => item.boxId === boxId)) {
            setDroppedItems([...droppedItems, { boxId, imageId }]);
            setScore((prevScore) => {
                const newScore = prevScore + 1;
                if (newScore >= 4) {
                    setGameOver(true);
                }
                return newScore;
            });
            setPopupMessage(benar);
        } else {
            setPopupMessage(salah);
            setNyawa((prevNyawa) => {
                const newNyawa = prevNyawa - 1;
                if (newNyawa <= 0) {
                    setGameOver(true);
                }
                return newNyawa;
            });
        }
        setShowPopup(true);
        setTimeout(() => setShowPopup(false), 1000);
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    const remainingImages = images.filter(
        (image) => !droppedItems.some((item) => item.imageId === image.id)
    );

    const navigate = useNavigate();

    const HandleToMenu = () => {
        navigate('/game'); // navigate to home
    };

    return (
        <div className="background">
            <img onClick={HandleToMenu} id="home-button" src={home} alt="home" />
            {showPopup && <div className="popup">
                <img src={popupMessage} alt="popup message" />
            </div>}
            {gameOver && <div className="popup-wrap">
                <div className="popup-box">
                    <h2>Game Over</h2>
                    <h3>Skor anda saat ini: {score}</h3>
                    <button onClick={HandleToMenu}>Home</button>
                    <a className="close-btn popup-close" href="/">X</a>
                </div>
            </div>}

            <div className="container">
                <img id="title-game2" src="/titlegame2.png" alt="title game" />

                <div className="score-nyawa">
                    <p>Score: {score}</p>
                    <p>Nyawa: {nyawa}</p>
                  
                </div>

                <div className="images">
                    {remainingImages.map((image) => (
                        <img
                            key={image.id}
                            src={image.src}
                            alt={`Image ${image.id}`}
                            draggable={!droppedItems.some((item) => item.imageId === image.id)}
                            onDragStart={(e) => handleDragStart(e, image.id)}
                            className="draggable-image"
                        />
                    ))}
                </div>
                <div className="boxes">
                    {shuffledBoxes.map((box) => (
                        <div
                            key={box.id}
                            className="box"
                            onDrop={(e) => handleDrop(e, box.id)}
                            onDragOver={handleDragOver}
                            style={{
                                backgroundColor: droppedItems.some((item) => item.boxId === box.id) ? "#f0f0f0" : "white",
                            }}
                        >
                            {droppedItems.some((item) => item.boxId === box.id) && (
                                <img
                                    src={images.find((img) => img.id == box.id).src}
                                    alt={`Image ${box.id}`}
                                    className="dropped-image"
                                />
                            )}
                            {!droppedItems.some((item) => item.boxId === box.id) && box.name}
                        </div>
                    ))}
                </div>
            </div>
           
        </div>
    );
};

export default GameDragDropBalungan;
