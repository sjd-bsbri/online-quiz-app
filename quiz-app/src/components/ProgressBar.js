import { BarChart3 } from 'lucide-react';
import useQuizStore from '../store/quizStore';

const toPersianNumbers = (num) => {
  const persianDigits = '۰۱۲۳۴۵۶۷۸۹';
  return num.toString().replace(/\d/g, (digit) => persianDigits[digit]);
};

const ProgressBar = () => {
  const { currentQuestionIndex, questions, getProgress } = useQuizStore();
  
  const progress = getProgress();
  const currentNumber = toPersianNumbers(currentQuestionIndex + 1);
  const totalNumber = toPersianNumbers(questions.length);

  return (
    <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <BarChart3 className="w-6 h-6 text-blue-400" />
          <span className="text-white font-semibold text-lg">
            سوال {currentNumber} از {totalNumber}
          </span>
        </div>
        
        <span className="text-blue-400 font-bold text-lg">
          {toPersianNumbers(Math.round(progress))}%
        </span>
      </div>
      
      <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-all duration-500 ease-out rounded-full relative"
          style={{ width: `${progress}%` }}
        >
          <div className="absolute inset-0 bg-white/20 animate-pulse rounded-full" />
        </div>
      </div>
      
      <div className="mt-3 flex justify-between text-sm text-gray-400">
        <span>آغاز</span>
        <span>پایان</span>
      </div>
    </div>
  );
};

export default ProgressBar;