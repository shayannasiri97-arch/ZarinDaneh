import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { formatPersianPrice, orderCartViaTelegram, toPersianDigits, TELEGRAM_USERNAME } from '../utils/persian';

interface CartPageProps {
  onNavigate: (page: string, params?: Record<string, string>) => void;
}

export const CartPage: React.FC<CartPageProps> = ({ onNavigate }) => {
  const {
    cart,
    updateQuantity,
    removeFromCart,
    subtotal,
    discount,
    shippingFee,
    total,
    couponCode,
    applyCoupon,
  } = useCart();

  const [inputCoupon, setInputCoupon] = useState('');
  const [couponFeedback, setCouponFeedback] = useState<{ success: boolean; message: string } | null>(null);

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputCoupon.trim()) return;
    const res = applyCoupon(inputCoupon);
    setCouponFeedback(res);
  };

  return (
    <div className="w-full bg-[#fff8f5] min-h-screen">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-xs text-[#6e5d3b] mb-6">
          <button onClick={() => onNavigate('home')} className="hover:text-[#c89b3c]">
            صفحه اصلی
          </button>
          <span className="material-symbols-outlined text-xs">chevron_left</span>
          <span className="text-[#211c15] font-semibold">سبد خرید شما</span>
        </div>

        {/* Page Title */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 border-b border-[#d7d0c3]/60 mb-8 gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-black text-[#2a1e05]">سبد خرید</h1>
            <p className="text-xs text-[#534e44] mt-1">بررسی نهایی اقلام و انتخاب روش تسویه حساب</p>
          </div>
          <div className="flex items-center gap-2 text-xs bg-white px-3 py-2 rounded-xl border border-[#d7d0c3]">
            <span className="material-symbols-outlined text-[#295034] text-base">verified_user</span>
            <span>تسویه حساب امن و گارانتی بازگشت وجه</span>
          </div>
        </div>

        {cart.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Items Table (Cols 1-8) */}
            <div className="lg:col-span-8 space-y-4">
              <div className="bg-white rounded-2xl border border-[#d7d0c3]/60 shadow-sm overflow-hidden">
                <div className="p-4 bg-[#f4efe6] border-b border-[#d7d0c3]/40 flex items-center justify-between text-xs font-bold text-[#534e44]">
                  <span>اقلام انتخابی ({toPersianDigits(cart.length)})</span>
                  <span>تعداد و قیمت کل</span>
                </div>

                <div className="divide-y divide-gray-100 p-2">
                  {cart.map((item) => {
                    const itemTotal = item.price * item.quantity;
                    return (
                      <div
                        key={item.id}
                        className="flex flex-col sm:flex-row items-center justify-between p-4 gap-4 hover:bg-[#fbf2dc]/20 transition-colors"
                      >
                        {/* Item Details */}
                        <div className="flex items-center gap-4 w-full sm:w-auto">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-16 h-16 rounded-xl object-cover border border-[#d7d0c3] shrink-0"
                          />
                          <div>
                            <h4
                              onClick={() => onNavigate('product-detail', { id: item.productId })}
                              className="font-bold text-xs sm:text-sm text-[#2a1e05] hover:text-[#c89b3c] transition-colors cursor-pointer"
                            >
                              {item.name}
                            </h4>
                            {item.selectedVariant && (
                              <span className="text-[11px] text-[#7c5800] block mt-0.5">
                                {item.selectedVariant}
                              </span>
                            )}
                            <span className="text-xs text-[#93171a] font-bold mt-1 block">
                              {formatPersianPrice(item.price)} تومان
                            </span>
                          </div>
                        </div>

                        {/* Controls & Total */}
                        <div className="flex items-center justify-between sm:justify-end gap-6 w-full sm:w-auto">
                          {/* Qty controls */}
                          <div className="flex items-center border border-[#d7d0c3] rounded-xl bg-white overflow-hidden shadow-xs">
                            <button
                              onClick={() => updateQuantity(item.id, -1)}
                              className="w-8 h-8 flex items-center justify-center text-[#2a1e05] hover:bg-gray-100 font-bold"
                            >
                              -
                            </button>
                            <span className="w-8 text-center text-xs font-bold text-[#2a1e05]">
                              {toPersianDigits(item.quantity)}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.id, 1)}
                              className="w-8 h-8 flex items-center justify-center text-[#2a1e05] hover:bg-gray-100 font-bold"
                            >
                              +
                            </button>
                          </div>

                          {/* Item Total */}
                          <span className="font-black text-sm text-[#2a1e05] min-w-[95px] text-left">
                            {formatPersianPrice(itemTotal)}{' '}
                            <span className="text-[10px] font-normal text-gray-500">تومان</span>
                          </span>

                          {/* Remove button */}
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="text-gray-400 hover:text-[#93171a] transition-colors p-1"
                            title="حذف کالا"
                          >
                            <span className="material-symbols-outlined text-lg">delete</span>
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Telegram Ordering Callout Box */}
              <div className="bg-gradient-to-r from-[#2a1e05] to-[#3f2f0a] text-white p-5 rounded-2xl shadow-md flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#c89b3c] text-[#2a1e05] flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-2xl">send</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-[#fbf2dc]">ترجیح می‌دهید در تلگرام سفارش دهید؟</h4>
                    <p className="text-xs text-white/80 mt-0.5">اقلام سبد خرید مستقیماً با یک کلیک به کارشناس ارسال می‌شود.</p>
                  </div>
                </div>
                <button
                  onClick={() => orderCartViaTelegram(cart, total)}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-[#c89b3c] hover:bg-[#b38728] text-[#2a1e05] font-black text-xs transition-colors shrink-0 flex items-center justify-center gap-1.5 shadow-sm"
                >
                  <span>ارسال این سبد به تلگرام</span>
                  <span className="material-symbols-outlined text-sm">arrow_back</span>
                </button>
              </div>
            </div>

            {/* Order Summary Sidebar (Cols 9-12) */}
            <div className="lg:col-span-4 space-y-4">
              <div className="bg-white rounded-2xl border border-[#d7d0c3]/60 p-6 shadow-sm sticky top-28">
                <h3 className="text-base font-bold text-[#2a1e05] pb-4 border-b border-[#d7d0c3]/60">
                  خلاصه سفارش
                </h3>

                {/* Coupon Code Input */}
                <div className="mt-4 pb-4 border-b border-gray-100">
                  <label className="block text-xs font-semibold text-[#534e44] mb-2">
                    کد تخفیف یا کارت هدیه:
                  </label>
                  <form onSubmit={handleApplyCoupon} className="flex gap-2">
                    <input
                      type="text"
                      value={inputCoupon}
                      onChange={(e) => setInputCoupon(e.target.value)}
                      placeholder="مثال: ZARRIN10"
                      className="flex-1 px-3 py-2 text-xs rounded-xl bg-[#f8f5ee] border border-[#d7d0c3] uppercase tracking-wider focus:outline-none focus:border-[#c89b3c]"
                    />
                    <button
                      type="submit"
                      className="px-3.5 py-2 rounded-xl bg-[#2a1e05] text-[#fbf2dc] text-xs font-bold hover:bg-[#3f2f0a] transition-colors"
                    >
                      اعمال
                    </button>
                  </form>
                  {couponFeedback && (
                    <div
                      className={`text-[11px] mt-1.5 font-medium ${
                        couponFeedback.success ? 'text-[#295034]' : 'text-red-600'
                      }`}
                    >
                      {couponFeedback.message}
                    </div>
                  )}
                  {couponCode && !couponFeedback && (
                    <div className="text-[11px] text-[#295034] mt-1.5 font-medium">
                      کد {couponCode} اعمال شده است.
                    </div>
                  )}
                </div>

                {/* Pricing Breakdown */}
                <div className="space-y-3 py-4 text-xs text-[#534e44]">
                  <div className="flex justify-between">
                    <span>جمع اقلام:</span>
                    <span className="font-bold text-[#2a1e05]">{formatPersianPrice(subtotal)} تومان</span>
                  </div>
                  {discount > 0 && (
                    <div className="flex justify-between text-[#295034]">
                      <span>تخفیف ۱۰٪:</span>
                      <span className="font-bold">- {formatPersianPrice(discount)} تومان</span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span>هزینه بسته‌بندی و ارسال:</span>
                    <span className="font-bold text-[#295034]">
                      {shippingFee === 0 ? 'رایگان (طرح ویژه)' : `${formatPersianPrice(shippingFee)} تومان`}
                    </span>
                  </div>
                </div>

                {/* Total Due */}
                <div className="pt-4 border-t border-[#d7d0c3]/60 flex items-center justify-between mb-6">
                  <span className="text-sm font-bold text-[#2a1e05]">مبلغ قابل پرداخت:</span>
                  <span className="text-xl font-black text-[#93171a]">
                    {formatPersianPrice(total)} <span className="text-xs font-normal">تومان</span>
                  </span>
                </div>

                {/* Checkout CTAs */}
                <div className="space-y-2.5">
                  <button
                    onClick={() => onNavigate('checkout')}
                    className="w-full py-3.5 px-4 rounded-xl bg-[#c89b3c] hover:bg-[#b38728] text-[#2a1e05] font-black text-sm flex items-center justify-center gap-2 transition-all shadow-md"
                  >
                    <span className="material-symbols-outlined text-lg">payment</span>
                    <span>تکمیل خرید و اطلاعات ارسال</span>
                  </button>

                  <a
                    href={`https://t.me/${TELEGRAM_USERNAME}`}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-3 px-4 rounded-xl bg-[#2a1e05] hover:bg-[#3f2f0a] text-[#fbf2dc] font-bold text-xs flex items-center justify-center gap-2 transition-colors text-center"
                  >
                    <span className="material-symbols-outlined text-base text-[#c89b3c]">send</span>
                    <span>ثبت سفارش مستقیم در تلگرام (@{TELEGRAM_USERNAME})</span>
                  </a>
                </div>

                <p className="text-[10px] text-center text-[#857f74] mt-4">
                  ارسال سریع به سراسر ایران با تیپاکس و پست ویژه هوایی
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-3xl border border-[#d7d0c3] p-8 max-w-xl mx-auto">
            <span className="material-symbols-outlined text-6xl text-[#857f74]">remove_shopping_cart</span>
            <h3 className="mt-4 text-lg font-bold text-[#2a1e05]">سبد خرید شما خالی است</h3>
            <p className="text-xs text-[#6e5d3b] mt-1.5">
              محصولات دستچین زعفران و خشکبار اصیل زرین‌دانه را در فروشگاه مشاهده کنید.
            </p>
            <button
              onClick={() => onNavigate('products')}
              className="mt-6 px-6 py-3 rounded-xl bg-[#c89b3c] text-[#2a1e05] font-black text-xs hover:bg-[#b38728] transition-colors shadow-sm"
            >
              مشاهده فروشگاه و محصولات
            </button>
          </div>
        )}
      </main>
    </div>
  );
};
