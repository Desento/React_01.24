import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux";
import { setQuizDuration } from "../redux/reducers/resultsReduser";
import { TimerProps } from "../types/interfaces";


const Timer: React.FC<TimerProps> = ({ dispatchTime }) => {
    const time = useSelector((state: RootState) => +state.configuration.time);
    const [timer, setTimer] = useState(time * 60);
    const dispatch = useDispatch();

    useEffect(() => {
        const timerInterval = setInterval(() => {
            setTimer(prevTimer => (prevTimer > 0 ? prevTimer - 1 : 0));
        }, 1000);

        return () => clearInterval(timerInterval);
    }, []);

    useEffect(() => {
        dispatch(setQuizDuration(time * 60 - timer));
    }, [dispatch, time, timer]);

    return (
        <p className="timer">Timer: {Math.floor(timer / 60)}:{timer % 60 < 10 ? `0${timer % 60}` : timer % 60}</p>
    );
};

export default Timer;
