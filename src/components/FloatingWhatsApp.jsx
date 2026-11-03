import React, { useState } from 'react';
import { MessageCircle, X, Send, Sparkles, ShieldCheck } from 'lucide-react';

export default function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasUnread, setHasUnread] = useState(true);

  const handleOpen = () => {
    setIsOpen(!isOpen);
    setHasUnread(false);
  };

  const whatsappBaseUrl = 'https://wa.me/213676067652';

  const quickMessages = [
    {
      text: 'حاب نطلب الباقة المباشرة (4,000 دج)',
      url: `${whatsappBaseUrl}?text=%D8%B3%D9%84%D8%A7%D9%85%20ANALYSE%20DZ%D8%8C%20%D8%AD%D8%A7%D8%A8%20%D9%86%D8%B7%D9%84%D8%A8%20%D8%A7%D9%84%D8%A8%D8%A7%D9%82%D8%A9%20%D8%A7%D9%84%D9%85%D8%A8%D8%A7%D8%B4%D8%B1%D8%A9%20%D9%84%D8%A8%D8%B1%D9%86%D8%A7%D9%85%D8%AC%20SMART%20GDS%20v2.1%20(4%2C000%20%D8%AF%D8%AC)`
    },
    {
      text: 'حاب باقة التثبيت VIP مع AnyDesk وفلاش ديسك (25,000 دج)',
      url: `${whatsappBaseUrl}?text=%D8%B3%D9%84%D8%A7%D9%85%20ANALYSE%20DZ%D8%8C%20%D8%AD%D8%A7%D8%A8%20%D8%A8%D8%A7%D9%82%D8%A9%20%D8%A7%D9%84%D8%AA%D8%AB%D8%A8%D9%8A%D8%AA%20%D8%A7%D9%84%D8%A7%D8%AD%D8%AA%D8%B1%D8%A7%D9%81%D9%8A%20VIP%20%D9%85%D8%B9%20AnyDesk%20%D9%88%D9%81%D9%84%D8%A7%D8%B4%20%D8%AF%D9%8A%D8%B3%D9%83%20(25%2C000%20%D8%AF%D8%AC)`
    },
    {
      text: 'عندي سؤال حول طرق الدفع (BaridiMob / CCP)',
      url: `${whatsappBaseUrl}?text=%D8%B3%D9%84%D8%A7%D9%85%20ANALYSE%20DZ%D8%8C%20%D8%AD%D8%A7%D8%A8%20%D9%86%D8%B9%D8%B1%D9%81%20%D8%B7%D8%B1%D9%82%20%D8%A7%D9%84%D8%AF%D9%81%D8%B9%20BaridiMob%20%D9%88%20CCP`
    }
  ];

  return (
    <div className="hidden md:block fixed bottom-5 left-5 z-50">
      
      {/* Quick Chat Popup Modal */}
      {isOpen && (
        <div className="mb-3 w-96 max-h-[85vh] overflow-y-auto rounded-2xl bg-[#0b1728] border border-slate-700 shadow-2xl p-4 text-right animate-in fade-in slide-in-from-bottom-3 duration-200">
          
          {/* Header */}
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800">
            <div className="flex items-center gap-2.5">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center text-slate-950 font-bold">
                  <svg className="w-6 h-6 fill-slate-950" viewBox="0 0 24 24">
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.298.144.347.491 1.2.534 1.288.043.088.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.353.101.174.45 1.017 1.139 1.632.887.79 1.636 1.034 1.868 1.15.231.116.368.101.506-.058.137-.159.585-.68.74-.911.156-.231.31-.193.52-.116.21.077 1.332.628 1.56.744.227.116.379.174.434.269.055.095.055.55-.089.955z" />
                  </svg>
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-400 rounded-full border-2 border-[#0b1728]" />
              </div>
              <div>
                <div className="font-bold text-sm text-white font-['Cairo'] flex items-center gap-1.5">
                  <span>مستشار SMART GDS</span>
                </div>
                <div className="text-[11px] text-emerald-400">متصل الآن لمساعدتك (الرد خلال دقائق)</div>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Chat Bubble Prompt */}
          <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-200 leading-relaxed mb-3">
            مرحباً بك أخي التاجر! 👋<br />
            هل تريد معرفة كيف يساعدك برنامج <strong>SMART GDS v2.1</strong> في ضبط مخزنك وجمع ديون الكريدي بدون إنترنت؟ اختر سؤالك أو راسلنا مباشرة:
          </div>

          {/* Quick Clickable Questions */}
          <div className="space-y-2 mb-3">
            {quickMessages.map((item, idx) => (
              <a
                key={idx}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-2.5 rounded-xl bg-slate-800/80 hover:bg-emerald-950/40 border border-slate-700 hover:border-emerald-500/50 text-slate-200 hover:text-emerald-300 text-xs font-semibold transition-all text-right"
              >
                👉 {item.text}
              </a>
            ))}
          </div>

          {/* Direct WhatsApp CTA Button */}
          <a
            href="https://wa.me/213676067652?text=%D8%B3%D9%84%D8%A7%D9%85%20ANALYSE%20DZ%D8%8C%20%D8%AD%D8%A7%D8%A8%20%D9%86%D8%B3%D8%AA%D9%81%D8%B3%D8%B1%20%D8%AD%D9%88%D9%84%20%D8%A8%D8%B1%D9%86%D8%A7%D9%85%D8%AC%20SMART%20GDS%20v2.1"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs transition-colors shadow-lg shadow-emerald-500/20"
          >
            <span>فتح محادثة واتساب مخصصة</span>
            <Send className="w-3.5 h-3.5 transform rotate-180" />
          </a>

        </div>
      )}

      {/* Main Floating Trigger Button */}
      <button
        onClick={handleOpen}
        className="relative group p-3.5 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-slate-950 shadow-2xl shadow-emerald-500/40 hover:scale-105 active:scale-95 transition-all flex items-center gap-2.5 font-bold text-xs"
        aria-label="تواصل عبر الواتساب"
      >
        <svg className="w-6 h-6 fill-slate-950" viewBox="0 0 24 24">
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.298.144.347.491 1.2.534 1.288.043.088.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.353.101.174.45 1.017 1.139 1.632.887.79 1.636 1.034 1.868 1.15.231.116.368.101.506-.058.137-.159.585-.68.74-.911.156-.231.31-.193.52-.116.21.077 1.332.628 1.56.744.227.116.379.174.434.269.055.095.055.55-.089.955z" />
          <path d="M12 2C6.48 2 2 6.48 2 12c0 1.95.56 3.77 1.53 5.31L2 22l4.83-1.5c1.48.88 3.2 1.5 5.17 1.5 5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18.2c-1.74 0-3.37-.53-4.73-1.45l-.34-.23-2.87.89.91-2.77-.25-.37C3.65 14.88 3.1 13.5 3.1 12c0-4.91 3.99-8.9 8.9-8.9 4.91 0 8.9 3.99 8.9 8.9 0 4.91-3.99 8.9-8.9 8.9z" />
        </svg>

        <span className="font-black font-['Cairo'] hidden sm:inline">
          طلب استشارة واتساب
        </span>

        {/* Unread Ping Badge */}
        {hasUnread && (
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white rounded-full text-[10px] flex items-center justify-center font-bold font-mono animate-bounce">
            1
          </span>
        )}
      </button>

    </div>
  );
}
