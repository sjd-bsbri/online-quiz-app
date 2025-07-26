'use client';

import { Brain, Sparkles } from 'lucide-react';
import useQuizStore from '../store/quizStore';
import { quizCategories } from '../data/quizData';
import CategoryCard from '../components/CategoryCard';
import QuestionCard from '../components/QuestionCard';
import Timer from '../components/Timer';
import ProgressBar from '../components/ProgressBar';
import ResultCard from '../components/ResultCard';

export default function Home() {
  const { 
    isQuizActive, 
    showResults, 
    startQuiz,
    currentCategory 
  } = useQuizStore();

  const handleCategorySelect = (category) => {
    startQuiz(category);
  };

  if (showResults) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute top-0 right-0 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 py-8">
          <ResultCard />
        </div>
      </div>
    );
  }

  if (isQuizActive) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute top-0 right-0 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 py-8">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className={`p-3 rounded-full bg-gradient-to-br ${currentCategory?.color || 'from-purple-600 to-blue-600'}`}>
                <span className="text-2xl">{currentCategory?.icon}</span>
              </div>
              <h1 className="text-3xl font-bold text-white">
                کوئیز {currentCategory?.name}
              </h1>
            </div>
          </div>

          {/* Quiz Interface */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {/* Left Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              <Timer />
              <ProgressBar />
            </div>

            {/* Main Question Area */}
            <div className="lg:col-span-3">
              <QuestionCard />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-6000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="p-4 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full">
              <Brain className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-5xl font-bold text-white bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              کوئیز آنلاین
            </h1>
            <div className="p-4 bg-gradient-to-br from-pink-600 to-purple-600 rounded-full">
              <Sparkles className="w-12 h-12 text-white" />
            </div>
          </div>
          
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            با کوئیز‌های جذاب و متنوع دانش خود را محک بزنید و در موضوعات مختلف مهارت‌هایتان را بسنجید
          </p>
        </div>

        {/* Categories Grid */}
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-white mb-8">
            دسته‌بندی‌های کوئیز
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {quizCategories.map((category) => (
              <CategoryCard
                key={category.id}
                category={category}
                onSelect={handleCategorySelect}
              />
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="mt-16 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center text-white mb-8">
            ویژگی‌های کوئیز
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 text-center">
              <div className="text-3xl mb-4">⏱️</div>
              <h4 className="text-xl font-semibold text-white mb-2">تایمر هوشمند</h4>
              <p className="text-gray-300">۵ دقیقه زمان برای پاسخ به سوالات</p>
            </div>
            
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 text-center">
              <div className="text-3xl mb-4">🎯</div>
              <h4 className="text-xl font-semibold text-white mb-2">نتایج دقیق</h4>
              <p className="text-gray-300">تحلیل کامل عملکرد و نمایش نتایج</p>
            </div>
            
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 text-center">
              <div className="text-3xl mb-4">🔄</div>
              <h4 className="text-xl font-semibold text-white mb-2">سوالات رندوم</h4>
              <p className="text-gray-300">هر بار سوالات متفاوت و جدید</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}