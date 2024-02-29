import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setQuizDuration } from "../redux/reducers/resultsReduser";

export const Timer = ({ dispatchTime }) => {
    const time = useSelector(state => state.configuration.time);
    const [timer, setTimer] = useState(time * 60);
    const dispatch = useDispatch()

    useEffect(() => {
        const timerInterval = setInterval(() => {
            setTimer(prevTimer => (prevTimer > 0 ? prevTimer - 1 : 0));
        }, 1000);

        return () => clearInterval(timerInterval);
    }, []);

    dispatch(setQuizDuration(time * 60 - timer));

    return (
        <p className="timer">Timer: {Math.floor(timer / 60)}:{timer % 60 < 10 ? `0${timer % 60}` : timer % 60}</p>
    );
};
