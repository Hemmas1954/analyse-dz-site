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
  const deadStockMillion = Math.round((stockValueMillion * (deadStockPercent / 100)) * 10) / 10;
  const deadStockDZD = Math.round(deadStockMillion * 10000);
  const annualLossMillion = Math.round((deadStockMillion * 0.12) * 10) / 10;

  const systemPrice = 4000;
  const systemCostPercentage = ((systemPrice / deadStockDZD) * 100).toFixed(2);

  const presets = [
    { label: '100 مليون', value: 100 },
    { label: '300 مليون (شائع)', value: 300 },
    { label: '500 مليون', value: 500 },
    { label: '1 مليار', value: 1000 },
    { label: '2 مليار', value: 2000 },
  ];

  const whatsappCalculatedText = encodeURIComponent(
    `سلام ANALYSE DZ، استعملت حاسبة الديبو ولقيت عندي حوالي ${deadStockMillion} مليون سنتيم (${deadStockDZD.toLocaleString()} دج) سلعة راقدة ومجمدة في المخزن وحاب نطلب النظام باش نحرر هاد السيولة وننظم الديبو.`
  );

  return (
    <section id="calculator" className="py-16 sm:py-24 md:py-28 relative bg-[#071326] border-t border-slate-800 overflow-hidden w-full max-w-full">
      
      {/* Background Glow */}
      <div className="hidden sm:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[650px] h-[500px] bg-amber-500/10 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto px-3.5 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-[11px] sm:text-xs font-bold mb-3 sm:mb-4 shadow-sm">
            <Calculator className="w-3.5 h-3.5 shrink-0" />
            <span>تشخيص مالي فوري لديبوك</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white leading-tight font-['Cairo'] mb-3 sm:mb-4">
            حاسبة السيولة المجمدة ونزيف الكاش{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-300 to-amber-200">
              (Dead Stock)
            </span>
          </h2>

          <p className="text-xs sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto">
            حرّك المؤشرات لاكتشاف حجم الأموال النائمة في أركان مخزنك التي تحرمك من السيولة اليومية لشراء بضائع جديدة.
          </p>
        </div>

        {/* The Interactive Calculator Card */}
        <div className="rounded-2xl sm:rounded-3xl bg-slate-900/90 border border-slate-800 backdrop-blur-xl p-4 sm:p-8 lg:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-stretch">
            
            {/* Input Panel (7 cols) */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-8 flex flex-col justify-between">
              
              {/* Slider 1: Total Stock Value */}
              <div>
                <div className="flex items-center justify-between gap-2 mb-2 sm:mb-3">
                  <label htmlFor={stockInputId} className="text-xs sm:text-sm md:text-base font-bold text-slate-100">
                    1. القيمة التقريبية للسلعة بالديبو:
                  </label>
                  <div className="px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-xl bg-slate-800 border border-emerald-500/40 text-emerald-400 font-mono font-black text-sm sm:text-base md:text-lg">
                    {stockValueMillion.toLocaleString()} <span className="text-[10px] sm:text-xs font-['Cairo'] font-semibold">م سنتيم</span>
                  </div>
                </div>

                <input
                  id={stockInputId}
                  type="range"
                  min="50"
                  max="2000"
                  step="25"
                  value={stockValueMillion}
                  onChange={(e) => setStockValueMillion(Number(e.target.value))}
                  className="w-full cursor-pointer accent-emerald-500 py-2"
                />

                <div className="flex justify-between text-[10px] sm:text-[11px] text-slate-400 mt-1 font-mono">
                  <span>50 مليون</span>
                  <span>500 مليون</span>
                  <span>2 مليار سنتيم</span>
                </div>

                {/* Quick Presets (Touch Pills) */}
                <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mt-3">
                  <span className="text-[11px] text-slate-400 ml-1">أمثلة سريعة:</span>
                  {presets.map((p) => (
                    <button
                      key={p.value}
                      onClick={() => setStockValueMillion(p.value)}
                      className={`text-[11px] sm:text-xs px-2.5 py-1 rounded-lg border transition-all active:scale-95 ${
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
                <div className="flex items-center justify-between gap-2 mb-2 sm:mb-3">
                  <label htmlFor={deadStockPercentId} className="text-xs sm:text-sm md:text-base font-bold text-slate-100">
                    2. نسبة السلعة الراقدة (+60 يوم):
                  </label>
                  <div className="px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-xl bg-slate-800 border border-amber-500/40 text-amber-400 font-mono font-black text-sm sm:text-base md:text-lg">
                    {deadStockPercent}%
                  </div>
                </div>

                <input
                  id={deadStockPercentId}
                  type="range"
                  min="5"
                  max="50"
                  step="1"
                  value={deadStockPercent}
                  onChange={(e) => setDeadStockPercent(Number(e.target.value))}
                  className="w-full cursor-pointer accent-amber-500 py-2"
                />

                <div className="flex justify-between text-[10px] sm:text-[11px] text-slate-400 mt-1 font-mono">
                  <span>5% (منضبط)</span>
                  <span className="text-amber-400 font-bold">20% (المعدل بالجزائر)</span>
                  <span>50% (نزيف حاد)</span>
                </div>
              </div>

              {/* Field Note */}
              <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800 text-[11px] sm:text-xs text-slate-400 leading-relaxed">
                💡 <strong className="text-slate-200">واقع السوق الجزائري:</strong> ما بين 15% إلى 30% من سلع المخازن تبقى نائمة لأكثر من شهرين بدون علم التاجر بسبب غياب التنبيهات الآلية.
              </div>

            </div>

            {/* Results Panel (5 cols) */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <div className="rounded-2xl bg-gradient-to-br from-slate-900 via-[#0c1e38] to-[#071326] border-2 border-amber-500/40 p-4 sm:p-6 relative overflow-hidden shadow-xl shadow-amber-950/20">
                
                {/* Status Badge */}
                <div className="flex items-center justify-between mb-3">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-black bg-amber-500/20 text-amber-300 border border-amber-500/40">
                    <Flame className="w-3.5 h-3.5" />
                    <span>تشخيص النزيف الفوري</span>
                  </span>
                  <span className="text-[10px] font-mono text-slate-400">ANALYSE DZ</span>
                </div>

                {/* Main Metric */}
                <div className="mb-4 sm:mb-5">
                  <div className="text-[11px] sm:text-xs text-slate-300 mb-1">
                    💰 السيولة الميتة المحبوسة في مخزنك الآن:
                  </div>
                  <div className="text-2xl sm:text-4xl font-black text-amber-400 font-['Cairo'] tracking-tight">
                    {deadStockMillion.toLocaleString()} <span className="text-base sm:text-lg text-amber-200">مليون سنتيم!</span>
                  </div>
                  <div className="text-[11px] font-mono text-slate-400 mt-1">
                    تساوي: <strong className="text-slate-100">{deadStockDZD.toLocaleString()} دج</strong> نائمة في الزوايا
                  </div>
                </div>

                {/* Holding Cost */}
                <div className="space-y-2.5 pb-4 border-b border-slate-800 text-[11px] sm:text-xs text-slate-300">
                  <div className="flex items-start gap-1.5">
                    <TrendingDown className="w-3.5 h-3.5 text-red-400 shrink-0 mt-0.5" />
                    <div>
                      <span>تآكل القيمة وتكلفة التخزين السنوية:</span>
                      <strong className="text-red-400 font-mono mr-1">~{annualLossMillion} مليون سنتيم</strong>
                    </div>
                  </div>

                  <div className="p-2.5 rounded-lg bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 text-[11px] sm:text-xs font-semibold leading-relaxed">
                    ⚡ تكلفة نظام ANALYSE DZ (4,000 دج) تمثل فقط{' '}
                    <span className="font-mono font-black text-white bg-emerald-500/30 px-1 rounded">{systemCostPercentage}%</span>{' '}
                    من هذه الأموال المجمدة التي سنحررها لك.
                  </div>
                </div>

                {/* Action Button */}
                <div className="pt-4">
                  <a
                    href={`https://wa.me/213676067652?text=${whatsappCalculatedText}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl font-black text-xs sm:text-sm text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 hover:from-amber-300 hover:to-yellow-300 transition-all shadow-lg shadow-amber-500/30 active:scale-95"
                  >
                    <span>حرر هذه السيولة الآن واسترجع كاشك</span>
                    <ArrowRight className="w-4 h-4 transform rotate-180 shrink-0" />
                  </a>

                  <div className="text-center mt-2">
                    <a href="#pricing" className="text-[11px] text-slate-400 hover:text-emerald-400 underline decoration-slate-700">
                      أو تصفح تفاصيل الباقات والأسعار
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
