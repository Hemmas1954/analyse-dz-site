import React from 'react';
import { Star, Quote, CheckCircle, TrendingUp, Building2, ShoppingBag, Wrench } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      id: 'eulma',
      author: 'الحاج بلقاسم س.',
      role: 'تاجر جملة - أواني منزلية وأجهزة كهرومنزلية',
      location: 'العلمة (دبي)، ولاية سطيف',
      avatarIcon: Building2,
      stat: 'حرر 420 مليون سنتيم سلعة راقدة في 3 أسابيع',
      statColor: 'text-amber-400',
      badge: 'مستودع 1200 متر مربع',
      quote:
        'عندي أكثر من 600 صنف في الديبو.. كنا نسجلو في كراس كبير وما كناش عارفين شحال من كرتونة راقدة عندها عامين. بعد ما دارولنا جماعة ANALYSE DZ التركيب الكامل، خرجتلي أرقام خلتني ندوخ: 420 مليون سنتيم كانت مجمدة في موديلات قديمة! درنا عليها بروموسيون وحررنا الكاش، واليوم كل صباح نشوف الإشعار في التيليجرام قبل ما نخرج من الدار.',
      verified: true
    },
    {
      id: 'belcourt',
      author: 'ياسين م.',
      role: 'مستودع توزيع قطع غيار ومستلزمات السيارات',
      location: 'بيلكور، الجزائر العاصمة',
      avatarIcon: Wrench,
      stat: 'صفر حالات Rupture لزبائن الجملة الكبار',
      statColor: 'text-emerald-400',
      badge: 'توزيع لـ 14 ولاية',
      quote:
        'المشكل الكبير لي كان يقتلني هو Rupture de Stock المفاجئ. يجي زبون جملة يحتاج 50 بلاكيت دو فران، يقولو الخدام راهي خلاصت.. هذاك الكليان يروح للمنافس لي بجنبي وما يرجعش. بنظام ANALYSE DZ، البوت ينبهني باللون الأحمر كي تبقى 10 حبات باش نطلب لاكوموند من المورد في وقتها. رجعنا نخدمو باحترافية الشركات الكبيرة.',
      verified: true
    },
    {
      id: 'oran',
      author: 'رضوان ك.',
      role: 'مؤسس براند تجارة إلكترونية وألبسة رياضية',
      location: 'وهران (توصيل لكافة الـ 58 ولاية)',
      avatarIcon: ShoppingBag,
      stat: 'وفّر 180,000 دج شهرياً من نزيف الروتور',
      statColor: 'text-cyan-400',
      badge: '+120 طلبية يومياً',
      quote:
        'كنت نستعمل برنامج محاسبة جزائري دفعنا فيه 4 ملايين وكان معقد والخدامين ما فهموهش. نظام الإكسل وبوت التيليجرام تاع ANALYSE DZ كان أسهل بألف مرة. حاسبة الـ COD وحدها سلكتني لأنها تخليني نحسب احتساب الروتور وتكلفة الإعلانات في الفيسبوك وتيك توك بالدينار، فصرت نعرف الربح الصافي تاع كل برودوي قبل ما نطلق الإشهار.',
      verified: true
    }
  ];

  return (
    <section className="py-16 md:py-28 relative bg-[#071326] border-t border-slate-800 overflow-hidden w-full max-w-full">
      
      {/* Background Glow */}
      <div className="hidden sm:block absolute top-1/2 left-1/3 w-[500px] h-[500px] bg-blue-500/5 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-xs font-bold mb-4">
            <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
            <span>قصص نجاح من قلب التجارة الجزائرية</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white leading-tight font-['Cairo'] mb-4">
            ماذا يقول التجار الذين أوقفوا{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
              نزيف مخازنهم؟
            </span>
          </h2>

          <p className="text-sm sm:text-base text-slate-300">
            تجار جملة، أصحاب مستودعات توزيع، ومتاجر إلكترونية استرجعوا السيطرة على كاش تجارتهم بدون تعقيد.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t) => {
            const Icon = t.avatarIcon;
            return (
              <div
                key={t.id}
                className="rounded-2xl bg-slate-900/80 border border-slate-800 p-4 sm:p-7 backdrop-blur-xl flex flex-col justify-between hover:border-slate-700 transition-all shadow-xl relative"
              >
                <div>
                  {/* Top Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400" />
                      ))}
                    </div>
                    <span className="text-[11px] font-bold text-slate-400 bg-slate-800 px-2.5 py-0.5 rounded-full border border-slate-700">
                      {t.badge}
                    </span>
                  </div>

                  {/* Impact Stat */}
                  <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800 mb-5 flex items-center gap-2.5">
                    <TrendingUp className={`w-4 h-4 ${t.statColor} shrink-0`} />
                    <span className={`text-xs font-black font-['Cairo'] ${t.statColor}`}>
                      {t.stat}
                    </span>
                  </div>

                  {/* Quote Body */}
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic mb-6 font-normal">
                    "{t.quote}"
                  </p>
                </div>

                {/* Author Info */}
                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-emerald-400 font-bold">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-bold text-sm text-white font-['Cairo'] flex items-center gap-1.5">
                        <span>{t.author}</span>
                        {t.verified && (
                          <CheckCircle className="w-3.5 h-3.5 text-emerald-400 fill-emerald-400/20" />
                        )}
                      </div>
                      <div className="text-[11px] text-slate-400">{t.role}</div>
                      <div className="text-[10px] text-emerald-400/80 font-mono mt-0.5">{t.location}</div>
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

