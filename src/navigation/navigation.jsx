import { createBrowserRouter } from "react-router-dom";
import { QuizSettingsScreen } from "../QuizSettingsScreen";
import { MainQuizScreen } from "../MainQiuzScreen";
import { QuizResultScreen } from "../QuizResultScreen";
import { ROUTES } from "./routes";
import { QuizStatisticsScreen } from "../QuizStatisticsSreen";

export const router = createBrowserRouter([
    {
        path: ROUTES.root,
        element: <QuizSettingsScreen />
    },
    {
        path: ROUTES.quiz,
        element: <MainQuizScreen />

    },
    {
        path: ROUTES.result,
        element: <QuizResultScreen />
    },
    {
        path: ROUTES.statistics,
        element: <QuizStatisticsScreen />
    }
])