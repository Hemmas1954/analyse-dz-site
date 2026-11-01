import React from 'react';
import { XCircle, CheckCircle2, ArrowLeft, ArrowRight, Zap, ShieldAlert, Sparkles } from 'lucide-react';

export default function BeforeAfter() {
  const comparisonItems = [
    {
      aspect: 'معرفة السلعة الراقدة',
      before: 'تكتشفها بالصدفة كي تضرب فيها رجلك في الزاوية بعد 6 أشهر وقد فقدت قيمتها.',
      after: 'تنبيه أصفر آلي فوري لأي صنف يتجاوز 60 يوماً مع اقتراح نسبة التخفيض المناسبة.'
    },
    {
      aspect: 'حالات النفاذ (Rupture)',
      before: 'الكليان يطلب سلعة تفاجئه بـ "خلاصت سمحلي"، ويجري المنافس يبيع في بلاصتك.',
      after: 'تنبيه أحمر واستباقي على تيليجرام قبل نفاد الكمية بـ 5 أيام لتطلب من المورد بأمان.'
    },
    {
      aspect: 'تكاليف التشغيل والبرامج',
      before: 'اشتراكات شهرية متكررة (20,000 إلى 50,000 دج سنوياً) أو برامج صعبة تحتاج مهندس إعلام آلي.',
      after: '0 دج تكلفة تشغيل مدى الحياة. يعمل على Google Sheets و Excel بدون أي اشتراك.'
    },
    {
      aspect: 'تسجيل الروتور وتكاليف الشحن',
      before: 'السلعة ترجع تالفة أو تضيع، وماتعرفش شحال راك تخسر في الطرود الملغاة.',
      after: 'حاسبة COD مخصصة تحتسب احتياطي الروتور تلقائياً وتضمن أنك تبيع بربح صافٍ حقيقي.'
    },
    {
      aspect: 'راحة البال والسيطرة',
      before: 'قلق دائم، آلة حاسبة في منتصف الليل، وشك دائم في سرقات أو أخطاء الجرد.',
      after: 'تقرير صباحي كل يوم على هاتفك عند الساعة 08:00 AM.. وأنت تشرب قهوتك والديبو تحت السيطرة.'
    }
  ];

  return (
    <section id="before-after" className="py-20 md:py-28 relative bg-[#071326] border-t border-slate-800">
      
      {/* Background accents */}
      <div className="absolute top-1/2 right-10 w-80 h-80 bg-emerald-500/5 blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute top-1/2 left-10 w-80 h-80 bg-red-500/5 blur-[130px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-xs font-bold mb-4">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            <span>الفرق الحقيقي على أرض الواقع</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white leading-tight font-['Cairo'] mb-4">
            كيف تتغير حياة مخزنك مع{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-200">
              ANALYSE DZ
            </span>
          </h2>

          <p className="text-sm sm:text-base text-slate-300">
            انتقال جذري من فوضى الأوراق والتخمين العشوائي إلى قيادة مالية واضحة ومخزن يولد السيولة النقدية كل يوم.
          </p>
        </div>

        {/* Side-by-Side Comparison Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          
          {/* Card 1: BEFORE (The Nightmare) */}
          <div className="rounded-2xl bg-slate-900/60 border border-red-500/30 p-6 sm:p-8 backdrop-blur-md shadow-xl relative overflow-hidden">
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-red-500/20">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-lg bg-red-500/10 border border-red-500/30">
                  <XCircle className="w-5 h-5 text-red-400" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white font-['Cairo']">مستودعك قبل ANALYSE DZ</h3>
                  <span className="text-[11px] text-red-400 font-medium">نزيف صامت، شك دائم، وكاسا فارغة</span>
                </div>
              </div>
              <span className="text-xs font-mono font-bold text-red-400 bg-red-950/60 px-2 py-0.5 rounded border border-red-800/60">
                فوضى
              </span>
            </div>

            <div className="space-y-5">
              {comparisonItems.map((item, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-slate-950/50 border border-slate-800/80">
                  <div className="text-xs font-bold text-red-300 mb-1 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                    <span>{item.aspect}:</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {item.before}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Card 2: AFTER (The Front Man Command Center) */}
          <div className="rounded-2xl bg-gradient-to-b from-[#091f33] to-[#071326] border-2 border-emerald-500/50 p-6 sm:p-8 backdrop-blur-md shadow-2xl shadow-emerald-950/30 relative overflow-hidden">
            
            {/* Top highlight glow */}
            <div className="absolute top-0 right-0 left-0 h-1 bg-gradient-to-r from-emerald-500 via-teal-300 to-emerald-400" />

            <div className="flex items-center justify-between pb-4 mb-6 border-b border-emerald-500/30">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-lg bg-emerald-500/20 border border-emerald-500/40">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white font-['Cairo']">مستودعك بعد ANALYSE DZ</h3>
                  <span className="text-[11px] text-emerald-400 font-medium">سيولة محررة، تحكم كلي، وتنبيهات أوتوماتيكية</span>
                </div>
              </div>
              <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-500/50 shadow-sm">
                غرفة قيادة
              </span>
            </div>

            <div className="space-y-5">
              {comparisonItems.map((item, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-slate-900/80 border border-emerald-500/20 hover:border-emerald-500/40 transition-colors">
                  <div className="text-xs font-bold text-emerald-400 mb-1 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{item.aspect}:</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-medium">
                    {item.after}
                  </p>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

