import { Play } from 'lucide-react';

const CategoryCard = ({ category, onSelect }) => {
  return (
    <div 
      onClick={() => onSelect(category)}
      className={`
        group relative overflow-hidden rounded-2xl border border-gray-700/50 cursor-pointer
        transition-all duration-300 hover:scale-105 hover:shadow-2xl
        bg-gradient-to-br ${category.color}
      `}
    >
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300" />
      
      <div className="relative p-8 text-center text-white">
        <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
          {category.icon}
        </div>
        
        <h3 className="text-2xl font-bold mb-3 group-hover:text-yellow-300 transition-colors duration-300">
          {category.name}
        </h3>
        
        <p className="text-white/80 mb-6 text-lg">
          ۷ سوال جالب و چالش‌برانگیز
        </p>
        
        <div className="flex items-center justify-center gap-3 bg-white/20 backdrop-blur-sm rounded-full py-3 px-6 group-hover:bg-white/30 transition-all duration-300">
          <Play className="w-5 h-5" />
          <span className="font-semibold">شروع کوئیز</span>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 via-pink-400 to-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
    </div>
  );
};

export default CategoryCard;