import React from 'react';
import { TELEGRAM_USERNAME } from '../utils/persian';

interface AboutPageProps {
  onNavigate: (page: string, params?: Record<string, string>) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="w-full bg-[#fff8f5] min-h-screen">
      
      {/* Hero Banner */}
      <div className="relative bg-[#2a1e05] text-white py-20 px-4 sm:px-6 lg:px-8 text-center overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBkbFBTkr7NKZacmjU0QZegc7s516wyyTOSPwvnS0gnVpoVNTvOp4yaQOeql0Vbxx7mwCAFv-nnUmAKfg7rgLFgM03Qv1w1tbmjBU07JUz0OBIRJnTTzNmlcILfGrNs1c09NJKNyZPes4mDdXNs342XpeCsGI6AOv5N4S58a_G6g5GzTq9XWdcex7CLTqkIFuKuze0PgA_9AYLOk0aUkTMKXxcL-2upqXErgzxrV_8rfp-7OMPQfALV"
            alt="برداشت سحرگاهی زعفران"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto space-y-4">
          <span className="text-[#fdbf40] text-xs font-bold uppercase tracking-widest block">
            چهار دهه پاسداری از اصالت سوغات ایران
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-[#fbf2dc] tracking-tight leading-tight">
            داستان ما و مزارع اصیل زرین‌دانه
          </h1>
          <p className="text-xs sm:text-sm text-[#d7d0c3] max-w-xl mx-auto leading-relaxed">
            پیوند بی‌واسطه خاک حاصلخیز قائنات و باغات رفسنجان با ذائقه اصیل خانواده‌های ایرانی از سال ۱۳۵۸ تاکنون.
          </p>
        </div>
      </div>

      {/* Main Story Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        
        {/* Section 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="space-y-4">
            <span className="text-xs font-bold text-[#c89b3c] block">ریشه‌ها و اصالت</span>
            <h2 className="text-2xl font-bold text-[#2a1e05]">برداشت سحرگاهی، پیش از طلوع آفتاب</h2>
            <p className="text-xs sm:text-sm text-[#534e44] leading-relaxed">
              زعفران زرین‌دانه حاصل دسترنج کشاورزانی است که نسل در نسل، در سپیده‌دم پاییزی دشت‌های قائنات، پیش از آنکه پرتوهای خورشید عطر و اسانس گل‌های بنفش زعفران را بکاهند، گل‌ها را با دست می‌چینند و با رعایت دقیق‌ترین اصول بهداشتی خشک می‌کنند.
            </p>
            <p className="text-xs sm:text-sm text-[#534e44] leading-relaxed">
              ما باور داریم سوغات ناب ایرانی تنها زمانی ارزش اصیل خود را بازمی‌یابد که بدون واسطه‌های غیرضروری و با ضمانت عیار آزمایشگاهی در دسترس همگان قرار گیرد.
            </p>
          </div>
          <div className="rounded-3xl overflow-hidden shadow-xl aspect-4/3 border border-[#d7d0c3]">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCxOFePrYaHUFrj1xnS6wk2-Lzs_S03wVv0UmtDdHhnvfdXPWUqWdTLfG5xi4eUudPYRhqUxoYU3YNeyu9ZJyoSkgdlX1NluIyjga9JgvWOV5IqP71PY8c0IOFnaWlbOnt0FaoSm6DhcrmLc8o4DhKXGnnbXRYqPnimXrUoA2InM7dyjG7J5E-BegqXEFrn1IpZ7aaB8uVWbRco_wEQO5R7ywbKcwjN7Gen5QzfKHZO-2YkzVsRqiqV"
              alt="کلاله‌های زرین زعفران"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* 4 Pillars */}
        <div className="bg-white rounded-3xl p-8 border border-[#d7d0c3]/60 shadow-sm">
          <h3 className="text-xl font-bold text-[#2a1e05] text-center mb-8">
            چهار ستون ماندگاری زرین‌دانه
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div className="p-4 bg-[#f8f5ee] rounded-2xl">
              <span className="material-symbols-outlined text-3xl text-[#c89b3c] mb-2 material-symbols-filled">
                science
              </span>
              <h4 className="font-bold text-sm text-[#2a1e05] mb-1">کنترل آزمایشگاهی</h4>
              <p className="text-xs text-[#6e5d3b]">سنجش کروسین، پیکروکروسین و سافرانال در هر محموله</p>
            </div>

            <div className="p-4 bg-[#f8f5ee] rounded-2xl">
              <span className="material-symbols-outlined text-3xl text-[#295034] mb-2 material-symbols-filled">
                eco
              </span>
              <h4 className="font-bold text-sm text-[#2a1e05] mb-1">کشاورزی پایدار</h4>
              <p className="text-xs text-[#6e5d3b]">حمایت از کشاورزان بومی و حفظ منابع آب دشت قائنات</p>
            </div>

            <div className="p-4 bg-[#f8f5ee] rounded-2xl">
              <span className="material-symbols-outlined text-3xl text-[#93171a] mb-2 material-symbols-filled">
                verified
              </span>
              <h4 className="font-bold text-sm text-[#2a1e05] mb-1">اصالت تضمین‌شده</h4>
              <p className="text-xs text-[#6e5d3b]">ضمانت بی‌قید بازگشت وجه تا ۷ روز در صورت مغایرت</p>
            </div>

            <div className="p-4 bg-[#f8f5ee] rounded-2xl">
              <span className="material-symbols-outlined text-3xl text-[#7c5800] mb-2 material-symbols-filled">
                inventory_2
              </span>
              <h4 className="font-bold text-sm text-[#2a1e05] mb-1">بسته‌بندی عایق</h4>
              <p className="text-xs text-[#6e5d3b]">ظروف کریستالی و متالایز مقاوم در برابر نور و هوا</p>
            </div>
          </div>
        </div>

        {/* Section 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="rounded-3xl overflow-hidden shadow-xl aspect-4/3 border border-[#d7d0c3] order-2 md:order-1">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBxQ6bVb3w5IznkHlvKcqRl9QzZKH2w8VhzMN3ZNAG1vo1Uk81rNlpb8Qv6CJa6aVvf8WEtWrADwNgjtIgAT0b1hQC4C7KNAwDYcqPjDV3jZAngY3DDiJkchqQ4kYCMcUtJbkWydjHWSTvALaydhoDL2XwW9mUykhppG6mw5VBI8_jbe_5xqCSGFErRTjLC5ERGVMKVgCxtxjmbxsnIaK3_ETuoqW0jN_36NN0qlkI6DNmW2ecn-c4K"
              alt="پسته خندان رفسنجان"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="space-y-4 order-1 md:order-2">
            <span className="text-xs font-bold text-[#c89b3c] block">باغات کهن رفسنجان</span>
            <h2 className="text-2xl font-bold text-[#2a1e05]">پسته اکبری خندان، میراث کویر</h2>
            <p className="text-xs sm:text-sm text-[#534e44] leading-relaxed">
              باغات پسته رفسنجان با تاریخچه‌ای دیرینه، بهترین میوه‌های دانه‌درشت اکبری و کله‌قوچی را به ثمر می‌رسانند. پسته‌های زرین‌دانه به روش سنتی با نمک دریا و زعفران تفت داده شده و عاری از هرگونه رنگ و افزودنی غیرمجاز می‌باشند.
            </p>
            <div className="pt-2">
              <button
                onClick={() => onNavigate('products')}
                className="px-6 py-3 rounded-xl bg-[#c89b3c] hover:bg-[#b38728] text-[#2a1e05] font-bold text-xs shadow-md transition-all"
              >
                مشاهده محصولات فروشگاه
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
