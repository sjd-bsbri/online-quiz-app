import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "کوئیز آنلاین - آزمون دانش شما",
  description: "کوئیز آنلاین حرفه‌ای با موضوعات متنوع شامل هوش، زبان انگلیسی، ورزش، اطلاعات عمومی، تاریخ و علوم",
  keywords: "کوئیز, آزمون آنلاین, تست دانش, هوش, زبان انگلیسی, ورزش, تاریخ, علوم",
  authors: [{ name: "کوئیز آنلاین" }],
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Vazirmatn:wght@100;200;300;400;500;600;700;800;900&display=swap" 
          rel="stylesheet" 
        />
        <link 
          href="https://cdn.jsdelivr.net/gh/rastikerdar/vazirmatn@v33.003/Vazirmatn-font-face.css" 
          rel="stylesheet" 
        />
      </head>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
