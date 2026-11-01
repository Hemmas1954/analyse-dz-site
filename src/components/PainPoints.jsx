import React from 'react';
import { AlertOctagon, TrendingDown, FileX2, ArrowRight, ShieldAlert, DollarSign } from 'lucide-react';

export default function PainPoints() {
  const painPoints = [
    {
      id: 'rupture',
      badge: 'القاتل الصامت #1',
      title: '🔴 نفاد المخزون المفاجئ (Rupture de Stock)',
      quote: 'الخدام ما يخبركش حتى يفرغ الرف، ويجي الكليان الكبير يسقسي على السلعة يلقاها خلاصت.. فتخسر البيعة وتخسر الزبون للمنافس.',
      details: [
        'زبون الجملة (Grossiste) إذا جاء لقا السلعة ناقصة يروح مباشرة للديبو لي بجنبك وما يعاودش يولي.',
        'تصرف دراهم الإعلانات (Facebook/TikTok Ads) على برودوي ناجح (Winning Product)، ثم تكتشف في وسط الحملة أن السلعة خلاصت!',
        'الطلب على السلعة عالي، وأنت راك تستنى 3 أسابيع باش تدخل الكونتينار الجديدة لأنك ما طلبتهاش في وقتها المناسب.'
      ],
      impact: 'خسارة تقديرية: 30% إلى 50% من الأرباح الشهرية الصافية تتبخر للمنافسين.',
      borderColor: 'border-t-red-500',
      badgeBg: 'bg-red-500/10 text-red-400 border-red-500/30',
      glow: 'shadow-[0_-8px_25px_rgba(239,68,68,0.15)]',
      icon: AlertOctagon,
      iconColor: 'text-red-400'
    },
    {
      id: 'stock-mort',
      badge: 'القاتل الصامت #2',
      title: '🟡 مقبرة السيولة (Le Stock Mort)',
      quote: 'كراتين مكدسة في الزوايا عندها أكثر من 60 يوم ما تحركتش.. راس مالك محبوس فيها وأنت تظن أنك مرفه لأن الديبو معمر!',
      details: [
        'الديبو يبان معمر سلعة وتشوف روحك "غني على الورق"، بصح في الحساب البنكي والكاسا ما تلقاش باش تخلص الكراء والموردين.',
        'السلعة مع الوقت تتقادم، تتبهدل كراتينها بالغبار، تفقد قيمتها السوقية، وتضطر في الأخير تبيعها تحت سعر التكلفة (À perte).',
        'السيولة المحبوسة في الكراتين الراقدة تحرمك من شراء السلع الجديدة الرائجة لي فيها دورة كاش سريعة ومربحة.'
      ],
      impact: 'خسارة تقديرية: مئات الملايين من السنتيمات مجمدة بدون فائدة تنزف قيمتها مع التضخم.',
      borderColor: 'border-t-amber-500',
      badgeBg: 'bg-amber-500/10 text-amber-300 border-amber-500/30',
      glow: 'shadow-[0_-8px_25px_rgba(245,158,11,0.15)]',
      icon: TrendingDown,
      iconColor: 'text-amber-400'
    },
    {
      id: 'fawda',
      badge: 'القاتل الصامت #3',
      title: '⚪ فوضى الكراس والإكسل والروتور',
      quote: 'ساعات ضائعة في الليل بالآلة الحاسبة، عدم تطابق الجرد الحقيقي مع الورق، ونزيف تكاليف الروتور والإعلانات دون حساب دقيق للربح الصافي.',
      details: [
        'كراس حركة الدخول والخروج مشتت، الخدام يكتب حبة والزبون يدي زوج، ويوم الجرد السنوي تتفاجأ بنقص كارثي في الحبات.',
        'في التجارة الإلكترونية، نزيف الروتور (Retour) يرجع مكسر أو ناقص بدون تتبع، وتدفع حق الشحن مرتين وأنت ما حاسبش تكلفة القطعة.',
        'تستعمل برامج محاسبة معقدة كلفتك ملايين السنتيمات، وفي الأخير لقيتها ثقيلة ومعقدة وما تفهم منها والو ورجعت للورقة والستيلو!'
      ],
      impact: 'خسارة تقديرية: إرهاق ذهني يومي، نزيف 100 إلى 200 دج عن كل طلبية روتور، وقرارات تجارية عشوائية.',
      borderColor: 'border-t-slate-400',
      badgeBg: 'bg-slate-700/30 text-slate-300 border-slate-600/40',
      glow: 'shadow-[0_-8px_25px_rgba(148,163,184,0.1)]',
      icon: FileX2,
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
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-950/40 border border-red-500/30 text-red-300 text-xs font-bold mb-4">
            <ShieldAlert className="w-3.5 h-3.5" />
            <span>مرآة واقع التاجر والمستودع الجزائري</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white leading-tight font-['Cairo'] mb-5">
            علاش تبيع بزاف وماتلقاش الفايدة في يدك في{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-amber-300 to-amber-200">
              لافان تاع الشهر؟
            </span>
          </h2>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            سواء كنت في مستودعات <span className="text-white font-semibold">الحميز، العلمة، بيلكور</span>، أو تدير علامة تجارية إلكترونية في الـ 58 ولاية.. أرباحك الحقيقية لا تضيع بسبب قلة المبيعات، بل بسبب هؤلاء <strong className="text-amber-400">القتلة الثلاثة الصامتين</strong>:
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

                  {/* Darija Quote (Direct Speech) */}
                  <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800/80 text-amber-200/90 text-xs sm:text-sm font-medium leading-relaxed mb-5 italic">
                    "{item.quote}"
                  </div>

                  {/* Real Breakdown Details */}
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
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-emerald-950/40 via-slate-900 to-slate-900 border border-emerald-500/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="text-right">
            <h4 className="text-lg sm:text-xl font-black text-white font-['Cairo'] mb-2">
              هل تعرف بالضبط شحال من مليون سنتيم راقدة عندك في الديبو الآن؟
            </h4>
            <p className="text-xs sm:text-sm text-slate-300">
              معظم التجار يقدرون بـ 50 مليون وتكون النتيجة الحقيقية بعد الحساب أكثر من 300 مليون سنتيم محبوسة في الزوايا!
            </p>
          </div>

          <a
            href="#calculator"
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm text-slate-950 bg-emerald-400 hover:bg-emerald-300 transition-all shadow-lg shadow-emerald-500/20"
          >
            <span>جرب الحاسبة التفاعلية في ثوانٍ</span>
            <ArrowRight className="w-4 h-4 transform rotate-180" />
          </a>
        </div>

      </div>
    </section>
  );
}

