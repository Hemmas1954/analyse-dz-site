import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Sparkles } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: 'هل يلزمني شراء برنامج محاسبة أو دفع اشتراك شهري لاستعمال النظام؟',
      a: 'إطلاقاً! 0 دج مصاريف إضافية مدى الحياة. النظام يعمل بالكامل على نسختك الحالية من Microsoft Excel أو عبر Google Sheets السحابي المجاني 100%. لا توجد أي اشتراكات خفية، تدفع مرة واحدة ويبقى النظام ملكك إلى الأبد.'
    },
    {
      q: 'كيف يعمل بوت تيليجرام وهل يحتاج استئجار سيرفر أو اشتراك في Make / n8n؟',
      a: 'البوت يعتمد على سكريبت برمجي مخصص (Google Apps Script) يعمل مباشرة ومجاناً على خوادم شركة Google السحابية. لا تحتاج لشراء سيرفر VPS ولا دفع اشتراك في Make أو n8n. شرحنا لك خطوة بخطوة في فيديو مدته 5 دقائق كيف تنسخ الكود وتلصقه ويعمل البوت فوراً.'
    },
    {
      q: 'ما عنديش خبرة كبيرة في الإكسل والكمبيوتر، هل نقدر نخدم بيه أنا والخدامين؟',
      a: 'نعم بكل تأكيد! صممنا النظام بفلسفة "Zero Friction": جميع المعادلات الرياضية، تصنيف باريتو، وألوان إشارات المرور مبرمجة ومقفلة في الخلفية. كل ما عليك فعله هو كتابة اسم السلعة وكمية الدخول أو الخروج، والنظام يقوم بكل الحسابات والتشخيص تلقائياً.'
    },
    {
      q: 'كيفاش نخلص وكيفاش نستلم الملف في الجزائر؟',
      a: 'نوفر طرق الدفع الأكثر أماناً وسهولة في الجزائر: تطبيق BaridiMob عبر رقم الـ RIP، أو حساب البريد الجاري CCP. بعد الدفع، ترسل لنا لقطة شاشة (Capture d\'écran) للوصل عبر واتساب، ونرسل لك فوراً رابط تحميل الملف، كود البوت، وفيديوهات الشرح في أقل من دقيقة.'
    },
    {
      q: 'هل بيانات بضاعتي وأسعار الشراء والأرباح آمنة ومحمية؟',
      a: 'أمان بياناتك 100%. النظام لا يعتمد على خوادم طرف ثالث، بل يعمل على جهاز الكمبيوتر الخاص بك أو داخل حسابك الشخصي في Google Drive المحمي بكلمة سرك والمصادقة الثنائية. نحن لا نملك أي وصول لبياناتك، بضاعتك، أو أرباحك على الإطلاق.'
    },
    {
      q: 'هل نقدر نتبع الديبو من التيليفون وأنا مسافر أو خارج المخزن؟',
      a: 'نعم! بمجرد وضع الملف في Google Sheets المجاني، يمكنك فتحه وتعديله من تطبيق الهاتف (Android / iPhone) من أي مكان في العالم. بالإضافة إلى أن بوت تيليجرام يرسل لك ملخص الديبو والسلعة الراقدة وحالات النفاذ مباشرة إلى هاتفك صباح كل يوم عند الساعة 08:00 AM.'
    },
    {
      q: 'شكون يخير الباقة الجاهزة (4,000 دج) وشكون يحتاج باقة الـ VIP (25,000 دج)؟',
      a: 'إذا كان عندك محل أو متجر إلكتروني صغير أو عدد أصنافك معقول ولديك وقت لإدخال السلع، فالباقة الجاهزة (4,000 دج) ممتازة وتكفيك تماماً. أما إذا كنت تاجر جملة (Grossiste) أو صاحب مستودع كبير به مئات الأصناف القديمة الفوضوية ولا تملك وقتاً، فباقة الـ VIP تريحك تماماً: نستلم منك كل شيء، ننظف البيانات، نضبط البوت، وندربك أنت وفريقك خلال 48 ساعة.'
    }
  ];

  return (
    <section id="faq" className="py-20 md:py-28 relative bg-[#071326] border-t border-slate-800">
      
      {/* Background Accent */}
      <div className="absolute bottom-10 right-1/4 w-[400px] h-[400px] bg-emerald-500/5 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-xs font-bold mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-emerald-400" />
            <span>إجابات واضحة وصريحة</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white leading-tight font-['Cairo'] mb-4">
            الأسئلة الشائعة حول نظام{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-200">
              ANALYSE DZ
            </span>
          </h2>

          <p className="text-sm sm:text-base text-slate-300">
            كل ما يدور في ذهنك قبل طلب النظام وبدء تحرير سيولة مخزنك.
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
                  className="w-full text-right p-4 sm:p-6 flex items-center justify-between gap-3 font-bold text-white text-xs sm:text-base font-['Cairo']"
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

        {/* Still have questions */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-slate-900/40 border border-slate-800">
          <p className="text-xs sm:text-sm text-slate-300 mb-3">
            عندك استفسار خاص بنوع نشاطك التجاري أو حجم مستودعك؟
          </p>
          <a
            href="https://wa.me/213676067652?text=%D8%B3%D9%84%D8%A7%D9%85%20ANALYSE%20DZ%D8%8C%20%D8%B9%D9%86%D8%AF%D9%8A%20%D8%A7%D8%B3%D8%AA%D9%81%D8%B3%D8%A7%D8%B1%20%D8%AD%D9%88%D9%84%20%D9%86%D8%B8%D8%A7%D9%85%20%D8%A7%D9%84%D9%85%D8%AE%D8%B2%D9%88%D9%86"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-emerald-400 hover:text-emerald-300 transition-colors"
          >
            <span>تحدث مباشرة مع مستشارنا التجاري عبر واتساب</span>
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          </a>
        </div>

      </div>
    </section>
  );
}

