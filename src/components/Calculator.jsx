import React, { useState, useId } from 'react';
import { 
  Calculator, 
  Flame, 
  AlertTriangle, 
  ArrowRight, 
  Zap, 
  RefreshCw, 
  CheckCircle2, 
  TrendingDown, 
  TrendingUp, 
  DollarSign, 
  Truck, 
  Sparkles,
  ShoppingBag
} from 'lucide-react';

export default function CashCalculator() {
  const [activeTab, setActiveTab] = useState('deadstock'); // 'deadstock' | 'cod'

  // Tab 1: Dead Stock & Credit Bleed States
  const stockInputId = useId();
  const deadStockPercentId = useId();
  const creditInputId = useId();

  const [stockValueMillion, setStockValueMillion] = useState(300);
  const [deadStockPercent, setDeadStockPercent] = useState(20);
  const [creditMillion, setCreditMillion] = useState(45);

  const deadStockMillion = Math.round((stockValueMillion * (deadStockPercent / 100)) * 10) / 10;
  const deadStockDZD = Math.round(deadStockMillion * 10000);
  const creditDZD = Math.round(creditMillion * 10000);
  const totalTrappedMillion = Math.round((deadStockMillion + creditMillion) * 10) / 10;
  const totalTrappedDZD = Math.round(totalTrappedMillion * 10000);
  const annualLossMillion = Math.round((totalTrappedMillion * 0.12) * 10) / 10;

  // Tab 2: COD Profit Lab States
  const [sellPrice, setSellPrice] = useState(4800);
  const [buyCost, setBuyCost] = useState(1600);
  const [cpaCost, setCpaCost] = useState(550);
  const [deliveryCost, setDeliveryCost] = useState(800);
  const [deliveryRate, setDeliveryRate] = useState(72); // 72% delivered
  const returnPenalty = 350; // DZD lost per returned package (return shipping/packaging damage)

  // COD Calculations
  const rateFraction = deliveryRate / 100;
  const deliveredProfit = sellPrice - buyCost - deliveryCost - cpaCost;
  const returnedLoss = returnPenalty + cpaCost;
  const netProfitPerOrder = Math.round((rateFraction * deliveredProfit) - ((1 - rateFraction) * returnedLoss));
  const breakEvenCpa = Math.max(0, Math.round(((rateFraction * (sellPrice - buyCost - deliveryCost)) - ((1 - rateFraction) * returnPenalty))));

  let codStatus = {
    badge: '🏆 منتج رابح (Winner)',
    color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30',
    desc: 'هامش ربح ممتاز يسمح لك بالإنفاق على الإعلانات والتوسع بأمان.'
  };
  if (netProfitPerOrder < 300 && netProfitPerOrder >= 0) {
    codStatus = {
      badge: '⚠️ منتج حساس (Marge Serrée)',
      color: 'text-amber-400 bg-amber-500/10 border-amber-500/30',
      desc: 'هامش ربح ضيق جداً! أي ارتفاع في تكلفة الإعلانات أو الروتور سيجعلك خاسراً.'
    };
  } else if (netProfitPerOrder < 0) {
    codStatus = {
      badge: '❌ منتج ينزف أموالاً (Cash Bleed)',
      color: 'text-red-400 bg-red-500/10 border-red-500/30',
      desc: 'أنت تخسر أموالاً مع كل شحنة تخرج بسبب تكلفة الإعلانات ونسبة الروتور!'
    };
  }

  const presets = [
    { label: '100 مليون', value: 100 },
    { label: '300 مليون (شائع)', value: 300 },
    { label: '500 مليون', value: 500 },
    { label: '1 مليار', value: 1000 },
    { label: '2 مليار', value: 2000 },
  ];

  const whatsappCalculatedText = encodeURIComponent(
    `سلام ANALYSE DZ، استعملت حاسبة البرنامج ولقيت عندي حوالي ${totalTrappedMillion} مليون سنتيم (${totalTrappedDZD.toLocaleString()} دج) سيولة معطلة بين السلعة الراقدة والكريدي. حاب نطلب برنامج SMART GDS v2.1 باش نرجع أموالي وننظم الديبو.`
  );

  return (
    <section id="calculator" className="py-16 sm:py-24 md:py-28 relative bg-[#071326] border-t border-slate-800 overflow-hidden w-full max-w-full">
      
      {/* Background Glow */}
      <div className="hidden sm:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[650px] h-[500px] bg-amber-500/10 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto px-3.5 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-[11px] sm:text-xs font-bold mb-3 sm:mb-4 shadow-sm">
            <Calculator className="w-3.5 h-3.5 shrink-0" />
            <span>تشخيص مالي فوري لديبوك وتجارتك</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white leading-tight font-['Cairo'] mb-3 sm:mb-4">
            حاسبة السيولة المجمدة ومختبر الأرباح{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-300 to-amber-200">
              SMART LAB
            </span>
          </h2>

          <p className="text-xs sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto">
            اكتشف حجم أموالك النائمة في أركان المخزن ودفاتر الكريدي، أو اختبر صافي أرباح طلبياتك في التجارة الإلكترونية والتوصيل.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex p-1.5 rounded-2xl bg-slate-900 border border-slate-800 shadow-xl">
            <button
              onClick={() => setActiveTab('deadstock')}
              className={`flex items-center gap-2 px-4 sm:px-6 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all duration-200 ${
                activeTab === 'deadstock'
                  ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 shadow-lg shadow-amber-500/20'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Flame className="w-4 h-4" />
              <span>السلعة الراقدة والكريدي المجمد</span>
            </button>
            <button
              onClick={() => setActiveTab('cod')}
              className={`flex items-center gap-2 px-4 sm:px-6 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all duration-200 ${
                activeTab === 'cod'
                  ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 shadow-lg shadow-emerald-500/20'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <ShoppingBag className="w-4 h-4" />
              <span>مختبر أرباح التجارة والتوصيل (COD)</span>
            </button>
          </div>
        </div>

        {/* ======================================================== */}
        {/* TAB 1: DEAD STOCK & CREDIT CALCULATOR */}
        {/* ======================================================== */}
        {activeTab === 'deadstock' && (
          <div className="rounded-2xl sm:rounded-3xl bg-slate-900/90 border border-slate-800 backdrop-blur-xl p-4 sm:p-8 lg:p-10 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-stretch">
              
              {/* Input Panel (7 cols) */}
              <div className="lg:col-span-7 space-y-6 sm:space-y-7 flex flex-col justify-between">
                
                {/* Slider 1: Total Stock Value */}
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <label htmlFor={stockInputId} className="text-xs sm:text-sm md:text-base font-bold text-slate-100">
                      1. القيمة التقريبية للبضاعة بالديبو (بسعر الشراء):
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

                  {/* Presets */}
                  <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mt-2.5">
                    <span className="text-[11px] text-slate-400 ml-1">أمثلة سريعة:</span>
                    {presets.map((p) => (
                      <button
                        key={p.value}
                        type="button"
                        onClick={() => setStockValueMillion(p.value)}
                        className={`text-[10px] sm:text-[11px] font-bold px-2.5 py-1 rounded-lg border transition-all ${
                          stockValueMillion === p.value
                            ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/50'
                            : 'bg-slate-800/80 text-slate-400 border-slate-700 hover:text-slate-200'
                        }`}
                      >
                        {p.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Slider 2: Dead Stock Percentage */}
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <label htmlFor={deadStockPercentId} className="text-xs sm:text-sm md:text-base font-bold text-slate-100 flex items-center gap-1.5">
                      <span>2. نسبة السلعة الراقدة (+60 يوماً بدون بيع):</span>
                      <Flame className="w-4 h-4 text-amber-400" />
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
                    step="5"
                    value={deadStockPercent}
                    onChange={(e) => setDeadStockPercent(Number(e.target.value))}
                    className="w-full cursor-pointer accent-amber-500 py-2"
                  />

                  <div className="flex justify-between text-[10px] sm:text-[11px] text-slate-400 mt-1 font-mono">
                    <span>5% (مستودع نشط)</span>
                    <span>20% (المتوسط بالجزائر)</span>
                    <span>50% (ركود حاد)</span>
                  </div>
                </div>

                {/* Slider 3: Customer Uncollected Credit */}
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <label htmlFor={creditInputId} className="text-xs sm:text-sm md:text-base font-bold text-slate-100 flex items-center gap-1.5">
                      <span>3. كريدي الزبائن غير المحصل (Carnet de Crédit):</span>
                    </label>
                    <div className="px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-xl bg-slate-800 border border-orange-500/40 text-orange-400 font-mono font-black text-sm sm:text-base md:text-lg">
                      {creditMillion} <span className="text-[10px] sm:text-xs font-['Cairo'] font-semibold">م سنتيم</span>
                    </div>
                  </div>

                  <input
                    id={creditInputId}
                    type="range"
                    min="0"
                    max="300"
                    step="5"
                    value={creditMillion}
                    onChange={(e) => setCreditMillion(Number(e.target.value))}
                    className="w-full cursor-pointer accent-orange-500 py-2"
                  />

                  <div className="flex justify-between text-[10px] sm:text-[11px] text-slate-400 mt-1 font-mono">
                    <span>0 دج (كاش فقط)</span>
                    <span>50 مليون سنتيم</span>
                    <span>300 مليون سنتيم</span>
                  </div>
                </div>

                {/* Tip Box */}
                <div className="p-3 sm:p-4 rounded-xl bg-slate-950/60 border border-slate-800 text-xs text-slate-300 flex items-start gap-2.5">
                  <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <p className="leading-relaxed">
                    <strong>حقيقة تجارية جزائرية:</strong> كل دينار محبوس في سلعة راقدة أو كريدي غير محصل هو خسارة حقيقية تمنعك من شراء السلع الأكثر طلباً وتضيع عليك هوامش ربح متكررة.
                  </p>
                </div>

              </div>

              {/* Output Shock Panel (5 cols) */}
              <div className="lg:col-span-5 rounded-2xl bg-gradient-to-br from-[#121c2e] via-[#0e1726] to-[#0a111c] border-2 border-amber-500/40 p-5 sm:p-7 flex flex-col justify-between shadow-xl relative overflow-hidden">
                
                <div className="space-y-5">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                    <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                      <Flame className="w-3.5 h-3.5" />
                      <span>السيولة الإجمالية المعطلة</span>
                    </span>
                    <span className="text-[10px] bg-amber-500/10 text-amber-300 px-2 py-0.5 rounded border border-amber-500/30">
                      تشخيص لحظي
                    </span>
                  </div>

                  {/* Main Metric */}
                  <div className="text-right">
                    <div className="text-3xl sm:text-5xl font-black text-amber-400 font-mono tracking-tight leading-none mb-1">
                      {totalTrappedMillion.toLocaleString()}{' '}
                      <span className="text-base sm:text-xl font-['Cairo'] text-white">مليون سنتيم</span>
                    </div>
                    <div className="text-xs sm:text-sm text-slate-400 font-mono mt-1">
                      ≈ {totalTrappedDZD.toLocaleString()} دج دينار جزائري
                    </div>
                  </div>

                  {/* Breakdown */}
                  <div className="space-y-2.5 pt-2">
                    <div className="flex justify-between items-center text-xs p-2.5 rounded-lg bg-slate-900/80 border border-slate-800">
                      <span className="text-slate-400">📦 سلعة راقدة بالديبو:</span>
                      <span className="font-mono font-bold text-amber-300">{deadStockMillion} م سنتيم</span>
                    </div>
                    <div className="flex justify-between items-center text-xs p-2.5 rounded-lg bg-slate-900/80 border border-slate-800">
                      <span className="text-slate-400">🤝 كريدي محبوس عند الزبائن:</span>
                      <span className="font-mono font-bold text-orange-300">{creditMillion} م سنتيم</span>
                    </div>
                    <div className="flex justify-between items-center text-xs p-2.5 rounded-lg bg-red-950/30 border border-red-500/30">
                      <span className="text-red-300">📉 تكلفة الفرصة البديلة سنوياً:</span>
                      <span className="font-mono font-bold text-red-400">~{annualLossMillion} م سنتيم</span>
                    </div>
                  </div>

                  {/* ROI Comparison */}
                  <div className="p-3 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-xs text-emerald-300 leading-relaxed">
                    ⚡ <strong>سعر برنامج SMART GDS v2.1 (4,000 دج)</strong> يمثل أقل من{' '}
                    <span className="font-mono font-bold text-white underline">
                      {((4000 / totalTrappedDZD) * 100).toFixed(2)}%
                    </span>{' '}
                    من إجمالي أموالك المعطلة. استرجاع فاتورة كريدي واحدة يغطي تكلفة البرنامج مدى الحياة!
                  </div>
                </div>

                {/* Dynamic CTA */}
                <div className="pt-5 mt-5 border-t border-slate-800">
                  <a
                    href={`https://wa.me/213676067652?text=${whatsappCalculatedText}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl font-black text-xs sm:text-sm text-slate-950 bg-gradient-to-r from-amber-400 via-emerald-400 to-teal-400 hover:from-amber-300 hover:to-teal-300 transition-all shadow-lg shadow-amber-500/20 active:scale-95 group"
                  >
                    <span>حرّر سيولة مخزنك وكريديك الآن</span>
                    <ArrowRight className="w-4 h-4 transform rotate-180 group-hover:-translate-x-1 transition-transform" />
                  </a>
                  <span className="block text-center text-[10px] text-slate-400 mt-2">
                    تثبيت فوري بدون إنترنت • بدون اشتراك شهري
                  </span>
                </div>

              </div>

            </div>
          </div>
        )}

        {/* ======================================================== */}
        {/* TAB 2: COD PROFIT LAB CALCULATOR */}
        {/* ======================================================== */}
        {activeTab === 'cod' && (
          <div className="rounded-2xl sm:rounded-3xl bg-slate-900/90 border border-slate-800 backdrop-blur-xl p-4 sm:p-8 lg:p-10 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-stretch">
              
              {/* Inputs Panel (7 cols) */}
              <div className="lg:col-span-7 space-y-5">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Sell Price */}
                  <div>
                    <label className="text-xs font-bold text-slate-200 block mb-1.5">
                      سعر بيع السلعة للكليان (DZD):
                    </label>
                    <div className="relative">
                      <input
                        type="number"
                        step="100"
                        value={sellPrice}
                        onChange={(e) => setSellPrice(Number(e.target.value))}
                        className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-white font-mono font-bold text-sm focus:border-emerald-500 outline-none"
                      />
                      <span className="absolute left-3 top-2.5 text-xs text-slate-400">دج</span>
                    </div>
                  </div>

                  {/* Buy Cost */}
                  <div>
                    <label className="text-xs font-bold text-slate-200 block mb-1.5">
                      سعر شراء السلعة بالجملة (DZD):
                    </label>
                    <div className="relative">
                      <input
                        type="number"
                        step="100"
                        value={buyCost}
                        onChange={(e) => setBuyCost(Number(e.target.value))}
                        className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-white font-mono font-bold text-sm focus:border-emerald-500 outline-none"
                      />
                      <span className="absolute left-3 top-2.5 text-xs text-slate-400">دج</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Delivery Cost */}
                  <div>
                    <label className="text-xs font-bold text-slate-200 block mb-1.5">
                      سعر التوصيل للطلبية (Yalidine..):
                    </label>
                    <div className="relative">
                      <input
                        type="number"
                        step="50"
                        value={deliveryCost}
                        onChange={(e) => setDeliveryCost(Number(e.target.value))}
                        className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-white font-mono font-bold text-sm focus:border-emerald-500 outline-none"
                      />
                      <span className="absolute left-3 top-2.5 text-xs text-slate-400">دج</span>
                    </div>
                  </div>

                  {/* CPA Cost */}
                  <div>
                    <label className="text-xs font-bold text-slate-200 block mb-1.5">
                      تكلفة الإعلان لكل طلبية (CPA):
                    </label>
                    <div className="relative">
                      <input
                        type="number"
                        step="50"
                        value={cpaCost}
                        onChange={(e) => setCpaCost(Number(e.target.value))}
                        className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-white font-mono font-bold text-sm focus:border-emerald-500 outline-none"
                      />
                      <span className="absolute left-3 top-2.5 text-xs text-slate-400">دج</span>
                    </div>
                  </div>
                </div>

                {/* Delivery Rate Slider */}
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <label className="text-xs sm:text-sm font-bold text-slate-100 flex items-center gap-1.5">
                      <Truck className="w-4 h-4 text-cyan-400" />
                      <span>نسبة التسليم الحقيقية (Taux de Livraison %):</span>
                    </label>
                    <div className="px-2.5 py-1 rounded-xl bg-slate-800 border border-cyan-500/40 text-cyan-400 font-mono font-black text-sm">
                      {deliveryRate}%
                    </div>
                  </div>

                  <input
                    type="range"
                    min="40"
                    max="95"
                    step="1"
                    value={deliveryRate}
                    onChange={(e) => setDeliveryRate(Number(e.target.value))}
                    className="w-full cursor-pointer accent-cyan-500 py-2"
                  />

                  <div className="flex justify-between text-[10px] text-slate-400 mt-1 font-mono">
                    <span>40% (روتور كارثي)</span>
                    <span>70% (متوسط الجزائر)</span>
                    <span>95% (تسليم ممتاز)</span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800 text-xs text-slate-300">
                  💡 <strong>ملاحظة تقنية:</strong> الحاسبة تحتسب تلقائياً عقوبة خسارة الطرود المرتجعة ({returnPenalty} دج لكل طرد راجع بسبب التغليف وتكلفة الشحن العكسي).
                </div>

              </div>

              {/* Output Panel (5 cols) */}
              <div className="lg:col-span-5 rounded-2xl bg-gradient-to-br from-[#102033] via-[#0d1826] to-[#08101a] border-2 border-emerald-500/40 p-5 sm:p-7 flex flex-col justify-between shadow-xl relative overflow-hidden">
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                    <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider">
                      صافي الربح الحقيقي بعد الروتور
                    </span>
                    <span className="text-[10px] bg-emerald-500/10 text-emerald-300 px-2 py-0.5 rounded border border-emerald-500/30">
                      COD Lab
                    </span>
                  </div>

                  {/* Main Metric */}
                  <div className="text-right">
                    <div className={`text-3xl sm:text-5xl font-black font-mono tracking-tight leading-none mb-1 ${
                      netProfitPerOrder >= 0 ? 'text-emerald-400' : 'text-red-400'
                    }`}>
                      {netProfitPerOrder > 0 ? `+${netProfitPerOrder.toLocaleString()}` : netProfitPerOrder.toLocaleString()}{' '}
                      <span className="text-base sm:text-xl font-['Cairo'] text-white">دج / طلبية</span>
                    </div>
                    <div className="text-xs text-slate-400 font-['Cairo']">
                      متوسط صافي الفائدة الصافية في جيبك لكل كوموند تخرج من المحل
                    </div>
                  </div>

                  {/* Status Badge */}
                  <div className={`p-3 rounded-xl border text-xs ${codStatus.color}`}>
                    <div className="font-bold text-sm mb-1">{codStatus.badge}</div>
                    <p className="text-[11px] leading-relaxed text-slate-300">{codStatus.desc}</p>
                  </div>

                  {/* Break Even CPA */}
                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 space-y-1.5 text-xs font-mono">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-400 font-['Cairo']">أقصى تكلفة إعلان مسموحة (Break-Even):</span>
                      <span className="text-cyan-400 font-bold">{breakEvenCpa.toLocaleString()} دج</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-400 font-['Cairo']">الربح في الطلبية المسلّمة:</span>
                      <span className="text-emerald-300 font-bold">+{deliveredProfit.toLocaleString()} دج</span>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="pt-4 mt-4 border-t border-slate-800">
                  <a
                    href="https://wa.me/213676067652?text=%D8%B3%D9%84%D8%A7%D9%85%20ANALYSE%20DZ%D8%8C%20%D8%AD%D8%A7%D8%A8%20%D9%86%D8%B7%D9%84%D8%A8%20%D8%A8%D8%B1%D9%86%D8%A7%D9%85%D8%AC%20SMART%20GDS%20v2.1%20ENTERPRISE%20PRO%20%D9%84%D9%85%D8%AA%D8%AC%D8%B1%D9%8A"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl font-black text-xs sm:text-sm text-slate-950 bg-gradient-to-r from-emerald-400 to-teal-400 hover:from-emerald-300 hover:to-teal-300 transition-all shadow-lg shadow-emerald-500/20 active:scale-95 group"
                  >
                    <span>احصل على مختبر COD ومخزنك الذكي</span>
                    <ArrowRight className="w-4 h-4 transform rotate-180 group-hover:-translate-x-1 transition-transform" />
                  </a>
                </div>

              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
