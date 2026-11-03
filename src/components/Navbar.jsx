import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowLeft, Zap, Shield, Phone, MessageSquare, Laptop, Database, Lock } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'نزيف المخازن والديون', href: '#pain-points' },
    { label: 'حاسبة الكاش والكريدي', href: '#calculator', badge: 'فوري' },
    { label: 'الوحدات الـ 8', href: '#modules' },
    { label: 'الفرق قبل وبعد', href: '#before-after' },
    { label: 'الرخص والأسعار', href: '#pricing' },
    { label: 'الأسئلة الشائعة', href: '#faq' },
  ];

  const whatsappLicenseUrl =
    'https://wa.me/213676067652?text=%D8%B3%D9%84%D8%A7%D9%85%20ANALYSE%20DZ%D8%8C%20%D8%AD%D8%A7%D8%A8%20%D9%86%D8%B7%D9%84%D8%A8%20%D8%B1%D8%AE%D8%B5%D8%A9%20%D8%A8%D8%B1%D9%86%D8%A7%D9%85%D8%AC%20SMART%20GDS%20v2.1%20ENTERPRISE%20PRO';

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 w-full max-w-full overflow-hidden z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#071326]/95 backdrop-blur-xl border-b border-slate-800/80 shadow-2xl shadow-black/50 py-2 sm:py-2.5'
            : 'bg-[#071326]/80 backdrop-blur-md py-3 sm:py-4 border-b border-slate-800/40'
        }`}
      >
        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-2 sm:gap-4">
            
            {/* Brand Logo */}
            <a href="#" className="flex items-center gap-2 sm:gap-3 group shrink-0">
              {/* Geometric Logo: 3 ascending emerald bars with upward arrow */}
              <div className="relative flex items-center justify-center w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-slate-900 to-[#0F2C59] border border-emerald-500/30 shadow-lg shadow-emerald-500/10 group-hover:border-emerald-500/60 transition-all">
                <svg
                  viewBox="0 0 32 32"
                  fill="none"
                  className="w-5 h-5 sm:w-7 sm:h-7 text-emerald-400 transform group-hover:scale-105 transition-transform duration-300"
                >
                  <rect x="5" y="18" width="5.5" height="10" rx="1.5" fill="currentColor" fillOpacity="0.6" />
                  <rect x="13" y="12" width="5.5" height="16" rx="1.5" fill="currentColor" fillOpacity="0.85" />
                  <rect x="21.5" y="6" width="5.5" height="22" rx="1.5" fill="currentColor" />
                  <path
                    d="M17 9L24.5 3L27.5 10"
                    stroke="#34D399"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                {/* Offline-First safe green indicator */}
                <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
              </div>

              <div className="flex flex-col text-right">
                <div dir="ltr" className="flex items-center gap-1.5 leading-none">
                  <span className="text-base sm:text-xl font-black tracking-tight text-white font-['Cairo']">
                    ANALYSE DZ
                  </span>
                  <span className="text-[10px] sm:text-xs font-mono font-bold bg-emerald-500/20 text-emerald-300 px-1.5 py-0.2 rounded border border-emerald-500/30">
                    SMART GDS v2.1
                  </span>
                </div>
                <span dir="ltr" className="text-[9px] sm:text-[10px] font-semibold tracking-wider text-slate-400 uppercase mt-0.5 font-sans">
                  ENTERPRISE PRO • 100% OFFLINE
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-5 text-xs xl:text-sm font-medium text-slate-300">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="hover:text-emerald-400 transition-colors flex items-center gap-1"
                >
                  <span>{link.label}</span>
                  {link.badge && (
                    <span className="text-[9px] bg-amber-500/20 text-amber-300 border border-amber-500/30 px-1.5 py-0.2 rounded-full font-bold">
                      {link.badge}
                    </span>
                  )}
                </a>
              ))}
            </nav>

            {/* Left Controls: WhatsApp Button & Mobile Menu Toggle */}
            <div className="flex items-center gap-2">
              
              {/* WhatsApp CTA Button */}
              <a
                href={whatsappLicenseUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl font-bold text-xs sm:text-sm text-slate-950 bg-emerald-400 hover:bg-emerald-300 transition-all shadow-md shadow-emerald-500/20 active:scale-95"
              >
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current shrink-0" viewBox="0 0 24 24">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.298.144.347.491 1.2.534 1.288.043.088.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.353.101.174.45 1.017 1.139 1.632.887.79 1.636 1.034 1.868 1.15.231.116.368.101.506-.058.137-.159.585-.68.74-.911.156-.231.31-.193.52-.116.21.077 1.332.628 1.56.744.227.116.379.174.434.269.055.095.055.55-.089.955z" />
                  <path d="M12 2C6.48 2 2 6.48 2 12c0 1.95.56 3.77 1.53 5.31L2 22l4.83-1.5c1.48.88 3.2 1.5 5.17 1.5 5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18.2c-1.74 0-3.37-.53-4.73-1.45l-.34-.23-2.87.89.91-2.77-.25-.37C3.65 14.88 3.1 13.5 3.1 12c0-4.91 3.99-8.9 8.9-8.9 4.91 0 8.9 3.99 8.9 8.9 0 4.91-3.99 8.9-8.9 8.9z" />
                </svg>
                <span className="hidden xs:inline">اطلب البرنامج</span>
                <span className="xs:hidden">اطلب</span>
              </a>

              {/* Mobile Hamburger Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-xl bg-slate-900 border border-slate-700 text-slate-200 hover:text-white"
                aria-label="القائمة"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>

            </div>

          </div>
        </div>

        {/* Mobile Slide-down Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#071326] border-b border-slate-800 px-4 py-4 shadow-2xl animate-in slide-in-from-top-4 duration-200">
            <div className="space-y-2.5 mb-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 text-slate-200 font-bold text-xs hover:border-emerald-500/40"
                >
                  <span>{link.label}</span>
                  <div className="flex items-center gap-2">
                    {link.badge && (
                      <span className="text-[9px] bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded-full">
                        {link.badge}
                      </span>
                    )}
                    <ArrowLeft className="w-3.5 h-3.5 text-slate-400" />
                  </div>
                </a>
              ))}
            </div>

            {/* Quick Mobile Contact Box */}
            <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2 text-slate-300">
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <span className="font-mono dir-ltr">+213 676 06 76 52</span>
              </div>
              <span className="text-[10px] text-emerald-400 bg-emerald-950/80 border border-emerald-800/60 px-2 py-0.5 rounded-full">
                متصل عبر WhatsApp
              </span>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
