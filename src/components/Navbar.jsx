import React, { useState, useEffect } from 'react';
import { MessageCircle, Shield, Sparkles, TrendingUp } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#071326]/90 backdrop-blur-md border-b border-slate-800/80 shadow-2xl shadow-black/40 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          
          {/* Brand Logo & Tagline (Right side in RTL) */}
          <a href="#" className="flex items-center gap-3 group">
            {/* Geometric Logo: 3 ascending emerald bars with upward arrow */}
            <div className="relative flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-slate-900 to-[#0F2C59] border border-emerald-500/30 shadow-lg shadow-emerald-500/10 group-hover:border-emerald-500/60 transition-all">
              <svg
                viewBox="0 0 32 32"
                fill="none"
                className="w-7 h-7 text-emerald-400 transform group-hover:scale-110 transition-transform duration-300"
              >
                {/* Bar 1 */}
                <rect x="5" y="18" width="5.5" height="10" rx="1.5" fill="currentColor" fillOpacity="0.6" />
                {/* Bar 2 */}
                <rect x="13" y="12" width="5.5" height="16" rx="1.5" fill="currentColor" fillOpacity="0.85" />
                {/* Bar 3 */}
                <rect x="21.5" y="6" width="5.5" height="22" rx="1.5" fill="currentColor" />
                {/* Upward Growth Arrow */}
                <path
                  d="M17 9L24.5 3L27.5 10"
                  stroke="#34D399"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              {/* Subtle pulsing dot */}
              <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
            </div>

            <div className="flex flex-col text-right">
              <div className="flex items-center gap-1.5 leading-none">
                <span className="text-xl sm:text-2xl font-black tracking-tight text-white font-['Cairo']">
                  ANALYSE
                </span>
                <span className="text-xl sm:text-2xl font-black tracking-tight text-emerald-400 drop-shadow-[0_0_12px_rgba(16,185,129,0.5)]">
                  DZ
                </span>
              </div>
              <span className="text-[10px] sm:text-xs font-semibold tracking-wider text-slate-400 uppercase mt-0.5 font-sans">
                Data. Insights. Growth.
              </span>
            </div>
          </a>

          {/* Quick Nav Anchors for Desktop */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-300">
            <a href="#pain-points" className="hover:text-emerald-400 transition-colors">نزيف المخزون</a>
            <a href="#calculator" className="hover:text-emerald-400 transition-colors flex items-center gap-1">
              <span>حاسبة السيولة</span>
              <span className="text-[10px] bg-amber-500/20 text-amber-300 border border-amber-500/30 px-1.5 py-0.5 rounded-full font-bold">تفاعلية</span>
            </a>
            <a href="#modules" className="hover:text-emerald-400 transition-colors">مكونات النظام</a>
            <a href="#before-after" className="hover:text-emerald-400 transition-colors">قبل وبعد</a>
            <a href="#pricing" className="hover:text-emerald-400 transition-colors">الأسعار والعروض</a>
            <a href="#faq" className="hover:text-emerald-400 transition-colors">الأسئلة الشائعة</a>
          </nav>

          {/* Left Side: Pulsing Emerald WhatsApp CTA */}
          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/213676067652?text=%D8%B3%D9%84%D8%A7%D9%85%20ANALYSE%20DZ%D8%8C%20%D8%AD%D8%A7%D8%A8%20%D9%86%D8%B7%D9%84%D8%A8%20%D9%86%D8%B8%D8%A7%D9%85%20%D8%A5%D8%AF%D8%A7%D8%B1%D8%A9%20%D8%A7%D9%84%D9%85%D8%AE%D8%B2%D9%88%D9%86%20%D8%A7%D9%84%D8%B0%D9%83%D9%8A"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group inline-flex items-center gap-2.5 px-4 sm:px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-slate-950 bg-emerald-400 hover:bg-emerald-300 transition-all duration-300 shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 transform hover:-translate-y-0.5 active:translate-y-0"
            >
              {/* WhatsApp Icon */}
              <svg className="w-4 h-4 sm:w-5 sm:h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.298.144.347.491 1.2.534 1.288.043.088.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.353.101.174.45 1.017 1.139 1.632.887.79 1.636 1.034 1.868 1.15.231.116.368.101.506-.058.137-.159.585-.68.74-.911.156-.231.31-.193.52-.116.21.077 1.332.628 1.56.744.227.116.379.174.434.269.055.095.055.55-.089.955z" />
                <path d="M12 2C6.48 2 2 6.48 2 12c0 1.95.56 3.77 1.53 5.31L2 22l4.83-1.5c1.48.88 3.2 1.5 5.17 1.5 5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18.2c-1.74 0-3.37-.53-4.73-1.45l-.34-.23-2.87.89.91-2.77-.25-.37C3.65 14.88 3.1 13.5 3.1 12c0-4.91 3.99-8.9 8.9-8.9 4.91 0 8.9 3.99 8.9 8.9 0 4.91-3.99 8.9-8.9 8.9z" />
              </svg>
              <span>اطلب النظام عبر واتساب</span>
              <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-slate-950 animate-ping" />
            </a>
          </div>

        </div>
      </div>
    </header>
  );
}

