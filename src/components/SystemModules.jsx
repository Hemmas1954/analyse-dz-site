import React, { useState } from 'react';
import { 
  BarChart3, 
  Layers, 
  Receipt, 
  Users, 
  Building2, 
  Calculator, 
  FileText, 
  ShieldCheck,
  CheckCircle2, 
  ChevronRight, 
  ChevronDown,
  Sparkles, 
  Eye, 
  Lock, 
  MessageCircle, 
  Printer, 
  Key, 
  RotateCcw,
  Zap
} from 'lucide-react';

export default function SystemModules() {
  const [selectedModule, setSelectedModule] = useState(0);
  const [mobileExpandedIndex, setMobileExpandedIndex] = useState(0);

  const modules = [
    {
      code: '01_Cockpit',
      title: 'غرفة القيادة التنفيذية (Executive Cockpit)',
      subtitle: '6 مؤشرات مالية لحظية، رادار القرارات OODA، وتحليل باريتو ABC',
      icon: BarChart3,
      badge: 'القلب النابض',
      badgeColor: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
      description: 'واجهة القيادة المركزية التي تمنحك رؤية بانورامية حية لمستودعك في ثانية واحدة دون فتح أي ملف إكسل أو حساب يدوي.',
      features: [
        '6 عدادات زجاجية فورية: رأس مال المخزون، القيمة البيعية، صافي الأرباح الكامنة، ميزانية النواقص، السيولة المجمدة، وعداد صحة الديبو (0-100%).',
        'رادار القرارات الفورية (OODA Loop): زر بضغطة واحدة لطلب كل النواقص فوراً، وزر لتصفية السلع الراقدة لتوليد كاش عاجل.',
        'تحليل باريتو الربحي (ABC): فرز آلي للأصناف (فئة A عصب الأرباح 80%، فئة B دوران معتدل 15%، فئة C ملحقات بطيئة 5%).'
      ],
      previewSnippet: {
        type: 'kpi',
        highlights: [
          { label: 'رأس مال المخزون (سعر الشراء)', value: '14,850,000 دج', color: 'text-emerald-400' },
          { label: 'القيمة البيعية المتوقعة', value: '19,420,000 دج', color: 'text-cyan-400' },
          { label: 'السيولة المجمدة (+60 يوم)', value: '650,000 دج', color: 'text-amber-400' },
          { label: 'مؤشر صحة المستودع', value: '94%', color: 'text-emerald-300' }
        ]
      }
    },
    {
      code: '02_Smart_Inventory',
      title: 'إدارة المستودع الذكي والتحليل المالي',
      subtitle: 'توليد SKU ذكي، دعم قارئ الباركود، ورادار الحماية من البيع بخسارة',
      icon: Layers,
      badge: 'إدارة الرفوف والسلع',
      badgeColor: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30',
      description: 'محرك الجرد الذكي المعتمد لحفظ وتتبع آلاف المنتجات مع حماية مطلقة لهوامش ربحك وسرعة فائقة في التسجيل.',
      features: [
        'توليد تلقائي للرموز المرجعية (SKU) بضغطة زر، وتوافق كامل مع قارئات الباركود الليزرية (Douchatte).',
        'رادار الحماية من البيع بخسارة: تنبيه أحمر بارز وفوري إذا أدخل العامل سعر بيع أقل من سعر الشراء.',
        'شريط التحليل المالي اللحظي داخل نافذة الإضافة: يحسب فورياً ربح القطعة، نسبة الهامش %، ورأس المال الموظف.',
        'أزرار الحركات السريعة: (+1 توريد سريع)، (-1 بيع سريع)، ونسخ كود الباركود بنقرة واحدة.'
      ],
      previewSnippet: {
        type: 'table',
        rows: [
          { sku: 'DZ-991', name: 'شاحن سيارة 65W سريع', tag: '🔴 أطلب فوراً', note: 'باقي 4 قطع فقط' },
          { sku: 'DZ-420', name: 'أغطية هواتف مقاومة للصدمات', tag: '🟡 تصفية راقد', note: '73 يوم بدون بيع' },
          { sku: 'DZ-103', name: 'سماعات بلوتوث ANC Pro', tag: '🟢 متوفر وآمن', note: 'مخزون يكفي 28 يوم' }
        ]
      }
    },
    {
      code: '03_Invoicing_Movements',
      title: 'كراس الحركة والفوترة التجارية المزدوجة',
      subtitle: 'فاتورة متعددة السلع مع تقسيم الكاش/الكريدي والتراجع الآمن',
      icon: Receipt,
      badge: 'البيع والفوترة',
      badgeColor: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
      description: 'منظومة البيع السريعة: أصدر فواتير احترافية لزبائنك مع تقسيم الدفع تلقائياً بين الكاش المقبوض والكريدي المتبقي.',
      features: [
        'فاتورة تجارية متعددة السلع: أضف عشرات الأصناف لزبون واحد في ثوانٍ مع خصومات مخصصة.',
        'نظام تقسيم الدفع المالي الذكي: المجموع الكلي، المدفوع كاش (Versement)، والباقي كريدي (Reste à Payer) يُرحّل آلياً إلى دفتر ديون الزبون!',
        'التراجع الذكي والآمن (Invoice Rollback / Undo): إمكانية إلغاء الفاتورة مع إرجاع السلع للمستودع وتوثيق العملية في الصندوق الأسود.',
        'معاينة وطباعة ليزرية فورية A4 متوافقة مع طابعات Canon و Epson بدون برامج إضافية.'
      ],
      previewSnippet: {
        type: 'invoice',
        invoiceNum: 'FAC-2026-084',
        client: 'محل البركة (بلفور، الحراش)',
        items: '5 أصناف (كوابل، شواحن، شاشات)',
        total: '185,000 دج',
        paid: '100,000 دج كاش',
        credit: '85,000 دج كريدي مرحّل'
      }
    },
    {
      code: '04_Credit_Ledger',
      title: 'دفتر الزبائن والكريدي الذكي (Carnet de Crédit)',
      subtitle: 'كشف حساب بالسنتيم وتذكير واتساب بضغطة زر بدون قلب للأرقام',
      icon: Users,
      badge: 'جامع الديون',
      badgeColor: 'bg-amber-500/10 text-amber-400 border-amber-500/30',
      description: 'وداعاً لكراسات الديون الورقية الممزقة والديون المنسية. اجمع أموالك عند زبائنك باحترافية وهيبة تجارية كاملة.',
      features: [
        'كشف حساب رقمي لكل زبون: المشتريات التراكمية، المدفوعات، والرصيد المتبقي بدقة السنتيم الجزائري.',
        'تذكير واتساب بضغطة زر واحدة (1-Click WhatsApp): يفتح واتساب الزبون مباشرة برابط رسمي وبرسالة مهذبة باسم محلك بدون قلب الأرقام.',
        'شارات تصنيف ثقة الزبائن: (⭐ الصنف A وفي وسريع / ⚠️ الصنف B معتدل / 🚫 الصنف C قائمة سوداء متأخر).',
        'نافذة تسجيل الدفعات (Encaisser Versement): سجّل أي دفعة نقدية أو شيك وحدّث الرصيد مع طباعة وصل استلام فوري.'
      ],
      previewSnippet: {
        type: 'whatsapp',
        customer: 'حميد فون (بلفور)',
        debt: '85,000 دج',
        msg: 'السلام عليكم أخي حميد، نذكركم بأن رصيد حسابكم المتبقي لدى مؤسستنا هو 85,000 دج. شكراً لثقتكم الدائمة.'
      }
    },
    {
      code: '05_Company_Profile',
      title: 'هوية وبروفايل المؤسسة والطباعة الليزرية A4',
      subtitle: 'ترويسة رسمية، السجل التجاري (RC/NIF)، وملاحظات الضمان',
      icon: Building2,
      badge: 'الهيبة المؤسساتية',
      badgeColor: 'bg-purple-500/10 text-purple-400 border-purple-500/30',
      description: 'امنح تجارتك طابعاً مؤسساتياً فخماً. اضبط اسم شركتك، شعارك، السجل التجاري، وأرقام التواصل لتظهر في كافة المستندات.',
      features: [
        'إدخال بيانات المتجر: اسم المؤسسة، العنوان، رقم الهاتف، والبيانات القانونية (RC / NIF / NIS / ART).',
        'ترويسة رسمية جاهزة في فواتير مقاس A4، كشوف حسابات الزبائن، وسندات التسليم.',
        'تخصيص بنود الضمان والشروط التجارية أسفل كل فاتورة مطبوعة لتعزيز ثقة عملائك.',
        'توافق كامل ومباشر مع طابعات المكاتب الجزائرية الشهيرة (Canon LBP6030، Epson EcoTank، وغيرها).'
      ],
      previewSnippet: {
        type: 'company',
        name: 'مؤسسة النور للتوزيع والتجارة',
        activity: 'تجارة الجملة للهواتف والإلكترونيات',
        rc: 'RC: 16/00-098234B22',
        phone: '+213 (0) 676 06 76 52'
      }
    },
    {
      code: '06_COD_Profit_Lab',
      title: 'مختبر أرباح التجارة الإلكترونية والتوصيل (COD Lab)',
      subtitle: 'حساب صافي الأرباح، نسبة الروتور، وتكلفة الإعلانات (CPA) في 58 ولاية',
      icon: Calculator,
      badge: 'مختبر الـ E-Commerce',
      badgeColor: 'bg-blue-500/10 text-blue-400 border-blue-500/30',
      description: 'لا تنخدع بعدد الطلبيات! احسب صافي ربحك الحقيقي بعد خصم تكلفة الإعلانات الممولة ومصاريف الشحن ونسبة الروتور.',
      features: [
        'حاسبة دقيقة تشمل: سعر الشراء + الإعلانات (CPA) + كلفة التغليف + نسبة التسليم (Taux de Livraison %) + عقوبة الروتور.',
        'تحديد نقطة التعادل (Break-Even CPA): اعرف أقصى تكلفة إعلان مسموح بها قبل أن تبدأ الخسارة.',
        'تقييم فوري لكل منتج: (🏆 Winner رابح وممتاز / ⚠️ حساس يستوجب المراقبة / ❌ Bleed ينزف أموالاً في الإعلانات).',
        'يدعم أسعار شركات التوصيل الوطنية الكبرى (Yalidine, ZR Express, Procolis, Kazitour...).'
      ],
      previewSnippet: {
        type: 'cod',
        product: 'سماعات رياضية لاسلكية',
        cpa: '450 دج',
        deliveryRate: '75%',
        netProfit: '+1,240 دج / طلبية مسلّمة',
        status: '🏆 Winner رابح'
      }
    },
    {
      code: '07_Reports_BlackBox',
      title: 'مركز التقارير والصندوق الأسود (Audit Log)',
      subtitle: 'تصدير إكسل، نسخ احتياطي JSON، وسجل مشفر لكشف التلاعبات',
      icon: FileText,
      badge: 'الأمان والرقابة',
      badgeColor: 'bg-red-500/10 text-red-400 border-red-500/30',
      description: 'حماية متقدمة لسجلاتك وأموالك: سجّل كل العمليات المشبوهة، وصدّر بياناتك للمحاسب بنقرة واحدة.',
      features: [
        'الصندوق الأسود (The Black Box): سجل زمني مشفر يوثق أي حذف فاتورة، تخفيض سعر، أو استلام دفعة ديون مع وقتها بدقة.',
        'تصدير كراس المخزون والمبيعات إلى Excel (.CSV) بنقرة واحدة لتحليلها مع المحاسب أو مصلحة الضرائب.',
        'حفظ واسترجاع النسخ الاحتياطية (.JSON) في ثوانٍ على فلاش ديسك لحماية بضاعتك من أي عطل مفاجئ.',
        'تصفير وتطهير شامل لقاعدة البيانات محمي برمز PIN للمدير فقط مع تأكيد ثنائي لمنع أي خطأ.'
      ],
      previewSnippet: {
        type: 'log',
        entries: [
          { time: '11:42 AM', action: 'تسجيل دفعة كريدي', details: 'حميد فون: 50,000 دج كاش', user: 'المدير' },
          { time: '02:15 PM', action: 'حذف فاتورة #82', details: 'تم استرجاع السلع للرف', user: 'الصندوق الأسود 🔒' },
          { time: '04:30 PM', action: 'تصدير نسخة احتياطية', details: 'Backup_2026_11_03.json', user: 'تلقائي' }
        ]
      }
    },
    {
      code: '08_Boss_vs_Worker',
      title: 'نظام الصلاحيات المزدوج (Boss vs Worker Mode)',
      subtitle: 'حجب أسعار الشراء وهوامش الربح عن العمال مع قفل أمان بـ PIN',
      icon: ShieldCheck,
      badge: 'منع السرقات والفضول',
      badgeColor: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
      description: 'سلّم الحاسوب لعمال المستودع وأنت مطمئن البال تماماً: بيع وجرد حر بدون كشف أسرار أرباحك وتكلفة استيرادك.',
      features: [
        'وضع العامل (Worker Mode): حجب فوري لأسعار الشراء، رأس المال، وهوامش الربح واستبدالها برمز مشفر (•••••• دج 🔒).',
        'منع العمال من حذف الفواتير، تعديل الأسعار، تصفير المخزن، أو الدخول للصندوق الأسود بدون موافقة.',
        'وضع المدير (Boss Mode): فتح الصلاحيات والتقارير المالية الكاملة عبر رمز PIN سري خاص بك (الافتراضي 0000 مع إمكانية تغييره).',
        'راحة بال مطلقة لأصحاب المحلات الكبيرة الذين يوظفون عمالاً ومساعدين.'
      ],
      previewSnippet: {
        type: 'permission',
        mode: 'وضع العامل (نشط)',
        purchasePrice: '•••••• دج 🔒 (محجوب)',
        margin: '•••••• دج 🔒 (محجوب)',
        actions: 'البيع وإصدار الفواتير فقط'
      }
    }
  ];

  const current = modules[selectedModule];
  const CurrentIcon = current.icon;

  return (
    <section id="modules" className="py-16 sm:py-24 md:py-28 relative bg-[#071326] border-t border-slate-800 overflow-hidden w-full max-w-full">
      
      {/* Background Accent */}
      <div className="hidden sm:block absolute top-1/3 right-1/4 w-[550px] h-[550px] bg-emerald-500/5 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-xs font-bold mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            <span>منظومة 8 في 1 المتكاملة للمخازن الجزائرية</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white leading-tight font-['Cairo'] mb-4">
            ماذا تجد داخل برنامج{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-200">
              SMART GDS v2.1
            </span>
            ؟
          </h2>

          <p className="text-xs sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto">
            8 وحدات تنفيذية مدمجة صُممت خصيصاً لتلبي احتياجات تاجر الجملة، صاحب المحل، ومستودعات التوزيع في الجزائر دون الحاجة لأي برنامج آخر.
          </p>
        </div>

        {/* ======================================================== */}
        {/* DESKTOP LAYOUT (Tabs on Right, Live Details on Left) */}
        {/* ======================================================== */}
        <div className="hidden lg:grid grid-cols-12 gap-8 items-start">
          
          {/* Navigation Column (5 cols) */}
          <div className="col-span-5 space-y-2.5">
            {modules.map((m, idx) => {
              const Icon = m.icon;
              const isActive = selectedModule === idx;
              return (
                <button
                  key={m.code}
                  onClick={() => setSelectedModule(idx)}
                  className={`w-full text-right p-3.5 rounded-2xl border transition-all duration-200 flex items-center justify-between group ${
                    isActive
                      ? 'bg-slate-800/90 border-emerald-500/60 shadow-lg shadow-emerald-500/10'
                      : 'bg-slate-900/50 border-slate-800/80 hover:bg-slate-800/40 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-2.5 rounded-xl border transition-colors ${
                      isActive
                        ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/40'
                        : 'bg-slate-800 text-slate-400 border-slate-700 group-hover:text-slate-200'
                    }`}>
                      <Icon className="w-5 h-5 shrink-0" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className={`font-bold text-sm font-['Cairo'] transition-colors ${
                          isActive ? 'text-white' : 'text-slate-300 group-hover:text-white'
                        }`}>
                          {m.title}
                        </span>
                      </div>
                      <span className="text-[11px] text-slate-400 font-mono block mt-0.5">
                        الوحدة {idx + 1}
                      </span>
                    </div>
                  </div>

                  <ChevronRight className={`w-4 h-4 transition-transform duration-200 ${
                    isActive ? 'text-emerald-400 rotate-180' : 'text-slate-600 group-hover:text-slate-400'
                  }`} />
                </button>
              );
            })}
          </div>

          {/* Active Module Details Column (7 cols) */}
          <div className="col-span-7 rounded-3xl bg-slate-900/80 border border-slate-800 p-7 lg:p-8 backdrop-blur-xl shadow-2xl relative overflow-hidden">
            
            {/* Top Badge & Code */}
            <div className="flex items-center justify-between mb-4">
              <span className={`text-xs font-bold px-3 py-1 rounded-full border ${current.badgeColor}`}>
                {current.badge}
              </span>
              <span className="text-xs font-mono font-semibold text-slate-400 bg-slate-800/60 px-2.5 py-1 rounded-md border border-slate-700">
                {current.code}
              </span>
            </div>

            {/* Title & Subtitle */}
            <h3 className="text-2xl font-black text-white font-['Cairo'] mb-1">
              {current.title}
            </h3>
            <p className="text-xs text-emerald-400 font-semibold mb-4">
              {current.subtitle}
            </p>

            <p className="text-sm text-slate-300 leading-relaxed mb-6">
              {current.description}
            </p>

            {/* Bullet Features */}
            <div className="space-y-3 mb-6">
              {current.features.map((feat, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <div className="p-1 rounded-full bg-emerald-500/20 text-emerald-400 mt-0.5 shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                    {feat}
                  </span>
                </div>
              ))}
            </div>

            {/* Interactive Preview Container */}
            <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800">
              <div className="flex items-center justify-between text-[11px] text-slate-400 mb-3 font-mono border-b border-slate-800/80 pb-2">
                <span className="flex items-center gap-1.5">
                  <Eye className="w-3.5 h-3.5 text-emerald-400" />
                  <span>معاينة حية من داخل النظام</span>
                </span>
                <span className="text-emerald-400 font-bold">100% Offline • بدون إنترنت</span>
              </div>

              {/* Render Type: KPI */}
              {current.previewSnippet.type === 'kpi' && (
                <div className="grid grid-cols-2 gap-3">
                  {current.previewSnippet.highlights.map((h, i) => (
                    <div key={i} className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                      <div className="text-[10px] text-slate-400 mb-1">{h.label}</div>
                      <div className={`text-base font-black font-mono ${h.color}`}>{h.value}</div>
                    </div>
                  ))}
                </div>
              )}

              {/* Render Type: Table */}
              {current.previewSnippet.type === 'table' && (
                <div className="space-y-2 font-mono text-xs">
                  {current.previewSnippet.rows.map((r, i) => (
                    <div key={i} className="flex items-center justify-between p-2.5 rounded-lg bg-slate-900 border border-slate-800/80">
                      <div className="flex items-center gap-2">
                        <span className="text-slate-500 text-[10px]">{r.sku}</span>
                        <span className="font-['Cairo'] text-slate-200 text-xs font-semibold">{r.name}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-[11px] text-slate-400 font-['Cairo']">{r.note}</span>
                        <span className="text-[10px] px-2 py-0.5 rounded bg-slate-800 font-['Cairo'] font-bold text-slate-200">
                          {r.tag}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Render Type: Invoice */}
              {current.previewSnippet.type === 'invoice' && (
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between items-center bg-slate-900 p-2.5 rounded-lg border border-slate-800">
                    <span className="text-slate-400">رقم الفاتورة:</span>
                    <span className="font-mono font-bold text-white">{current.previewSnippet.invoiceNum}</span>
                  </div>
                  <div className="flex justify-between items-center bg-slate-900 p-2.5 rounded-lg border border-slate-800">
                    <span className="text-slate-400">الزبون:</span>
                    <span className="font-bold text-emerald-300">{current.previewSnippet.client}</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 pt-1 font-mono">
                    <div className="p-2 rounded bg-slate-900 text-center border border-slate-800">
                      <div className="text-[10px] text-slate-400">الإجمالي</div>
                      <div className="font-bold text-white text-xs mt-0.5">{current.previewSnippet.total}</div>
                    </div>
                    <div className="p-2 rounded bg-emerald-950/40 text-center border border-emerald-500/30">
                      <div className="text-[10px] text-emerald-400">المدفوع كاش</div>
                      <div className="font-bold text-emerald-400 text-xs mt-0.5">{current.previewSnippet.paid}</div>
                    </div>
                    <div className="p-2 rounded bg-amber-950/40 text-center border border-amber-500/30">
                      <div className="text-[10px] text-amber-400">كريدي مرحّل</div>
                      <div className="font-bold text-amber-400 text-xs mt-0.5">{current.previewSnippet.credit}</div>
                    </div>
                  </div>
                </div>
              )}

              {/* Render Type: WhatsApp */}
              {current.previewSnippet.type === 'whatsapp' && (
                <div className="p-3 rounded-xl bg-[#0b2016] border border-emerald-500/30 text-xs">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-1.5 text-emerald-400 font-bold">
                      <MessageCircle className="w-4 h-4" />
                      <span>تذكير واتساب لـ: {current.previewSnippet.customer}</span>
                    </div>
                    <span className="text-[10px] font-mono text-emerald-300 bg-emerald-950 px-2 py-0.5 rounded border border-emerald-700">
                      الدين: {current.previewSnippet.debt}
                    </span>
                  </div>
                  <p className="text-slate-200 text-xs leading-relaxed bg-[#071326]/80 p-2.5 rounded-lg border border-emerald-900/50">
                    "{current.previewSnippet.msg}"
                  </p>
                </div>
              )}

              {/* Render Type: Company */}
              {current.previewSnippet.type === 'company' && (
                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs space-y-1.5">
                  <div className="font-bold text-white text-sm">{current.previewSnippet.name}</div>
                  <div className="text-slate-400 text-xs">{current.previewSnippet.activity}</div>
                  <div className="flex justify-between items-center font-mono text-[11px] text-slate-300 pt-1 border-t border-slate-800">
                    <span>{current.previewSnippet.rc}</span>
                    <span>{current.previewSnippet.phone}</span>
                  </div>
                </div>
              )}

              {/* Render Type: COD */}
              {current.previewSnippet.type === 'cod' && (
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                    <div className="text-[10px] text-slate-400">إعلان للطلبية (CPA)</div>
                    <div className="font-mono font-bold text-white text-xs mt-0.5">{current.previewSnippet.cpa}</div>
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                    <div className="text-[10px] text-slate-400">نسبة التسليم (Taux)</div>
                    <div className="font-mono font-bold text-cyan-400 text-xs mt-0.5">{current.previewSnippet.deliveryRate}</div>
                  </div>
                  <div className="col-span-2 p-2.5 rounded-lg bg-emerald-950/40 border border-emerald-500/30 flex items-center justify-between">
                    <div>
                      <div className="text-[10px] text-emerald-400">صافي الربح الحقيقي لكل طلبية</div>
                      <div className="font-mono font-bold text-emerald-300 text-sm">{current.previewSnippet.netProfit}</div>
                    </div>
                    <span className="text-xs font-bold text-emerald-400 bg-emerald-900/50 px-2.5 py-1 rounded">
                      {current.previewSnippet.status}
                    </span>
                  </div>
                </div>
              )}

              {/* Render Type: Log */}
              {current.previewSnippet.type === 'log' && (
                <div className="space-y-1.5 font-mono text-xs">
                  {current.previewSnippet.entries.map((e, i) => (
                    <div key={i} className="flex items-center justify-between p-2 rounded bg-slate-900 border border-slate-800/80">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] text-slate-500">{e.time}</span>
                        <span className="font-['Cairo'] text-slate-200 text-xs font-bold">{e.action}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] text-slate-400 font-['Cairo']">{e.details}</span>
                        <span className="text-[9px] px-1.5 py-0.5 rounded bg-slate-800 text-slate-400">
                          {e.user}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Render Type: Permission */}
              {current.previewSnippet.type === 'permission' && (
                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">الحالة الراهنة:</span>
                    <span className="text-emerald-400 font-bold">{current.previewSnippet.mode}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">سعر الشراء للمنتجات:</span>
                    <span className="font-mono text-amber-400 font-bold">{current.previewSnippet.purchasePrice}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">هامش الربح الصافي:</span>
                    <span className="font-mono text-amber-400 font-bold">{current.previewSnippet.margin}</span>
                  </div>
                </div>
              )}

            </div>

          </div>

        </div>

        {/* ======================================================== */}
        {/* MOBILE ACCORDION (100% Touch-Optimized) */}
        {/* ======================================================== */}
        <div className="lg:hidden space-y-3">
          {modules.map((m, idx) => {
            const Icon = m.icon;
            const isOpen = mobileExpandedIndex === idx;
            return (
              <div
                key={m.code}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-slate-900 border-emerald-500/50 shadow-xl'
                    : 'bg-slate-900/60 border-slate-800/80'
                }`}
              >
                <button
                  onClick={() => setMobileExpandedIndex(isOpen ? -1 : idx)}
                  className="w-full text-right p-4 flex items-center justify-between gap-3"
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-2.5 rounded-xl border ${
                      isOpen
                        ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/40'
                        : 'bg-slate-800 text-slate-400 border-slate-700'
                    }`}>
                      <Icon className="w-5 h-5 shrink-0" />
                    </div>
                    <div>
                      <div className="font-bold text-sm text-white font-['Cairo']">
                        {m.title}
                      </div>
                      <span className="text-[10px] text-emerald-400 font-mono">
                        الوحدة 0{idx + 1}
                      </span>
                    </div>
                  </div>

                  <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${
                    isOpen ? 'rotate-180 text-emerald-400' : ''
                  }`} />
                </button>

                {isOpen && (
                  <div className="px-4 pb-4 pt-1 border-t border-slate-800 text-right space-y-3.5">
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {m.description}
                    </p>

                    <div className="space-y-2">
                      {m.features.map((feat, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mt-0.5 shrink-0" />
                          <span className="text-xs text-slate-200 leading-relaxed">
                            {feat}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-xs">
                      <span className="text-[10px] text-emerald-400 font-bold block mb-1">
                        ✓ ميزة حصرية في SMART GDS v2.1:
                      </span>
                      <span className="text-slate-300 text-[11px]">
                        تعمل بدون إنترنت 100% ومصممة بالدينار الجزائري لجميع ولايات الوطن.
                      </span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
