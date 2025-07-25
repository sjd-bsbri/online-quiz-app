import React from 'react';
import { Play } from 'lucide-react';
import useQuizStore from '@/store/quizStore';

const CategorySelector = () => {
  const { categories, startQuiz } = useQuizStore();

  const handleCategorySelect = (categoryKey) => {
    startQuiz(categoryKey);
  };

  return (
    <div className="min-h-screen bg-dark-gradient flex items-center justify-center p-4">
      <div className="max-w-6xl w-full">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-4">
            کویز آنلاین
          </h1>
          <p className="text-dark-300 text-xl md:text-2xl font-light">
            موضوع مورد علاقه خود را انتخاب کنید
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-purple mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(categories).map(([key, category], index) => (
            <div
              key={key}
              className="group relative overflow-hidden rounded-2xl glass card-hover cursor-pointer transform transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => handleCategorySelect(key)}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}></div>
              
              {/* Content */}
              <div className="relative p-8 text-center">
                {/* Icon */}
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </div>
                
                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary-300 transition-colors duration-300">
                  {category.name}
                </h3>
                
                {/* Question Count */}
                <p className="text-dark-300 mb-6">
                  ۷ سوال متنوع و جذاب
                </p>
                
                {/* Play Button */}
                <div className="flex items-center justify-center">
                  <button className="btn-hover bg-gradient-to-r from-primary-500 to-primary-600 text-white px-6 py-3 rounded-xl font-semibold flex items-center gap-2 group-hover:scale-105 transition-transform duration-300">
                    <Play size={20} className="rotate-180" />
                    شروع کویز
                  </button>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-br from-white/10 to-white/5 rounded-full blur-sm"></div>
              <div className="absolute bottom-4 left-4 w-8 h-8 bg-gradient-to-br from-white/10 to-white/5 rounded-full blur-sm"></div>
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="text-center mt-12 animate-fade-in">
          <p className="text-dark-400 text-sm">
            هر کویز شامل ۷ سوال با تایمر ۳۰ ثانیه‌ای است
          </p>
          <div className="flex items-center justify-center mt-4 gap-2">
            <div className="w-2 h-2 bg-primary-500 rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-accent-purple rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-2 h-2 bg-accent-pink rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategorySelector;