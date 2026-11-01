import React from 'react';
import { Check, Zap, Sparkles, ShieldCheck, Crown, Clock, HelpCircle, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function Pricing() {
  const triggerConfetti = () => {
    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#10b981', '#34d399', '#6ee7b7', '#f59e0b']
    });
  };

  const diyWhatsapp =
    'https://wa.me/213676067652?text=%D8%B3%D9%84%D8%A7%D9%85%20ANALYSE%20DZ%D8%8C%20%D8%AD%D8%A7%D8%A8%20%D9%86%D8%B7%D9%84%D8%A8%20%D8%A7%D9%84%D9%86%D8%B3%D8%AE%D8%A9%20%D8%A7%D9%84%D8%AC%D8%A7%D9%87%D8%B2%D8%A9%20%D9%85%D9%86%20%D9%86%D8%B8%D8%A7%D9%85%20%D8%A5%D8%AF%D8%A7%D8%B1%D8%A9%20%D8%A7%D9%84%D9%85%D8%AE%D8%B2%D9%88%D9%86%20%D8%A7%D9%84%D8%B0%D9%83%D9%8A%20(4000%20%D8%AF%D8%AC)';

  const vipWhatsapp =
    'https://wa.me/213676067652?text=%D8%B3%D9%84%D8%A7%D9%85%20ANALYSE%20DZ%D8%8C%20%D8%B9%D9%86%D8%AF%D9%8A%20%D9%85%D8%B3%D8%AA%D9%88%D8%AF%D8%B9%20%D9%88%D8%AD%D8%A7%D8%A8%20%D8%AE%D8%AF%D9%85%D8%A9%20%D8%A7%D9%84%D8%AA%D8%B1%D9%83%D9%8A%D8%A8%20%D8%A7%D9%84%D9%83%D8%A7%D9%85%D9%84%20VIP%20%D9%84%D9%86%D8%B8%D8%A7%D9%85%20%D8%A7%D9%84%D9%85%D8%AE%D8%B2%D9%88%D9%86%20%D9%88%D8%AA%D9%8A%D9%84%D9%8A%D8%AC%D8%B1%D8%A7%D9%85';

  return (
    <section id="pricing" className="py-20 md:py-28 relative bg-[#06101f] border-t border-slate-800">
      
      {/* Background glow behind VIP card */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[550px] bg-emerald-500/10 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-bold mb-4">
            <Zap className="w-3.5 h-3.5" />
            <span>استثمار لمرة واحدة مدى الحياة — 0 دج اشتراكات شهرية</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white leading-tight font-['Cairo'] mb-4">
            اختر الطريقة التي تناسب حجم تجارتك{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
              وانطلق اليوم
            </span>
          </h2>

          <p className="text-sm sm:text-base text-slate-300">
            سواء كنت تريد تطبيق النظام بنفسك في دقائق أو تريد من فريقنا استلام مستودعك وتنظيف كل ملفاتك نيابة عنك.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch max-w-5xl mx-auto pt-4 lg:pt-0">
          
          {/* CARD 1: DIY Digital Template (4,000 DZD) */}
          <div className="rounded-3xl bg-slate-900/80 border border-slate-800 p-5 sm:p-9 backdrop-blur-xl flex flex-col justify-between hover:border-slate-700 transition-all shadow-xl">
            <div>
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] sm:text-xs font-bold px-3 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                  الباقة الجاهزة (DIY Digital Template)
                </span>
                <span className="text-[11px] text-slate-400 font-mono">تفعيل فوري</span>
              </div>

              {/* Price */}
              <div className="mb-4">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl sm:text-5xl font-black text-white font-['Cairo'] tracking-tight">
                    4,000
                  </span>
                  <span className="text-lg sm:text-xl font-bold text-slate-300">دج</span>
                  <span className="text-xs text-slate-500 line-through mr-2">8,500 دج</span>
                </div>
                <div className="text-xs text-emerald-400 font-semibold mt-1">
                  ✓ دفع مرة واحدة فقط مدى الحياة (لا توجد أي رسوم شهرية)
                </div>
              </div>

              {/* Target Description */}
              <div className="p-3 sm:p-3.5 rounded-xl bg-slate-950/60 border border-slate-800 text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 font-medium">
                🎯 <strong className="text-white">الفئة المناسبة:</strong> للمحلات، المتاجر الإلكترونية، والتجار الذين يريدون إدخال بياناتهم بأنفسهم ولديهم دراية بسيطة بملفات الإكسل.
              </div>

              {/* Included Features List */}
              <div className="space-y-3 sm:space-y-3.5 mb-8 text-xs sm:text-sm text-slate-200">
                <div className="flex items-start gap-2.5">
                  <div className="p-1 rounded-full bg-emerald-500/20 text-emerald-400 mt-0.5 shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>استلام فوري لملف النظام الذكي الكامل (صيغتي <strong>.xlsx</strong> و <strong>Google Sheets</strong>).</span>
                </div>

                <div className="flex items-start gap-2.5">
                  <div className="p-1 rounded-full bg-emerald-500/20 text-emerald-400 mt-0.5 shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>كود ربط تيليجرام المجاني (Google Apps Script) بدون الحاجة لأي خوادم خارجية.</span>
                </div>

                <div className="flex items-start gap-2.5">
                  <div className="p-1 rounded-full bg-emerald-500/20 text-emerald-400 mt-0.5 shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>فيديو شرح تطبيقي بالدارجة خطوة بخطوة (5 دقائق) يوضح كيف تبدأ وتدخل سلعك.</span>
                </div>

                <div className="flex items-start gap-2.5">
                  <div className="p-1 rounded-full bg-emerald-500/20 text-emerald-400 mt-0.5 shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>حاسبة تسعير الـ COD الجزائرية مع احتساب احتياطي الروتور وتكاليف الشحن.</span>
                </div>

                <div className="flex items-start gap-2.5">
                  <div className="p-1 rounded-full bg-emerald-500/20 text-emerald-400 mt-0.5 shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>تحديثات النظام المستقبلية مجانية مدى الحياة.</span>
                </div>
              </div>
            </div>

            {/* CTA DIY */}
            <div>
              <a
                href={diyWhatsapp}
                onClick={triggerConfetti}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 sm:py-4 px-5 rounded-xl font-black text-xs sm:text-sm text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-emerald-500/50 transition-all shadow-md group active:scale-95"
              >
                <span>اطلب النسخة الجاهزة عبر واتساب</span>
                <ArrowRight className="w-4 h-4 transform rotate-180 group-hover:-translate-x-1 transition-transform" />
              </a>
              <div className="text-center text-[10px] sm:text-[11px] text-slate-400 mt-2">
                توصيل رقمي فوري على الواتساب والإيميل بعد تأكيد الدفع
              </div>
            </div>
          </div>

          {/* CARD 2: VIP Done-For-You (25,000 DZD) — HIGHLIGHTED */}
          <div className="rounded-3xl bg-gradient-to-b from-[#0a233d] via-[#091b30] to-[#071326] border-2 border-emerald-400 p-5 sm:p-9 backdrop-blur-xl flex flex-col justify-between relative shadow-2xl shadow-emerald-500/20 scale-[1.01] lg:scale-[1.02] mt-4 lg:mt-0">
            
            {/* Top Recommended Tag */}
            <div className="absolute -top-3.5 right-4 sm:right-8 inline-flex items-center gap-1.5 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 font-black text-[11px] sm:text-xs shadow-lg shadow-emerald-500/30">
              <Crown className="w-3.5 h-3.5 fill-slate-950" />
              <span>الأكثر طلباً للتجار الكبار والمستودعات</span>
            </div>

            <div>
              {/* Header */}
              <div className="flex items-center justify-between mb-4 mt-2">
                <span className="text-[11px] sm:text-xs font-bold px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                  باقة التركيب الكامل (VIP Done-For-You)
                </span>
                <span className="text-xs text-emerald-400 font-mono font-bold flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  <span>خلال 48 ساعة</span>
                </span>
              </div>

              {/* Price */}
              <div className="mb-4">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl sm:text-5xl font-black text-emerald-400 font-['Cairo'] tracking-tight drop-shadow-[0_0_15px_rgba(16,185,129,0.3)]">
                    25,000
                  </span>
                  <span className="text-lg sm:text-xl font-bold text-white">دج</span>
                  <span className="text-xs text-slate-400 line-through mr-2">45,000 دج</span>
                </div>
                <div className="text-xs text-emerald-300 font-semibold mt-1">
                  ✓ خدمة تسليم مفتاح جاهزة للاستخدام من أول يوم
                </div>
              </div>

              {/* Target Description */}
              <div className="p-3 sm:p-3.5 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-xs sm:text-sm text-slate-200 leading-relaxed mb-6 font-medium">
                🎯 <strong className="text-white">الفئة المناسبة:</strong> لتجار الجملة (Grossistes) وأصحاب المستودعات الكبرى الذين لا يملكون وقتاً لإدخال وتنظيف المئات من الأصناف ويريدون خبيراً يهيئ لهم كل شيء.
              </div>

              {/* Included Features List */}
              <div className="space-y-3 sm:space-y-3.5 mb-8 text-xs sm:text-sm text-slate-200">
                <div className="flex items-start gap-2.5">
                  <div className="p-1 rounded-full bg-emerald-400 text-slate-950 mt-0.5 shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="font-bold text-white">كل ما في الباقة الأولى (ملفات، حاسبة COD، كود البوت).</span>
                </div>

                <div className="flex items-start gap-2.5">
                  <div className="p-1 rounded-full bg-emerald-400 text-slate-950 mt-0.5 shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span><strong>تنظيف وتدقيق البيانات بالكامل (Data Cleaning):</strong> نأخذ ملفاتك القديمة أو صور الكراس، ونرتب الأصناف ونزيل التكرار.</span>
                </div>

                <div className="flex items-start gap-2.5">
                  <div className="p-1 rounded-full bg-emerald-400 text-slate-950 mt-0.5 shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span><strong>تهيئة شاشة القيادة حسب أقسامك:</strong> نضبط حدود الخطر (Seuils d'Alerte) لكل صنف في مخزنك.</span>
                </div>

                <div className="flex items-start gap-2.5">
                  <div className="p-1 rounded-full bg-emerald-400 text-slate-950 mt-0.5 shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span><strong>ربط بوت التيليجرام بهاتفك مباشرة:</strong> نتكفل بإنشاء البوت وضبط إرسال الإشعار الصباحي 08:00 AM والتأكد من وصوله لهاتفك.</span>
                </div>

                <div className="flex items-start gap-2.5">
                  <div className="p-1 rounded-full bg-emerald-400 text-slate-950 mt-0.5 shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span><strong>جلسة تدريب خاصة ومباشرة:</strong> عبر Google Meet أو AnyDesk لك أو للمسؤول عن المستودع.</span>
                </div>

                <div className="flex items-start gap-2.5">
                  <div className="p-1 rounded-full bg-emerald-400 text-slate-950 mt-0.5 shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span><strong>متابعة تقنية خاصة لمدة شهر كامل:</strong> عبر خط واتساب مخصص لأي استفسار أو تعديل في النظام.</span>
                </div>
              </div>
            </div>

            {/* CTA VIP */}
            <div>
              <a
                href={vipWhatsapp}
                onClick={triggerConfetti}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 sm:py-4 px-5 rounded-xl font-black text-xs sm:text-sm text-slate-950 bg-gradient-to-r from-emerald-400 via-emerald-300 to-teal-400 hover:from-emerald-300 hover:to-teal-300 transition-all shadow-[0_0_25px_rgba(16,185,129,0.5)] active:scale-95 group"
              >
                <Crown className="w-4 h-4 fill-slate-950" />
                <span>احجز خدمة التركيب الكامل VIP</span>
                <ArrowRight className="w-4 h-4 transform rotate-180 group-hover:-translate-x-1 transition-transform" />
              </a>
              <div className="text-center text-[10px] sm:text-[11px] text-emerald-400/90 font-medium mt-2">
                ⚡ نأخذ 4 مستودعات فقط أسبوعياً لضمان أعلى جودة في الإعداد
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

