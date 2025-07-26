import { create } from 'zustand';
import { getRandomQuestions } from '../data/quizData';

const useQuizStore = create((set, get) => ({
  // State
  currentCategory: null,
  questions: [],
  currentQuestionIndex: 0,
  userAnswers: [],
  score: 0,
  timeLeft: 300, // 5 minutes
  isQuizActive: false,
  isQuizCompleted: false,
  showResults: false,

  // Actions
  startQuiz: (category) => {
    const randomQuestions = getRandomQuestions(category);
    set({
      currentCategory: category,
      questions: randomQuestions,
      currentQuestionIndex: 0,
      userAnswers: [],
      score: 0,
      timeLeft: 300,
      isQuizActive: true,
      isQuizCompleted: false,
      showResults: false,
    });
  },

  answerQuestion: (answerIndex) => {
    const { questions, currentQuestionIndex, userAnswers, score } = get();
    const currentQuestion = questions[currentQuestionIndex];
    const isCorrect = answerIndex === currentQuestion.correct;
    
    const newUserAnswers = [...userAnswers, answerIndex];
    const newScore = isCorrect ? score + 1 : score;
    
    set({
      userAnswers: newUserAnswers,
      score: newScore,
    });

    // Move to next question or complete quiz
    if (currentQuestionIndex < questions.length - 1) {
      set({ currentQuestionIndex: currentQuestionIndex + 1 });
    } else {
      set({
        isQuizActive: false,
        isQuizCompleted: true,
        showResults: true,
      });
    }
  },

  setTimeLeft: (time) => {
    set({ timeLeft: time });
    
    // If time runs out, complete the quiz
    if (time === 0) {
      set({
        isQuizActive: false,
        isQuizCompleted: true,
        showResults: true,
      });
    }
  },

  resetQuiz: () => {
    set({
      currentCategory: null,
      questions: [],
      currentQuestionIndex: 0,
      userAnswers: [],
      score: 0,
      timeLeft: 300,
      isQuizActive: false,
      isQuizCompleted: false,
      showResults: false,
    });
  },

  restartQuiz: () => {
    const { currentCategory } = get();
    if (currentCategory) {
      const randomQuestions = getRandomQuestions(currentCategory);
      set({
        questions: randomQuestions,
        currentQuestionIndex: 0,
        userAnswers: [],
        score: 0,
        timeLeft: 300,
        isQuizActive: true,
        isQuizCompleted: false,
        showResults: false,
      });
    }
  },

  // Getters
  getCurrentQuestion: () => {
    const { questions, currentQuestionIndex } = get();
    return questions[currentQuestionIndex];
  },

  getProgress: () => {
    const { currentQuestionIndex, questions } = get();
    return ((currentQuestionIndex + 1) / questions.length) * 100;
  },

  getScorePercentage: () => {
    const { score, questions } = get();
    return Math.round((score / questions.length) * 100);
  },
}));

export default useQuizStore;