import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux";
import { setQuizDuration } from "../redux/reducers/resultsReduser";
import { TimerProps } from "../types/interfaces";

const Timer: React.FC<TimerProps> = ({ timerExpired, setTimerExpired }) => {
    const time = useSelector((state: RootState) => +state.configuration.time);
    const [timer, setTimer] = useState(time * 60);
    const dispatch = useDispatch();

    useEffect(() => {
        const timerInterval = setInterval(() => {
            setTimer(prevTimer => {
                if (prevTimer > 0) {
                    return prevTimer - 1;
                } else {
                    return 0;
                }
            });
        }, 1000);

        return () => clearInterval(timerInterval);
    }, []);

    useEffect(() => {
        dispatch(setQuizDuration(time * 60 - timer));
    }, [dispatch, time, timer]);

    useEffect(() => {
        if (timer === 0 && !timerExpired) {
            setTimerExpired();
        }
    }, [timer, timerExpired, setTimerExpired]);

    return (
        <p className="timer">Timer: {Math.floor(timer / 60)}:{timer % 60 < 10 ? `0${timer % 60}` : timer % 60}</p>
    );
};

export default Timer;
