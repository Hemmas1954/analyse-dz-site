import React from 'react';
import { ShieldCheck, CheckCircle2, CreditCard, Send, Lock, Sparkles, Building } from 'lucide-react';

export default function GuaranteeAndPayment() {
  return (
    <section className="py-16 md:py-24 relative bg-[#06101f] border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Risk Reversal / 14-Day Guarantee Card */}
        <div className="rounded-2xl sm:rounded-3xl bg-gradient-to-br from-slate-900 via-[#0a1e36] to-slate-900 border-2 border-emerald-500/40 p-5 sm:p-10 mb-12 sm:mb-16 shadow-2xl relative overflow-hidden">
          
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10 text-center md:text-right">
            
            {/* Guarantee Shield Emblem */}
            <div className="shrink-0 relative">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-700 flex items-center justify-center text-slate-950 shadow-2xl shadow-emerald-500/30 border-2 border-emerald-300">
                <ShieldCheck className="w-14 h-14 sm:w-16 sm:h-16 stroke-[1.8]" />
              </div>
              <div className="absolute -bottom-2 -right-2 px-2.5 py-0.5 rounded-full bg-slate-950 text-emerald-400 font-mono font-bold text-[11px] border border-emerald-500/50">
                100% GARANTIE
              </div>
            </div>

            {/* Guarantee Text */}
            <div className="space-y-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-300 text-xs font-bold border border-emerald-500/30">
                <Sparkles className="w-3.5 h-3.5" />
                <span>ضمان استرجاع الأموال لمدة 14 يوماً</span>
              </div>
              <h3 className="text-xl sm:text-3xl font-black text-white font-['Cairo']">
                جرّب النظام في مخزنك بدون أدنى مخاطرة مالية!
              </h3>
              <p className="text-xs sm:text-base text-slate-300 leading-relaxed max-w-3xl">
                نحن واثقون بنسبة 100% من فاعلية هذا النظام في كشف النزيف المالي لمستودعك. إذا قمت بتجربة نظام{' '}
                <strong className="text-emerald-400">ANALYSE DZ</strong> ولم يساعدك في فرز أصناف مخزونك، واكتشاف السلع الراقدة، أو لم تجده عملياً.. تواصل معنا خلال 14 يوماً وسنعيد لك أموالك كاملة عبر بريدي موب دون أي إحراج.
              </p>
            </div>

          </div>
        </div>

        {/* Algerian Payment Methods & Security Trust Bar */}
        <div className="rounded-2xl bg-slate-900/60 border border-slate-800 p-4 sm:p-8 backdrop-blur-md">
          <div className="text-center mb-6">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider font-mono">
              طرق الدفع والتسليم المعتمدة رسمياً في الجزائر
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            
            {/* BaridiMob */}
            <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800/80 flex items-center gap-3.5 hover:border-emerald-500/40 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-[#00875a]/20 border border-[#00875a]/50 flex items-center justify-center font-black text-emerald-400 font-sans text-sm">
                BM
              </div>
              <div>
                <div className="font-bold text-sm text-white font-['Cairo']">تطبيق BaridiMob</div>
                <div className="text-[11px] text-slate-400">تحويل فوري وآمن عبر رقم الـ RIP</div>
                <span className="text-[10px] text-emerald-400 font-semibold">✓ استلام الملف فورياً بعد الإرسال</span>
              </div>
            </div>

            {/* CCP / Algérie Poste */}
            <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800/80 flex items-center gap-3.5 hover:border-amber-500/40 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-amber-500/20 border border-amber-500/50 flex items-center justify-center font-black text-amber-300 font-sans text-sm">
                CCP
              </div>
              <div>
                <div className="font-bold text-sm text-white font-['Cairo']">حساب البريد الجاري CCP</div>
                <div className="text-[11px] text-slate-400">عبر أي مكتب بريد في الـ 58 ولاية</div>
                <span className="text-[10px] text-amber-300 font-semibold">✓ متوفر لجميع التجار والمؤسسات</span>
              </div>
            </div>

            {/* VIP COD / Direct Onboarding */}
            <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800/80 flex items-center gap-3.5 hover:border-cyan-500/40 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/20 border border-cyan-500/50 flex items-center justify-center font-black text-cyan-300 font-sans text-sm">
                VIP
              </div>
              <div>
                <div className="font-bold text-sm text-white font-['Cairo']">دفع المؤسسات وحساب الشركات</div>
                <div className="text-[11px] text-slate-400">فاتورة رسمية + فحص قبل الإطلاق لباقة VIP</div>
                <span className="text-[10px] text-cyan-300 font-semibold">✓ تحويل بنكي / تسليم مباشر</span>
              </div>
            </div>

          </div>

          {/* Privacy & Security Guarantee */}
          <div className="mt-6 pt-5 border-t border-slate-800/80 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
            <div className="flex items-center gap-1.5">
              <Lock className="w-3.5 h-3.5 text-emerald-400" />
              <span>بياناتك ملك لك 100% ولا تمر على أي خوادم خارجية</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Send className="w-3.5 h-3.5 text-emerald-400" />
              <span>توصيل رقمي فوري على الواتساب والإيميل في ثوانٍ</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

