import { create } from 'zustand';

// Persian numbers conversion
const toPersianNumbers = (num) => {
  const persianDigits = '۰۱۲۳۴۵۶۷۸۹';
  return num.toString().replace(/\d/g, (digit) => persianDigits[digit]);
};

// Quiz questions data
const quizData = {
  intelligence: {
    name: 'هوش و ذکاوت',
    icon: '🧠',
    color: 'from-purple-500 to-indigo-600',
    questions: [
      {
        id: 1,
        question: 'اگر ۵ گربه در ۵ دقیقه ۵ موش بگیرند، ۱۰۰ گربه در چند دقیقه ۱۰۰ موش می‌گیرند؟',
        options: ['۱۰۰ دقیقه', '۵ دقیقه', '۲۰ دقیقه', '۱ دقیقه'],
        correct: 1
      },
      {
        id: 2,
        question: 'کدام عدد در این دنباله جای خود را ندارد؟ ۲، ۳، ۶، ۷، ۸، ۱۴، ۱۵',
        options: ['۳', '۸', '۶', '۱۴'],
        correct: 2
      },
      {
        id: 3,
        question: 'اگر A=۱، B=۲، C=۳ باشد، QUIZ چند می‌شود؟',
        options: ['۶۴', '۵۷', '۷۲', '۴۹'],
        correct: 1
      },
      {
        id: 4,
        question: 'در یک جعبه ۱۲ توپ قرمز، ۱۶ توپ آبی و ۱۸ توپ سبز وجود دارد. حداقل چند توپ باید برداریم تا مطمئن باشیم ۳ توپ هم‌رنگ داریم؟',
        options: ['۳', '۷', '۹', '۱۲'],
        correct: 1
      },
      {
        id: 5,
        question: 'کدام کلمه با بقیه متفاوت است؟',
        options: ['میز', 'صندلی', 'کتاب', 'کمد'],
        correct: 2
      },
      {
        id: 6,
        question: 'اگر امروز دوشنبه باشد، ۱۰۰ روز بعد چه روزی است؟',
        options: ['چهارشنبه', 'پنج‌شنبه', 'جمعه', 'شنبه'],
        correct: 0
      },
      {
        id: 7,
        question: 'در یک مثلث قائم‌الزاویه، اگر دو ضلع قائمه ۳ و ۴ باشند، وتر چقدر است؟',
        options: ['۵', '۷', '۶', '۸'],
        correct: 0
      }
    ]
  },
  english: {
    name: 'زبان انگلیسی',
    icon: '🇬🇧',
    color: 'from-blue-500 to-cyan-600',
    questions: [
      {
        id: 1,
        question: 'کدام کلمه معنی "شجاع" را می‌دهد؟',
        options: ['Coward', 'Brave', 'Weak', 'Afraid'],
        correct: 1
      },
      {
        id: 2,
        question: 'Past tense فعل "go" چیست؟',
        options: ['Goed', 'Gone', 'Went', 'Going'],
        correct: 2
      },
      {
        id: 3,
        question: 'کدام جمله درست است؟',
        options: ['I am agree', 'I agree', 'I am agreeing', 'I agreed am'],
        correct: 1
      },
      {
        id: 4,
        question: 'معنی کلمه "Beautiful" چیست؟',
        options: ['زشت', 'زیبا', 'بزرگ', 'کوچک'],
        correct: 1
      },
      {
        id: 5,
        question: 'کدام کلمه جمع "Child" است؟',
        options: ['Childs', 'Childes', 'Children', 'Childer'],
        correct: 2
      },
      {
        id: 6,
        question: 'معنی "Library" چیست؟',
        options: ['کتابخانه', 'کتابفروشی', 'مدرسه', 'دانشگاه'],
        correct: 0
      },
      {
        id: 7,
        question: 'کدام پیشوند معنی "نه" یا "غیر" می‌دهد؟',
        options: ['Pre-', 'Un-', 'Re-', 'Over-'],
        correct: 1
      }
    ]
  },
  sports: {
    name: 'ورزش',
    icon: '⚽',
    color: 'from-green-500 to-emerald-600',
    questions: [
      {
        id: 1,
        question: 'چند بازیکن در یک تیم فوتبال در زمین حضور دارند؟',
        options: ['۱۰', '۱۱', '۱۲', '۹'],
        correct: 1
      },
      {
        id: 2,
        question: 'المپیک تابستانی ۲۰۲۴ در کدام شهر برگزار شد؟',
        options: ['توکیو', 'پاریس', 'لندن', 'ریو'],
        correct: 1
      },
      {
        id: 3,
        question: 'در بازی والیبال، تیم برنده اولین ست تا چه امتیازی بازی می‌کند؟',
        options: ['۲۱', '۲۵', '۳۰', '۱۵'],
        correct: 1
      },
      {
        id: 4,
        question: 'کدام ورزشکار ایرانی مدال طلای المپیک کسب کرده است؟',
        options: ['حسن یزدانی', 'کیومرث هاشمی', 'جواد فروغی', 'همه موارد'],
        correct: 3
      },
      {
        id: 5,
        question: 'در تنیس، امتیاز صفر را چه می‌نامند؟',
        options: ['Zero', 'Love', 'Nothing', 'Nil'],
        correct: 1
      },
      {
        id: 6,
        question: 'چند دور در یک مسابقه فرمول یک معمولاً وجود دارد؟',
        options: ['۵۰-۷۰', '۲۰-۳۰', '۸۰-۱۰۰', '۱۰-۲۰'],
        correct: 0
      },
      {
        id: 7,
        question: 'کدام کشور بیشترین جام جهانی فوتبال را برده است؟',
        options: ['آلمان', 'آرژانتین', 'برزیل', 'ایتالیا'],
        correct: 2
      }
    ]
  },
  general: {
    name: 'اطلاعات عمومی',
    icon: '🌍',
    color: 'from-orange-500 to-red-600',
    questions: [
      {
        id: 1,
        question: 'پایتخت استرالیا کدام شهر است؟',
        options: ['سیدنی', 'ملبورن', 'کانبرا', 'پرث'],
        correct: 2
      },
      {
        id: 2,
        question: 'کدام عنصر بیشترین درصد جو زمین را تشکیل می‌دهد؟',
        options: ['اکسیژن', 'نیتروژن', 'کربن دی اکسید', 'هیدروژن'],
        correct: 1
      },
      {
        id: 3,
        question: 'بزرگترین اقیانوس جهان کدام است؟',
        options: ['اطلس', 'هند', 'آرام', 'منجمد شمالی'],
        correct: 2
      },
      {
        id: 4,
        question: 'کدام کشور بیشترین جمعیت جهان را دارد؟',
        options: ['هند', 'چین', 'آمریکا', 'اندونزی'],
        correct: 0
      },
      {
        id: 5,
        question: 'نخستین انسانی که به ماه قدم گذاشت چه نام داشت؟',
        options: ['یوری گاگارین', 'نیل آرمسترانگ', 'باز آلدرین', 'جان گلن'],
        correct: 1
      },
      {
        id: 6,
        question: 'کدام ویتامین از نور خورشید تولید می‌شود؟',
        options: ['ویتامین A', 'ویتامین B', 'ویتامین C', 'ویتامین D'],
        correct: 3
      },
      {
        id: 7,
        question: 'طولانی‌ترین رودخانه جهان کدام است؟',
        options: ['آمازون', 'نیل', 'یانگ‌تسه', 'میسی‌سی‌پی'],
        correct: 1
      }
    ]
  },
  science: {
    name: 'علوم',
    icon: '🔬',
    color: 'from-teal-500 to-blue-600',
    questions: [
      {
        id: 1,
        question: 'کدام سیاره به سیاره سرخ معروف است؟',
        options: ['زهره', 'مریخ', 'مشتری', 'زحل'],
        correct: 1
      },
      {
        id: 2,
        question: 'فرمول شیمیایی آب چیست؟',
        options: ['H2O', 'CO2', 'NaCl', 'CH4'],
        correct: 0
      },
      {
        id: 3,
        question: 'سرعت نور در خلاء چقدر است؟',
        options: ['۳۰۰,۰۰۰ کیلومتر بر ثانیه', '۳۰۰,۰۰۰,۰۰۰ متر بر ثانیه', '۱۵۰,۰۰۰,۰۰۰ کیلومتر بر ثانیه', '۲۹۹,۷۹۲,۴۵۸ متر بر ثانیه'],
        correct: 1
      },
      {
        id: 4,
        question: 'کدام عضو بدن انسان اکسیژن تولید نمی‌کند؟',
        options: ['ریه', 'کبد', 'قلب', 'مغز'],
        correct: 0
      },
      {
        id: 5,
        question: 'کوچکترین واحد ماده چیست؟',
        options: ['مولکول', 'اتم', 'پروتون', 'الکترون'],
        correct: 1
      },
      {
        id: 6,
        question: 'کدام فلز در دمای اتاق مایع است؟',
        options: ['طلا', 'نقره', 'جیوه', 'مس'],
        correct: 2
      },
      {
        id: 7,
        question: 'قانون جاذبه عمومی توسط چه کسی کشف شد؟',
        options: ['انیشتین', 'نیوتن', 'گالیله', 'کپلر'],
        correct: 1
      }
    ]
  },
  history: {
    name: 'تاریخ',
    icon: '🏛️',
    color: 'from-amber-500 to-orange-600',
    questions: [
      {
        id: 1,
        question: 'جنگ جهانی دوم در چه سالی به پایان رسید؟',
        options: ['۱۹۴۴', '۱۹۴۵', '۱۹۴۶', '۱۹۴۳'],
        correct: 1
      },
      {
        id: 2,
        question: 'کدام تمدن هرم‌های مصر را ساخت؟',
        options: ['بابلی‌ها', 'یونانیان', 'مصریان باستان', 'رومیان'],
        correct: 2
      },
      {
        id: 3,
        question: 'انقلاب فرانسه در چه سالی رخ داد؟',
        options: ['۱۷۸۹', '۱۷۹۲', '۱۷۸۵', '۱۸۰۰'],
        correct: 0
      },
      {
        id: 4,
        question: 'کدام پادشاه ایرانی هخامنشیان را بنیان گذاشت؟',
        options: ['داریوش', 'کوروش', 'خشایارشا', 'کمبوجیه'],
        correct: 1
      },
      {
        id: 5,
        question: 'کشف قاره آمریکا به چه کسی نسبت داده می‌شود؟',
        options: ['کریستف کلمب', 'واسکو داگاما', 'مارکوپولو', 'مژلان'],
        correct: 0
      },
      {
        id: 6,
        question: 'کدام امپراتوری بزرگترین امپراتوری خشکی تاریخ بوده است؟',
        options: ['امپراتوری روم', 'امپراتوری مغول', 'امپراتوری بریتانیا', 'امپراتوری عثمانی'],
        correct: 1
      },
      {
        id: 7,
        question: 'جنگ صد ساله بین کدام کشورها رخ داد؟',
        options: ['انگلیس و فرانسه', 'اسپانیا و پرتغال', 'آلمان و فرانسه', 'ایتالیا و اتریش'],
        correct: 0
      }
    ]
  }
};

const useQuizStore = create((set, get) => ({
  // State
  currentCategory: null,
  questions: [],
  currentQuestionIndex: 0,
  selectedAnswer: null,
  score: 0,
  timeLeft: 30,
  isQuizActive: false,
  isQuizCompleted: false,
  showResults: false,
  userAnswers: [],
  
  // Persian number conversion utility
  toPersianNumbers,
  
  // Quiz data
  categories: quizData,
  
  // Actions
  startQuiz: (categoryKey) => {
    const category = quizData[categoryKey];
    const shuffledQuestions = [...category.questions].sort(() => Math.random() - 0.5);
    
    set({
      currentCategory: categoryKey,
      questions: shuffledQuestions,
      currentQuestionIndex: 0,
      selectedAnswer: null,
      score: 0,
      timeLeft: 30,
      isQuizActive: true,
      isQuizCompleted: false,
      showResults: false,
      userAnswers: []
    });
  },
  
  selectAnswer: (answerIndex) => {
    set({ selectedAnswer: answerIndex });
  },
  
  nextQuestion: () => {
    const state = get();
    const currentQuestion = state.questions[state.currentQuestionIndex];
    const isCorrect = state.selectedAnswer === currentQuestion.correct;
    
    const newUserAnswers = [...state.userAnswers, {
      questionId: currentQuestion.id,
      question: currentQuestion.question,
      selectedAnswer: state.selectedAnswer,
      correctAnswer: currentQuestion.correct,
      isCorrect,
      options: currentQuestion.options
    }];
    
    const newScore = isCorrect ? state.score + 1 : state.score;
    
    if (state.currentQuestionIndex < state.questions.length - 1) {
      set({
        currentQuestionIndex: state.currentQuestionIndex + 1,
        selectedAnswer: null,
        score: newScore,
        timeLeft: 30,
        userAnswers: newUserAnswers
      });
    } else {
      set({
        score: newScore,
        isQuizActive: false,
        isQuizCompleted: true,
        userAnswers: newUserAnswers
      });
    }
  },
  
  decrementTime: () => {
    const state = get();
    if (state.timeLeft > 0) {
      set({ timeLeft: state.timeLeft - 1 });
    } else {
      // Time's up, move to next question
      state.nextQuestion();
    }
  },
  
  showResultsScreen: () => {
    set({ showResults: true });
  },
  
  resetQuiz: () => {
    set({
      currentCategory: null,
      questions: [],
      currentQuestionIndex: 0,
      selectedAnswer: null,
      score: 0,
      timeLeft: 30,
      isQuizActive: false,
      isQuizCompleted: false,
      showResults: false,
      userAnswers: []
    });
  },
  
  // Getters
  getCurrentQuestion: () => {
    const state = get();
    return state.questions[state.currentQuestionIndex];
  },
  
  getProgress: () => {
    const state = get();
    return ((state.currentQuestionIndex + 1) / state.questions.length) * 100;
  },
  
  getScorePercentage: () => {
    const state = get();
    return Math.round((state.score / state.questions.length) * 100);
  }
}));

export default useQuizStore;