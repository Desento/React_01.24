import { InputNumberOfQuestionsProps } from "../types/interfaces";

export const InputNumberOfQuestions: React.FC<InputNumberOfQuestionsProps> = ({ className, value, onChange }) => {
  return (
    <div className={className}>
      <label htmlFor="numberInput">Enter a number of questions (5-15): </label>
      <input
        type="text"
        id="numberInput"
        value={value}
        onChange={onChange}
        placeholder="Enter a number"
      />
    </div>
  );
};