import { ButtonProps } from "../types/interfaces";

export const Button: React.FC<ButtonProps> = ({ text, className, onClick, disabled }) => {
  return (
    <button className={className} onClick={onClick} disabled={disabled}>
      {text}
    </button>
  );
};