import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};

export const GenerativeAIQuizData_AiModel = model.startChat({
  generationConfig,
  history: [
    {
      role: "user",
      parts: [
        {
          text: 'export const Prompt = `{\n "topic": "Javascript",\n  "level": "easy",\n  "totalQuestions": 5,\n  "questionList": [\n   {\n   "question":  "What is javascript?",\n"options":  [   "Programming Language", "Framework", "Library", "None of these"  ], "correct": 1", "marked": undefined\n  },\n  ],  }, Depending on provided JSON data, generate a level :{level} level quiz on topic :{topic}. Include {count} multiple choice questions, each with four options with one correct answer.`;',
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: '```json\n{\n    "topic": "Javascript",\n    "level": "easy",\n    "totalQuestions": 5,\n    "questionList": [\n        {\n            "question": "What is javascript?",\n            "options": [ "Programming Language", "Framework", "Library", "None of these" ],\n            "correct": 0", "marked": undefined\n        },\n        {\n            "question": "Which type of language is JavaScript?",\n            "options": [ "Compiled", "Interpreted", "Both", "None of these" ],\n            "correct": 1", "marked": undefined\n        },\n        {\n            "question": "What does DOM stand for in the context of JavaScript?",\n            "options": [ "Document Object Model", "Data Object Model", "Digital Object Model", "Dynamic Object Model" ],\n            "correct": 0", "marked": undefined\n        },\n        {\n            "question": "What is the primary purpose of the \'this\' keyword in JavaScript?",\n            "options": [ "To define a variable", "To reference the current object", "To declare a function", "To create a loop" ],\n            "correct": 1\n        },\n        {\n            "question": "Which one is NOT a JavaScript data type?",\n            "options": [ "String", "Number", "Boolean", "Float" ],\n            "correct": 3 \n        }\n    ],\n},\n        {\n            "question": "Which type of language is JavaScript?",\n            "options": [ "Compiled", "Interpreted", "Both", "None of these" ],\n            "correct": 1\n        },\n        {\n            "question": "Which type of language is JavaScript?",\n            "options": [ "Compiled", "Interpreted", "Both", "None of these" ],\n            "correct": 1\n        },\n        {\n            "question": "Which type of language is JavaScript?",\n            "options": [ "Compiled", "Interpreted", "Both", "None of these" ],\n            "correct": 1\n        },\n        {\n            "question": "Which type of language is JavaScript?",\n            "options": [ "Compiled", "Interpreted", "Both", "None of these" ],\n            "correct": 1\n        },\n        {\n            "question": "Which type of language is JavaScript?",\n            "options": [ "Compiled", "Interpreted", "Both", "None of these" ],\n            "correct": 1\n        },\n```\n',
        },
      ],
    },
  ],
});
