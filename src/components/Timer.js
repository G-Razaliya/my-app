import React, { useEffect, useState } from "react";
import "./Timer.css";

const Timer = () => {
    const [time, setTime] = useState(0);
    const [intervalTime, setIntervalTime] = useState(1000); // интервал обновлений
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        if (!isRunning) return;

        const timer = setInterval(() => {
            setTime((prev) => prev + 1);
        }, intervalTime);

        return () => clearInterval(timer);

    }, [isRunning, intervalTime]);


    return (
        <div className="timer">
            <h2>Таймер</h2>
            <p>Прошло времени: {time} секунд</p>

            <button onClick={() => setIsRunning(!isRunning)}>
                {isRunning ? "Пауза":"Запустить"}
            </button>

            <button onClick={() => setTime(0)}>Сбросить</button>

            <input
            type="numder"
            placeholder="Интервал (мс)"
            onChange={(event) => setIntervalTime(Number(event.target.value))}/>
        </div>
    );
}

export default Timer;