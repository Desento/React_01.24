const typeOfCategory = {
  name: 'Category',
  id: 'typeOfQuestions',
  data: [
    { id: 9, name: 'General Knowledge' },
    { id: 10, name: 'Entertainment: Books' },
    { id: 11, name: 'Entertainment: Film' },
    { id: 12, name: 'Entertainment: Music' },
    { id: 13, name: 'Entertainment: Musicals & Theatres' },
    { id: 14, name: 'Entertainment: Television' },
    { id: 15, name: 'Entertainment: Video Games' },
    { id: 16, name: 'Entertainment: Board Games' },
    { id: 17, name: 'Science & Nature' },
    { id: 18, name: 'Science: Computers' },
    { id: 19, name: 'Science: Mathematics' },
    { id: 20, name: 'Mythology' },
    { id: 21, name: 'Sports' },
    { id: 22, name: 'Geography' },
    { id: 23, name: 'History' },
    { id: 24, name: 'Politics' },
    { id: 25, name: 'Art' },
    { id: 26, name: 'Celebrities' },
    { id: 27, name: 'Animals' },
    { id: 28, name: 'Vehicles' },
    { id: 29, name: 'Entertainment: Comics' },
    { id: 30, name: 'Science: Gadgets' },
    { id: 31, name: 'Entertainment: Japanese Anime & Manga' },
    { id: 32, name: 'Entertainment: Cartoon & Animations' }
  ]
}

const typeOfDifficulty = {
  name: 'Difficulty',
  id: 'typeOfDifficulty',
  data: [
    { id: 'easy', name: 'Easy' },
    { id: 'medium', name: 'Medium' },
    { id: 'hard', name: 'Hard' }
  ]
}

const typeOfAnswers = {
  name: 'Type',
  id: 'typeOfAnswers',
  data: [
    { id: 'multiple', name: 'Multiple Choice' },
    { id: 'boolean', name: 'True / Falce' }
  ]
}

const typeOfTime = {
  name: 'Time',
  id: 'typeOfQuetypeOfTimestions',
  data: [
    { id: 1, name: '1m' },
    { id: 2, name: '2m' },
    { id: 5, name: '5m' }
  ]
}
const arrayOfQuestions = {
  "response_code": 0,
  "results": [
    {
      "type": "multiple",
      "difficulty": "hard",
      "category": "Science &amp; Nature",
      "question": "How long is a light-year?",
      "correct_answer": "9.461 Trillion Kilometres",
      "incorrect_answers": [
        "1 AU",
        "105.40 Earth-years",
        "501.2 Million Miles"
      ]
    },
    {
      "type": "multiple",
      "difficulty": "easy",
      "category": "Entertainment: Video Games",
      "question": "TF2: What code does Soldier put into the door keypad in &quot;Meet the Spy&quot;?",
      "correct_answer": "1111",
      "incorrect_answers": [
        "1432",
        "1337",
        "No code"
      ]
    },
    {
      "type": "multiple",
      "difficulty": "medium",
      "category": "History",
      "question": "The Spitfire L.F. Mk IX had what engine?",
      "correct_answer": "Merlin 66",
      "incorrect_answers": [
        "Griffon 65",
        "Merlin 50",
        "Merlin X"
      ]
    },
    {
      "type": "multiple",
      "difficulty": "medium",
      "category": "Sports",
      "question": "Which NBA player won Most Valuable Player for the 1999-2000 season?",
      "correct_answer": "Shaquille O&#039;Neal",
      "incorrect_answers": [
        "Allen Iverson",
        "Kobe Bryant",
        "Paul Pierce"
      ]
    },
    {
      "type": "multiple",
      "difficulty": "medium",
      "category": "Entertainment: Music",
      "question": "Who recorded the album called &quot;Down to the Moon&quot; in 1986?",
      "correct_answer": "Andreas Vollenweider",
      "incorrect_answers": [
        "Jean-Michel Jarre",
        "Bing Crosby",
        "Enya"
      ]
    },
    {
      "type": "multiple",
      "difficulty": "hard",
      "category": "General Knowledge",
      "question": "When was &quot;YouTube&quot; founded?",
      "correct_answer": "February 14, 2005",
      "incorrect_answers": [
        "May 22, 2004",
        "September 12, 2005",
        "July 19, 2009"
      ]
    },
    {
      "type": "boolean",
      "difficulty": "medium",
      "category": "History",
      "question": "The Hundred Years&#039; War was fought for more than a hundred years.",
      "correct_answer": "True",
      "incorrect_answers": [
        "False"
      ]
    },
    {
      "type": "multiple",
      "difficulty": "medium",
      "category": "Entertainment: Video Games",
      "question": "The creator of the Touhou Project series is:",
      "correct_answer": "ZUN",
      "incorrect_answers": [
        "SUN",
        "RUN",
        "PUN"
      ]
    },
    {
      "type": "boolean",
      "difficulty": "medium",
      "category": "Entertainment: Video Games",
      "question": "In the game &quot;Subnautica&quot;, a &quot;Cave Crawler&quot; will attack you.",
      "correct_answer": "True",
      "incorrect_answers": [
        "False"
      ]
    },
    {
      "type": "multiple",
      "difficulty": "easy",
      "category": "Geography",
      "question": "What is Laos?",
      "correct_answer": "Country",
      "incorrect_answers": [
        "Region",
        "River",
        "City"
      ]
    }
  ]
}

const question = {
  "response_code": 0,
  "results": [
    {
      "type": "boolean",
      "difficulty": "medium",
      "category": "Entertainment: Video Games",
      "question": "In the game &quot;Subnautica&quot;, a &quot;Cave Crawler&quot; will attack you.",
      "correct_answer": "True",
      "incorrect_answers": [
        "False"
      ]
    },
    {
      "type": "multiple",
      "difficulty": "medium",
      "category": "Entertainment: Video Games",
      "question": "The creator of the Touhou Project series is:",
      "correct_answer": "ZUN",
      "incorrect_answers": [
        "SUN",
        "RUN",
        "PUN"
      ]
    }
  ]
}

const result = {
  totalQuestions: 10,
  correctAnswers: 7,
  quizConfig: {
    type: 'multiple',
    category: 'Science & Nature',
    difficulty: 'hard',
    time: 300,
  },
};

export { typeOfCategory, typeOfDifficulty, typeOfAnswers, typeOfTime, arrayOfQuestions, question, result }
