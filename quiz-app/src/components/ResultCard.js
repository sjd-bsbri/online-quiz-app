import { Trophy, RotateCcw, Home, Award, Target, Clock } from 'lucide-react';
import useQuizStore from '../store/quizStore';

const toPersianNumbers = (num) => {
  const persianDigits = '۰۱۲۳۴۵۶۷۸۹';
  return num.toString().replace(/\d/g, (digit) => persianDigits[digit]);
};

const ResultCard = () => {
  const { 
    score, 
    questions, 
    currentCategory, 
    getScorePercentage, 
    restartQuiz, 
    resetQuiz,
    timeLeft 
  } = useQuizStore();
  
  const scorePercentage = getScorePercentage();
  const timeUsed = 300 - timeLeft; // زمان استفاده شده
  
  const getScoreMessage = () => {
    if (scorePercentage >= 90) return 'عالی! شما استاد هستید! 🎉';
    if (scorePercentage >= 70) return 'خیلی خوب! عملکرد قابل تحسین 👏';
    if (scorePercentage >= 50) return 'خوب! می‌توانید بهتر شوید 💪';
    return 'نیاز به تمرین بیشتر دارید 📚';
  };

  const getScoreColor = () => {
    if (scorePercentage >= 90) return 'text-green-400';
    if (scorePercentage >= 70) return 'text-blue-400';
    if (scorePercentage >= 50) return 'text-yellow-400';
    return 'text-red-400';
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${toPersianNumbers(mins)} دقیقه و ${toPersianNumbers(secs)} ثانیه`;
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 text-center">
        {/* Header */}
        <div className="mb-8">
          <div className="flex justify-center mb-4">
            <div className={`p-6 rounded-full bg-gradient-to-br ${currentCategory?.color || 'from-purple-600 to-blue-600'}`}>
              <Trophy className="w-12 h-12 text-white" />
            </div>
          </div>
          
          <h2 className="text-3xl font-bold text-white mb-3">
            نتایج کوئیز {currentCategory?.name}
          </h2>
          
          <p className={`text-xl font-semibold ${getScoreColor()}`}>
            {getScoreMessage()}
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gray-700/50 rounded-xl p-6">
            <div className="flex items-center justify-center gap-3 mb-2">
              <Target className="w-6 h-6 text-blue-400" />
              <span className="text-gray-300">امتیاز</span>
            </div>
            <div className={`text-3xl font-bold ${getScoreColor()}`}>
              {toPersianNumbers(score)} / {toPersianNumbers(questions.length)}
            </div>
            <div className={`text-lg font-semibold ${getScoreColor()}`}>
              {toPersianNumbers(scorePercentage)}%
            </div>
          </div>
          
          <div className="bg-gray-700/50 rounded-xl p-6">
            <div className="flex items-center justify-center gap-3 mb-2">
              <Award className="w-6 h-6 text-yellow-400" />
              <span className="text-gray-300">درصد موفقیت</span>
            </div>
            <div className="text-3xl font-bold text-yellow-400">
              {toPersianNumbers(scorePercentage)}%
            </div>
          </div>
          
          <div className="bg-gray-700/50 rounded-xl p-6">
            <div className="flex items-center justify-center gap-3 mb-2">
              <Clock className="w-6 h-6 text-green-400" />
              <span className="text-gray-300">زمان استفاده</span>
            </div>
            <div className="text-lg font-bold text-green-400">
              {formatTime(timeUsed)}
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="w-full bg-gray-700 rounded-full h-4 overflow-hidden">
            <div 
              className={`h-full transition-all duration-1000 rounded-full ${
                scorePercentage >= 90 ? 'bg-gradient-to-r from-green-500 to-emerald-500' :
                scorePercentage >= 70 ? 'bg-gradient-to-r from-blue-500 to-cyan-500' :
                scorePercentage >= 50 ? 'bg-gradient-to-r from-yellow-500 to-orange-500' :
                'bg-gradient-to-r from-red-500 to-pink-500'
              }`}
              style={{ width: `${scorePercentage}%` }}
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={restartQuiz}
            className="flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
          >
            <RotateCcw className="w-5 h-5" />
            تکرار کوئیز
          </button>
          
          <button
            onClick={resetQuiz}
            className="flex items-center justify-center gap-3 bg-gray-600 hover:bg-gray-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
          >
            <Home className="w-5 h-5" />
            بازگشت به خانه
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultCard;