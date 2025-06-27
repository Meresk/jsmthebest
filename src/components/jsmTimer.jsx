import {useEffect, useState} from "react";
import App from "../App.jsx";

const JsmTimer = () => {
    const START_DATE = new Date('2022-01-10T00:00:00.00');
    const [time, setTime] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        const timer = setInterval(() => {
            const now = new Date();
            const diff = now.getTime() - START_DATE.getTime();

            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((diff % (1000 * 60)) / 1000);

            setTime({ days, hours, minutes, seconds });
        }, 1000)

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="timer-container">
            <h3>Вы — наш любимый преподаватель уже:</h3>
            <p>
                {time.days} дней, {time.hours} часов, {time.minutes} минут, {time.seconds} секунд
            </p>
            <h3>и на всю оставшуюся жизнь.</h3>
        </div>
    )
}

export default JsmTimer;



