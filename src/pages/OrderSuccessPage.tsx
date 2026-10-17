import React from 'react';
import { useCart } from '../context/CartContext';
import { formatPersianPrice, toPersianDigits, TELEGRAM_USERNAME } from '../utils/persian';

interface OrderSuccessPageProps {
  onNavigate: (page: string, params?: Record<string, string>) => void;
}

export const OrderSuccessPage: React.FC<OrderSuccessPageProps> = ({ onNavigate }) => {
  const { lastOrder, showToast } = useCart();

  const order = lastOrder || {
    orderId: 'ZR-84920',
    date: new Date().toLocaleDateString('fa-IR'),
    name: 'شایان نصیری',
    phone: '۰۹۱۲۳۴۵۶۷۸۹',
    province: 'تهران',
    city: 'تهران',
    address: 'خیابان ولیعصر، بالاتر از ظفر، کوچه گلستان، پلاک ۱۲، واحد ۴',
    shippingMethod: 'اکسپرس هوایی بیمه‌دار',
    paymentMethod: 'درگاه پرداخت شتاب',
    items: [],
    subtotal: 725000,
    discount: 0,
    shippingFee: 0,
    total: 725000,
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(order.orderId);
    showToast(`کد پیگیری ${order.orderId} با موفقیت در حافظه کپی شد.`);
  };

  return (
    <div className="w-full bg-[#fff8f5] min-h-screen">
      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-3xl border border-[#d7d0c3]/60 p-6 sm:p-10 shadow-lg text-center relative overflow-hidden">
          
          {/* Top banner ribbon */}
          <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-[#c89b3c] via-[#93171a] to-[#295034]"></div>

          {/* Success Icon */}
          <div className="w-20 h-20 rounded-full bg-[#fbf2dc] border-4 border-[#c89b3c] flex items-center justify-center mx-auto text-[#2a1e05] mb-5 shadow-sm">
            <span className="material-symbols-outlined text-4xl text-[#295034] material-symbols-filled">
              check_circle
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-black text-[#2a1e05]">
            سفارش شما با موفقیت ثبت گردید!
          </h1>
          <p className="text-xs sm:text-sm text-[#534e44] mt-2 max-w-lg mx-auto leading-relaxed">
            از حسن اعتماد شما به محصولات اصیل زرین‌دانه سپاسگزاریم. سفارش شما جهت بسته‌بندی در محفظه‌های عایق به واحد انبار ارسال شد.
          </p>

          {/* Tracking Code Box */}
          <div className="my-6 p-4 rounded-2xl bg-[#f4efe6] border border-[#d7d0c3] inline-block max-w-md w-full">
            <span className="text-xs text-[#857f74] block mb-1">کد پیگیری اختصاصی فاکتور:</span>
            <div className="flex items-center justify-center gap-2">
              <span className="text-2xl font-black text-[#2a1e05] tracking-widest font-mono">
                {order.orderId}
              </span>
              <button
                onClick={handleCopyCode}
                className="p-1 text-gray-500 hover:text-[#c89b3c] transition-colors"
                title="کپی کد رهگیری"
              >
                <span className="material-symbols-outlined text-lg">content_copy</span>
              </button>
            </div>
            <span className="text-[11px] text-[#295034] block mt-1 font-semibold">
              پیامک تایید به شماره همراه شما ارسال شد
            </span>
          </div>

          {/* Order Details Summary Table */}
          <div className="text-right text-xs border border-[#d7d0c3]/60 rounded-2xl p-5 mb-8 bg-[#fcf9f5]">
            <h4 className="font-bold text-sm text-[#2a1e05] mb-3 border-b border-[#d7d0c3]/40 pb-2">
              مشخصات فاکتور صادره:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[#534e44]">
              <div>
                <span className="text-[#857f74]">تحویل‌گیرنده:</span>{' '}
                <span className="font-bold text-[#2a1e05]">{order.name}</span>
              </div>
              <div>
                <span className="text-[#857f74]">شماره تماس:</span>{' '}
                <span className="font-bold text-[#2a1e05]">{toPersianDigits(order.phone)}</span>
              </div>
              <div>
                <span className="text-[#857f74]">تاریخ ثبت:</span>{' '}
                <span className="font-bold text-[#2a1e05]">{order.date}</span>
              </div>
              <div>
                <span className="text-[#857f74]">روش ارسال:</span>{' '}
                <span className="font-bold text-[#295034]">{order.shippingMethod}</span>
              </div>
              <div>
                <span className="text-[#857f74]">مبلغ کل پرداختی:</span>{' '}
                <span className="font-black text-[#93171a]">{formatPersianPrice(order.total)} تومان</span>
              </div>
              <div>
                <span className="text-[#857f74]">روش پرداخت:</span>{' '}
                <span className="font-bold text-[#2a1e05]">{order.paymentMethod}</span>
              </div>
              <div className="sm:col-span-2">
                <span className="text-[#857f74]">نشانی تحویل:</span>{' '}
                <span className="font-medium text-[#2a1e05]">{order.address}</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={`https://t.me/${TELEGRAM_USERNAME}?text=${encodeURIComponent(
                `سلام، پیگیری سفارش کد ${order.orderId} به نام ${order.name}`
              )}`}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#2a1e05] hover:bg-[#3f2f0a] text-[#fbf2dc] font-black text-xs flex items-center justify-center gap-2 shadow-sm transition-all"
            >
              <span className="material-symbols-outlined text-base text-[#c89b3c]">send</span>
              <span>هماهنگی و ارسال فیش در تلگرام</span>
            </a>

            <button
              onClick={() => window.print()}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white hover:bg-gray-50 text-[#2a1e05] font-bold text-xs flex items-center justify-center gap-2 border border-[#d7d0c3] transition-all"
            >
              <span className="material-symbols-outlined text-base">print</span>
              <span>چاپ یا ذخیره فاکتور</span>
            </button>

            <button
              onClick={() => onNavigate('products')}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#c89b3c] hover:bg-[#b38728] text-[#2a1e05] font-black text-xs flex items-center justify-center gap-2 shadow-sm transition-all"
            >
              <span className="material-symbols-outlined text-base">shopping_basket</span>
              <span>مشاهده سایر محصولات</span>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};
