import React from 'react';
import { SUPPORT_PHONE, TELEGRAM_USERNAME } from '../utils/persian';

interface FooterProps {
  onNavigate: (page: string, params?: Record<string, string>) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#211c15] text-[#f4efe6] pt-16 pb-8 border-t border-[#c89b3c]/20 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-[#3d2d23]">
          
          {/* Col 1: About Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#3e0508] border border-[#c89b3c] flex items-center justify-center text-[#fdbf40]">
                <span className="material-symbols-outlined text-xl">workspace_premium</span>
              </div>
              <div>
                <span className="font-bold text-xl text-white block">زرین‌دانه</span>
                <span className="text-xs text-[#c89b3c]">سوغات و خشکبار اصیل ایران</span>
              </div>
            </div>
            <p className="text-xs text-[#d7d0c3] leading-relaxed">
              از سال ۱۳۵۸ تاکنون، ما پیوند دهنده بی‌واسطه کشاورزان زحمتکش قائنات، رفسنجان و اصفهان با سفره‌های اصیل ایرانی و بازارهای صادراتی جهانی هستیم.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={`https://t.me/${TELEGRAM_USERNAME}`}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-[#352c1f] flex items-center justify-center text-[#c89b3c] hover:bg-[#c89b3c] hover:text-[#211c15] transition-all"
                aria-label="تلگرام زرین‌دانه"
              >
                <span className="material-symbols-outlined text-lg">send</span>
              </a>
              <a
                href={`tel:${SUPPORT_PHONE.replace(/[^0-9]/g, '')}`}
                className="w-9 h-9 rounded-full bg-[#352c1f] flex items-center justify-center text-[#c89b3c] hover:bg-[#c89b3c] hover:text-[#211c15] transition-all"
                aria-label="تماس تلفنی"
              >
                <span className="material-symbols-outlined text-lg">call</span>
              </a>
              <button
                onClick={() => onNavigate('contact')}
                className="w-9 h-9 rounded-full bg-[#352c1f] flex items-center justify-center text-[#c89b3c] hover:bg-[#c89b3c] hover:text-[#211c15] transition-all"
                aria-label="مسیریابی"
              >
                <span className="material-symbols-outlined text-lg">location_on</span>
              </button>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-white mb-4 border-r-2 border-[#c89b3c] pr-2">دسترسی سریع</h4>
            <ul className="space-y-2.5 text-xs text-[#d7d0c3]">
              <li>
                <button onClick={() => onNavigate('home')} className="hover:text-[#c89b3c] transition-colors">
                  صفحه نخست
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('products')} className="hover:text-[#c89b3c] transition-colors">
                  فروشگاه و محصولات
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-[#c89b3c] transition-colors">
                  داستان زرین‌دانه و مزارع
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('contact')} className="hover:text-[#c89b3c] transition-colors">
                  شعب و تماس با ما
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('cart')} className="hover:text-[#c89b3c] transition-colors">
                  مشاهده سبد خرید
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Categories */}
          <div>
            <h4 className="text-sm font-bold text-white mb-4 border-r-2 border-[#c89b3c] pr-2">دسته‌بندی‌های برگزیده</h4>
            <ul className="space-y-2.5 text-xs text-[#d7d0c3]">
              <li>
                <button onClick={() => onNavigate('products', { category: 'saffron' })} className="hover:text-[#c89b3c] transition-colors">
                  زعفران سوپر نگین و سرگل قائنات
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('products', { category: 'nuts' })} className="hover:text-[#c89b3c] transition-colors">
                  پسته اکبری و بادام مامایی
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('products', { category: 'sweets' })} className="hover:text-[#c89b3c] transition-colors">
                  گز انگبین و سوهان خودرنگ قم
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('products', { category: 'honey' })} className="hover:text-[#c89b3c] transition-colors">
                  عسل بکر و ارگانیک سبلان
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('products', { category: 'gift' })} className="hover:text-[#c89b3c] transition-colors">
                  پک‌های مدیریتی کادویی
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Order */}
          <div>
            <h4 className="text-sm font-bold text-white mb-4 border-r-2 border-[#c89b3c] pr-2">سفارش و پشتیبانی مستقیم</h4>
            <p className="text-xs text-[#d7d0c3] leading-relaxed mb-3">
              ثبت آنی سفارش با پشتیبانی اختصاصی کارشناسان در تلگرام:
            </p>
            <a
              href={`https://t.me/${TELEGRAM_USERNAME}`}
              target="_blank"
              rel="noreferrer"
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#c89b3c] hover:bg-[#b38728] text-[#2a1e05] font-bold text-xs transition-colors shadow-sm mb-4"
            >
              <span className="material-symbols-outlined text-[16px]">send</span>
              کانال و پشتیبانی @{TELEGRAM_USERNAME}
            </a>
            <div className="text-[11px] text-[#a89b8d] space-y-1.5">
              <p className="flex items-center gap-1">
                <span className="material-symbols-outlined text-sm text-[#c89b3c]">location_on</span>
                تهران: خیابان ولیعصر، تقاطع زعفرانیه، پلاک ۲۸
              </p>
              <p className="flex items-center gap-1">
                <span className="material-symbols-outlined text-sm text-[#c89b3c]">phone</span>
                تلفن پشتیبانی: {SUPPORT_PHONE}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#857f74] gap-4">
          <div>© ۲۰۲۶ زرین‌دانه. تمامی حقوق برای فروشگاه سوغات اصیل ایران محفوظ است.</div>
          <div className="flex items-center gap-4">
            <button onClick={() => onNavigate('about')} className="hover:text-[#c89b3c]">
              قوانین و ضمانت کیفیت
            </button>
            <span>•</span>
            <button onClick={() => onNavigate('contact')} className="hover:text-[#c89b3c]">
              حریم خصوصی و شعب
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
