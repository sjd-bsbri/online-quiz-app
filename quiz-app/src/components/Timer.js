import { useEffect } from 'react';
import { Clock } from 'lucide-react';
import useQuizStore from '../store/quizStore';

const toPersianNumbers = (num) => {
  const persianDigits = '۰۱۲۳۴۵۶۷۸۹';
  return num.toString().replace(/\d/g, (digit) => persianDigits[digit]);
};

const Timer = () => {
  const { timeLeft, setTimeLeft, isQuizActive } = useQuizStore();

  useEffect(() => {
    let interval = null;
    
    if (isQuizActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [timeLeft, isQuizActive, setTimeLeft]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${toPersianNumbers(mins.toString().padStart(2, '0'))}:${toPersianNumbers(secs.toString().padStart(2, '0'))}`;
  };

  const getTimerColor = () => {
    if (timeLeft > 120) return 'text-green-400';
    if (timeLeft > 60) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getProgressWidth = () => {
    return (timeLeft / 300) * 100;
  };

  return (
    <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
      <div className="flex items-center justify-center gap-3 mb-4">
        <Clock className={`w-6 h-6 ${getTimerColor()}`} />
        <span className={`text-2xl font-bold ${getTimerColor()}`}>
          {formatTime(timeLeft)}
        </span>
      </div>
      
      <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
        <div 
          className={`h-2 rounded-full transition-all duration-1000 ${
            timeLeft > 120 ? 'bg-green-400' : 
            timeLeft > 60 ? 'bg-yellow-400' : 'bg-red-400'
          }`}
          style={{ width: `${getProgressWidth()}%` }}
        />
      </div>
      
      <p className="text-center text-gray-400 text-sm font-medium">
        زمان باقی‌مانده
      </p>
    </div>
  );
};

export default Timer;