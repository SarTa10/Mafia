import { useEffect, useState, useRef } from "react";
import Alarm from '../assets/Alarm.mp3';

const Timer = ({time, startTime}) => {
    const [timeLeft, setTimeLeft] = useState(time);
    const [isAlarmPlaying, setIsAlarmPlaying] = useState(false);
    const alarmRef = useRef(new Audio(Alarm));

     alarmRef.current.onended = () => {
        alarmRef.current.play();
    };

    const stopAlarmSound = () => {
        alarmRef.current.pause();
        alarmRef.current.currentTime = 0;
        setIsAlarmPlaying(false);
    }

    useEffect(() => {
        if (startTime && timeLeft > 0) {
        const timer = setInterval(() => {
            setTimeLeft(prevTime => {
                if (prevTime <= 1) {
                    clearInterval(timer);
                    alarmRef.current.play();
                    setIsAlarmPlaying(true);
                    return 0;
                }
                return prevTime - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
        }
        
    }, [startTime]);

    return (
        <>
        <h1>{timeLeft}</h1>
        {isAlarmPlaying && <button onClick={stopAlarmSound}>STOP ALARM SOUND</button>}
        </>
    )

}

export default Timer;