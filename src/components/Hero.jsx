import React, { useState } from 'react';
import { 
  AlertTriangle, 
  ArrowDown, 
  BarChart3, 
  CheckCircle, 
  Database, 
  Flame, 
  Layers, 
  Lock, 
  Package, 
  RefreshCw, 
  Send, 
  ShieldCheck, 
  Smartphone, 
  Sparkles, 
  TrendingDown, 
  TrendingUp, 
  Zap,
  ArrowRight,
  Gauge,
  Rocket,
  Cpu,
  Coins,
  Check,
  Eye,
  EyeOff,
  Printer,
  FileText,
  UserCheck,
  ShieldAlert,
  MessageCircle
} from 'lucide-react';

export default function Hero() {
  const [activeTab, setActiveTab] = useState('product'); // 'product', 'billing', 'bossMode'
  const [isWorkerMode, setIsWorkerMode] = useState(false); // Interactive Boss vs Worker toggle
  const [sentWhatsApp, setSentWhatsApp] = useState(false);

  const productFeatures = [
    {
      title: '0 دج اشتراك شهري',
      subtitle: 'شراء لمرة واحدة مدى الحياة',
      icon: Coins,
      bg: 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400'
    },
    {
      title: 'يعمل 100% بدون إنترنت',
      subtitle: 'Offline-First وسرية بيانات تامة',
      icon: Database,
      bg: 'bg-teal-500/10 border-teal-500/30 text-teal-300'
    },
    {
      title: 'دفتر الكريدي وتذكير الواتساب',
      subtitle: '1-Click WhatsApp بدون قلب للأرقام',
      icon: MessageCircle,
      bg: 'bg-cyan-500/10 border-cyan-500/30 text-cyan-300'
    },
    {
      title: 'وضع المدير vs العامل',
      subtitle: 'حجب أسعار الشراء والصندوق الأسود',
      icon: Lock,
      bg: 'bg-amber-500/10 border-amber-500/30 text-amber-300'
    }
  ];

  const handleSendWhatsAppDemo = () => {
    setSentWhatsApp(true);
    setTimeout(() => setSentWhatsApp(false), 2500);
  };

  return (
    <section className="relative pt-24 pb-16 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-28 overflow-hidden w-full max-w-full bg-grid-pattern">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[320px] sm:max-w-[650px] h-[300px] sm:h-[500px] bg-emerald-500/10 blur-[90px] sm:blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="hidden sm:block absolute top-1/3 left-1/2 -translate-x-1/2 w-[450px] h-[450px] bg-blue-600/10 blur-[140px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        
        {/* Top Shock / Position Badge */}
        <div className="flex justify-center mb-5 sm:mb-6">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-slate-900/90 border border-emerald-500/30 text-emerald-300 text-[11px] sm:text-xs md:text-sm font-bold shadow-lg shadow-emerald-500/10 backdrop-blur-md text-center">
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
            <span>🚨 البرنامج المكتبي الجزائري الأول لإدارة المخازن، الفوترة المتعددة، ودفتر ديون الزبائن الآلي</span>
          </div>
        </div>

        {/* Shock Headline & Direct Promise */}
        <div className="text-center max-w-4xl mx-auto mb-8 sm:mb-10">
          
          {/* Sub-tagline from product box */}
          <div className="inline-block mb-3 px-3.5 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/40 text-emerald-400 font-mono text-xs font-bold tracking-wider">
            ANALYSE DZ • SMART GDS v2.1 ENTERPRISE PRO
          </div>

          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.3] sm:leading-[1.25] tracking-tight font-['Cairo'] mb-4 sm:mb-6">
            تحكّم في مخزنك، احمِ أرباحك، وجمّع كريدي زبائنك{' '}
            <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-l from-emerald-400 via-teal-300 to-emerald-200">
              بضغطة زر وبدون إنترنت!
              <span className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-emerald-400 to-transparent opacity-80" />
            </span>
          </h1>
          
          <p className="text-xs sm:text-base md:text-lg text-slate-300 font-normal leading-relaxed max-w-3xl mx-auto px-1">
            برنامج مكتبي مستقل 100% (<strong className="text-white">Offline-First</strong>) لتجار الجملة والتجزئة والـ E-commerce في الجزائر. 
            بلا اشتراكات شهرية <span className="font-bold text-emerald-400 underline decoration-emerald-500/50 underline-offset-4">(0 دج تكلفة تشغيل)</span> وبدون تخزين سحابي لضمان سرية حساباتك، مع دفتر الكريدي الرقمي الذكي وتذكير الواتساب الفوري، ونظام الرقابة ومنع السرقات (Boss vs Worker).
          </p>

          {/* Action CTAs */}
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 max-w-md sm:max-w-none mx-auto">
            <a
              href="#pricing"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-black text-sm sm:text-base text-slate-950 bg-gradient-to-r from-emerald-400 via-emerald-300 to-teal-400 hover:from-emerald-300 hover:to-teal-300 transition-all shadow-[0_0_25px_rgba(16,185,129,0.35)] active:scale-95"
            >
              <Zap className="w-4 h-4 sm:w-5 sm:h-5 fill-slate-950 shrink-0" />
              <span>اطلب رخصة البرنامج الآن (تثبيت ومرافقة AnyDesk)</span>
            </a>

            <a
              href="#calculator"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3.5 sm:py-4 rounded-xl font-bold text-xs sm:text-sm text-slate-200 bg-slate-900/80 hover:bg-slate-800/90 border border-slate-700/80 hover:border-emerald-500/50 transition-all shadow-md backdrop-blur-md active:scale-95"
            >
              <span>احسب الكاش والكريدي المحبوس</span>
              <ArrowDown className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400 animate-bounce" />
            </a>
          </div>

          {/* The 4 Core Value Pillars */}
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-3.5 max-w-4xl mx-auto">
            {productFeatures.map((feat, idx) => {
              const Icon = feat.icon;
              return (
                <div
                  key={idx}
                  className={`p-3 rounded-2xl border backdrop-blur-md flex flex-col items-center justify-center text-center transition-all hover:scale-[1.02] ${feat.bg}`}
                >
                  <div className="w-9 h-9 rounded-xl bg-slate-950/70 border border-white/10 flex items-center justify-center mb-1.5 shadow-sm">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="font-bold text-xs sm:text-sm text-white font-['Cairo'] leading-snug">
                    {feat.title}
                  </div>
                  <div className="text-[10px] text-slate-400 font-medium mt-0.5">
                    {feat.subtitle}
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* Hero Visual: 3D Product Bundle Showcase + Interactive Live Mockup */}
        <div className="relative max-w-5xl mx-auto">
          <div className="relative rounded-2xl p-[1px] bg-gradient-to-b from-emerald-500/40 via-slate-700/50 to-transparent shadow-2xl shadow-emerald-950/40">
            <div className="rounded-2xl bg-[#09182f]/95 border border-slate-800 backdrop-blur-xl overflow-hidden">
              
              {/* Mockup Header Toolbar with 3 TABS */}
              <div className="flex flex-col sm:flex-row items-center justify-between border-b border-slate-800/80 bg-slate-950/80 p-2.5 sm:px-4 sm:py-3 gap-2.5">
                
                {/* Left indicators */}
                <div className="flex items-center justify-between w-full sm:w-auto">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/80 border border-red-400/40" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80 border border-amber-400/40" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 border border-emerald-400/40" />
                    <span className="text-[10px] text-slate-400 mr-2 font-mono truncate max-w-[190px] sm:max-w-none">
                      ANALYSE_DZ_SMART_GDS_v2.1_PRO.exe
                    </span>
                  </div>
                  
                  <span className="text-[10px] text-emerald-400 font-mono font-bold flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    <span>100% OFFLINE</span>
                  </span>
                </div>

                {/* 3 Tab Switcher */}
                <div className="grid grid-cols-3 w-full sm:w-auto p-1 bg-slate-900 rounded-lg border border-slate-800 text-[10px] sm:text-xs font-semibold gap-1">
                  <button
                    onClick={() => setActiveTab('product')}
                    className={`flex items-center justify-center gap-1 py-1.5 px-2 rounded-md transition-all ${
                      activeTab === 'product'
                        ? 'bg-emerald-500 text-slate-950 font-bold shadow-md shadow-emerald-500/20'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    <Package className="w-3.5 h-3.5" />
                    <span>البرنامج والمجسم</span>
                  </button>
                  <button
                    onClick={() => setActiveTab('billing')}
                    className={`flex items-center justify-center gap-1 py-1.5 px-2 rounded-md transition-all ${
                      activeTab === 'billing'
                        ? 'bg-emerald-500 text-slate-950 font-bold shadow-md shadow-emerald-500/20'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    <FileText className="w-3.5 h-3.5" />
                    <span>الفوترة والكريدي</span>
                  </button>
                  <button
                    onClick={() => setActiveTab('bossMode')}
                    className={`flex items-center justify-center gap-1 py-1.5 px-2 rounded-md transition-all ${
                      activeTab === 'bossMode'
                        ? 'bg-emerald-500 text-slate-950 font-bold shadow-md shadow-emerald-500/20'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    <Lock className="w-3.5 h-3.5" />
                    <span>وضع المدير vs العامل</span>
                  </button>
                </div>

              </div>

              {/* TAB 1: 3D Official Product Box Showcase */}
              {activeTab === 'product' && (
                <div className="p-3 sm:p-6 bg-gradient-to-b from-[#071326] via-[#091b33] to-[#071326]">
                  <div className="relative rounded-2xl overflow-hidden border border-emerald-500/30 shadow-2xl bg-slate-950/80 group">
                    
                    {/* Top overlay badge */}
                    <div className="absolute top-3 right-3 sm:top-5 sm:right-5 z-20 flex flex-col gap-2">
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-950/80 border border-emerald-500/50 backdrop-blur-md text-emerald-300 font-bold text-[10px] sm:text-xs shadow-lg">
                        <Check className="w-3.5 h-3.5 text-emerald-400 stroke-[3]" />
                        <span>SMART GDS v2.1 ENTERPRISE PRO</span>
                      </div>
                      <div className="hidden sm:inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-slate-900/80 border border-slate-700 text-slate-300 text-[10px] font-mono">
                        <span>مكتبي مستقل • طابعات A4 • قارئ باركود</span>
                      </div>
                    </div>

                    {/* Top Left Instant Download Tag */}
                    <div className="absolute top-3 left-3 sm:top-5 sm:left-5 z-20">
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-500 text-slate-950 font-black text-[10px] sm:text-xs shadow-md">
                        <Zap className="w-3 h-3 fill-slate-950" />
                        <span>رخصة تجارية دائمة</span>
                      </span>
                    </div>

                    {/* Product Image */}
                    <div className="relative overflow-hidden w-full aspect-square sm:aspect-[16/10] max-h-[560px] flex items-center justify-center bg-[#071326]">
                      <img
                        src="/product-mockup.jpg"
                        alt="ANALYSE DZ • SMART GDS v2.1 ENTERPRISE PRO"
                        className="w-full h-full object-cover object-center transform group-hover:scale-[1.02] transition-transform duration-700"
                        loading="eager"
                      />
                      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#09182f] via-[#09182f]/60 to-transparent pointer-events-none" />
                    </div>

                    {/* Product Summary Footer Bar */}
                    <div className="p-3.5 sm:p-5 bg-[#09182f]/95 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-right">
                      <div>
                        <div className="font-black text-sm sm:text-base text-white font-['Cairo']">
                          المنظومة المتكاملة لإدارة المخازن، الفوترة المتعددة، واسترجاع الكريدي
                        </div>
                        <div className="text-[11px] sm:text-xs text-slate-400 mt-0.5">
                          تثبيت ومرافقة فورية عبر AnyDesk أو تسليم مباشر في فلاش ديسك USB
                        </div>
                      </div>

                      <div className="flex items-center gap-2 w-full sm:w-auto">
                        <a
                          href="#pricing"
                          className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 py-2.5 px-5 rounded-xl font-black text-xs sm:text-sm text-slate-950 bg-emerald-400 hover:bg-emerald-300 transition-all shadow-md active:scale-95"
                        >
                          <span>اطلب رخصتك الآن</span>
                          <ArrowRight className="w-3.5 h-3.5 transform rotate-180" />
                        </a>
                      </div>
                    </div>

                  </div>
                </div>
              )}

              {/* TAB 2: Interactive Invoicing & Debt Ledger Demo */}
              {activeTab === 'billing' && (
                <div className="p-3.5 sm:p-6 space-y-4">
                  <div className="rounded-xl bg-slate-950/80 border border-slate-800 p-4">
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3 mb-3">
                      <div>
                        <span className="text-xs text-slate-400 font-mono">فاتورة بيع جملة متعددة السلع #FACT-2026-089</span>
                        <div className="text-sm font-bold text-white flex items-center gap-2">
                          <span>الزبون: كمال لعماري (محل قطع الغيار - بلفور)</span>
                          <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.2 rounded-full border border-emerald-500/30">
                            زبون صنف A ⭐
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-slate-400 flex items-center gap-1">
                          <Printer className="w-3.5 h-3.5 text-emerald-400" />
                          <span>طابعة A4 ليزرية</span>
                        </span>
                      </div>
                    </div>

                    {/* Invoice Items sample */}
                    <div className="space-y-2 text-xs mb-4">
                      <div className="flex justify-between items-center p-2 rounded bg-slate-900 border border-slate-800/80">
                        <span>1. طقم بلاكيت فرامل جيرمان (x10 أطقم)</span>
                        <span className="font-mono font-bold text-slate-100">45,000 دج</span>
                      </div>
                      <div className="flex justify-between items-center p-2 rounded bg-slate-900 border border-slate-800/80">
                        <span>2. فلتر زيت توتال 10W40 (x20 علبة)</span>
                        <span className="font-mono font-bold text-slate-100">22,000 دج</span>
                      </div>
                      <div className="flex justify-between items-center p-2 rounded bg-slate-900 border border-slate-800/80">
                        <span>3. كابل شاحن سريع GaN (x15 قطعة)</span>
                        <span className="font-mono font-bold text-slate-100">18,000 دج</span>
                      </div>
                    </div>

                    {/* Smart Payment Split Calculation */}
                    <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 grid grid-cols-1 sm:grid-cols-3 gap-3 text-center mb-4">
                      <div className="p-2 rounded-lg bg-slate-950/60 border border-slate-800">
                        <div className="text-[11px] text-slate-400">إجمالي الفاتورة</div>
                        <div className="text-lg font-black text-white font-mono">85,000 دج</div>
                      </div>
                      <div className="p-2 rounded-lg bg-emerald-950/40 border border-emerald-500/30">
                        <div className="text-[11px] text-emerald-400">المبلغ المدفوع كاش (Versement)</div>
                        <div className="text-lg font-black text-emerald-400 font-mono">45,000 دج</div>
                      </div>
                      <div className="p-2 rounded-lg bg-amber-950/40 border border-amber-500/30">
                        <div className="text-[11px] text-amber-300">المتبقي كريدي (يُرحّل آلياً)</div>
                        <div className="text-lg font-black text-amber-400 font-mono">40,000 دج</div>
                      </div>
                    </div>

                    {/* 1-Click WhatsApp Debt Reminder Simulation */}
                    <div className="p-3.5 rounded-xl bg-emerald-950/30 border border-emerald-500/40 flex flex-col sm:flex-row items-center justify-between gap-3">
                      <div className="text-right text-xs">
                        <div className="font-bold text-emerald-300 flex items-center gap-1.5 mb-1">
                          <MessageCircle className="w-4 h-4 text-emerald-400" />
                          <span>خاصية استرجاع الديون: تذكير الواتساب بنقرة واحدة (1-Click WhatsApp)</span>
                        </div>
                        <p className="text-slate-300 text-[11px]">
                          يرسل رسالة مهذبة ورسمية باسم محلك برقم الفاتورة ومبلغ 40,000 دج معزولاً بدون قلب للأرقام نهائياً.
                        </p>
                      </div>

                      <button
                        onClick={handleSendWhatsAppDemo}
                        className="shrink-0 inline-flex items-center gap-1.5 py-2 px-3.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-black transition-all active:scale-95"
                      >
                        <MessageCircle className="w-3.5 h-3.5 fill-slate-950" />
                        <span>{sentWhatsApp ? 'تم توليد الرسالة الرسمية ✓' : 'جرّب تذكير الواتساب'}</span>
                      </button>
                    </div>

                  </div>
                </div>
              )}

              {/* TAB 3: Boss vs Worker Mode Simulation (Anti-Theft) */}
              {activeTab === 'bossMode' && (
                <div className="p-3.5 sm:p-6 space-y-4">
                  <div className="rounded-xl bg-slate-950/80 border border-slate-800 p-4">
                    
                    {/* Mode Toggle Switcher */}
                    <div className="flex flex-wrap items-center justify-between gap-3 pb-3 mb-4 border-b border-slate-800">
                      <div>
                        <div className="text-xs font-bold text-white flex items-center gap-1.5">
                          <ShieldCheck className="w-4 h-4 text-emerald-400" />
                          <span>نظام الرقابة ومنع السرقات (Boss Mode vs Worker Mode)</span>
                        </div>
                        <div className="text-[11px] text-slate-400">
                          اضغط على الزر لتجربة ما يراه العامل وما يراه المدير العام:
                        </div>
                      </div>

                      <button
                        onClick={() => setIsWorkerMode(!isWorkerMode)}
                        className={`inline-flex items-center gap-2 py-1.5 px-3 rounded-xl font-bold text-xs transition-all ${
                          isWorkerMode
                            ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                            : 'bg-emerald-500 text-slate-950'
                        }`}
                      >
                        {isWorkerMode ? (
                          <>
                            <EyeOff className="w-4 h-4" />
                            <span>الوضع الحالي: وضع العامل (البيانات مشفرة 🔒)</span>
                          </>
                        ) : (
                          <>
                            <Eye className="w-4 h-4" />
                            <span>الوضع الحالي: وضع المدير (الصلاحيات كاملة 🔓)</span>
                          </>
                        )}
                      </button>
                    </div>

                    {/* Financial Data Display reflecting mode */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
                      
                      <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                        <div className="text-[11px] text-slate-400 mb-1">سعر الشراء الحقيقي (Prix d'achat)</div>
                        <div className="text-xl font-black font-mono">
                          {isWorkerMode ? (
                            <span className="text-amber-400 font-bold tracking-widest">•••••• دج 🔒</span>
                          ) : (
                            <span className="text-white">12,400 دج</span>
                          )}
                        </div>
                        <div className="text-[10px] text-slate-500 mt-1">
                          {isWorkerMode ? 'محجوب تماماً عن العامل لمنع معرفة الأسرار' : 'ظاهر للمدير فقط'}
                        </div>
                      </div>

                      <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                        <div className="text-[11px] text-slate-400 mb-1">هامش الربح الصافي في القطعة</div>
                        <div className="text-xl font-black font-mono">
                          {isWorkerMode ? (
                            <span className="text-amber-400 font-bold tracking-widest">•••••• دج 🔒</span>
                          ) : (
                            <span className="text-emerald-400">+5,600 دج (31%)</span>
                          )}
                        </div>
                        <div className="text-[10px] text-slate-500 mt-1">
                          {isWorkerMode ? 'مشفر برمز PIN للمدير العام' : 'حساب فوري للأرباح'}
                        </div>
                      </div>

                      <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                        <div className="text-[11px] text-slate-400 mb-1">الصندوق الأسود (Audit Log)</div>
                        <div className="text-sm font-bold font-mono">
                          {isWorkerMode ? (
                            <span className="text-red-400">ممنوع الدخول بدون PIN</span>
                          ) : (
                            <span className="text-cyan-400">يسجل كل عملية حذف أو تعديل</span>
                          )}
                        </div>
                        <div className="text-[10px] text-slate-500 mt-1">
                          توثيق دقيق لكل حركة لضمان انعدام السرقات
                        </div>
                      </div>

                    </div>

                    {/* Explanatory callout */}
                    <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-300">
                      🛡️ <strong className="text-white">راحة بال تامة:</strong> سلّم حاسوبك للعامل في المحل وأنت مطمئن؛ يقدر يبيع ويخرج فواتير عادي، لكن مستحيل يعرف شحال راك تشري السلعة، ومستحيل يقدر يحذف فاتورة من وراك!
                    </div>

                  </div>
                </div>
              )}

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
