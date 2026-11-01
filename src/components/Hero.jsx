import React, { useState } from 'react';
import { 
  AlertTriangle, 
  ArrowDown, 
  BarChart3, 
  Bell, 
  CheckCircle, 
  Clock, 
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
  Zap 
} from 'lucide-react';

export default function Hero() {
  const [activeTab, setActiveTab] = useState('dashboard'); // 'dashboard' or 'telegram'
  const [tableFilter, setTableFilter] = useState('all'); // 'all', 'danger', 'warning', 'safe'
  const [isRefreshingTelegram, setIsRefreshingTelegram] = useState(false);
  const [telegramTime, setTelegramTime] = useState('08:00 AM');

  const sampleProducts = [
    {
      id: 'SKU-1082',
      name: 'حذاء رياضي Air Ultra Max',
      category: 'أحذية وألبسة',
      qty: 0,
      daysInStock: 4,
      status: 'danger',
      statusText: 'نفاد حرج (Rupture)',
      action: 'اطلب من المورد فوراً',
      color: 'red'
    },
    {
      id: 'SKU-0491',
      name: 'طقم أواني جرانيت 12 قطعة',
      category: 'أواني منزلية',
      qty: 185,
      daysInStock: 74,
      status: 'warning',
      statusText: 'سلعة راقدة (Stock Mort)',
      action: 'أطلق تخفيض / بروموسيون',
      color: 'amber'
    },
    {
      id: 'SKU-7721',
      name: 'شاحن GaN 65W سريع',
      category: 'إلكترونيات',
      qty: 6,
      daysInStock: 12,
      status: 'danger',
      statusText: 'تنبيه نفاد وشيك',
      action: 'باقي كفاية يومين فقط',
      color: 'red'
    },
    {
      id: 'SKU-3329',
      name: 'عطر باريس رجالي 100ml',
      category: 'عطور ومستحضرات',
      qty: 142,
      daysInStock: 22,
      status: 'safe',
      statusText: 'مخزون صحي (Stock Sain)',
      action: 'مستوى التدفق ممتاز',
      color: 'emerald'
    }
  ];

  const filteredProducts = tableFilter === 'all' 
    ? sampleProducts 
    : sampleProducts.filter(p => p.status === tableFilter);

  const handleRefreshTelegram = () => {
    setIsRefreshingTelegram(true);
    setTimeout(() => {
      setIsRefreshingTelegram(false);
      const now = new Date();
      setTelegramTime(`${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')} (محدّث الآن)`);
    }, 600);
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-grid-pattern">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-emerald-500/10 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-blue-600/10 blur-[140px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Shock / Authority Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/90 border border-emerald-500/30 text-emerald-300 text-xs sm:text-sm font-bold shadow-lg shadow-emerald-500/10 backdrop-blur-md">
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>🚨 النظام الأول لتجار الجملة، المستودعات، والـ E-commerce في الجزائر</span>
          </div>
        </div>

        {/* Shock Headline & Direct Promise */}
        <div className="text-center max-w-4xl mx-auto mb-10">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.25] tracking-tight font-['Cairo'] mb-6">
            الديبو معمر بالسلعة.. بصح الكاسا فارغة؟{' '}
            <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-l from-emerald-400 via-teal-300 to-emerald-200">
              أوقف نزيف السيولة
              <span className="absolute -bottom-1.5 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-emerald-400 to-transparent opacity-80" />
            </span>{' '}
            في مخزنك خلال 48 ساعة!
          </h1>
          
          <p className="text-base sm:text-xl text-slate-300 font-normal leading-relaxed max-w-3xl mx-auto">
            بلا برامج محاسبة معقدة وبلا اشتراكات شهرية{' '}
            <span className="font-bold text-emerald-400 underline decoration-emerald-500/50 underline-offset-4">(0 دج تكلفة تشغيل)</span>. 
            حوّل فوضى ملفات الإكسل إلى غرفة قيادة ذكية تكشف لك السلعة الراقدة وترسل تنبيهات النفاد مجاناً إلى هاتفك عبر Telegram.
          </p>

          {/* Action CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#pricing"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-black text-base text-slate-950 bg-gradient-to-r from-emerald-400 via-emerald-300 to-teal-400 hover:from-emerald-300 hover:to-teal-300 transition-all duration-300 shadow-[0_0_30px_rgba(16,185,129,0.4)] hover:shadow-[0_0_40px_rgba(16,185,129,0.6)] transform hover:-translate-y-1 active:translate-y-0"
            >
              <Zap className="w-5 h-5 fill-slate-950" />
              <span>احصل على النظام الآن (تفعيل فوري)</span>
            </a>

            <a
              href="#calculator"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl font-bold text-sm text-slate-200 bg-slate-900/80 hover:bg-slate-800/90 border border-slate-700/80 hover:border-emerald-500/50 transition-all duration-300 shadow-md backdrop-blur-md"
            >
              <span>احسب خسارتك الصامتة</span>
              <ArrowDown className="w-4 h-4 text-emerald-400 animate-bounce" />
            </a>
          </div>

          {/* Micro Trust Indicators */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs text-slate-400">
            <div className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-emerald-400" />
              <span>+140 تاجر ومستودع جزائري ينظمون كاش مخازنهم</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-emerald-400" />
              <span>0 دج تكاليف شهرية | شراء لمدى الحياة</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-emerald-400" />
              <span>ملف Excel جاهز + Google Sheets متزامن</span>
            </div>
          </div>
        </div>

        {/* Hero Visual: Interactive Mockup Command Center */}
        <div className="relative max-w-5xl mx-auto">
          {/* Top glow border container */}
          <div className="relative rounded-2xl p-[1px] bg-gradient-to-b from-emerald-500/40 via-slate-700/50 to-transparent shadow-2xl shadow-emerald-950/40">
            <div className="rounded-2xl bg-[#09182f]/95 border border-slate-800 backdrop-blur-xl overflow-hidden">
              
              {/* Mockup Header Toolbar */}
              <div className="flex flex-wrap items-center justify-between border-b border-slate-800/80 bg-slate-950/70 px-4 py-3 gap-3">
                
                {/* Left indicators (dots) */}
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80 border border-red-400/40" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80 border border-amber-400/40" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80 border border-emerald-400/40" />
                  <span className="text-xs text-slate-400 mr-2 font-mono hidden sm:inline-block">
                    ANALYSE_DZ_COMMAND_CENTER_v2.4.xlsx
                  </span>
                </div>

                {/* Tab Switcher */}
                <div className="flex items-center p-1 bg-slate-900 rounded-lg border border-slate-800 text-xs font-semibold">
                  <button
                    onClick={() => setActiveTab('dashboard')}
                    className={`flex items-center gap-2 px-3.5 py-1.5 rounded-md transition-all ${
                      activeTab === 'dashboard'
                        ? 'bg-emerald-500 text-slate-950 font-bold shadow-md shadow-emerald-500/20'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    <BarChart3 className="w-3.5 h-3.5" />
                    <span>شاشة القيادة (01_Dashboard)</span>
                  </button>
                  <button
                    onClick={() => setActiveTab('telegram')}
                    className={`flex items-center gap-2 px-3.5 py-1.5 rounded-md transition-all ${
                      activeTab === 'telegram'
                        ? 'bg-emerald-500 text-slate-950 font-bold shadow-md shadow-emerald-500/20'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>إشعار تيليجرام الصباحي (08:00 AM)</span>
                    <span className="w-2 h-2 rounded-full bg-emerald-300 animate-ping" />
                  </button>
                </div>

                {/* Right Status */}
                <div className="hidden lg:flex items-center gap-2 text-xs text-emerald-400 font-mono">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>LIVE BOT SYNC ACTIVE</span>
                </div>
              </div>

              {/* TAB 1: Live Dashboard Command Center */}
              {activeTab === 'dashboard' && (
                <div className="p-4 sm:p-6 space-y-6">
                  
                  {/* 4 Live KPI Cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                    
                    {/* KPI 1: Total Stock Value */}
                    <div className="glass-panel p-4 rounded-xl relative overflow-hidden border border-slate-800 hover:border-slate-700 transition-all">
                      <div className="flex items-center justify-between text-slate-400 text-xs mb-1">
                        <span>إجمالي قيمة المخزون</span>
                        <Package className="w-4 h-4 text-emerald-400" />
                      </div>
                      <div className="text-xl sm:text-2xl font-black text-white font-['Cairo'] tracking-tight">
                        14,850,000 <span className="text-xs font-bold text-slate-400">دج</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-[11px] text-emerald-400 mt-2 font-medium">
                        <TrendingUp className="w-3.5 h-3.5" />
                        <span>تقييم بسعر الشراء المباشر</span>
                      </div>
                      <div className="absolute top-0 right-0 w-16 h-16 bg-emerald-500/5 rounded-full blur-xl pointer-events-none" />
                    </div>

                    {/* KPI 2: Active Items */}
                    <div className="glass-panel p-4 rounded-xl relative overflow-hidden border border-slate-800 hover:border-slate-700 transition-all">
                      <div className="flex items-center justify-between text-slate-400 text-xs mb-1">
                        <span>أصناف فعالة في المستودع</span>
                        <Layers className="w-4 h-4 text-cyan-400" />
                      </div>
                      <div className="text-xl sm:text-2xl font-black text-white font-['Cairo'] tracking-tight">
                        840 <span className="text-xs font-bold text-slate-400">صنف (SKU)</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-[11px] text-slate-400 mt-2 font-medium">
                        <CheckCircle className="w-3.5 h-3.5 text-cyan-400" />
                        <span>مفروزة آلياً بتصنيف باريتو ABC</span>
                      </div>
                    </div>

                    {/* KPI 3: Danger Rupture Alert */}
                    <div className="glass-panel-danger p-4 rounded-xl relative overflow-hidden border border-red-500/30">
                      <div className="flex items-center justify-between text-red-300 text-xs mb-1 font-bold">
                        <span>حالة خطر / نفاد وشيك</span>
                        <AlertTriangle className="w-4 h-4 text-red-400 animate-bounce" />
                      </div>
                      <div className="text-xl sm:text-2xl font-black text-red-400 font-['Cairo'] tracking-tight">
                        6 <span className="text-xs font-bold text-red-300">أصناف (Rupture)</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-[11px] text-red-300 mt-2 font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-ping" />
                        <span>خطر ضياع بيعات وزبائن جملة</span>
                      </div>
                    </div>

                    {/* KPI 4: Dead Stock Frozen Cash */}
                    <div className="glass-panel-warning p-4 rounded-xl relative overflow-hidden border border-amber-500/30">
                      <div className="flex items-center justify-between text-amber-300 text-xs mb-1 font-bold">
                        <span>سيولة مجمدة (+60 يوم)</span>
                        <Flame className="w-4 h-4 text-amber-400" />
                      </div>
                      <div className="text-xl sm:text-2xl font-black text-amber-400 font-['Cairo'] tracking-tight">
                        650,000 <span className="text-xs font-bold text-amber-300">دج (محبوسة)</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-[11px] text-amber-300 mt-2 font-medium">
                        <TrendingDown className="w-3.5 h-3.5" />
                        <span>سلعة راقدة تحتاج تصفية وتخفيض</span>
                      </div>
                    </div>

                  </div>

                  {/* Mini Status Table */}
                  <div className="rounded-xl border border-slate-800 bg-slate-950/60 overflow-hidden">
                    <div className="flex flex-wrap items-center justify-between p-3.5 border-b border-slate-800 gap-2">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-slate-200">فحص عينات المخزون الذكي (OODA Loop):</span>
                        <span className="text-[10px] bg-slate-800 text-slate-400 px-2 py-0.5 rounded-full">تشخيص لحظي</span>
                      </div>

                      {/* Filter pills */}
                      <div className="flex items-center gap-1 text-[11px]">
                        <button
                          onClick={() => setTableFilter('all')}
                          className={`px-2.5 py-1 rounded-md transition-all ${
                            tableFilter === 'all' ? 'bg-slate-700 text-white font-bold' : 'text-slate-400 hover:text-slate-200'
                          }`}
                        >
                          الكل ({sampleProducts.length})
                        </button>
                        <button
                          onClick={() => setTableFilter('danger')}
                          className={`px-2.5 py-1 rounded-md transition-all flex items-center gap-1 ${
                            tableFilter === 'danger' ? 'bg-red-500/20 text-red-300 border border-red-500/30 font-bold' : 'text-slate-400 hover:text-red-300'
                          }`}
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                          <span>النفاد (2)</span>
                        </button>
                        <button
                          onClick={() => setTableFilter('warning')}
                          className={`px-2.5 py-1 rounded-md transition-all flex items-center gap-1 ${
                            tableFilter === 'warning' ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30 font-bold' : 'text-slate-400 hover:text-amber-300'
                          }`}
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                          <span>الراقد (1)</span>
                        </button>
                        <button
                          onClick={() => setTableFilter('safe')}
                          className={`px-2.5 py-1 rounded-md transition-all flex items-center gap-1 ${
                            tableFilter === 'safe' ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-bold' : 'text-slate-400 hover:text-emerald-300'
                          }`}
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                          <span>الصحي (1)</span>
                        </button>
                      </div>
                    </div>

                    {/* Table Rows */}
                    <div className="overflow-x-auto">
                      <table className="w-full text-right text-xs">
                        <thead className="bg-slate-900/80 text-slate-400 text-[11px] font-semibold">
                          <tr>
                            <th className="py-2.5 px-3">الرمز والمُنتج</th>
                            <th className="py-2.5 px-3">القسم</th>
                            <th className="py-2.5 px-3">الكمية الحالية</th>
                            <th className="py-2.5 px-3">مدة البقاء</th>
                            <th className="py-2.5 px-3">التشخيص الآلي</th>
                            <th className="py-2.5 px-3">الإجراء المقترح فوراً</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-800/60 font-medium">
                          {filteredProducts.map((p) => (
                            <tr key={p.id} className="hover:bg-slate-800/30 transition-colors">
                              <td className="py-3 px-3">
                                <div className="font-bold text-slate-100">{p.name}</div>
                                <div className="text-[10px] font-mono text-slate-400">{p.id}</div>
                              </td>
                              <td className="py-3 px-3 text-slate-300">{p.category}</td>
                              <td className="py-3 px-3">
                                <span className={`font-mono font-bold ${p.qty === 0 ? 'text-red-400 text-sm' : 'text-slate-200'}`}>
                                  {p.qty} وحدة
                                </span>
                              </td>
                              <td className="py-3 px-3 text-slate-300 font-mono">
                                {p.daysInStock} يوم
                              </td>
                              <td className="py-3 px-3">
                                {p.status === 'danger' && (
                                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold bg-red-500/15 text-red-400 border border-red-500/30">
                                    <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse" />
                                    {p.statusText}
                                  </span>
                                )}
                                {p.status === 'warning' && (
                                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold bg-amber-500/15 text-amber-300 border border-amber-500/30">
                                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                                    {p.statusText}
                                  </span>
                                )}
                                {p.status === 'safe' && (
                                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                                    {p.statusText}
                                  </span>
                                )}
                              </td>
                              <td className="py-3 px-3 font-semibold">
                                <span className={
                                  p.status === 'danger' ? 'text-red-300 underline decoration-red-500/50' :
                                  p.status === 'warning' ? 'text-amber-300' : 'text-emerald-400'
                                }>
                                  {p.action}
                                </span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                  </div>
                </div>
              )}

              {/* TAB 2: Telegram Automated Morning Report Mockup */}
              {activeTab === 'telegram' && (
                <div className="p-4 sm:p-8 bg-[#0b141f] min-h-[360px] flex items-center justify-center">
                  <div className="w-full max-w-xl">
                    
                    {/* Phone/Telegram Message Shell */}
                    <div className="rounded-2xl bg-[#17212b] border border-[#242f3d] shadow-2xl p-4 sm:p-5 text-right relative">
                      
                      {/* Telegram Header */}
                      <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#242f3d]">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500 to-teal-700 flex items-center justify-center text-white font-bold text-base shadow-md">
                            🤖
                          </div>
                          <div>
                            <div className="flex items-center gap-1.5">
                              <span className="font-bold text-sm text-white">ANALYSE DZ Bot</span>
                              <span className="text-[10px] bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-1.5 py-0.2 rounded font-mono">bot</span>
                            </div>
                            <span className="text-[11px] text-slate-400">مساعدك الذكي لإدارة الديبو والمخزن</span>
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          <button
                            onClick={handleRefreshTelegram}
                            title="محاكاة إرسال تقرير جديد"
                            className="flex items-center gap-1 px-2.5 py-1 text-xs text-emerald-400 bg-emerald-950/60 border border-emerald-800/60 rounded-lg hover:bg-emerald-900/50 transition-colors"
                          >
                            <RefreshCw className={`w-3.5 h-3.5 ${isRefreshingTelegram ? 'animate-spin' : ''}`} />
                            <span className="hidden sm:inline">محاكاة إشعار</span>
                          </button>
                          <span className="text-xs text-slate-400 font-mono">{telegramTime}</span>
                        </div>
                      </div>

                      {/* Telegram Bubble Content */}
                      <div className="space-y-3 text-xs sm:text-sm text-slate-200 leading-relaxed font-['Cairo']">
                        <div className="p-2.5 rounded-lg bg-[#202b36] border border-slate-700/60 font-bold text-white flex items-center gap-2">
                          <span className="text-base">📊</span>
                          <span>صباح الخير سيدي التاجر! تقرير ديبو ANALYSE DZ اليومي:</span>
                        </div>

                        <div className="space-y-2 pr-1">
                          <div className="flex items-start gap-2">
                            <span className="text-emerald-400 font-bold">💰</span>
                            <div>
                              <strong className="text-white">القيمة الإجمالية للمخزون:</strong> 14,850,000 دج (840 صنف مسجل).
                            </div>
                          </div>

                          <div className="flex items-start gap-2 p-2 rounded-lg bg-red-950/30 border border-red-800/40 text-red-200">
                            <span className="text-red-400 font-bold text-base">⚠️</span>
                            <div>
                              <strong className="text-red-300">6 أصناف في حالة نفاد وشيك (Rupture):</strong> حذاء رياضي Air Max، شاحن GaN 65W.. اطلب السلعة اليوم قبل ما يفرغ الرف وتخسر زبون الجملة!
                            </div>
                          </div>

                          <div className="flex items-start gap-2 p-2 rounded-lg bg-amber-950/30 border border-amber-800/40 text-amber-200">
                            <span className="text-amber-400 font-bold text-base">💤</span>
                            <div>
                              <strong className="text-amber-300">650,000 دج سلعة راقدة (+60 يوم):</strong> طقم أواني جرانيت 12ق (185 قطعة). ننصحك بإطلاق بروموسيون سريع لتحرير السيولة للكاسا.
                            </div>
                          </div>

                          <div className="flex items-start gap-2 text-slate-300">
                            <span className="text-cyan-400 font-bold">📦</span>
                            <div>
                              <strong>حركة الشحن أمس:</strong> تم تسجيل 42 طرد خارج (معدل تسليم Taux de Livraison: 88%).
                            </div>
                          </div>
                        </div>

                        {/* Telegram Inline Quick Action Buttons */}
                        <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-2">
                          <a
                            href="#pricing"
                            className="text-center py-2 px-3 rounded-lg bg-[#2b5278] hover:bg-[#346392] text-white text-xs font-bold transition-colors shadow"
                          >
                            🔗 افتح لوحة التحكم (Google Sheets)
                          </a>
                          <a
                            href="#pricing"
                            className="text-center py-2 px-3 rounded-lg bg-emerald-600/30 hover:bg-emerald-600/50 border border-emerald-500/40 text-emerald-300 text-xs font-bold transition-colors"
                          >
                            ⚡ قائمة الأصناف للشراء العاجل (PDF)
                          </a>
                        </div>

                        {/* Delivery status */}
                        <div className="flex items-center justify-end gap-1 text-[10px] text-slate-400 pt-1">
                          <span>تم الإرسال مجاناً عبر خادم Google السحابي (0 دج تكلفة)</span>
                          <span className="text-emerald-400 font-bold">✓✓</span>
                        </div>

                      </div>

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

