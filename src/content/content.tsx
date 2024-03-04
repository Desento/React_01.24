import { TypeWithOptions } from "../types/interfaces";


export const typeOfDifficulty: TypeWithOptions = {
  name: 'Difficulty',
  data: [
    { id: 'easy', name: 'Easy' },
    { id: 'medium', name: 'Medium' },
    { id: 'hard', name: 'Hard' }
  ]
};

export const typeOfAnswers: TypeWithOptions = {
  name: 'Type',
  data: [
    { id: 'multiple', name: 'Multiple Choice' },
    { id: 'boolean', name: 'True / False' }
  ]
};

export const typeOfTime: TypeWithOptions = {
  name: 'Time',
  data: [
    { id: 1, name: '1m' },
    { id: 2, name: '2m' },
    { id: 5, name: '5m' }
  ]
};