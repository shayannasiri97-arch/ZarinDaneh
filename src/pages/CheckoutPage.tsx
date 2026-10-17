import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { formatPersianPrice, orderCartViaTelegram, toPersianDigits, TELEGRAM_USERNAME } from '../utils/persian';
import { CustomerOrder } from '../types';

interface CheckoutPageProps {
  onNavigate: (page: string, params?: Record<string, string>) => void;
}

export const CheckoutPage: React.FC<CheckoutPageProps> = ({ onNavigate }) => {
  const { cart, subtotal, discount, shippingFee, total, setLastOrder, clearCart } = useCart();

  const [name, setName] = useState('شایان نصیری');
  const [phone, setPhone] = useState('۰۹۱۲۳۴۵۶۷۸۹');
  const [province, setProvince] = useState('تهران');
  const [city, setCity] = useState('تهران');
  const [address, setAddress] = useState('خیابان ولیعصر، بالاتر از ظفر، کوچه گلستان، پلاک ۱۲، واحد ۴');
  const [postalCode, setPostalCode] = useState('۱۹۶۸۶۳۴۵۲۱');
  const [notes, setNotes] = useState('');
  const [shippingMethod, setShippingMethod] = useState('اکسپرس هوایی بیمه‌دار');
  const [paymentMethod, setPaymentMethod] = useState('online');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const orderId = 'ZR-' + Math.floor(10000 + Math.random() * 90000);
    const newOrder: CustomerOrder = {
      orderId,
      date: new Date().toLocaleDateString('fa-IR'),
      name,
      phone,
      province,
      city,
      address,
      postalCode,
      notes,
      shippingMethod,
      paymentMethod: paymentMethod === 'online' ? 'درگاه پرداخت شتاب' : 'کارت به کارت / تلگرام',
      items: [...cart],
      subtotal,
      discount,
      shippingFee,
      total,
    };

    setLastOrder(newOrder);
    clearCart();
    onNavigate('order-success');
  };

  const handleTelegramCheckout = () => {
    orderCartViaTelegram(cart, total, { name, phone, address });
  };

  return (
    <div className="w-full bg-[#fff8f5] min-h-screen">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        
        {/* Progress Indicator */}
        <div className="max-w-2xl mx-auto mb-10">
          <div className="flex items-center justify-between text-xs font-bold text-[#534e44]">
            <div className="flex items-center gap-2 text-[#295034]">
              <span className="w-6 h-6 rounded-full bg-[#295034] text-white flex items-center justify-center text-xs">
                ✓
              </span>
              <span>سبد خرید</span>
            </div>
            <div className="h-0.5 flex-1 bg-[#c89b3c] mx-4"></div>
            <div className="flex items-center gap-2 text-[#c89b3c]">
              <span className="w-6 h-6 rounded-full bg-[#c89b3c] text-[#2a1e05] flex items-center justify-center text-xs font-black">
                ۲
              </span>
              <span>اطلاعات ارسال و پرداخت</span>
            </div>
            <div className="h-0.5 flex-1 bg-gray-200 mx-4"></div>
            <div className="flex items-center gap-2 text-[#857f74]">
              <span className="w-6 h-6 rounded-full bg-gray-200 text-gray-500 flex items-center justify-center text-xs">
                ۳
              </span>
              <span>تکمیل و دریافت فاکتور</span>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Form Details (Cols 1-8) */}
            <div className="lg:col-span-8 space-y-6">
              
              {/* Shipping Details Card */}
              <div className="bg-white rounded-2xl border border-[#d7d0c3]/60 p-6 shadow-sm">
                <h3 className="text-base font-bold text-[#2a1e05] mb-4 flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#c89b3c]">local_shipping</span>
                  اطلاعات تحویل‌گیرنده و نشانی پستی
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div>
                    <label className="block font-semibold text-[#534e44] mb-1">
                      نام و نام خانوادگی تحویل‌گیرنده *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="مثال: شایان نصیری"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#f8f5ee] border border-[#d7d0c3] focus:outline-none focus:border-[#c89b3c]"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-[#534e44] mb-1">
                      شماره همراه (جهت دریافت پیامک رهگیری) *
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

                  <div>
                    <label className="block font-semibold text-[#534e44] mb-1">استان *</label>
                    <select
                      value={province}
                      onChange={(e) => setProvince(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#f8f5ee] border border-[#d7d0c3] focus:outline-none focus:border-[#c89b3c]"
                    >
                      <option value="تهران">تهران</option>
                      <option value="خراسان رضوی">خراسان رضوی (مشهد)</option>
                      <option value="اصفهان">اصفهان</option>
                      <option value="فارس">فارس (شیراز)</option>
                      <option value="کرمان">کرمان</option>
                      <option value="آذربایجان شرقی">آذربایجان شرقی (تبریز)</option>
                      <option value="گیلان">گیلان (رشت)</option>
                      <option value="سایر استان‌ها">سایر استان‌ها</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-semibold text-[#534e44] mb-1">شهر *</label>
                    <input
                      type="text"
                      required
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      placeholder="نام شهر"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#f8f5ee] border border-[#d7d0c3] focus:outline-none focus:border-[#c89b3c]"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block font-semibold text-[#534e44] mb-1">نشانی دقیق پستی *</label>
                    <textarea
                      required
                      rows={2}
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      placeholder="خیابان اصلی، کوچه، پلاک، زنگ و واحد"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#f8f5ee] border border-[#d7d0c3] focus:outline-none focus:border-[#c89b3c]"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-[#534e44] mb-1">کد پستی ۱۰ رقمی</label>
                    <input
                      type="text"
                      value={postalCode}
                      onChange={(e) => setPostalCode(e.target.value)}
                      placeholder="۱۹۶۸۶۳۴۵۲۱"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#f8f5ee] border border-[#d7d0c3] text-left focus:outline-none focus:border-[#c89b3c]"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-[#534e44] mb-1">یادداشت برای بسته‌بندی یا تحویل</label>
                    <input
                      type="text"
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="مثلاً: هدیه است، فاکتور قیمت درون بسته قرار نگیرد"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#f8f5ee] border border-[#d7d0c3] focus:outline-none focus:border-[#c89b3c]"
                    />
                  </div>
                </div>
              </div>

              {/* Shipping Method */}
              <div className="bg-white rounded-2xl border border-[#d7d0c3]/60 p-6 shadow-sm">
                <h3 className="text-base font-bold text-[#2a1e05] mb-4 flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#c89b3c]">flight_takeoff</span>
                  انتخاب شیوه ارسال
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <label
                    onClick={() => setShippingMethod('اکسپرس هوایی بیمه‌دار')}
                    className={`p-3.5 rounded-xl border cursor-pointer flex items-center justify-between transition-all ${
                      shippingMethod === 'اکسپرس هوایی بیمه‌دار'
                        ? 'border-[#c89b3c] bg-[#fbf2dc]/40 ring-1 ring-[#c89b3c]'
                        : 'border-[#d7d0c3] bg-[#f8f5ee]'
                    }`}
                  >
                    <div>
                      <span className="font-bold text-[#2a1e05] block">پست پیشتاز ویژه و هوایی</span>
                      <span className="text-gray-500 text-[11px]">تحویل ۱ الی ۲ روز کاری در سراسر کشور</span>
                    </div>
                    <span className="text-[#295034] font-bold">رایگان</span>
                  </label>

                  <label
                    onClick={() => setShippingMethod('تیپاکس اکسپرس')}
                    className={`p-3.5 rounded-xl border cursor-pointer flex items-center justify-between transition-all ${
                      shippingMethod === 'تیپاکس اکسپرس'
                        ? 'border-[#c89b3c] bg-[#fbf2dc]/40 ring-1 ring-[#c89b3c]'
                        : 'border-[#d7d0c3] bg-[#f8f5ee]'
                    }`}
                  >
                    <div>
                      <span className="font-bold text-[#2a1e05] block">تیپاکس سریع درب منزل</span>
                      <span className="text-gray-500 text-[11px]">تحویل حداکثر ۲۴ ساعته</span>
                    </div>
                    <span className="text-[#295034] font-bold">رایگان</span>
                  </label>
                </div>
              </div>

              {/* Payment Method */}
              <div className="bg-white rounded-2xl border border-[#d7d0c3]/60 p-6 shadow-sm">
                <h3 className="text-base font-bold text-[#2a1e05] mb-4 flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#c89b3c]">credit_card</span>
                  شیوه پرداخت
                </h3>
                <div className="space-y-3 text-xs">
                  <label
                    onClick={() => setPaymentMethod('online')}
                    className={`p-3.5 rounded-xl border cursor-pointer flex items-center justify-between transition-all ${
                      paymentMethod === 'online'
                        ? 'border-[#c89b3c] bg-[#fbf2dc]/40 ring-1 ring-[#c89b3c]'
                        : 'border-[#d7d0c3] bg-[#f8f5ee]'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-xl text-[#295034]">account_balance</span>
                      <div>
                        <span className="font-bold text-[#2a1e05] block">درگاه پرداخت الکترونیک شاپرک (شتاب)</span>
                        <span className="text-gray-500 text-[11px]">پرداخت امن آنلاین با کلیه کارت‌های عضو شبکه شتاب</span>
                      </div>
                    </div>
                    <span className="material-symbols-outlined text-[#c89b3c]">
                      {paymentMethod === 'online' ? 'radio_button_checked' : 'radio_button_unchecked'}
                    </span>
                  </label>

                  <label
                    onClick={() => setPaymentMethod('card')}
                    className={`p-3.5 rounded-xl border cursor-pointer flex items-center justify-between transition-all ${
                      paymentMethod === 'card'
                        ? 'border-[#c89b3c] bg-[#fbf2dc]/40 ring-1 ring-[#c89b3c]'
                        : 'border-[#d7d0c3] bg-[#f8f5ee]'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-xl text-[#7c5800]">send</span>
                      <div>
                        <span className="font-bold text-[#2a1e05] block">پرداخت کارت به کارت / هماهنگی با پشتیبانی</span>
                        <span className="text-gray-500 text-[11px]">ارسال فیش واریز به تلگرام یا تماس تلفنی</span>
                      </div>
                    </div>
                    <span className="material-symbols-outlined text-[#c89b3c]">
                      {paymentMethod === 'card' ? 'radio_button_checked' : 'radio_button_unchecked'}
                    </span>
                  </label>
                </div>
              </div>
            </div>

            {/* Sidebar Summary (Cols 9-12) */}
            <div className="lg:col-span-4 space-y-4">
              <div className="bg-white rounded-2xl border border-[#d7d0c3]/60 p-6 shadow-sm sticky top-28">
                <h3 className="text-base font-bold text-[#2a1e05] pb-4 border-b border-[#d7d0c3]/60">
                  اقلام سفارش ({toPersianDigits(cart.length)})
                </h3>

                <div className="divide-y divide-gray-100 max-h-60 overflow-y-auto my-2">
                  {cart.map((item) => (
                    <div key={item.id} className="py-2.5 flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2">
                        <img src={item.image} alt={item.name} className="w-10 h-10 rounded-lg object-cover" />
                        <div>
                          <span className="font-bold text-[#2a1e05] block truncate max-w-[150px]">
                            {item.name}
                          </span>
                          <span className="text-gray-500">{toPersianDigits(item.quantity)} عدد</span>
                        </div>
                      </div>
                      <span className="font-bold text-[#93171a]">
                        {formatPersianPrice(item.price * item.quantity)} تومان
                      </span>
                    </div>
                  ))}
                </div>

                <div className="pt-3 border-t border-gray-100 space-y-2 text-xs text-[#534e44]">
                  <div className="flex justify-between">
                    <span>جمع اقلام:</span>
                    <span className="font-bold text-[#2a1e05]">{formatPersianPrice(subtotal)} تومان</span>
                  </div>
                  {discount > 0 && (
                    <div className="flex justify-between text-[#295034]">
                      <span>تخفیف:</span>
                      <span className="font-bold">- {formatPersianPrice(discount)} تومان</span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span>هزینه ارسال:</span>
                    <span className="font-bold text-[#295034]">رایگان</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#d7d0c3]/60 flex items-center justify-between mb-6">
                  <span className="text-sm font-bold text-[#2a1e05]">مبلغ نهایی فاکتور:</span>
                  <span className="text-xl font-black text-[#93171a]">
                    {formatPersianPrice(total)} تومان
                  </span>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-4 rounded-xl bg-[#c89b3c] hover:bg-[#b38728] text-[#2a1e05] font-black text-sm flex items-center justify-center gap-2 transition-all shadow-md mb-2.5"
                >
                  <span className="material-symbols-outlined text-lg">check_circle</span>
                  <span>تکمیل سفارش و دریافت فاکتور</span>
                </button>

                <button
                  type="button"
                  onClick={handleTelegramCheckout}
                  className="w-full py-3 px-4 rounded-xl bg-[#2a1e05] hover:bg-[#3f2f0a] text-[#fbf2dc] font-bold text-xs flex items-center justify-center gap-2 transition-colors"
                >
                  <span className="material-symbols-outlined text-base text-[#c89b3c]">send</span>
                  <span>ثبت سفارش و ارسال آدرس در تلگرام</span>
                </button>
              </div>
            </div>
          </div>
        </form>
      </main>
    </div>
  );
};
