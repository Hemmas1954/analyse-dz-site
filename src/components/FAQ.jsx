import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Sparkles } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: 'هل البرنامج يحتاج إنترنت لكي يشتغل؟',
      a: 'لا إطلاقاً! البرنامج يعمل محلياً 100% (Offline-First) على حاسوبك المكتبي أو المحمول، ولن تتوقف تجارتك أو مبيعاتك أو طباعة الفواتير حتى لو انقطع النت لشهور.'
    },
    {
      q: 'هل فيه أي اشتراك شهري أو رسوم سنوية؟',
      a: 'لا يوجد أي اشتراك شهري أو سنوي. أنت تشتري رخصة البرنامج لمرة واحدة فقط (0 دج تكلفة تشغيل) ويبقى ملكك بالكامل مدى الحياة بدون أي مصاريف خفية.'
    },
    {
      q: 'إذا تعطل جهاز الكمبيوتر هل تضيع بياناتي وسلعي؟',
      a: 'بياناتك في أمان تام. يحتوي البرنامج على مركز نسخ احتياطي احترافي يمكنك بضغطة زر واحدة تحميل نسخة كاملة من بياناتك وملفاتك بصيغة .JSON في فلاش ديسك، واسترجاعها في أي كمبيوتر جديد خلال ثانية واحدة.'
    },
    {
      q: 'أنا لست خبيراً في الإعلام الآلي والبرامج المعقدة، هل هو سهل الاستعمال؟',
      a: 'الواجهة مصممة باللغة العربية الواضحة وبخط كبير وأزرار ذكية وفلسفة Zero-Friction. في دقائق معدودة ستتعلم إضافة السلع والفوترة وتقسيم الكريدي، بالإضافة لفيديو شرح تطبيقي وإمكانية مرافقتنا لك خطوة بخطوة عبر AnyDesk.'
    },
    {
      q: 'هل أستطيع تجربة البرنامج ومعاينته قبل أن أدفع؟',
      a: 'نعم بكل تأكيد! يمكنك مشاهدة الفيديو التوضيحي الشامل، أو نفتح معك جلسة AnyDesk مباشرة لعرض كل شاشات البرنامج ووحداته الثمانية أمامك على شاشتك مباشرة قبل أن تدفع أي دينار.'
    },
    {
      q: 'كيف يحمي البرنامج أسعار الشراء وهوامش أرباحي الحقيقية عن العمال؟',
      a: 'البرنامج مجهز بنظام الصلاحيات المزدوج (Boss vs Worker). بمجرد تفعيل "وضع العامل"، تتحول كل أسعار الشراء ورأس المال وهوامش الربح إلى نجوم مشفرة (•••••• دج 🔒)، ويُمنع العامل من حذف أي فاتورة أو تصفير المخزن، بينما تسترجع أنت كل شيء برمز PIN الخاص بك.'
    },
    {
      q: 'كيفاش نخلص وكيفاش نستلم البرنامج في الجزائر؟',
      a: 'نوفر الطرق الرسمية المعتمدة: تطبيق BaridiMob عبر رقم الـ RIP، أو حساب البريد الجاري CCP. الاستلام رقمي فوري في دقائق عبر الواتساب والإيميل للباقة المباشرة، أو إرسال فلاش ديسك USB لباب متجرك مع جلسة AnyDesk للباقة الاحترافية VIP.'
    }
  ];

  return (
    <section id="faq" className="py-16 md:py-28 relative bg-[#071326] border-t border-slate-800 overflow-hidden w-full max-w-full">
      
      {/* Background Accent */}
      <div className="hidden sm:block absolute bottom-10 right-1/4 w-[400px] h-[400px] bg-emerald-500/5 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-4xl mx-auto px-3.5 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-xs font-bold mb-4 shadow-sm">
            <HelpCircle className="w-3.5 h-3.5 text-emerald-400" />
            <span>إجابات واضحة وصريحة</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white leading-tight font-['Cairo'] mb-4">
            الأسئلة الشائعة حول برنامج{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-200">
              SMART GDS v2.1
            </span>
          </h2>

          <p className="text-xs sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto">
            كل ما يدور في ذهنك قبل طلب نسختك والبدء في السيطرة على مخزنك وحماية أرباحك.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3.5">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-slate-900 border-emerald-500/40 shadow-lg shadow-emerald-500/5'
                    : 'bg-slate-900/60 border-slate-800/80 hover:border-slate-700'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="w-full text-right p-4 sm:p-5 flex items-center justify-between gap-3 font-bold text-white text-xs sm:text-base font-['Cairo']"
                >
                  <span className="leading-snug">{item.q}</span>
                  <div className={`p-1.5 rounded-lg border shrink-0 transition-transform duration-200 ${
                    isOpen ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/40 rotate-180' : 'bg-slate-800 text-slate-400 border-slate-700'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-4 pb-4 sm:px-6 sm:pb-6 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/80 pt-3.5">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions WhatsApp prompt */}
        <div className="mt-10 p-5 rounded-2xl bg-slate-900/50 border border-slate-800 text-center">
          <p className="text-xs sm:text-sm text-slate-300 mb-3">
            عندك استفسار خاص بنشاطك التجاري أو طبيعة سلعك في الديبو؟
          </p>
          <a
            href="https://wa.me/213676067652?text=%D8%B3%D9%84%D8%A7%D9%85%20ANALYSE%20DZ%D8%8C%20%D8%B9%D9%86%D8%AF%D9%8A%20%D8%A7%D8%B3%D8%AA%D9%81%D8%B3%D8%A7%D8%B1%20%D8%AD%D9%88%D9%84%20%D8%A8%D8%B1%D9%86%D8%A7%D9%85%D8%AC%20SMART%20GDS%20v2.1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 font-bold text-xs transition-colors"
          >
            <span>تحدث مع مستشارنا التجاري عبر واتساب (+213 676 06 76 52)</span>
          </a>
        </div>

      </div>
    </section>
  );
}
