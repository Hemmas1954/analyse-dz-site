import React from 'react';
import { MessageCircle, Calculator, Zap, ArrowLeft } from 'lucide-react';

export default function MobileBottomBar() {
  const whatsappUrl =
    'https://wa.me/213676067652?text=%D8%B3%D9%84%D8%A7%D9%85%20ANALYSE%20DZ%D8%8C%20%D8%AD%D8%A7%D8%A8%20%D9%86%D8%B7%D9%84%D8%A8%20%D9%86%D8%B8%D8%A7%D9%85%20%D8%A5%D8%AF%D8%A7%D8%B1%D8%A9%20%D8%A7%D9%84%D9%85%D8%AE%D8%B2%D9%88%D9%86%20%D8%A7%D9%84%D8%B0%D9%83%D9%8A';

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#071326]/95 backdrop-blur-xl border-t border-slate-800 px-3 py-2.5 pb-[calc(env(safe-area-inset-bottom)+10px)] shadow-[0_-10px_25px_rgba(0,0,0,0.5)]">
      <div className="flex items-center gap-2 max-w-md mx-auto">
        
        {/* Quick Calculator Shortcut */}
        <a
          href="#calculator"
          className="flex flex-col items-center justify-center p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-emerald-400 active:scale-95 shrink-0 min-w-[68px]"
        >
          <Calculator className="w-4 h-4 text-amber-400 mb-0.5" />
          <span className="text-[10px] font-bold">الحاسبة</span>
        </a>

        {/* Quick Pricing Shortcut */}
        <a
          href="#pricing"
          className="flex flex-col items-center justify-center p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-emerald-400 active:scale-95 shrink-0 min-w-[68px]"
        >
          <Zap className="w-4 h-4 text-emerald-400 mb-0.5" />
          <span className="text-[10px] font-bold">الأسعار</span>
        </a>

        {/* Primary WhatsApp Direct Button (Full Thumb Width) */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-gradient-to-r from-emerald-400 to-teal-400 text-slate-950 font-black text-xs shadow-lg shadow-emerald-500/25 active:scale-95 transition-all"
        >
          {/* WhatsApp Icon */}
          <svg className="w-4 h-4 fill-slate-950 shrink-0" viewBox="0 0 24 24">
            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.298.144.347.491 1.2.534 1.288.043.088.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.353.101.174.45 1.017 1.139 1.632.887.79 1.636 1.034 1.868 1.15.231.116.368.101.506-.058.137-.159.585-.68.74-.911.156-.231.31-.193.52-.116.21.077 1.332.628 1.56.744.227.116.379.174.434.269.055.095.055.55-.089.955z" />
            <path d="M12 2C6.48 2 2 6.48 2 12c0 1.95.56 3.77 1.53 5.31L2 22l4.83-1.5c1.48.88 3.2 1.5 5.17 1.5 5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18.2c-1.74 0-3.37-.53-4.73-1.45l-.34-.23-2.87.89.91-2.77-.25-.37C3.65 14.88 3.1 13.5 3.1 12c0-4.91 3.99-8.9 8.9-8.9 4.91 0 8.9 3.99 8.9 8.9 0 4.91-3.99 8.9-8.9 8.9z" />
          </svg>
          <span>اطلب النظام الآن</span>
          <span className="w-1.5 h-1.5 rounded-full bg-slate-950 animate-ping" />
        </a>

      </div>
    </div>
  );
}

