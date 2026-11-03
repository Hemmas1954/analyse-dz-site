import React from 'react';
import { Star, Quote, CheckCircle, TrendingUp, Building2, ShoppingBag, Smartphone, Usb } from 'lucide-react';

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
        'عندي أكثر من 800 صنف في الديبو.. كنا نخدمو بكراس كبير وما كناش عارفين شحال من كرتونة راقدة عندها عامين. بعد ما ركبنا برنامج SMART GDS خرجتلي أرقام خلتني ندوخ: 420 مليون سنتيم كانت مجمدة في موديلات قديمة! درنا عليها تصفية سريعة بالزر تاع OODA Loop وحررنا الكاش، والبرنامج يخدم بدون إنترنت تماماً وخفيف جداً.',
      verified: true
    },
    {
      id: 'belfort',
      author: 'حميد ق.',
      role: 'موزع هواتف وقطع غيار وإلكترونيات',
      location: 'بلفور (الحراش)، العاصمة',
      avatarIcon: Smartphone,
      stat: 'استرجع 160 مليون سنتيم كريدي بالواتساب',
      statColor: 'text-emerald-400',
      badge: 'توزيع لـ 15 ولاية',
      quote:
        'أقوى ميزة في هذا البرنامج هي دفتر الكريدي وتذكير الواتساب بضغطة زر. الزبائن كانو ينساو المبالغ ونستحي نطلب دراهمي، اليوم بضغطة زر تخرج رسالة رسمية مهذبة باسم المحل والمبلغ بدقة السنتيم بدون قلب للأرقام. وفي نفس الوقت ميزة وضع العامل ريحتني: نخلّي العامل يبيع ويخرج فواتير A4 وهو ما يشوفش شحال راني شاري السلعة!',
      verified: true
    },
    {
      id: 'oran',
      author: 'ياسين ب.',
      role: 'مؤسس متجر إلكتروني وشحن 58 ولاية (COD)',
      location: 'وهران (السانيا)',
      avatarIcon: ShoppingBag,
      stat: 'وفّر 220,000 دج شهرياً من نزيف الروتور',
      statColor: 'text-cyan-400',
      badge: '+150 طلبية يومياً',
      quote:
        'كنت نستعمل برنامج سحابي ندفع فيه 5 آلاف دينار شهرياً، وكل ما ينقطع النت في المحل نحبس عن الخدمة. برنامج SMART GDS Enterprise Pro شريتو مرة واحدة وبلا اشتراك، وحاسبة الـ COD كشفتلي بلي كاين منتجات كنت نظن بلي راني رابح فيها وهي تاكل في رأس المال بسبب تكلفة الروتور والإعلانات في الفيسبوك وتيك توك.',
      verified: true
    }
  ];

  return (
    <section className="py-16 md:py-28 relative bg-[#071326] border-t border-slate-800 overflow-hidden w-full max-w-full">
      
      {/* Background Glow */}
      <div className="hidden sm:block absolute top-1/2 left-1/3 w-[500px] h-[500px] bg-blue-500/5 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-xs font-bold mb-4 shadow-sm">
            <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
            <span>تجارب حقيقية من كبرى أسواق الجزائر</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white leading-tight font-['Cairo'] mb-4">
            ماذا يقول التجار الذين استرجعوا{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-200">
              السيطرة على مخازنهم؟
            </span>
          </h2>

          <p className="text-xs sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto">
            تجار جملة في العلمة وبلفور والحميز، ومتاجر إلكترونية استبدلوا الكراسات الورقية بفخامة وهيبة SMART GDS v2.1.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t) => {
            const Icon = t.avatarIcon;
            return (
              <div
                key={t.id}
                className="rounded-2xl sm:rounded-3xl bg-slate-900/80 border border-slate-800 p-5 sm:p-7 backdrop-blur-xl flex flex-col justify-between hover:border-slate-700 transition-all shadow-xl relative"
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

                  {/* Quote */}
                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed mb-6 font-['Cairo']">
                    "{t.quote}"
                  </p>
                </div>

                {/* Author Card Footer */}
                <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-emerald-400 shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs sm:text-sm font-bold text-white font-['Cairo'] flex items-center gap-1.5">
                        <span>{t.author}</span>
                        {t.verified && (
                          <span className="text-[10px] text-emerald-400 font-normal">✓ موثق</span>
                        )}
                      </div>
                      <div className="text-[11px] text-slate-400">{t.role}</div>
                    </div>
                  </div>

                  <span className="text-[10px] text-slate-400 font-mono bg-slate-950 px-2 py-1 rounded border border-slate-800">
                    {t.location}
                  </span>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
