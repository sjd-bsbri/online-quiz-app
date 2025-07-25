import React from 'react';
import { Trophy, RotateCcw, Home, CheckCircle, XCircle, Star } from 'lucide-react';
import useQuizStore from '@/store/quizStore';

const QuizResults = () => {
  const {
    score,
    questions,
    userAnswers,
    getScorePercentage,
    resetQuiz,
    toPersianNumbers,
    categories,
    currentCategory
  } = useQuizStore();

  const scorePercentage = getScorePercentage();
  const currentCategoryData = categories[currentCategory];

  const getScoreMessage = () => {
    if (scorePercentage >= 90) return { message: 'عالی! شما استاد این موضوع هستید!', color: 'text-yellow-400', icon: '🏆' };
    if (scorePercentage >= 70) return { message: 'خیلی خوب! عملکرد قابل تحسینی داشتید', color: 'text-green-400', icon: '🎉' };
    if (scorePercentage >= 50) return { message: 'نه بد! می‌توانید بهتر شوید', color: 'text-blue-400', icon: '👍' };
    return { message: 'نیاز به تمرین بیشتر دارید', color: 'text-orange-400', icon: '💪' };
  };

  const scoreMessage = getScoreMessage();

  const handleRestart = () => {
    resetQuiz();
  };

  return (
    <div className="min-h-screen bg-dark-gradient flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        {/* Header */}
        <div className="text-center mb-8 animate-fade-in">
          <div className="text-6xl mb-4">{scoreMessage.icon}</div>
          <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            نتایج کویز
          </h1>
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="text-3xl">{currentCategoryData.icon}</div>
            <h2 className="text-2xl font-bold text-white">{currentCategoryData.name}</h2>
          </div>
        </div>

        {/* Score Card */}
        <div className="glass rounded-2xl p-8 mb-8 text-center animate-fade-in">
          <div className="flex items-center justify-center mb-6">
            <div className="relative">
              <div className="w-32 h-32 rounded-full border-8 border-dark-600 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl font-bold text-white">
                    {toPersianNumbers(score)}
                  </div>
                  <div className="text-dark-300">از {toPersianNumbers(questions.length)}</div>
                </div>
              </div>
              <div 
                className="absolute inset-0 rounded-full border-8 border-transparent"
                style={{
                  background: `conic-gradient(from 0deg, #3b82f6 0deg, #3b82f6 ${scorePercentage * 3.6}deg, transparent ${scorePercentage * 3.6}deg)`,
                  borderRadius: '50%'
                }}
              ></div>
            </div>
          </div>

          <div className="mb-4">
            <div className="text-3xl font-bold text-white mb-2">
              {toPersianNumbers(scorePercentage)}٪
            </div>
            <p className={`text-xl font-medium ${scoreMessage.color}`}>
              {scoreMessage.message}
            </p>
          </div>

          {/* Score Stars */}
          <div className="flex justify-center gap-1 mb-6">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                size={24}
                className={`${scorePercentage >= star * 20 ? 'text-yellow-400 fill-current' : 'text-dark-500'} transition-colors duration-300`}
              />
            ))}
          </div>
        </div>

        {/* Detailed Results */}
        <div className="glass rounded-2xl p-6 mb-8 animate-fade-in">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            بررسی دقیق پاسخ‌ها
          </h3>
          
          <div className="space-y-4 max-h-96 overflow-y-auto">
            {userAnswers.map((answer, index) => (
              <div
                key={answer.questionId}
                className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                  answer.isCorrect 
                    ? 'bg-green-500/10 border-green-400/30' 
                    : 'bg-red-500/10 border-red-400/30'
                }`}
              >
                <div className="flex items-start gap-3 mb-3">
                  {answer.isCorrect ? (
                    <CheckCircle size={24} className="text-green-400 flex-shrink-0 mt-1" />
                  ) : (
                    <XCircle size={24} className="text-red-400 flex-shrink-0 mt-1" />
                  )}
                  <div className="flex-1">
                    <h4 className="font-semibold text-white mb-2">
                      سوال {toPersianNumbers(index + 1)}: {answer.question}
                    </h4>
                    
                    <div className="space-y-2 text-sm">
                      <div className={`${answer.isCorrect ? 'text-green-300' : 'text-red-300'}`}>
                        پاسخ شما: {answer.selectedAnswer !== null ? answer.options[answer.selectedAnswer] : 'پاسخ داده نشد'}
                      </div>
                      {!answer.isCorrect && (
                        <div className="text-green-300">
                          پاسخ صحیح: {answer.options[answer.correctAnswer]}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
          <button
            onClick={handleRestart}
            className="btn-hover bg-gradient-to-r from-primary-500 to-primary-600 text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-3 hover:scale-105 transition-transform duration-300"
          >
            <Home size={24} />
            بازگشت به صفحه اصلی
          </button>
          
          <button
            onClick={() => window.location.reload()}
            className="btn-hover bg-gradient-to-r from-accent-emerald to-green-600 text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-3 hover:scale-105 transition-transform duration-300"
          >
            <RotateCcw size={24} />
            تکرار کویز
          </button>
        </div>

        {/* Achievement Badge */}
        {scorePercentage >= 80 && (
          <div className="text-center mt-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-400/30 rounded-full px-6 py-3">
              <Trophy size={20} className="text-yellow-400" />
              <span className="text-yellow-400 font-semibold">
                مدال طلا دریافت کردید!
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizResults;