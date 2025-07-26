import { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import useQuizStore from '../store/quizStore';

// Persian numbers are handled by other components

const QuestionCard = () => {
  const { getCurrentQuestion, answerQuestion } = useQuizStore();
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);
  
  const currentQuestion = getCurrentQuestion();
  
  if (!currentQuestion) return null;

  const handleAnswerSelect = (answerIndex) => {
    if (showAnswer) return;
    
    setSelectedAnswer(answerIndex);
    setShowAnswer(true);
    
    setTimeout(() => {
      answerQuestion(answerIndex);
      setSelectedAnswer(null);
      setShowAnswer(false);
    }, 1500);
  };

  const getOptionClass = (index) => {
    if (!showAnswer) {
      if (selectedAnswer === index) {
        return 'bg-blue-600 border-blue-500 text-white transform scale-105';
      }
      return 'bg-gray-800/50 border-gray-600 hover:border-blue-500 hover:bg-gray-700/50';
    }
    
    if (index === currentQuestion.correct) {
      return 'bg-green-600 border-green-500 text-white';
    }
    
    if (selectedAnswer === index && index !== currentQuestion.correct) {
      return 'bg-red-600 border-red-500 text-white';
    }
    
    return 'bg-gray-800/30 border-gray-600 text-gray-400';
  };

  const persianOptions = ['الف', 'ب', 'ج', 'د'];

  return (
    <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 max-w-4xl mx-auto">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white leading-relaxed text-right">
          {currentQuestion.question}
        </h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {currentQuestion.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswerSelect(index)}
            disabled={showAnswer}
            className={`
              p-6 rounded-xl border-2 transition-all duration-300 text-right
              ${getOptionClass(index)}
              ${!showAnswer ? 'hover:shadow-lg cursor-pointer' : 'cursor-not-allowed'}
            `}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                {showAnswer && index === currentQuestion.correct && (
                  <CheckCircle2 className="w-6 h-6 text-green-300" />
                )}
              </div>
              
              <div className="flex items-center gap-4">
                <span className="text-lg font-medium">
                  {option}
                </span>
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-700 text-white font-bold text-sm">
                  {persianOptions[index]}
                </span>
              </div>
            </div>
          </button>
        ))}
      </div>
      
      {!showAnswer && (
        <p className="text-center text-gray-400 mt-6 text-lg">
          گزینه صحیح را انتخاب کنید
        </p>
      )}
    </div>
  );
};

export default QuestionCard;