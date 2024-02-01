import { useState } from 'react'

export const InputNumberOfQuestions = ({ className }) => {
  const [inputValue, setInputValue] = useState('')

  const handleChange = (event) => {
    const value = event.target.value

    if (!isNaN(value) && value >= 5 && value <= 15) {
      setInputValue(value)
    }
  }

  return (
    <div className={className}>
      <label htmlFor="numberInput">Enter a number of questions (5-15): </label>
      <input
        type="text"
        id="numberInput"
        value={inputValue}
        onChange={handleChange}
        placeholder="Enter a number"
      />
    </div>
  )
}
