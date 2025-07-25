# صرافی نوبیتکس - Nobitex Cryptocurrency Exchange

یک پلتفرم کامل و حرفه‌ای برای معامله ارزهای دیجیتال که شبیه‌سازی صرافی نوبیتکس است. این پروژه با استفاده از تکنولوژی‌های مدرن و بهترین روش‌های توسعه ساخته شده است.

## 🚀 ویژگی‌ها

### 📊 داشبورد جامع
- نمای کلی بازار ارزهای دیجیتال
- قیمت‌های لحظه‌ای از CoinGecko API
- آمار بازار و حجم معاملات
- اخبار و به‌روزرسانی‌های بازار

### 💰 کیف پول هوشمند
- مدیریت دارایی‌های کریپتو
- نمودار توزیع پورتفولیو
- محاسبه سود و زیان
- امکان مخفی کردن موجودی

### 📈 رابط معاملاتی پیشرفته
- نمودار قیمت تعاملی
- دفتر سفارشات (Order Book)
- معاملات اخیر
- انواع سفارش (بازار و محدود)
- خرید و فروش آسان

### 🔐 امنیت بالا
- احراز هویت کاربران
- مدیریت session با Zustand
- اعتبارسنجی داده با Zod
- پیام‌های خطا و هشدار

### 🎨 طراحی زیبا و کاربرپسند
- رابط کاربری فارسی و RTL
- طراحی ریسپانسیو
- انیمیشن‌های روان
- تم تیره و روشن
- آیکون‌های Heroicons

## 🛠 تکنولوژی‌های استفاده شده

- **Frontend Framework**: Next.js 15.4.3
- **UI Library**: React 19.1.0
- **Styling**: Tailwind CSS v4
- **State Management**: Zustand 5.0.6
- **Data Validation**: Zod 4.0.8
- **Charts**: Recharts
- **Icons**: Heroicons React
- **HTTP Client**: Axios
- **Date Handling**: date-fns
- **Utility**: clsx, tailwind-merge

## 📁 ساختار پروژه

```
app/
├── components/           # کامپوننت‌های React
│   ├── common/          # کامپوننت‌های مشترک
│   ├── dashboard/       # کامپوننت‌های داشبورد
│   ├── layout/          # کامپوننت‌های لایه
│   ├── portfolio/       # کامپوننت‌های کیف پول
│   └── trading/         # کامپوننت‌های معاملاتی
├── lib/                 # کتابخانه‌ها و ابزارها
│   ├── api/            # API calls
│   ├── hooks/          # Custom hooks
│   ├── stores/         # Zustand stores
│   ├── types/          # Type definitions
│   └── utils/          # Utility functions
├── globals.css         # استایل‌های سراسری
├── layout.js          # لایه اصلی
└── page.js            # صفحه اصلی
```

## 🚀 نصب و راه‌اندازی

### پیش‌نیازها
- Node.js 18+ 
- npm یا yarn

### مراحل نصب

1. **کلون کردن پروژه**
```bash
git clone <repository-url>
cd sarafi
```

2. **نصب وابستگی‌ها**
```bash
npm install
```

3. **اجرای سرور توسعه**
```bash
npm run dev
```

4. **مشاهده پروژه**
```
http://localhost:3000
```

## 📊 API و داده‌ها

### CoinGecko API
پروژه از API رایگان CoinGecko برای دریافت قیمت‌های لحظه‌ای ارزهای دیجیتال استفاده می‌کند:

- قیمت‌های فعلی
- تغییرات 24 ساعته
- حجم معاملات
- ارزش بازار
- تصاویر ارزها

### ارزهای پشتیبانی شده
- Bitcoin (BTC)
- Ethereum (ETH)
- Tether (USDT)
- BNB (BNB)
- XRP (XRP)
- Solana (SOL)
- Cardano (ADA)
- Dogecoin (DOGE)
- Polkadot (DOT)
- Chainlink (LINK)

## 🎯 ویژگی‌های کلیدی

### مدیریت State
- **Zustand** برای مدیریت state سراسری
- **Persistence** برای ذخیره داده‌ها در localStorage
- **Real-time updates** برای قیمت‌ها

### اعتبارسنجی
- **Zod schemas** برای validation
- **Type safety** در تمام بخش‌ها
- **Error handling** مناسب

### UI/UX
- **Responsive design** برای همه دستگاه‌ها
- **Persian language** و **RTL support**
- **Dark/Light theme** قابلیت تغییر تم
- **Smooth animations** انیمیشن‌های روان

## 🔧 اسکریپت‌ها

```bash
# اجرای سرور توسعه
npm run dev

# ساخت نسخه تولید
npm run build

# اجرای نسخه تولید
npm start

# بررسی کد با ESLint
npm run lint
```

## 🌟 ویژگی‌های آینده

- [ ] احراز هویت کامل
- [ ] KYC و تایید هویت
- [ ] پرداخت واقعی
- [ ] API معاملات واقعی
- [ ] نوتیفیکیشن‌های push
- [ ] چت پشتیبانی
- [ ] اپلیکیشن موبایل

## 🤝 مشارکت

برای مشارکت در این پروژه:

1. Fork کنید
2. یک branch جدید بسازید
3. تغییرات خود را commit کنید
4. Push کنید
5. Pull Request ایجاد کنید

## 📄 مجوز

این پروژه تحت مجوز MIT منتشر شده است.

## 📞 تماس

برای سوالات و پیشنهادات با ما در تماس باشید.

---

**نکته**: این پروژه صرفاً برای نمایش و آموزش است و نباید برای معاملات واقعی استفاده شود.
