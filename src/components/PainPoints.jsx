import React from 'react';
import { AlertOctagon, TrendingDown, FileX2, ArrowRight, ShieldAlert, DollarSign, UserX, BookOpen, Clock } from 'lucide-react';

export default function PainPoints() {
  const painPoints = [
    {
      id: 'credit-loss',
      badge: 'القاتل الصامت #1',
      title: '🔴 نزيف الكريدي والديون المنسية (Carnet de Crédit)',
      quote: 'ما زالك تسجل الكريدي في كراس ورقي قديم ممزق؟ الزبون ينسى وأنت تستحي تطلب دراهمك، وشحال من مليون راح لك هكذا؟',
      details: [
        'كراس الديون يضيع، تتقطع أوراقه، أو تختلط فيه الحسابات بين مدفوعات الزبائن وتواريخ التوريد.',
        'الزبون يسألك "شحال بقالي عندك بالتدقيق؟"، فتدخل في ربع ساعة من مراجعة الحسابات وتفقد مصداقيتك.',
        'الحرج الاجتماعي في المطالبة بالديون شفهياً؛ بينما رسالة واتساب رسمية ومحسوبة بالدينار بنقرة واحدة تحفظ كرامتك وتسترجع دراهمك.'
      ],
      impact: 'خسارة تقديرية: مئات الملايين من السنتيمات مجمدة في ديون معلقة قد لا تسترجعها أبداً.',
      borderColor: 'border-t-red-500',
      badgeBg: 'bg-red-500/10 text-red-400 border-red-500/30',
      glow: 'shadow-[0_-8px_25px_rgba(239,68,68,0.15)]',
      icon: BookOpen,
      iconColor: 'text-red-400'
    },
    {
      id: 'worker-theft',
      badge: 'القاتل الصامت #2',
      title: '🟡 سرقة العمال وفضح أسرار الشراء (Boss vs Worker)',
      quote: 'حاب تخلي العامل يبيع في المحل بصح خايف يشوف شحال راك تشري السلعة وشحال راك رابح فيها ويدير المنافسة؟',
      details: [
        'العامل يطلع على فواتير الشراء الحقيقية ويعرف مصادرك وهوامش أرباحك، وربما يفتح غداً محلاً منافساً لك بنفس الموردين.',
        'تلاعبات الفواتير اليدوية: إلغاء فاتورة نقداً وأخذ المال في الجيب دون أي سجل يثبت العملية.',
        'في SMART GDS، وضع العامل يشفر أسعار الشراء والهوامش (•••••• دج 🔒)، والصندوق الأسود يسجل كل عملية حذف أو تعديل.'
      ],
      impact: 'خسارة تقديرية: نزيف أرباح صامت وسرقة ميزاتك التنافسية في السوق.',
      borderColor: 'border-t-amber-500',
      badgeBg: 'bg-amber-500/10 text-amber-300 border-amber-500/30',
      glow: 'shadow-[0_-8px_25px_rgba(245,158,11,0.15)]',
      icon: UserX,
      iconColor: 'text-amber-400'
    },
    {
      id: 'dead-stock-cod',
      badge: 'القاتل الصامت #3',
      title: '⚪ السلعة الراقدة وفوضى حسابات التوصيل (COD Lab)',
      quote: 'السلعة محبوسة في الزوايا +60 يوم، والفواتير اليدوية تعطل الكليان، وماكش عارف أرباحك الحقيقية بعد الروتور!',
      details: [
        'كراتين مكدسة في الديبو عندها أشهر وأنت تظن أنك غني على الورق، بينما الكاسا فارغة ولا تجد سيولة لشراء سلع جديدة.',
        'كتابة الفواتير باليد وبطء خدمة زبائن الجملة في أسواق مثل العلمة، بلفور، والحميز؛ مما يجعل الزبون يذهب للمنافس.',
        'في التجارة الإلكترونية، تفرح بعدد الطلبيات لكن تفاجأ بنهاية الشهر أن تكاليف الإعلانات ونسبة الروتور أكلت كل الأرباح.'
      ],
      impact: 'خسارة تقديرية: سيولة نقدية ميتة، ضياع زبائن الجملة، وحسابات أرباح وهمية.',
      borderColor: 'border-t-slate-400',
      badgeBg: 'bg-slate-700/30 text-slate-300 border-slate-600/40',
      glow: 'shadow-[0_-8px_25px_rgba(148,163,184,0.1)]',
      icon: TrendingDown,
      iconColor: 'text-slate-300'
    }
  ];

  return (
    <section id="pain-points" className="py-16 md:py-28 relative bg-[#06101f] border-t border-slate-800/80 overflow-hidden w-full max-w-full">
      
      {/* Background accents */}
      <div className="hidden sm:block absolute top-1/2 left-0 w-80 h-80 bg-red-500/5 blur-[120px] pointer-events-none rounded-full" />
      <div className="hidden sm:block absolute bottom-10 right-0 w-80 h-80 bg-amber-500/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-950/40 border border-red-500/30 text-red-300 text-xs font-bold mb-4">
            <ShieldAlert className="w-3.5 h-3.5" />
            <span>مرآة واقع التاجر والمستودع الجزائري</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white leading-tight font-['Cairo'] mb-4 sm:mb-5">
            علاش تبيع بزاف وما تلقاش الدراهم في يدك في{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-amber-300 to-amber-200">
              لافان تاع الشهر؟
            </span>
          </h2>

          <p className="text-xs sm:text-base text-slate-300 leading-relaxed">
            سواء كنت في أسواق <span className="text-white font-semibold">العلمة، بلفور، الحميز، السانيا، باب الزوار، قسنطينة</span>، أو تدير علامة تجارية إلكترونية في الـ 58 ولاية.. أرباحك الحقيقية تنزف بسبب هذه المشاكل الثلاث:
          </p>
        </div>

        {/* 3 Pain Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {painPoints.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className={`rounded-2xl bg-slate-900/80 backdrop-blur-md border border-slate-800 border-t-4 ${item.borderColor} p-4 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:border-slate-700 hover:-translate-y-1.5 ${item.glow}`}
              >
                <div>
                  {/* Top Badge & Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-[11px] font-bold px-3 py-1 rounded-full border ${item.badgeBg}`}>
                      {item.badge}
                    </span>
                    <div className="p-2.5 rounded-xl bg-slate-800/80 border border-slate-700/60">
                      <Icon className={`w-5 h-5 ${item.iconColor}`} />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-black text-white font-['Cairo'] mb-3">
                    {item.title}
                  </h3>

                  {/* Darija Quote */}
                  <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800/80 text-amber-200/90 text-xs sm:text-sm font-medium leading-relaxed mb-5 italic">
                    "{item.quote}"
                  </div>

                  {/* Breakdown Details */}
                  <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300 font-normal leading-relaxed mb-6">
                    {item.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-slate-500 font-mono mt-0.5">•</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Impact Box */}
                <div className="pt-3.5 border-t border-slate-800/80 text-[11px] sm:text-xs font-semibold text-red-300 bg-red-950/20 -mx-4 -mb-4 sm:-mx-7 sm:-mb-7 p-3.5 sm:p-4 rounded-b-2xl flex items-center gap-2">
                  <DollarSign className="w-4 h-4 text-red-400 shrink-0" />
                  <span>{item.impact}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Transition Bridge Callout */}
        <div className="mt-12 sm:mt-14 p-5 sm:p-8 rounded-2xl bg-gradient-to-r from-emerald-950/40 via-slate-900 to-slate-900 border border-emerald-500/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="text-right">
            <h4 className="text-base sm:text-xl font-black text-white font-['Cairo'] mb-1.5 sm:mb-2">
              شحال راك مسلف كريدي للزبائن وشحال عندك سلعة راقدة في المخزن؟
            </h4>
            <p className="text-xs sm:text-sm text-slate-300">
              معظم التجار يتفاجأون بعد تثبيت SMART GDS بأن لديهم أكثر من 150 مليون سنتيم ديون غير متابعة وسلع راقدة يمكن تحريرها فوراً!
            </p>
          </div>

          <a
            href="#calculator"
            className="shrink-0 inline-flex items-center gap-2 px-5 py-3 sm:px-6 sm:py-3.5 rounded-xl font-bold text-xs sm:text-sm text-slate-950 bg-emerald-400 hover:bg-emerald-300 transition-all shadow-lg shadow-emerald-500/20"
          >
            <span>احسب الكاش والديون المجمدة الآن</span>
            <ArrowRight className="w-4 h-4 transform rotate-180" />
          </a>
        </div>

      </div>
    </section>
  );
}
