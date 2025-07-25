import React, { useEffect } from 'react';
import { Clock, CheckCircle, ArrowLeft } from 'lucide-react';
import useQuizStore from '@/store/quizStore';

const QuizQuestion = () => {
  const {
    getCurrentQuestion,
    currentQuestionIndex,
    questions,
    selectedAnswer,
    timeLeft,
    selectAnswer,
    nextQuestion,
    decrementTime,
    getProgress,
    toPersianNumbers,
    categories,
    currentCategory
  } = useQuizStore();

  const currentQuestion = getCurrentQuestion();
  const progress = getProgress();
  const currentCategoryData = categories[currentCategory];

  useEffect(() => {
    const timer = setInterval(() => {
      decrementTime();
    }, 1000);

    return () => clearInterval(timer);
  }, [decrementTime]);

  const handleAnswerSelect = (answerIndex) => {
    selectAnswer(answerIndex);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer !== null) {
      nextQuestion();
    }
  };

  if (!currentQuestion) return null;

  return (
    <div className="min-h-screen bg-dark-gradient flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        {/* Header */}
        <div className="glass rounded-2xl p-6 mb-6 animate-fade-in">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="text-3xl">{currentCategoryData.icon}</div>
              <div>
                <h2 className="text-xl font-bold text-white">{currentCategoryData.name}</h2>
                <p className="text-dark-300 text-sm">
                  سوال {toPersianNumbers(currentQuestionIndex + 1)} از {toPersianNumbers(questions.length)}
                </p>
              </div>
            </div>
            
            {/* Timer */}
            <div className="flex items-center gap-2">
              <Clock size={20} className={`${timeLeft <= 10 ? 'text-red-400 animate-pulse' : 'text-primary-400'}`} />
              <div className={`text-2xl font-bold ${timeLeft <= 10 ? 'text-red-400 animate-pulse' : 'text-white'}`}>
                {toPersianNumbers(timeLeft)}
              </div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-dark-700 rounded-full h-3 overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-primary-500 to-accent-purple transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Question Card */}
        <div className="glass rounded-2xl p-8 mb-6 animate-fade-in">
          <h3 className="text-2xl md:text-3xl font-bold text-white leading-relaxed text-center mb-8">
            {currentQuestion.question}
          </h3>
        </div>

        {/* Answer Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {currentQuestion.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswerSelect(index)}
              className={`
                glass p-6 rounded-xl text-right transition-all duration-300 transform hover:scale-105 btn-hover
                ${selectedAnswer === index 
                  ? 'bg-gradient-to-r from-primary-500/30 to-accent-purple/30 border-2 border-primary-400' 
                  : 'hover:bg-white/5 border-2 border-transparent'
                }
              `}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`
                    w-8 h-8 rounded-full border-2 flex items-center justify-center text-sm font-bold
                    ${selectedAnswer === index 
                      ? 'bg-primary-500 border-primary-400 text-white' 
                      : 'border-dark-400 text-dark-300'
                    }
                  `}>
                    {toPersianNumbers(index + 1)}
                  </div>
                  {selectedAnswer === index && (
                    <CheckCircle size={20} className="text-primary-400 animate-bounce" />
                  )}
                </div>
                <span className="text-lg font-medium text-white">{option}</span>
              </div>
            </button>
          ))}
        </div>

        {/* Next Button */}
        <div className="flex justify-center animate-fade-in">
          <button
            onClick={handleNextQuestion}
            disabled={selectedAnswer === null}
            className={`
              px-8 py-4 rounded-xl font-bold text-lg flex items-center gap-3 transition-all duration-300 btn-hover
              ${selectedAnswer !== null
                ? 'bg-gradient-to-r from-accent-emerald to-green-600 text-white hover:scale-105 shadow-lg shadow-green-500/25'
                : 'bg-dark-600 text-dark-400 cursor-not-allowed'
              }
            `}
          >
            <ArrowLeft size={24} className="rotate-180" />
            {currentQuestionIndex === questions.length - 1 ? 'مشاهده نتایج' : 'سوال بعدی'}
          </button>
        </div>

        {/* Question Counter */}
        <div className="flex justify-center mt-6">
          <div className="flex gap-2">
            {questions.map((_, index) => (
              <div
                key={index}
                className={`
                  w-3 h-3 rounded-full transition-all duration-300
                  ${index < currentQuestionIndex 
                    ? 'bg-accent-emerald' 
                    : index === currentQuestionIndex 
                    ? 'bg-primary-500 scale-125' 
                    : 'bg-dark-600'
                  }
                `}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizQuestion;