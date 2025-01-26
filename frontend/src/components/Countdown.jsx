import React, { useEffect, useState } from "react";

function Countdown() {
    const calculateTimeLeft = () => {
        const eventDate = new Date("2025-05-17T19:00:00");
        const now = new Date();
        const difference = eventDate - now;

        let timeLeft = {};
        if (difference > 0) {
            timeLeft = {
                zile: Math.floor(difference / (1000 * 60 * 60 * 24)),
                ore: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minute: Math.floor((difference / 1000 / 60) % 60),
                secunde: Math.floor((difference / 1000) % 60),
            };
        }
        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div style={{ textAlign: "center" }}>
            <h2>Începe în:</h2>
            <p>
                {timeLeft.zile} zile, {timeLeft.ore} ore, {timeLeft.minute} minute, {timeLeft.secunde} secunde
            </p>
        </div>
    );
}

export default Countdown;
