import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { SUPPORT_PHONE, TELEGRAM_USERNAME } from '../utils/persian';

interface ContactPageProps {
  onNavigate: (page: string, params?: Record<string, string>) => void;
}

export const ContactPage: React.FC<ContactPageProps> = () => {
  const { showToast } = useCart();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !message) {
      showToast('لطفاً همه فیلدهای ضروری را تکمیل فرمایید.');
      return;
    }
    setSubmitted(true);
    showToast('پیام شما با موفقیت ثبت شد. کارشناسان ما به زودی با شما تماس خواهند گرفت.');
    setName('');
    setPhone('');
    setSubject('');
    setMessage('');
  };

  return (
    <div className="w-full bg-[#fff8f5] min-h-screen">
      
      {/* Header Banner */}
      <div className="bg-[#f4efe6] border-b border-[#d7d0c3]/40 py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center space-y-2">
          <span className="text-xs font-bold text-[#c89b3c] block">پل‌های ارتباطی مستقیم</span>
          <h1 className="text-3xl sm:text-4xl font-black text-[#2a1e05]">
            تماس با ما و شعب زرین‌دانه
          </h1>
          <p className="text-xs sm:text-sm text-[#534e44] max-w-xl mx-auto">
            مشاوران ما مشتاقانه آماده پاسخگویی به پرسش‌های شما درباره خرید جزئی، صادرات و سفارش‌های سازمانی هستند.
          </p>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Branch Details & Channels (Cols 1-5) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Telegram Box */}
            <div className="bg-gradient-to-r from-[#2a1e05] to-[#3f2f0a] text-white p-6 rounded-3xl shadow-md space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-[#c89b3c] text-[#2a1e05] flex items-center justify-center">
                  <span className="material-symbols-outlined text-2xl">send</span>
                </div>
                <div>
                  <h3 className="font-bold text-base text-[#fbf2dc]">پشتیبانی ۲۴ ساعته در تلگرام</h3>
                  <p className="text-xs text-white/80">پاسخگویی سریع کمتر از ۱۵ دقیقه</p>
                </div>
              </div>
              <p className="text-xs text-[#d7d0c3] leading-relaxed">
                برای استعلام قیمت روز زعفران فله، خرید عمده سازمانی، یا پیگیری سفارش، مستقیماً به آیدی تلگرام پیام دهید:
              </p>
              <a
                href={`https://t.me/${TELEGRAM_USERNAME}`}
                target="_blank"
                rel="noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#c89b3c] hover:bg-[#b38728] text-[#2a1e05] font-black text-xs transition-colors shadow-sm"
              >
                <span className="material-symbols-outlined text-[16px]">send</span>
                ارتباط با کارشناس فروش (@{TELEGRAM_USERNAME})
              </a>
            </div>

            {/* Branches Card */}
            <div className="bg-white rounded-3xl border border-[#d7d0c3]/60 p-6 shadow-sm space-y-6">
              <h3 className="font-bold text-base text-[#2a1e05] flex items-center gap-2 border-b border-gray-100 pb-3">
                <span className="material-symbols-outlined text-[#c89b3c]">store</span>
                شعب رسمی زرین‌دانه
              </h3>

              <div className="space-y-4 text-xs text-[#534e44]">
                <div>
                  <h4 className="font-bold text-sm text-[#3e0508] mb-1">شعبه مرکزی (تهران)</h4>
                  <p className="flex items-center gap-1.5 leading-relaxed">
                    <span className="material-symbols-outlined text-sm text-[#c89b3c]">location_on</span>
                    خیابان ولیعصر، تقاطع زعفرانیه، پلاک ۲۸، برج زرین
                  </p>
                  <p className="flex items-center gap-1.5 mt-1 text-[#857f74]">
                    <span className="material-symbols-outlined text-sm text-[#c89b3c]">phone</span>
                    تلفن مستقیم: {SUPPORT_PHONE}
                  </p>
                </div>

                <div className="pt-3 border-t border-gray-100">
                  <h4 className="font-bold text-sm text-[#3e0508] mb-1">شعبه خراسان (مشهد مقدس)</h4>
                  <p className="flex items-center gap-1.5 leading-relaxed">
                    <span className="material-symbols-outlined text-sm text-[#c89b3c]">location_on</span>
                    میدان شهدا، خیابان خسروی نو، سرای سوغات، پلاک ۴۲
                  </p>
                  <p className="flex items-center gap-1.5 mt-1 text-[#857f74]">
                    <span className="material-symbols-outlined text-sm text-[#c89b3c]">phone</span>
                    تلفن شعبه مشهد: ۰۵۱-۳۲۲۲۴۴۵۵
                  </p>
                </div>

                <div className="pt-3 border-t border-gray-100">
                  <h4 className="font-bold text-sm text-[#3e0508] mb-1">ساعات کاری و پذیرایی</h4>
                  <p className="leading-relaxed">شنبه تا پنجشنبه: ۸:۳۰ صبح الی ۲۰:۳۰ شب یکسره</p>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Contact Form (Cols 6-12) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl border border-[#d7d0c3]/60 p-6 sm:p-8 shadow-sm">
              <h3 className="text-xl font-bold text-[#2a1e05] mb-2">ارسال پیام یا درخواست مشاوره</h3>
              <p className="text-xs text-[#534e44] mb-6">
                فرم زیر را تکمیل فرمایید تا کارشناسان فروش زرین‌دانه در اسرع وقت با شما تماس بگیرند.
              </p>

              {submitted && (
                <div className="p-4 mb-6 rounded-2xl bg-[#fbf2dc] border border-[#c89b3c]/40 text-[#295034] text-xs font-bold flex items-center gap-2">
                  <span className="material-symbols-outlined">check_circle</span>
                  پیام شما دریافت شد. سپاسگزاریم!
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-semibold text-[#534e44] mb-1">
                      نام و نام خانوادگی *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="مثال: علیرضا محمدی"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#f8f5ee] border border-[#d7d0c3] focus:outline-none focus:border-[#c89b3c]"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-[#534e44] mb-1">
                      شماره تماس همراه *
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="۰۹۱۲۳۴۵۶۷۸۹"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#f8f5ee] border border-[#d7d0c3] text-left focus:outline-none focus:border-[#c89b3c]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-semibold text-[#534e44] mb-1">موضوع پیام</label>
                  <input
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="خرید عمده سازمانی، مشاوره خرید زعفران صادراتی یا همکاری"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#f8f5ee] border border-[#d7d0c3] focus:outline-none focus:border-[#c89b3c]"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-[#534e44] mb-1">متن پیام یا پرسش *</label>
                  <textarea
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="پیام یا درخواست خود را به تفصیل بنویسید..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#f8f5ee] border border-[#d7d0c3] focus:outline-none focus:border-[#c89b3c]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl bg-[#3e0508] hover:bg-[#5b1a1a] text-white font-bold text-xs shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <span className="material-symbols-outlined text-base">send</span>
                  <span>ارسال پیام به واحد پشتیبانی</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
