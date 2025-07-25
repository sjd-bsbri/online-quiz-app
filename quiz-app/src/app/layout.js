import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "کویز آنلاین - Quiz Online",
  description: "کویز آنلاین حرفه‌ای با موضوعات مختلف شامل هوش، زبان انگلیسی، ورزش، اطلاعات عمومی، علوم و تاریخ",
  keywords: "کویز, آنلاین, تست, سوال, هوش, انگلیسی, ورزش, علوم, تاریخ",
  author: "Quiz Online",
  viewport: "width=device-width, initial-scale=1.0",
  charset: "UTF-8",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Vazirmatn:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <meta name="theme-color" content="#0f172a" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
      <body className={`${inter.className} font-vazir antialiased`}>
        <div className="min-h-screen bg-dark-900">
          {children}
        </div>
      </body>
    </html>
  );
}