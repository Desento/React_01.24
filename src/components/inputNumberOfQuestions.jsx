import { forwardRef } from 'react';

export const InputNumberOfQuestions = forwardRef(({ className }, ref) => {

  return (
    <div className={className}>
      <label htmlFor="numberInput">Enter a number of questions (5-15): </label>
      <input
        type="text"
        id="numberInput"
        ref={ref}
        placeholder="Enter a number"
      />
    </div>
  );
});
