
export interface TypeWithOptions {
    name?: string;
    data?: { id: string | number, name: string }[];
    trivia_categories?: Category[];
}

export interface SelectProps {
    options: TypeWithOptions;
    className: string;
    onChange: (value: string) => void;
    selectedValue: string | number;
}

export interface AnswerButtonsProps {
    answers: string[];
    question: Question;
    onAnswer: () => void;
    disabled: boolean;
}

export interface ButtonProps {
    text: string;
    className?: string;
    onClick: () => void;
    disabled?: boolean;
}

export interface InputNumberOfQuestionsProps {
    className?: string;
    value: number | string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface QuizQuestionProps {
    question: Question;
    totalQuestions: number;
    onNextQuestion: () => void;
    counterOfQuestions: number;
}

export interface TimerProps {
    dispatchTime: boolean
}

export interface ModalFinishQuizProps {
    onCancel: () => void;
    onConfirm: () => void;
}

export interface Category {
    id: number;
    name: string;
}

export interface Question {
    type: string;
    difficulty: string;
    category: string;
    question: string;
    correct_answer: string;
    incorrect_answers: string[];
}

export interface Results {
    totalQuestions: number;
    correctAnswers: number;
    categories: { [key: string]: number };
    answerTypes: { [key: string]: number };
    difficulties: { [key: string]: number };
}

export interface ConfigurationState {
    amount: number | string;
    category: string;
    difficulty: string;
    type: string;
    time: string | number;
}

export interface CategoryResponse {
    trivia_categories: Category[];
}

export interface QuestionsResponse {
    response_code: number;
    results: Question[];
}

export interface ResultState {
    showResult: boolean;
    correctAnswer: string;
}

export interface SetCorrectAnswerPayload {
    correctAnswer: string;
}

export interface ResultsState {
    totalQuestions: number;
    correctAnswers: number;
    categories: Record<string, number>;
    answerTypes: Record<string, number>;
    difficulties: Record<string, number>;
    quizDuration: number;
}

export interface StatisticsState {
    totalQuestions: number;
    correctAnswers: number;
    categories: Record<string, number>;
    answerTypes: Record<string, number>;
    difficulties: Record<string, number>;
}

export interface SetCategoryCountPayload {
    category: string;
}

export interface SetAnswerTypeCountPayload {
    answerType: string;
}

export interface SetAnswerDifficultiesPayload {
    difficulty: string;
}
