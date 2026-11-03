import React from 'react';
import { Shield, Sparkles, MessageCircle, Heart, Usb, Laptop } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#040a14] border-t border-slate-800/80 pt-16 pb-24 md:pb-16 text-slate-400 text-xs overflow-hidden w-full max-w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-slate-800/80">
          
          {/* Brand Info (5 cols) */}
          <div className="md:col-span-5 space-y-4 text-right">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-slate-900 to-[#0F2C59] border border-emerald-500/30">
                <svg viewBox="0 0 32 32" fill="none" className="w-6 h-6 text-emerald-400">
                  <rect x="5" y="18" width="5.5" height="10" rx="1.5" fill="currentColor" fillOpacity="0.6" />
                  <rect x="13" y="12" width="5.5" height="16" rx="1.5" fill="currentColor" fillOpacity="0.85" />
                  <rect x="21.5" y="6" width="5.5" height="22" rx="1.5" fill="currentColor" />
                  <path d="M17 9L24.5 3L27.5 10" stroke="#34D399" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

              <div>
                <div dir="ltr" className="flex items-center gap-1.5 leading-none">
                  <span className="text-xl font-black text-white font-['Cairo']">ANALYSE</span>
                  <span className="text-xl font-black text-emerald-400">DZ</span>
                </div>
                <span dir="ltr" className="text-[10px] text-emerald-400 font-mono font-bold tracking-wider block mt-0.5">
                  SMART GDS v2.1 ENTERPRISE PRO
                </span>
              </div>
            </div>

            <p className="text-slate-400 leading-relaxed text-xs max-w-sm font-['Cairo']">
              المنظومة المكتبية الجزائرية المستقلة الأولى لإدارة المخازن، الفوترة المتعددة، دفتر ديون الزبائن الآلي، ومختبر أرباح التجارة والتوزيع بدون إنترنت وبدون اشتراك شهري.
            </p>

            <div className="text-[11px] text-emerald-400/90 font-medium">
              🇩🇿 100% Offline-First • مخصص لديناميكية السوق والتجارة الجزائرية (دج / DZD).
            </div>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="md:col-span-3 space-y-3 text-right">
            <h4 className="text-sm font-bold text-white font-['Cairo']">أقسام المنظومة</h4>
            <ul className="space-y-2">
              <li><a href="#pain-points" className="hover:text-emerald-400 transition-colors">مرآة ألم التاجر ونزيف الكريدي</a></li>
              <li><a href="#calculator" className="hover:text-emerald-400 transition-colors">حاسبة السيولة ومختبر COD</a></li>
              <li><a href="#modules" className="hover:text-emerald-400 transition-colors">الوحدات الثمانية للبرنامج</a></li>
              <li><a href="#before-after" className="hover:text-emerald-400 transition-colors">مقارنة قبل وبعد SMART GDS</a></li>
              <li><a href="#pricing" className="hover:text-emerald-400 transition-colors">باقات الأسعار (المباشرة & VIP)</a></li>
              <li><a href="#faq" className="hover:text-emerald-400 transition-colors">الأسئلة الشائعة والأمان</a></li>
            </ul>
          </div>

          {/* Regional Hubs & Contact (4 cols) */}
          <div className="md:col-span-4 space-y-3 text-right">
            <h4 className="text-sm font-bold text-white font-['Cairo']">مستودعات وتجار نخدمهم عبر الوطن</h4>
            <p className="text-slate-400 leading-relaxed">
              تجار الجملة والتجزئة في أسواق: <strong className="text-slate-300">العلمة (دبي)، بلفور، الحميز، بيلكور، باب الزوار، السانيا، تاجنانت، قسنطينة، سطيف، باتنة، البليدة، وكافة الـ 58 ولاية.</strong>
            </p>

            <div className="pt-2">
              <a
                href="https://wa.me/213676067652?text=%D8%B3%D9%84%D8%A7%D9%85%20ANALYSE%20DZ"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-slate-900 border border-slate-700 hover:border-emerald-500/50 text-slate-200 hover:text-emerald-300 transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span dir="ltr">+213 676 06 76 52 (WhatsApp)</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-right">
          <div>
            © {new Date().getFullYear()} ANALYSE DZ • SMART GDS v2.1 ENTERPRISE PRO. جميع الحقوق محفوظة لرواد الأعمال والتجار الجزائريين.
          </div>
          <div className="flex items-center gap-1 text-[11px] text-slate-400">
            <span>تحكّم في مخزنك، احمِ أرباحك، وجمّع كريدي زبائنك بضغطة زر وبدون إنترنت</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
