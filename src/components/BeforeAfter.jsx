import React from 'react';
import { XCircle, CheckCircle2, ArrowLeft, ArrowRight, Zap, ShieldAlert, Sparkles, Lock, Receipt, Users, Flame } from 'lucide-react';

export default function BeforeAfter() {
  const comparisonItems = [
    {
      aspect: 'كريدي الزبائن ومطالبة الديون',
      before: 'كراس ورقي ممزق، زبائن ينسون المبالغ، إحراج في المطالبة، وضياع ملايين السنتيمات في مهب الريح.',
      after: 'دفتر كريدي رقمي دقيق بالدينار، وتذكير رسمي ومهذب عبر الواتساب بنقرة زر واحدة بدون قلب للأرقام.'
    },
    {
      aspect: 'أسرار الشراء وسرقات العمال',
      before: 'العامل يرى أسعار شرائك الحقيقية وهوامش ربحك، مع خطر التلاعب بالفواتير وحذفها دون أي دليل.',
      after: 'وضع العامل يحجب أسعار الشراء برمز (•••••• دج 🔒)، والصندوق الأسود يوثق كل عملية حذف أو تعديل.'
    },
    {
      aspect: 'السلعة الراقدة ونفاد المخزن',
      before: 'تكتشف السلع الراقدة بالصدفة بعد أن تفقد قيمتها، وتفاجأ بنفاد السلع الرائجة فيذهب الزبون للمنافس.',
      after: 'رادار OODA يكشف السلع الراقدة (+60 يوماً) ويقترح تصفيتها، وتنبيهات حمراء تمنع نفاد الرفوف.'
    },
    {
      aspect: 'أرباح التجارة والتوصيل (COD)',
      before: 'تظن أنك رابح بعد بيع 100 طلبية، وفي آخر الشهر تكتشف أن الروتور والإعلانات التهمت كل الفائدة.',
      after: 'مختبر أرباح COD ذكي يحسب بدقة صافي الربح الحقيقي لكل طلبية بعد خصم الإعلانات والطرود المرتجعة.'
    },
    {
      aspect: 'الاشتراكات الشهرية وسرية البيانات',
      before: 'برامج سحابية باشتراك شهري متكرر، تتوقف فور انقطاع الإنترنت في المحل وتخزن بياناتك على خوادم غريبة.',
      after: 'برنامج مكتبي 100% Offline يعمل بدون إنترنت، 0 دج اشتراك شهري، وسرية مطلقة لبياناتك داخل جهازك.'
    }
  ];

  return (
    <section id="before-after" className="py-16 md:py-28 relative bg-[#071326] border-t border-slate-800 overflow-hidden w-full max-w-full">
      
      {/* Background accents */}
      <div className="hidden sm:block absolute top-1/2 right-10 w-80 h-80 bg-emerald-500/5 blur-[130px] pointer-events-none rounded-full" />
      <div className="hidden sm:block absolute top-1/2 left-10 w-80 h-80 bg-red-500/5 blur-[130px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-xs font-bold mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            <span>الفرق الحقيقي على أرض الواقع</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white leading-tight font-['Cairo'] mb-4">
            كيف تتغير حياة تجارتك مع{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-200">
              SMART GDS v2.1
            </span>
          </h2>

          <p className="text-xs sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto">
            انتقال جذري من فوضى الأوراق والتخمين العشوائي ونزيف الكريدي إلى هيبة التسيير المؤسساتي والسيطرة التامة على أموالك.
          </p>
        </div>

        {/* Side-by-Side Comparison Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          
          {/* Card 1: BEFORE (The Nightmare) */}
          <div className="rounded-2xl sm:rounded-3xl bg-slate-900/60 border border-red-500/30 p-4 sm:p-7 lg:p-8 backdrop-blur-md shadow-xl relative overflow-hidden">
            <div className="flex items-center justify-between pb-4 mb-5 border-b border-red-500/20">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-red-500/10 border border-red-500/30">
                  <XCircle className="w-5 h-5 text-red-400" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white font-['Cairo']">مستودعك قبل SMART GDS</h3>
                  <span className="text-[11px] text-red-400 font-medium">نزيف صامت، ديون منسية، وشك دائم</span>
                </div>
              </div>
              <span className="text-xs font-mono font-bold text-red-400 bg-red-950/60 px-2.5 py-0.5 rounded border border-red-800/60">
                فوضى
              </span>
            </div>

            <div className="space-y-3.5 sm:space-y-4">
              {comparisonItems.map((item, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-slate-950/50 border border-slate-800/80">
                  <div className="text-xs font-bold text-red-300 mb-1 flex items-center gap-1.5 font-['Cairo']">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                    <span>{item.aspect}:</span>
                  </div>
                  <p className="text-xs sm:text-[13px] text-slate-400 leading-relaxed">
                    {item.before}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Card 2: AFTER (The Front Man Command Center) */}
          <div className="rounded-2xl sm:rounded-3xl bg-gradient-to-b from-[#091f33] to-[#071326] border-2 border-emerald-500/50 p-4 sm:p-7 lg:p-8 backdrop-blur-md shadow-2xl shadow-emerald-950/30 relative overflow-hidden">
            
            {/* Top highlight glow */}
            <div className="absolute top-0 right-0 left-0 h-1 bg-gradient-to-r from-emerald-500 via-teal-300 to-emerald-400" />

            <div className="flex items-center justify-between pb-4 mb-5 border-b border-emerald-500/20">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-emerald-500/20 border border-emerald-500/40">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white font-['Cairo']">مستودعك مع SMART GDS v2.1</h3>
                  <span className="text-[11px] text-emerald-400 font-medium">تحكم ذكي، حماية للأرباح، وسرية تامة</span>
                </div>
              </div>
              <span className="text-xs font-mono font-bold text-emerald-300 bg-emerald-950/60 px-2.5 py-0.5 rounded border border-emerald-500/50">
                سيطرة
              </span>
            </div>

            <div className="space-y-3.5 sm:space-y-4">
              {comparisonItems.map((item, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-slate-950/60 border border-emerald-500/20">
                  <div className="text-xs font-bold text-emerald-300 mb-1 flex items-center gap-1.5 font-['Cairo']">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{item.aspect}:</span>
                  </div>
                  <p className="text-xs sm:text-[13px] text-slate-200 leading-relaxed">
                    {item.after}
                  </p>
                </div>
              ))}
            </div>

            {/* Bottom Callout */}
            <div className="mt-5 p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-center">
              <span className="text-xs font-bold text-emerald-300 font-['Cairo']">
                🚀 تثبيت في دقائق • يعمل 100% بدون إنترنت • بدون اشتراك شهري
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
