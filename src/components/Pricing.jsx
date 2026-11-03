import React from 'react';
import { Check, Zap, Sparkles, ShieldCheck, Crown, Clock, HelpCircle, ArrowRight, Usb, MonitorPlay, Laptop } from 'lucide-react';
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
    'https://wa.me/213676067652?text=%D8%B3%D9%84%D8%A7%D9%85%20ANALYSE%20DZ%D8%8C%20%D8%AD%D8%A7%D8%A8%20%D9%86%D8%B7%D9%84%D8%A8%20%D8%A7%D9%84%D8%A8%D8%A7%D9%82%D8%A9%20%D8%A7%D9%84%D8%AC%D8%A7%D9%87%D8%B2%D8%A9%20%D9%84%D8%A8%D8%B1%D9%86%D8%A7%D9%85%D8%AC%20SMART%20GDS%20v2.1%20ENTERPRISE%20PRO%20(4%2C000%20%D8%AF%D8%AC)';

  const vipWhatsapp =
    'https://wa.me/213676067652?text=%D8%B3%D9%84%D8%A7%D9%85%20ANALYSE%20DZ%D8%8C%20%D8%AD%D8%A7%D8%A8%20%D8%A8%D8%A7%D9%82%D8%A9%20%D8%A7%D9%84%D8%AA%D8%AB%D8%A8%D9%8A%D8%AA%20%D8%A7%D9%84%D8%A7%D8%AD%D8%AA%D8%B1%D8%A7%D9%81%D9%8A%20VIP%20%D9%85%D8%B9%20AnyDesk%20%D9%88%D9%81%D9%84%D8%A7%D8%B4%20%D8%AF%D9%8A%D8%B3%D9%83%20%D9%84%D8%A8%D8%B1%D9%86%D8%A7%D9%85%D8%AC%20SMART%20GDS%20v2.1%20(25%2C000%20%D8%AF%D8%AC)';

  return (
    <section id="pricing" className="py-16 md:py-28 relative bg-[#06101f] border-t border-slate-800 overflow-hidden w-full max-w-full">
      
      {/* Background glow behind VIP card */}
      <div className="hidden sm:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[650px] h-[550px] bg-emerald-500/10 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto px-3.5 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-bold mb-4 shadow-sm">
            <Zap className="w-3.5 h-3.5" />
            <span>شراء لمرة واحدة مدى الحياة — 0 دج اشتراك شهري</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white leading-tight font-['Cairo'] mb-4">
            اختر الباقة المناسبة لحجم تجارتك{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-200">
              وانطلق اليوم
            </span>
          </h2>

          <p className="text-xs sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto">
            سواء كنت تريد تحميل البرنامج وتفعيله مباشرة في جهازك أو تريد مرافقة VIP كاملة مع التثبيت عن بعد وفلاش ديسك لباب المحل.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch max-w-5xl mx-auto pt-2 lg:pt-0">
          
          {/* CARD 1: Direct Enterprise License (4,000 DZD) */}
          <div className="rounded-3xl bg-slate-900/80 border border-slate-800 p-5 sm:p-8 lg:p-9 backdrop-blur-xl flex flex-col justify-between hover:border-slate-700 transition-all shadow-xl">
            <div>
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] sm:text-xs font-bold px-3 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                  الباقة المباشرة (Direct Enterprise)
                </span>
                <span className="text-[11px] text-emerald-400 font-mono font-bold">تفعيل فوري</span>
              </div>

              {/* Price */}
              <div className="mb-4">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl sm:text-5xl font-black text-white font-mono tracking-tight">
                    4,000
                  </span>
                  <span className="text-lg sm:text-xl font-bold text-slate-300 font-['Cairo']">دج</span>
                  <span className="text-xs text-slate-500 line-through mr-2 font-mono">8,000 دج</span>
                </div>
                <div className="text-xs text-emerald-400 font-semibold mt-1">
                  ✓ دفع لمرة واحدة فقط مدى الحياة (بدون أي اشتراك شهري)
                </div>
              </div>

              {/* Target Description */}
              <div className="p-3 sm:p-3.5 rounded-xl bg-slate-950/60 border border-slate-800 text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 font-medium">
                🎯 <strong className="text-white">الفئة المناسبة:</strong> لأصحاب المحلات، تجار التجزئة، وتجار الـ E-Commerce الذين يريدون تثبيت البرنامج بأنفسهم فوراً والبدء في ثوانٍ.
              </div>

              {/* Included Features List */}
              <div className="space-y-3 sm:space-y-3.5 mb-8 text-xs sm:text-sm text-slate-200">
                <div className="flex items-start gap-2.5">
                  <div className="p-1 rounded-full bg-emerald-500/20 text-emerald-400 mt-0.5 shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>برنامج <strong>SMART GDS v2.1 ENTERPRISE PRO</strong> كاملاً بكافة الوحدات الـ 8.</span>
                </div>

                <div className="flex items-start gap-2.5">
                  <div className="p-1 rounded-full bg-emerald-500/20 text-emerald-400 mt-0.5 shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>يعمل <strong>100% بدون إنترنت (Offline-First)</strong> وبسرية تامة داخل جهازك.</span>
                </div>

                <div className="flex items-start gap-2.5">
                  <div className="p-1 rounded-full bg-emerald-500/20 text-emerald-400 mt-0.5 shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>دفتر الكريدي الرقمي مع تذكير الواتساب بضغطة زر (1-Click WhatsApp).</span>
                </div>

                <div className="flex items-start gap-2.5">
                  <div className="p-1 rounded-full bg-emerald-500/20 text-emerald-400 mt-0.5 shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>وضع العامل (Worker Mode) المشفر لحجب أسعار الشراء وهوامش الأرباح.</span>
                </div>

                <div className="flex items-start gap-2.5">
                  <div className="p-1 rounded-full bg-emerald-500/20 text-emerald-400 mt-0.5 shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>مختبر أرباح الـ COD وحساب تكلفة الإعلانات والروتور للـ 58 ولاية.</span>
                </div>

                <div className="flex items-start gap-2.5">
                  <div className="p-1 rounded-full bg-emerald-500/20 text-emerald-400 mt-0.5 shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>فيديو شرح تطبيقي بالدارجة خطوة بخطوة + دعم فني عبر الواتساب.</span>
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
                <span>اطلب الباقة المباشرة عبر واتساب</span>
                <ArrowRight className="w-4 h-4 transform rotate-180 group-hover:-translate-x-1 transition-transform" />
              </a>
              <div className="text-center text-[10px] sm:text-[11px] text-slate-400 mt-2">
                استلام فوري لرابط التحميل والترخيص بعد تأكيد الدفع
              </div>
            </div>
          </div>

          {/* CARD 2: VIP Done-For-You (25,000 DZD) — HIGHLIGHTED */}
          <div className="rounded-3xl bg-gradient-to-b from-[#0a233d] via-[#091b30] to-[#071326] border-2 border-emerald-400 p-5 sm:p-8 lg:p-9 backdrop-blur-xl flex flex-col justify-between relative shadow-2xl shadow-emerald-500/20 scale-[1.01] lg:scale-[1.02] mt-4 lg:mt-0">
            
            {/* Top Recommended Tag */}
            <div className="absolute -top-3.5 right-4 sm:right-8 inline-flex items-center gap-1.5 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 font-black text-[11px] sm:text-xs shadow-lg shadow-emerald-500/30">
              <Crown className="w-3.5 h-3.5 fill-slate-950" />
              <span>الأكثر طلباً لتجار الجملة والمستودعات</span>
            </div>

            <div>
              {/* Header */}
              <div className="flex items-center justify-between mb-4 mt-2">
                <span className="text-[11px] sm:text-xs font-bold px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                  باقة التثبيت الاحترافي VIP (AnyDesk + USB)
                </span>
                <span className="text-[11px] text-amber-400 font-mono font-bold flex items-center gap-1">
                  <Usb className="w-3 h-3" />
                  <span>توصيل 58 ولاية</span>
                </span>
              </div>

              {/* Price */}
              <div className="mb-4">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl sm:text-5xl font-black text-white font-mono tracking-tight">
                    25,000
                  </span>
                  <span className="text-lg sm:text-xl font-bold text-slate-300 font-['Cairo']">دج</span>
                  <span className="text-xs text-slate-500 line-through mr-2 font-mono">45,000 دج</span>
                </div>
                <div className="text-xs text-emerald-400 font-semibold mt-1">
                  ✓ خدمة تسليم المفتاح + تدريب ومرافقة مع مهندس معتمد
                </div>
              </div>

              {/* Target Description */}
              <div className="p-3 sm:p-3.5 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-xs sm:text-sm text-emerald-200 leading-relaxed mb-6 font-medium">
                🎯 <strong className="text-white">الفئة المناسبة:</strong> لتجار الجملة، أصحاب المستودعات الكبيرة، والمؤسسات التي تريد من فريقنا استلام الجهاز، ربط الطابعات، وتدريب العمال.
              </div>

              {/* Included Features List */}
              <div className="space-y-3 sm:space-y-3.5 mb-8 text-xs sm:text-sm text-slate-100">
                <div className="flex items-start gap-2.5">
                  <div className="p-1 rounded-full bg-emerald-400 text-slate-950 mt-0.5 shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span><strong>كل مميزات الباقة المباشرة مدى الحياة</strong> بدون أي اشتراك شهري.</span>
                </div>

                <div className="flex items-start gap-2.5">
                  <div className="p-1 rounded-full bg-emerald-400 text-slate-950 mt-0.5 shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span><strong>جلسة تثبيت وإعداد مباشر عبر AnyDesk</strong> من طرف مهندس إعلام آلي متخصص.</span>
                </div>

                <div className="flex items-start gap-2.5">
                  <div className="p-1 rounded-full bg-emerald-400 text-slate-950 mt-0.5 shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span><strong>تهيئة بروفايل المتجر وربط الطابعة الليزرية A4</strong> (Canon/Epson) وقارئ الباركود.</span>
                </div>

                <div className="flex items-start gap-2.5">
                  <div className="p-1 rounded-full bg-emerald-400 text-slate-950 mt-0.5 shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span><strong>فلاش ديسك USB أصلي فاخر</strong> محمل بنسخة البرنامج وأنظمة النسخ الاحتياطي يصل لمقرك في 58 ولاية.</span>
                </div>

                <div className="flex items-start gap-2.5">
                  <div className="p-1 rounded-full bg-emerald-400 text-slate-950 mt-0.5 shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span><strong>تدريب شخصي تطبيقي</strong> لك ولفريق عملك على تسيير المبيعات والكريدي والمخزن.</span>
                </div>

                <div className="flex items-start gap-2.5">
                  <div className="p-1 rounded-full bg-emerald-400 text-slate-950 mt-0.5 shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span><strong>أولوية قصوى ودعم فني VIP مباشر</strong> مع خط اتصال مخصص.</span>
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
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 sm:py-4 px-5 rounded-xl font-black text-xs sm:text-sm text-slate-950 bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-400 hover:brightness-110 transition-all shadow-xl shadow-emerald-500/30 group active:scale-95"
              >
                <span>احجز باقة التركيب الكامل VIP عبر واتساب</span>
                <ArrowRight className="w-4 h-4 transform rotate-180 group-hover:-translate-x-1 transition-transform" />
              </a>
              <div className="text-center text-[10px] sm:text-[11px] text-slate-400 mt-2">
                جلسة إعداد فوري عبر AnyDesk + إرسال الفلاش ديسك في نفس اليوم
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
