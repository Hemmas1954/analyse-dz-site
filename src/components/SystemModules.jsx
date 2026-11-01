import React, { useState } from 'react';
import { 
  BarChart3, 
  Layers, 
  History, 
  Calculator, 
  Send, 
  CheckCircle2, 
  ChevronRight, 
  ChevronDown,
  Sparkles, 
  FileSpreadsheet, 
  ExternalLink,
  ShieldCheck,
  Eye
} from 'lucide-react';

export default function SystemModules() {
  const [selectedModule, setSelectedModule] = useState(0);
  const [mobileExpandedIndex, setMobileExpandedIndex] = useState(0);

  const modules = [
    {
      code: '01_Dashboard',
      title: 'شاشة القيادة البصرية (Visual Dashboard)',
      subtitle: 'تصنيف باريتو (ABC 80/20) وتوصيات دورة القرار OODA Loop',
      icon: BarChart3,
      badge: 'القلب النابض',
      badgeColor: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
      description: 'شاشة قيادة مصممة وفق أرقى معايير Fintech تعرض لك الأرقام الحيوية لديبو تجارتك في شاشة واحدة: قيمة المخزون الكلية، عدد الأصناف الحرجة، ومؤشر سرعة دوران السلع.',
      features: [
        'فرز المنتجات أوتوماتيكياً وفق قاعدة باريتو (20% من السلع التي تحقق 80% من مداخيلك).',
        'توصيات دورة OODA (Observe, Orient, Decide, Act) لتوجيه قرارات الشراء والتصفية اليومية.',
        'مخططات بيانية ديناميكية توضح لك أين يتركز رأس مالك بدون أي تعقيد برمجي.'
      ],
      previewSnippet: {
        type: 'kpi',
        highlights: [
          { label: 'مستوى السيولة المتاحة', value: '82%', color: 'text-emerald-400' },
          { label: 'مؤشر دوران المخزون', value: '4.2x', color: 'text-cyan-400' },
          { label: 'أصناف الفئة A (الأعلى ربحاً)', value: '38 صنف', color: 'text-emerald-300' }
        ]
      }
    },
    {
      code: '02_Stock_Master',
      title: 'محرك التشخيص اللوني الذكي (Stock Master)',
      subtitle: 'نظام إشارات المرور الآلي (أحمر / أصفر / أخضر)',
      icon: Layers,
      badge: 'مانع النفاذ والركود',
      badgeColor: 'bg-red-500/10 text-red-400 border-red-500/30',
      description: 'وداعاً للبحث اليدوي بين مئات الأصناف. يقوم هذا المحرك بتلوين كل صنف في مخزنك آلياً وإظهار رسالة الإجراء الفوري الواجب اتخاذه.',
      features: [
        '🔴 اللون الأحمر: نفاذ وشيك (Rupture) — ينبهك بضرورة الطلب من المورد قبل نفاد الكمية من الرف.',
        '🟡 اللون الأصفر: سلعة راقدة (Stock Mort) — بقيت أكثر من 60 يوماً ويقترح إطلاق بروموسيون لتفريغها.',
        '🟢 اللون الأخضر: مخزون صحي ومتوازن — الكمية تكفي لأكثر من 15 إلى 30 يوماً وتتدفق بسلاسة.'
      ],
      previewSnippet: {
        type: 'table',
        rows: [
          { sku: 'DZ-991', name: 'شاحن سيارة سريع', tag: '🔴 أطلب فوراً', note: 'باقي كفاية 48 ساعة' },
          { sku: 'DZ-420', name: 'أغطية هواتف سيليكون', tag: '🟡 دير بروموسيون', note: '73 يوم بدون بيع' },
          { sku: 'DZ-103', name: 'باور بانك 20000mAh', tag: '🟢 متوفر وآمن', note: 'يكفي لمدة 24 يوم' }
        ]
      }
    },
    {
      code: '03_Mouvements_Journal',
      title: 'كراس حركة المخزون المبسط (Daily Ledger)',
      subtitle: 'تسجيل الدخول والخروج بنقرة واحدة وتحديث فوري للأرصدة',
      icon: History,
      badge: 'التحكم اليومي',
      badgeColor: 'bg-blue-500/10 text-blue-400 border-blue-500/30',
      description: 'سجل حركات الديبو في ثوانٍ. يمكن لأي عامل في المستودع إدخال كميات الدخول من الموردين والخروج للزبائن بدون أي خطأ بشري.',
      features: [
        'واجهة تسجيل سريعة جداً لا تتطلب أي مهارات إكسل مسبقة.',
        'حساب آلي فوري يخصم المبيعات ويضيف المشتريات إلى رصيد الرف مباشرة.',
        'تاريخ حركة كامل يتيح لك مراجعة أي نقص أو شكوك في الجرد في أي يوم من أيام السنة.'
      ],
      previewSnippet: {
        type: 'log',
        entries: [
          { time: '11:30 AM', type: 'دخول (+120)', item: 'كابل شحن Type-C', user: 'المورد سليم' },
          { time: '02:15 PM', type: 'خروج (-35)', item: 'سماعات بلوتوث Pro', user: 'طلبية وهران #448' },
          { time: '04:50 PM', type: 'خروج (-50)', item: 'حذاء رياضي مقاس 42', user: 'كليان جملة سطيف' }
        ]
      }
    },
    {
      code: '04_Calculateur_COD',
      title: 'حاسبة تسعير الـ COD وتقدير الروتور',
      subtitle: 'حساب هامش الربح الصافي مع احتساب تكاليف الإعلانات والروتور',
      icon: Calculator,
      badge: 'حامي الأرباح',
      badgeColor: 'bg-purple-500/10 text-purple-400 border-purple-500/30',
      description: 'في الجزائر، بيع 100 حبة لا يعني أنك ربحت إذا كان الروتور 25% وتكلفة الإعلانات غير مضبوطة. هذه الحاسبة تضمن لك بيع كل منتج بربح حقيقي مدروس.',
      features: [
        'احتساب تلقائي لبند احتياطي الروتور (100 دج إلى 200 دج عن كل طلبية مسترجعة).',
        'دمج تكلفة الشراء، رسوم الإعلانات (Cost Per Acquisition)، وسعر شركة التوصيل (Yalidine / ZR Express..).',
        'تحديد الحد الأدنى لسعر البيع (Break-Even Price) الذي يمنعك من الخسارة مهما ارتفعت تكاليف الشحن.'
      ],
      previewSnippet: {
        type: 'pricing',
        stats: [
          { label: 'سعر البيع المقترح', val: '4,500 دج' },
          { label: 'احتياطي الروتور المؤمّن', val: '150 دج / طرد' },
          { label: 'الربح الصافي الحقيقي', val: '1,250 دج (28%)' }
        ]
      }
    },
    {
      code: '05_Telegram_Bot_Script',
      title: 'كود بوت تيليجرام الصباحي التلقائي',
      subtitle: 'سكريبت Google Apps Script يعمل على سحابة جوجل مجاناً مدى الحياة',
      icon: Send,
      badge: 'أتمتة مجانية 100%',
      badgeColor: 'bg-teal-500/10 text-teal-400 border-teal-500/30',
      description: 'لست بحاجة لدفع 20$ شهرياً في منصات مثل Make أو n8n أو استئجار سيرفر VPS. السكريبت المرفق يشتغل ذاتياً على حساب Google Drive الخاص بك مجاناً مدى الحياة.',
      features: [
        'يرسل لك تقرير الديبو كل صباح عند الساعة 08:00 AM مباشرة لهاتفك في تيليجرام.',
        'ينبهك فوراً عند وصول أي سلعة لحد الخطر (Rupture Alert) لتقوم بطلبها دون تأخير.',
        'كود نظيف مع فيديو شرح بالدارجة: انسخ، ألصق، وسيعمل معك البوت في أقل من 5 دقائق.'
      ],
      previewSnippet: {
        type: 'code',
        lines: [
          '// ANALYSE DZ Automated Cloud Dispatcher',
          'function sendDailyStockMorningReport() {',
          '  const sheet = SpreadsheetApp.getActiveSpreadsheet();',
          '  const ruptureItems = getItemsBelowThreshold(sheet);',
          '  sendTelegramAlert(TELEGRAM_BOT_TOKEN, ruptureItems);',
          '}'
        ]
      }
    }
  ];

  const renderSnippet = (snippet) => {
    if (snippet.type === 'kpi') {
      return (
        <div className="grid grid-cols-3 gap-2">
          {snippet.highlights.map((h, i) => (
            <div key={i} className="p-2 sm:p-3 rounded-lg bg-slate-900 border border-slate-800 text-center">
              <div className="text-[10px] sm:text-[11px] text-slate-400 mb-0.5 truncate">{h.label}</div>
              <div className={`text-sm sm:text-xl font-black font-mono ${h.color}`}>{h.value}</div>
            </div>
          ))}
        </div>
      );
    }
    if (snippet.type === 'table') {
      return (
        <div className="space-y-1.5 text-[11px]">
          {snippet.rows.map((row, i) => (
            <div key={i} className="flex items-center justify-between p-2 rounded-lg bg-slate-900 border border-slate-800 gap-1">
              <div className="truncate">
                <span className="font-mono text-slate-500 text-[10px] ml-1">{row.sku}</span>
                <span className="font-bold text-white text-xs">{row.name}</span>
              </div>
              <span className="text-[10px] font-bold font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-200 shrink-0">
                {row.tag}
              </span>
            </div>
          ))}
        </div>
      );
    }
    if (snippet.type === 'log') {
      return (
        <div className="space-y-1.5 text-[11px] font-mono">
          {snippet.entries.map((log, i) => (
            <div key={i} className="flex items-center justify-between p-2 rounded-lg bg-slate-900 border border-slate-800">
              <div className="truncate">
                <span className="text-slate-500 text-[10px] ml-1">{log.time}</span>
                <span className="font-bold text-slate-200 text-xs">{log.item}</span>
              </div>
              <span className={`text-[10px] font-bold px-2 py-0.5 rounded shrink-0 ${
                log.type.includes('+') ? 'bg-emerald-500/20 text-emerald-300' : 'bg-red-500/20 text-red-300'
              }`}>
                {log.type}
              </span>
            </div>
          ))}
        </div>
      );
    }
    if (snippet.type === 'pricing') {
      return (
        <div className="grid grid-cols-3 gap-2">
          {snippet.stats.map((s, i) => (
            <div key={i} className="p-2 sm:p-3 rounded-lg bg-slate-900 border border-slate-800 text-center">
              <div className="text-[10px] sm:text-[11px] text-slate-400 mb-0.5 truncate">{s.label}</div>
              <div className="text-xs sm:text-base font-black font-mono text-purple-300 truncate">{s.val}</div>
            </div>
          ))}
        </div>
      );
    }
    if (snippet.type === 'code') {
      return (
        <div className="bg-slate-950 p-2.5 rounded-lg font-mono text-[10px] sm:text-[11px] text-slate-300 overflow-x-auto text-left dir-ltr">
          {snippet.lines.map((line, i) => (
            <div key={i} className="text-emerald-400/90 leading-relaxed truncate">
              {line}
            </div>
          ))}
        </div>
      );
    }
    return null;
  };

  const activeMod = modules[selectedModule];

  return (
    <section id="modules" className="py-16 sm:py-24 md:py-28 relative bg-[#06101f] border-t border-slate-800">
      
      {/* Background Accent */}
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-emerald-500/5 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-[11px] sm:text-xs font-bold mb-3 sm:mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>الحقيبة الرقمية الشاملة 5 في 1</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white leading-tight font-['Cairo'] mb-3 sm:mb-4">
            ماذا تجد داخل نظام{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-200">
              ANALYSE DZ
            </span>{' '}
            بالضبط؟
          </h2>

          <p className="text-xs sm:text-base text-slate-300 leading-relaxed">
            5 وحدات برمجية ذكية متكاملة في ملف واحد تعمل بسلاسة على <strong className="text-white">Excel و Google Sheets</strong> بدون الحاجة لأي برامج مدفوعة أو اشتراكات شهرية.
          </p>
        </div>

        {/* Mobile Accordion View (Under 1024px) */}
        <div className="lg:hidden space-y-3">
          {modules.map((mod, index) => {
            const Icon = mod.icon;
            const isExpanded = mobileExpandedIndex === index;

            return (
              <div
                key={mod.code}
                className={`rounded-2xl border transition-all overflow-hidden ${
                  isExpanded
                    ? 'bg-slate-900 border-emerald-500/50 shadow-xl shadow-emerald-950/30'
                    : 'bg-slate-900/60 border-slate-800/80'
                }`}
              >
                {/* Accordion Trigger */}
                <button
                  onClick={() => setMobileExpandedIndex(isExpanded ? -1 : index)}
                  className="w-full text-right p-3.5 flex items-center justify-between gap-3"
                >
                  <div className="flex items-center gap-2.5">
                    <div className={`p-2 rounded-lg border ${
                      isExpanded ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/40' : 'bg-slate-800 text-slate-400 border-slate-700'
                    }`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-[10px] font-mono font-bold text-slate-400">{mod.code}</span>
                        <span className={`text-[9px] font-bold px-1.5 py-0.2 rounded-full border ${mod.badgeColor}`}>
                          {mod.badge}
                        </span>
                      </div>
                      <div className="text-xs sm:text-sm font-bold text-slate-100 font-['Cairo'] mt-0.5">
                        {mod.title.split('(')[0]}
                      </div>
                    </div>
                  </div>

                  <ChevronDown className={`w-4 h-4 text-slate-400 transform transition-transform ${isExpanded ? 'rotate-180 text-emerald-400' : ''}`} />
                </button>

                {/* Accordion Expanded Body */}
                {isExpanded && (
                  <div className="p-4 pt-1 border-t border-slate-800/80 space-y-3">
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {mod.description}
                    </p>

                    <div className="space-y-1.5 bg-slate-950/60 p-3 rounded-xl border border-slate-800/80">
                      <div className="text-[11px] font-bold text-slate-200">أبرز الوظائف:</div>
                      {mod.features.map((feat, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-[11px] text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>

                    {/* Preview Snippet */}
                    <div className="rounded-xl bg-[#091526] border border-slate-800 p-2.5">
                      <div className="flex items-center justify-between mb-2 text-[10px] text-slate-400 pb-1.5 border-b border-slate-800">
                        <span className="font-semibold text-slate-300 flex items-center gap-1">
                          <Eye className="w-3 h-3 text-emerald-400" />
                          <span>معاينة حية من النظام:</span>
                        </span>
                        <span className="font-mono text-emerald-400 font-bold">XLSX & SHEETS</span>
                      </div>
                      {renderSnippet(mod.previewSnippet)}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Desktop Side-by-Side View (1024px and up) */}
        <div className="hidden lg:grid grid-cols-12 gap-8 items-start">
          
          {/* Module Selector List (5 cols) */}
          <div className="col-span-5 space-y-3">
            {modules.map((mod, index) => {
              const Icon = mod.icon;
              const isSelected = selectedModule === index;

              return (
                <button
                  key={mod.code}
                  onClick={() => setSelectedModule(index)}
                  className={`w-full text-right p-4 rounded-xl border transition-all duration-200 flex items-center justify-between gap-3 ${
                    isSelected
                      ? 'bg-slate-900 border-emerald-500/60 shadow-lg shadow-emerald-500/10 translate-x-1'
                      : 'bg-slate-900/50 border-slate-800/80 hover:bg-slate-800/40 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-2.5 rounded-lg border ${
                      isSelected ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/40' : 'bg-slate-800 text-slate-400 border-slate-700'
                    }`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono font-bold text-slate-400">{mod.code}</span>
                        {isSelected && (
                          <span className="text-[10px] px-1.5 py-0.2 rounded bg-emerald-500/20 text-emerald-300 font-bold">نشط</span>
                        )}
                      </div>
                      <div className="text-sm font-bold text-slate-100 font-['Cairo'] mt-0.5">
                        {mod.title.split('(')[0]}
                      </div>
                    </div>
                  </div>

                  <ChevronRight className={`w-4 h-4 text-slate-400 transform transition-transform ${isSelected ? 'rotate-180 text-emerald-400' : ''}`} />
                </button>
              );
            })}
          </div>

          {/* Module Detail Card (7 cols) */}
          <div className="col-span-7">
            <div className="rounded-2xl bg-slate-900/90 border border-slate-800 p-8 backdrop-blur-xl shadow-2xl relative overflow-hidden">
              <div className="flex items-center justify-between gap-2 mb-4 pb-4 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-950/60 border border-emerald-800/60 px-2.5 py-1 rounded-md">
                    {activeMod.code}
                  </span>
                  <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${activeMod.badgeColor}`}>
                    {activeMod.badge}
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-slate-400">
                  <FileSpreadsheet className="w-4 h-4 text-emerald-400" />
                  <span>XLSX & Google Sheets</span>
                </div>
              </div>

              <h3 className="text-2xl font-black text-white font-['Cairo'] mb-2">
                {activeMod.title}
              </h3>
              <p className="text-sm text-emerald-400/90 font-medium mb-4">
                {activeMod.subtitle}
              </p>

              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                {activeMod.description}
              </p>

              <div className="space-y-3 mb-6 bg-slate-950/60 p-4 rounded-xl border border-slate-800/80">
                <div className="text-xs font-bold text-slate-200">أبرز المزايا والوظائف المدمجة:</div>
                {activeMod.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              <div className="rounded-xl bg-[#091526] border border-slate-800 p-4">
                <div className="flex items-center justify-between mb-3 text-xs text-slate-400 border-b border-slate-800 pb-2">
                  <span className="font-semibold text-slate-300 flex items-center gap-1.5">
                    <Eye className="w-3.5 h-3.5 text-emerald-400" />
                    <span>معاينة حية من داخل النظام:</span>
                  </span>
                  <span className="text-[10px] font-mono text-slate-500">REAL SYSTEM VIEW</span>
                </div>
                {renderSnippet(activeMod.previewSnippet)}
              </div>

              <div className="mt-6 flex items-center justify-between pt-4 border-t border-slate-800 text-xs">
                <span className="text-slate-400">
                  جميع الوحدات الـ 5 مدمجة في الباقة الجاهزة وباقة الـ VIP
                </span>
                <a
                  href="#pricing"
                  className="font-bold text-emerald-400 hover:text-emerald-300 flex items-center gap-1 transition-colors"
                >
                  <span>شاهد الأسعار</span>
                  <ChevronRight className="w-3.5 h-3.5 transform rotate-180" />
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
