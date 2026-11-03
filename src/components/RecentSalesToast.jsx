import React, { useState, useEffect } from 'react';
import { CheckCircle2, X, Sparkles } from 'lucide-react';

export default function RecentSalesToast() {
  const [visible, setVisible] = useState(false);
  const [currentNotificationIndex, setCurrentNotificationIndex] = useState(0);

  const notifications = [
    {
      location: 'العلمة، سطيف',
      type: 'باقة التثبيت الاحترافي VIP (25,000 دج)',
      title: 'مستودع تجارة جملة وأجهزة كهرومنزلية',
      time: 'منذ 11 دقيقة'
    },
    {
      location: 'بلفور، الحراش',
      type: 'الباقة المباشرة (7,900 دج)',
      title: 'محل بيع الهواتف وقطع الغيار',
      time: 'منذ 24 دقيقة'
    },
    {
      location: 'وهران، السانيا',
      type: 'الباقة المباشرة (7,900 دج)',
      title: 'متجر تجارة إلكترونية وشحن COD',
      time: 'منذ 36 دقيقة'
    },
    {
      location: 'الحميز، العاصمة',
      type: 'باقة التثبيت الاحترافي VIP (25,000 دج)',
      title: 'مؤسسة استيراد وتوزيع أدوات صناعية',
      time: 'منذ ساعة'
    }
  ];

  useEffect(() => {
    // Show toast after 4 seconds
    const initialTimer = setTimeout(() => {
      setVisible(true);
    }, 4000);

    // Cycle notifications every 12 seconds
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setCurrentNotificationIndex((prev) => (prev + 1) % notifications.length);
        setVisible(true);
      }, 800);
    }, 12000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, [notifications.length]);

  if (!visible) return null;

  const notif = notifications[currentNotificationIndex];

  return (
    <div className="hidden sm:block fixed bottom-24 right-5 z-40 max-w-sm">
      <div className="rounded-2xl bg-[#09182f]/95 border border-emerald-500/40 p-3.5 shadow-2xl backdrop-blur-md flex items-center justify-between gap-3 text-right">
        
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shrink-0">
            <CheckCircle2 className="w-5 h-5" />
          </div>

          <div>
            <div className="text-[11px] text-slate-400 flex items-center gap-1.5">
              <span>🇩🇿 طلب جديد من {notif.location}</span>
              <span className="text-[10px] text-emerald-400 font-mono">({notif.time})</span>
            </div>
            <div className="text-xs font-bold text-white font-['Cairo']">
              {notif.title}
            </div>
            <div className="text-[10px] text-emerald-400 font-semibold font-mono">
              {notif.type}
            </div>
          </div>
        </div>

        <button
          onClick={() => setVisible(false)}
          className="text-slate-500 hover:text-slate-300 p-1"
          aria-label="إغلاق التنبيه"
        >
          <X className="w-3.5 h-3.5" />
        </button>

      </div>
    </div>
  );
}
