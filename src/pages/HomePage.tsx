import React from 'react';
import { PRODUCTS } from '../data/products';
import { useCart } from '../context/CartContext';
import { formatPersianPrice, orderViaTelegram } from '../utils/persian';
import { Product } from '../types';

interface HomePageProps {
  onNavigate: (page: string, params?: Record<string, string>) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const { addToCart, wishlist, toggleWishlist } = useCart();

  const heroProduct = PRODUCTS[0];
  const bestsellers = PRODUCTS.filter((p) => p.bestseller || p.featured).slice(0, 4);

  const categories = [
    {
      id: 'saffron',
      title: 'زعفران قائنات',
      tagline: 'طلای سرخ',
      description: 'زعفران نگین، سوپر نگین و سرگل قائنات ممتاز با عیار بالا',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBkbFBTkr7NKZacmjU0QZegc7s516wyyTOSPwvnS0gnVpoVNTvOp4yaQOeql0Vbxx7mwCAFv-nnUmAKfg7rgLFgM03Qv1w1tbmjBU07JUz0OBIRJnTTzNmlcILfGrNs1c09NJKNyZPes4mDdXNs342XpeCsGI6AOv5N4S58a_G6g5GzTq9XWdcex7CLTqkIFuKuze0PgA_9AYLOk0aUkTMKXxcL-2upqXErgzxrV_8rfp-7OMPQfALV',
    },
    {
      id: 'nuts',
      title: 'خشکبار و آجیل',
      tagline: 'دستچین باغات',
      description: 'پسته اکبری رفسنجان، مغز گردوی تویسرکان، بادام مامایی',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCRCwUdjqP6dCV-Hou2AqKEa8aOm9GD8JPZp3pnLT5D4uqt2QWSVKkiJtpifU66ZBqgBWKkNmTYQJRP-10EBtApcGgmUtclJDno-KVTSlmOr9fGpLR6eujmksmClbpVcJvi_8C9CvP0T_T_lgbloRKul1Wgin3zySJlIGSoT-RiZQLbIZo8rwfigH3mnbZEPB4T3TmbhJMZcupysasQu5ERXyyzVrnrW8-gM_1ulkZeHJv9YoAVnZiV',
    },
    {
      id: 'sweets',
      title: 'شیرینی سنتی',
      tagline: 'اصالت کهن',
      description: 'گز انگبین اعلای اصفهان، سوهان کره‌ای اعلای قم و نبات',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCiYQcQg9A_SohPZ7sxqDdQKR7hRv1yjTvWTKGQMsGPB0kQUuTFKNFEPbk2cFQ473asR_66xzYknlTVPWAt_LgFJERJPXY1-2ISEOlyglsQLR2s7XR80oFpqzGfG2LmBsa4AYFk4RpBNJoRe-8YaGwK0YhHI5qrDv5FZKR_xPLmgNKW-tyJ5Q9WBzpYbN2nqNeb51kE9L0g82X__6apqU_EirqK2YCYoTDL43UGO8_4249nVsDJX_Fk',
    },
    {
      id: 'tea',
      title: 'چای و دمنوش',
      tagline: 'عطر شمال',
      description: 'چای لاهیجان سرگل بهاره، دمنوش‌های ارگانیک کوهستان',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA71cQOSXJmMIeBaD0IkuG-LJ9uHiC0LpXIyN5cyFDhX_aNbBUdZirHRuEfdWrtRc2wDb9b_eG7ivEyngvohgmLWqwyqYdwRdeoyGCkH3yNLIOeGMEtWDqXgsGJ4DqN7Qb7raxWUxhEIkTEtuZR7jO5SK_8GsThWAb0MbJFvpFh1PvcclSVkB9MHgJnN9O9ONNIaEv1-k6ZLiLt54vQ9cbm2TmKKSz9bD5IFK-VeWM8tIkccuVdRVNh',
    },
    {
      id: 'honey',
      title: 'عسل و شیره',
      tagline: 'شهد کوهسار',
      description: 'عسل خالص کوهستان سبلان با ساکارز زیر ۲ درصد',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCCWUUHSXLYZkJ5sPrm7QpdWHgJi0X60rPtft6oAgJr2KfBMYXvNeKrGJTR44DKc3o77hXsTl2vA9w0ozgiHwwtLh3UHkuU5fSDAOYr6193y8eBfvnK5cXavrpXzMx0Zjmo4qCgVxOYvu2b62r2lV9OeoKJRYd96cYOsjCHZ5P_YoQVmHPzJg1L3iqwFa8Y1PuvvYlqQ-abjn4F57yqEKS4Dlc2AhajvpFhRSkpacsIEw88wTZljO2z',
    },
    {
      id: 'gift',
      title: 'پک هدیه فاخر',
      tagline: 'پیشکش نفیس',
      description: 'جعبه‌های چوب و مخمل خاتم‌کاری ویژه هدایای سازمانی',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAO3u_voSCM5ujcpwWsoIWxb6BM-JxUSQj-kVBYXQshOrHKwNkOZUol_eqBnE537a_1VFXhDT8dehT7oceBvR9rbqan1RwHMHaRorIsoPsbfqlPJ8696qF1MMbhdJDccSrIdpvHMD4WTtlHDg0dbCm3sO8x4EW_hznig21cofmR_e_tIkDEZlVCk9ZDWHsD-hA17BAPNIUpMvfgI8wQ0ZAtO3bkMJ-vn8vNzJdVwH7FUrM4LTSWfJK8',
    },
  ];

  return (
    <div className="w-full bg-[#fff8f5]">
      
      {/* 1. Hero Section */}
      <section className="w-full max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Right Column: Editorial & Conversion Copy */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#fdbf40]/20 text-[#7c5800]">
              <span className="material-symbols-outlined text-[18px]">verified</span>
              <span className="text-xs font-bold">«تازه از مزارع دشت‌های قائنات و رفسنجان»</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-[#3e0508] tracking-tight leading-[1.25]">
              طعم اصیل زعفران و خشکبار دستچین ایرانی
            </h1>

            <p className="text-base sm:text-lg text-[#544341] max-w-xl leading-relaxed">
              محصولات درجه یک با برگه آزمون آزمایشگاهی خلوص، بسته‌بندی بهداشتی عایق و ارسال فوری به سراسر کشور با ضمانت اصالت زرین‌دانه.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => onNavigate('products')}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-[#3e0508] text-white font-bold text-sm transition-all duration-300 shadow-md hover:bg-[#5b1a1a] hover:shadow-xl"
              >
                <span>مشاهده همه محصولات</span>
                <span className="material-symbols-outlined text-[20px]">storefront</span>
              </button>

              <button
                onClick={() => onNavigate('products', { category: 'saffron' })}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-[#fee3d4] text-[#3e0508] font-bold text-sm shadow-sm hover:bg-[#f8ddcf] transition-all"
              >
                <span>زعفران قائنات</span>
                <span className="material-symbols-outlined text-[20px] text-[#7c5800]">trending_up</span>
              </button>
            </div>

            {/* Trust Micro-Stats */}
            <div className="flex flex-wrap items-center gap-4 pt-4 text-xs text-[#544341]">
              <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-xl shadow-sm border border-[#dac1bf]/40">
                <span className="material-symbols-outlined text-[#7c5800] text-[20px] material-symbols-filled">
                  verified
                </span>
                <span className="font-bold text-[#261910]">بیش از ۲۵,۰۰۰ سفارش موفق</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-xl shadow-sm border border-[#dac1bf]/40">
                <span className="material-symbols-outlined text-[#7c5800] text-[20px] material-symbols-filled">
                  workspace_premium
                </span>
                <span className="font-bold text-[#261910]">۱۰۰٪ ضمانت عیار آزمایشگاهی</span>
              </div>
            </div>
          </div>

          {/* Left Column: Visual Showcase Card */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl bg-white border border-[#dac1bf]/60 group">
              <img
                src={heroProduct.image}
                alt={heroProduct.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#3e0508]/90 via-[#3e0508]/20 to-transparent"></div>

              {/* Origin Seal Badge */}
              <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-xl shadow-lg flex items-center gap-2">
                <span className="material-symbols-outlined text-[#7c5800] text-[18px] material-symbols-filled">
                  verified_user
                </span>
                <span className="text-xs font-bold text-[#3e0508]">دستچین پاییز ۱۴۰۴</span>
              </div>

              {/* Bottom Card Overlay */}
              <div className="absolute bottom-5 inset-x-5 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-lg flex items-center justify-between">
                <div>
                  <p className="text-[11px] text-[#7c5800] font-bold">محصول نشان زرین</p>
                  <h3 className="font-bold text-sm sm:text-base text-[#3e0508]">{heroProduct.name}</h3>
                </div>
                <div className="text-left">
                  <span className="text-[10px] text-[#7c5800] font-bold block">عیار کروسین ۲۸۰+</span>
                  <span className="font-black text-sm sm:text-base text-[#93171a]">
                    {formatPersianPrice(heroProduct.price)}{' '}
                    <span className="text-[10px] font-normal text-gray-600">تومان</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Trust Bar */}
      <section className="w-full max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="bg-[#fff1ea] rounded-3xl p-6 md:p-8 shadow-sm border border-[#dac1bf]/50">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex items-start gap-4 p-3 rounded-2xl hover:bg-white/80 transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-[#fdbf40]/20 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[#7c5800] text-[28px]">local_shipping</span>
              </div>
              <div>
                <h4 className="font-bold text-sm text-[#3e0508] mb-1">ارسال سریع کشوری</h4>
                <p className="text-xs text-[#544341] leading-relaxed">بسته‌بندی ویژه عایق و محافظت کامل در برابر رطوبت و نور</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-3 rounded-2xl hover:bg-white/80 transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-[#fdbf40]/20 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[#7c5800] text-[28px]">lock</span>
              </div>
              <div>
                <h4 className="font-bold text-sm text-[#3e0508] mb-1">پرداخت امن و معتبر</h4>
                <p className="text-xs text-[#544341] leading-relaxed">درگاه‌های بانکی شتاب، کارت به کارت و هماهنگی تلگرام</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-3 rounded-2xl hover:bg-white/80 transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-[#fdbf40]/20 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[#7c5800] text-[28px]">verified</span>
              </div>
              <div>
                <h4 className="font-bold text-sm text-[#3e0508] mb-1">ضمانت اصالت ۱۰۰٪</h4>
                <p className="text-xs text-[#544341] leading-relaxed">تضمین بالاترین خلوص با شناسنامه و برگه آزمایشگاهی</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-3 rounded-2xl hover:bg-white/80 transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-[#fdbf40]/20 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[#7c5800] text-[28px]">published_with_changes</span>
              </div>
              <div>
                <h4 className="font-bold text-sm text-[#3e0508] mb-1">بازگشت تا ۷ روز</h4>
                <p className="text-xs text-[#544341] leading-relaxed">ضمانت بی‌قید و شرط بازگشت وجه در صورت عدم رضایت</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Category Grid */}
      <section className="w-full max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-xs font-bold text-[#7c5800] mb-1 block">دسته‌بندی‌های اصیل</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#3e0508]">دنیای طعم‌ها و سوغات ناب کهن‌بوم ایران</h2>
            <p className="text-xs sm:text-sm text-[#544341] mt-1">گزینش‌شده با دقیق‌ترین ضوابط کیفی کشاورزی سنتی ایران</p>
          </div>
          <button
            onClick={() => onNavigate('products')}
            className="inline-flex items-center gap-1 text-xs font-bold text-[#7c5800] hover:text-[#3e0508] transition-colors"
          >
            <span>مشاهده همه محصولات</span>
            <span className="material-symbols-outlined text-[16px]">arrow_back</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.id}
              onClick={() => onNavigate('products', { category: cat.id })}
              className="group relative rounded-3xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-all duration-300 h-72 flex flex-col justify-end p-6 cursor-pointer border border-[#dac1bf]/40"
            >
              <img
                src={cat.image}
                alt={cat.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#3e0508]/95 via-[#3e0508]/40 to-transparent"></div>
              
              <div className="relative z-10">
                <span className="inline-block px-2.5 py-1 rounded-lg bg-[#fdbf40] text-[#2a1e05] text-[10px] font-bold mb-2 shadow-xs">
                  {cat.tagline}
                </span>
                <h3 className="font-bold text-xl text-white">{cat.title}</h3>
                <p className="text-xs text-[#fee3d4] mt-1 line-clamp-2">{cat.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Bestsellers Section */}
      <section className="w-full max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-xs font-bold text-[#c89b3c] mb-1 block">پیشنهاد سرآشپز و خریداران</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#3e0508]">محبوب‌ترین سوغات زرین‌دانه</h2>
          </div>
          <button
            onClick={() => onNavigate('products')}
            className="text-xs font-bold text-[#c89b3c] hover:underline flex items-center gap-1"
          >
            <span>مشاهده همه محصولات فروشگاه</span>
            <span className="material-symbols-outlined text-sm">arrow_left</span>
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {bestsellers.map((product) => {
            const isFav = wishlist.includes(product.id);
            return (
              <div
                key={product.id}
                className="group bg-white rounded-3xl border border-[#d7d0c3]/60 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                {/* Product Image */}
                <div className="relative aspect-square bg-[#f4efe6] overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 cursor-pointer"
                    onClick={() => onNavigate('product-detail', { id: product.id })}
                  />
                  {product.badge && (
                    <span className="absolute top-3 right-3 bg-[#93171a] text-white text-[10px] font-bold px-2.5 py-1 rounded-lg shadow-sm">
                      {product.badge}
                    </span>
                  )}
                  <button
                    onClick={() => toggleWishlist(product.id)}
                    className="absolute top-3 left-3 w-8 h-8 rounded-full bg-white/90 text-gray-400 hover:text-[#93171a] flex items-center justify-center transition-colors shadow-sm"
                    aria-label="افزودن به علاقه‌مندی‌ها"
                  >
                    <span
                      className={`material-symbols-outlined text-base ${
                        isFav ? 'text-[#93171a] material-symbols-filled' : ''
                      }`}
                    >
                      favorite
                    </span>
                  </button>
                </div>

                {/* Details */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[11px] text-[#c89b3c] font-bold block mb-1">
                      {product.categoryLabel}
                    </span>
                    <h3
                      onClick={() => onNavigate('product-detail', { id: product.id })}
                      className="font-bold text-sm text-[#2a1e05] group-hover:text-[#c89b3c] transition-colors leading-snug cursor-pointer"
                    >
                      {product.name}
                    </h3>
                    <p className="text-xs text-[#6e5d3b] mt-1.5 line-clamp-2">{product.subtitle}</p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-[#f4efe6]">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs text-[#857f74]">قیمت:</span>
                      <span className="text-sm font-black text-[#93171a]">
                        {formatPersianPrice(product.price)}{' '}
                        <span className="text-[10px] font-normal text-gray-500">تومان</span>
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <button
                        onClick={() => addToCart(product, 1)}
                        className="py-2 px-2 rounded-xl bg-[#fbf2dc] text-[#5b4308] hover:bg-[#c89b3c] hover:text-white font-bold text-xs transition-colors flex items-center justify-center gap-1"
                      >
                        <span className="material-symbols-outlined text-[16px]">add_shopping_cart</span>
                        <span>خرید</span>
                      </button>
                      <button
                        onClick={() => orderViaTelegram(product.name, product.price, 1)}
                        className="py-2 px-2 rounded-xl bg-[#2a1e05] text-[#fbf2dc] hover:bg-[#3f2f0a] font-bold text-xs transition-colors flex items-center justify-center gap-1"
                      >
                        <span className="material-symbols-outlined text-[14px] text-[#c89b3c]">send</span>
                        <span>تلگرام</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 5. Craftsmanship & Lab Quality Banner */}
      <section className="w-full bg-[#2a1e05] text-white py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden mb-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <span className="text-[#fdbf40] text-xs font-bold uppercase tracking-wider block">
              شناسنامه و آزمون تخصصی زعفران
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-[#fbf2dc] leading-tight">
              چرا زعفران زرین‌دانه در خاورمیانه سرآمد است؟
            </h2>
            <p className="text-xs sm:text-sm text-[#d7d0c3] leading-relaxed max-w-2xl">
              هر مثقال از زعفران زرین‌دانه پیش از بسته‌بندی در آزمایشگاه‌های آکرودیته تحت ۳ مرحله آزمایش کروسین (قدرت رنگ‌دهی)، پیکروکروسین (طعم) و سافرانال (عطر) سنجیده می‌شود تا خلوص ۱۰۰٪ ارگانیک آن تضمین گردد.
            </p>
            <div className="flex flex-wrap gap-4 pt-2 text-xs text-[#fbf2dc]">
              <div className="bg-[#3e0508] border border-[#c89b3c]/40 px-4 py-2.5 rounded-xl">
                <span className="block font-black text-lg text-[#fdbf40]">۲۸۰+</span>
                <span>شاخص کروسین رنگ‌دهی</span>
              </div>
              <div className="bg-[#3e0508] border border-[#c89b3c]/40 px-4 py-2.5 rounded-xl">
                <span className="block font-black text-lg text-[#fdbf40]">۰٪</span>
                <span>هرگونه افزودنی شیمیایی</span>
              </div>
              <div className="bg-[#3e0508] border border-[#c89b3c]/40 px-4 py-2.5 rounded-xl">
                <span className="block font-black text-lg text-[#fdbf40]">۷ روز</span>
                <span>ضمانت عودت وجه بی‌قید</span>
              </div>
            </div>
          </div>
          <div className="lg:col-span-4 flex justify-center">
            <button
              onClick={() => onNavigate('about')}
              className="px-8 py-4 rounded-2xl bg-[#c89b3c] hover:bg-[#b38728] text-[#2a1e05] font-black text-sm shadow-xl transition-all flex items-center gap-2"
            >
              <span>مطالعه داستان مزارع زرین‌دانه</span>
              <span className="material-symbols-outlined text-lg">arrow_back</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
