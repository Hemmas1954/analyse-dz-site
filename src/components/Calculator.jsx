import React, { useState, useId } from 'react';
import { Calculator, Flame, AlertTriangle, ArrowRight, Zap, RefreshCw, CheckCircle2, TrendingDown } from 'lucide-react';

export default function CashCalculator() {
  const stockInputId = useId();
  const deadStockPercentId = useId();

  // Slider 1: Total Stock Value in Millions de Centimes (Range: 50M to 2000M)
  // 1 Million Centimes = 10,000 DZD
  const [stockValueMillion, setStockValueMillion] = useState(300);

  // Slider 2: Dead Stock Percentage (5% to 50%, default 20%)
  const [deadStockPercent, setDeadStockPercent] = useState(20);

  // Calculations
  // Dead Stock in Million Centimes
  const deadStockMillion = Math.round((stockValueMillion * (deadStockPercent / 100)) * 10) / 10;
  // Dead Stock in DZD (1 Million Centime = 10,000 DZD)
  const deadStockDZD = Math.round(deadStockMillion * 10000);
  
  // Annual Holding/Opportunity Cost (roughly 12% in devaluation, space, lost interest)
  const annualLossMillion = Math.round((deadStockMillion * 0.12) * 10) / 10;

  // Percentage cost of ANALYSE DZ (DIY: 4,000 DZD) relative to frozen cash
  const systemPrice = 4000;
  const systemCostPercentage = ((systemPrice / deadStockDZD) * 100).toFixed(2);

  // Quick preset handlers
  const presets = [
    { label: '100 مليون', value: 100 },
    { label: '300 مليون (متوسط)', value: 300 },
    { label: '500 مليون', value: 500 },
    { label: '1 مليار سنتيم', value: 1000 },
    { label: '2 مليار سنتيم', value: 2000 },
  ];

  // WhatsApp pre-filled link with calculated values
  const whatsappCalculatedText = encodeURIComponent(
    `سلام ANALYSE DZ، استعملت حاسبة الديبو ولقيت عندي حوالي ${deadStockMillion} مليون سنتيم (${deadStockDZD.toLocaleString()} دج) سلعة راقدة ومجمدة في المخزن وحاب نطلب النظام باش نحرر هاد السيولة وننظم الديبو.`
  );

  return (
    <section id="calculator" className="py-20 md:py-28 relative bg-[#071326] border-t border-slate-800">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[500px] bg-amber-500/10 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-bold mb-4 shadow-sm">
            <Calculator className="w-3.5 h-3.5" />
            <span>أداة تشخيص فوري حصرية لتاجر الجملة والمستودع</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white leading-tight font-['Cairo'] mb-4">
            حاسبة السيولة المجمدة ونزيف الكاش{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-300 to-amber-200">
              (Dead Stock Calculator)
            </span>
          </h2>

          <p className="text-sm sm:text-base text-slate-300">
            حرّك المؤشرات لاكتشاف حجم الأموال النائمة في أركان مخزنك التي تحرمك من السيولة اليومية لشراء بضائع جديدة سريعة الدوران.
          </p>
        </div>

        {/* The Interactive Calculator Card */}
        <div className="rounded-3xl bg-slate-900/90 border border-slate-800 backdrop-blur-xl p-6 sm:p-10 shadow-2xl shadow-black/60">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left/Sliders Input Panel (7 cols) */}
            <div className="lg:col-span-7 space-y-8">
              
              {/* Slider 1: Total Stock Value */}
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <label htmlFor={stockInputId} className="text-sm sm:text-base font-bold text-slate-100 flex items-center gap-2">
                    <span>1. القيمة التقريبية لسلعتك في الديبو:</span>
                  </label>
                  <div className="px-3.5 py-1.5 rounded-xl bg-slate-800 border border-emerald-500/40 text-emerald-400 font-mono font-black text-base sm:text-lg">
                    {stockValueMillion.toLocaleString()} <span className="text-xs font-['Cairo'] font-semibold">مليون سنتيم</span>
                  </div>
                </div>

                {/* Range Slider */}
                <input
                  id={stockInputId}
                  type="range"
                  min="50"
                  max="2000"
                  step="25"
                  value={stockValueMillion}
                  onChange={(e) => setStockValueMillion(Number(e.target.value))}
                  className="w-full h-3 bg-slate-800 rounded-lg cursor-pointer accent-emerald-500"
                />

                <div className="flex justify-between text-[11px] text-slate-400 mt-2 font-mono">
                  <span>50 مليون (محل صغير)</span>
                  <span>500 مليون</span>
                  <span>2 مليار سنتيم (مستودع جملة كبير)</span>
                </div>

                {/* Quick Presets */}
                <div className="flex flex-wrap items-center gap-2 mt-4">
                  <span className="text-xs text-slate-400">خيارات سريعة:</span>
                  {presets.map((p) => (
                    <button
                      key={p.value}
                      onClick={() => setStockValueMillion(p.value)}
                      className={`text-xs px-2.5 py-1 rounded-lg border transition-all ${
                        stockValueMillion === p.value
                          ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/50 font-bold'
                          : 'bg-slate-800/60 text-slate-300 border-slate-700 hover:border-slate-600'
                      }`}
                    >
                      {p.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Slider 2: Dead Stock Percentage */}
              <div className="pt-4 border-t border-slate-800">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <label htmlFor={deadStockPercentId} className="text-sm sm:text-base font-bold text-slate-100 flex items-center gap-2">
                    <span>2. نسبة السلعة لي ما تحركتش عندها شهرين (+60 يوم):</span>
                  </label>
                  <div className="px-3.5 py-1.5 rounded-xl bg-slate-800 border border-amber-500/40 text-amber-400 font-mono font-black text-base sm:text-lg">
                    {deadStockPercent}%
                  </div>
                </div>

                {/* Range Slider */}
                <input
                  id={deadStockPercentId}
                  type="range"
                  min="5"
                  max="50"
                  step="1"
                  value={deadStockPercent}
                  onChange={(e) => setDeadStockPercent(Number(e.target.value))}
                  className="w-full h-3 bg-slate-800 rounded-lg cursor-pointer accent-amber-500"
                />

                <div className="flex justify-between text-[11px] text-slate-400 mt-2 font-mono">
                  <span>5% (مستودع شديد الانضباط)</span>
                  <span className="text-amber-400 font-bold">20% (المتوسط الشائع في الجزائر)</span>
                  <span>50% (حالة نزيف حرج)</span>
                </div>
              </div>

              {/* Algerian Reality Context Note */}
              <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800 text-xs text-slate-400 leading-relaxed">
                💡 <strong className="text-slate-200">ملاحظة من الميدان:</strong> أظهرت دراسات حركة المستودعات في الجزائر أن ما بين 15% إلى 30% من سلع المستودعات تبقى نائمة لأكثر من شهرين بدون علم صاحب العمل بسبب انعدام تصنيف باريتو الآلي وتنبيهات الركود.
              </div>

            </div>

            {/* Right/Dynamic Output Results Panel (5 cols) */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl bg-gradient-to-br from-slate-900 to-[#0c1e38] border-2 border-amber-500/40 p-6 sm:p-7 relative overflow-hidden shadow-xl shadow-amber-950/20">
                
                {/* Glow badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black bg-amber-500/20 text-amber-300 border border-amber-500/40">
                    <Flame className="w-3.5 h-3.5" />
                    <span>تشخيص النزيف المالي الفوري</span>
                  </span>
                  <span className="text-[11px] font-mono text-slate-400">ANALYSE ENGINE</span>
                </div>

                {/* Main Metric */}
                <div className="mb-6">
                  <div className="text-xs text-slate-300 font-medium mb-1">
                    💰 السيولة الميتة المحبوسة في مخزنك الآن:
                  </div>
                  <div className="text-3xl sm:text-4xl font-black text-amber-400 font-['Cairo'] tracking-tight">
                    {deadStockMillion.toLocaleString()} <span className="text-lg text-amber-200">مليون سنتيم!</span>
                  </div>
                  <div className="text-xs font-mono text-slate-400 mt-1">
                    (تساوي بالضبط: <strong className="text-slate-200">{deadStockDZD.toLocaleString()} دينار جزائري</strong> نائمة بدون دوران)
                  </div>
                </div>

                {/* Additional Insight */}
                <div className="space-y-3 pb-6 border-b border-slate-800 text-xs text-slate-300">
                  <div className="flex items-start gap-2">
                    <TrendingDown className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-100">تكلفة التخزين وتراجع القيمة سنوياً:</strong>
                      <span className="text-red-400 font-bold font-mono mr-1">~{annualLossMillion} مليون سنتيم</span>
                      <span className="text-slate-400 block text-[11px] mt-0.5">(تآكل الكراتين، الغبار، وفقدان فرص الاستثمار)</span>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-emerald-950/30 border border-emerald-500/30 text-emerald-300 text-xs font-semibold leading-relaxed">
                    ⚡ تكلفة نظام <strong className="text-white">ANALYSE DZ</strong> (4,000 دج) تمثل فقط{' '}
                    <span className="font-mono font-black text-white bg-emerald-500/30 px-1 rounded">{systemCostPercentage}%</span>{' '}
                    من هذه الأموال المجمدة التي سنساعدك على تحريرها في أيام معدودة!
                  </div>
                </div>

                {/* WhatsApp Direct Action Button */}
                <div className="pt-6">
                  <a
                    href={`https://wa.me/213676067652?text=${whatsappCalculatedText}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2.5 py-4 px-5 rounded-xl font-black text-sm text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 hover:from-amber-300 hover:to-yellow-300 transition-all shadow-lg shadow-amber-500/30 transform hover:-translate-y-0.5"
                  >
                    <span>حرر هذه السيولة الآن واسترجع كاشك</span>
                    <ArrowRight className="w-4 h-4 transform rotate-180" />
                  </a>

                  <div className="text-center mt-3">
                    <a href="#pricing" className="text-xs text-slate-400 hover:text-emerald-400 transition-colors underline decoration-slate-700">
                      أو تصفح تفاصيل الباقات والأسعار أدناه
                    </a>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

