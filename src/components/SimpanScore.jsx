import React, { useEffect, useState } from 'react';

const ScoreStorage = ({ score }) => {
    const [storedScore, setStoredScore] = useState(0);

    useEffect(() => {
        const savedScore = localStorage.getItem("score");
        if (savedScore) {
            setStoredScore(parseInt(savedScore, 10));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("score", score);
        setStoredScore(score);
    }, [score]);

    return (
        <div className="local-storage-score">
            <h4>Stored Score: {storedScore}</h4>
        </div>
    );
};

export default ScoreStorage;
