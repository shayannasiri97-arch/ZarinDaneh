import React, { useState } from 'react';
import { PRODUCTS } from '../data/products';
import { useCart } from '../context/CartContext';
import { formatPersianPrice, orderViaTelegram, toPersianDigits } from '../utils/persian';
import { ProductVariant } from '../types';

interface ProductDetailPageProps {
  productId: string;
  onNavigate: (page: string, params?: Record<string, string>) => void;
}

export const ProductDetailPage: React.FC<ProductDetailPageProps> = ({ productId, onNavigate }) => {
  const { addToCart, wishlist, toggleWishlist } = useCart();
  const product = PRODUCTS.find((p) => p.id === productId) || PRODUCTS[0];

  const [activeImage, setActiveImage] = useState<string>(product.image);
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant | undefined>(
    product.variants ? product.variants[0] : undefined
  );
  const [quantity, setQuantity] = useState<number>(1);
  const [activeTab, setActiveTab] = useState<'desc' | 'specs' | 'reviews'>('desc');

  const currentPrice = selectedVariant ? selectedVariant.price : product.price;
  const isFav = wishlist.includes(product.id);

  const relatedProducts = PRODUCTS.filter(
    (p) => p.category === product.category && p.id !== product.id
  ).slice(0, 3);

  return (
    <div className="w-full bg-[#fff8f5] min-h-screen">
      
      {/* Breadcrumbs */}
      <div className="bg-[#f4efe6] border-b border-[#d7d0c3]/40 py-3.5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs text-[#6e5d3b]">
          <button onClick={() => onNavigate('home')} className="hover:text-[#c89b3c]">
            صفحه اصلی
          </button>
          <span className="material-symbols-outlined text-xs">chevron_left</span>
          <button
            onClick={() => onNavigate('products', { category: product.category })}
            className="hover:text-[#c89b3c]"
          >
            {product.categoryLabel}
          </button>
          <span className="material-symbols-outlined text-xs">chevron_left</span>
          <span className="text-[#211c15] font-semibold truncate">{product.name}</span>
        </div>
      </div>

      {/* Main Product Info */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Gallery (Cols 1-6) */}
          <div className="lg:col-span-6 space-y-4">
            <div className="relative aspect-square rounded-3xl overflow-hidden bg-white border border-[#d7d0c3]/60 shadow-md">
              <img
                src={activeImage}
                alt={product.name}
                className="w-full h-full object-cover transition-all duration-300"
              />
              {product.badge && (
                <span className="absolute top-4 right-4 bg-[#93171a] text-white text-xs font-bold px-3 py-1.5 rounded-xl shadow-md flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">verified</span>
                  {product.badge}
                </span>
              )}
              {product.specs?.harvestYear && (
                <span className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-md text-white text-xs px-3 py-1.5 rounded-xl">
                  برداشت: {product.specs.harvestYear} — {product.province}
                </span>
              )}
            </div>

            {/* Thumbnails Row */}
            <div className="grid grid-cols-4 gap-3">
              {product.gallery.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(img)}
                  className={`rounded-2xl overflow-hidden aspect-square p-0.5 bg-white shadow-sm transition-all ${
                    activeImage === img ? 'ring-2 ring-[#c89b3c] scale-102' : 'opacity-70 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt={`تصویر ${idx + 1}`} className="w-full h-full object-cover rounded-xl" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Purchase Box (Cols 7-12) */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center justify-between gap-4 mb-2">
                <span className="px-3 py-1 rounded-full bg-[#fbf2dc] text-[#5b4308] text-xs font-bold">
                  {product.categoryLabel} • {product.province}
                </span>
                <button
                  onClick={() => toggleWishlist(product.id)}
                  className="flex items-center gap-1 text-xs text-gray-500 hover:text-[#93171a] transition-colors"
                >
                  <span
                    className={`material-symbols-outlined text-xl ${
                      isFav ? 'text-[#93171a] material-symbols-filled' : ''
                    }`}
                  >
                    favorite
                  </span>
                  <span>{isFav ? 'در علاقه‌مندی‌ها' : 'افزودن به علاقه‌مندی‌ها'}</span>
                </button>
              </div>

              <h1 className="text-2xl sm:text-3xl font-black text-[#2a1e05] leading-tight mb-2">
                {product.name}
              </h1>

              <p className="text-xs sm:text-sm text-[#534e44] leading-relaxed mb-6">
                {product.description}
              </p>

              {/* Variants Selector */}
              {product.variants && product.variants.length > 0 && (
                <div className="mb-6 bg-white p-4 rounded-2xl border border-[#d7d0c3]/60">
                  <label className="block text-xs font-bold text-[#2a1e05] mb-2.5">
                    انتخاب وزن و نوع بسته‌بندی:
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                    {product.variants.map((v) => {
                      const isSelected = selectedVariant?.weight === v.weight;
                      return (
                        <button
                          key={v.weight}
                          onClick={() => setSelectedVariant(v)}
                          className={`p-3 rounded-xl border text-right transition-all flex flex-col justify-between ${
                            isSelected
                              ? 'border-[#c89b3c] bg-[#fbf2dc]/40 ring-1 ring-[#c89b3c]'
                              : 'border-[#d7d0c3] bg-[#f8f5ee] hover:bg-white'
                          }`}
                        >
                          <span className="text-xs font-bold text-[#2a1e05] block mb-1">{v.weight}</span>
                          <span className="text-[11px] text-[#93171a] font-bold">
                            {formatPersianPrice(v.price)} تومان
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Price Callout */}
              <div className="bg-[#f4efe6] p-4 rounded-2xl flex items-center justify-between mb-6">
                <span className="text-xs font-bold text-[#534e44]">قیمت نهایی:</span>
                <span className="text-2xl font-black text-[#93171a]">
                  {formatPersianPrice(currentPrice)}{' '}
                  <span className="text-xs font-normal text-gray-600">تومان</span>
                </span>
              </div>

              {/* Quantity Stepper & Actions */}
              <div className="flex flex-col sm:flex-row items-center gap-3">
                <div className="flex items-center border border-[#d7d0c3] rounded-xl bg-white shadow-xs p-1 w-full sm:w-auto justify-between sm:justify-start">
                  <button
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="w-9 h-9 rounded-lg hover:bg-gray-100 flex items-center justify-center font-black text-[#2a1e05]"
                  >
                    -
                  </button>
                  <span className="w-12 text-center font-bold text-sm text-[#2a1e05]">
                    {toPersianDigits(quantity)}
                  </span>
                  <button
                    onClick={() => setQuantity((q) => q + 1)}
                    className="w-9 h-9 rounded-lg hover:bg-gray-100 flex items-center justify-center font-black text-[#2a1e05]"
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={() => addToCart(product, quantity, selectedVariant)}
                  className="flex-1 w-full py-3.5 px-6 rounded-xl bg-[#c89b3c] hover:bg-[#b38728] text-[#2a1e05] font-black text-xs flex items-center justify-center gap-2 shadow-md transition-all"
                >
                  <span className="material-symbols-outlined text-lg">add_shopping_cart</span>
                  <span>افزودن به سبد خرید</span>
                </button>

                <button
                  onClick={() =>
                    orderViaTelegram(
                      `${product.name} (${selectedVariant?.label || 'بسته استاندارد'})`,
                      currentPrice,
                      quantity
                    )
                  }
                  className="w-full sm:w-auto py-3.5 px-5 rounded-xl bg-[#2a1e05] hover:bg-[#3f2f0a] text-[#fbf2dc] font-bold text-xs flex items-center justify-center gap-1.5 transition-colors shadow-md"
                >
                  <span className="material-symbols-outlined text-[16px] text-[#c89b3c]">send</span>
                  <span>سفارش تلگرام</span>
                </button>
              </div>
            </div>

            {/* Fast Perks */}
            <div className="pt-6 border-t border-[#d7d0c3]/60 grid grid-cols-2 gap-3 text-xs text-[#534e44]">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#295034] text-lg">check_circle</span>
                <span>تضمین خلوص ۱۰۰٪ آزمایشگاهی</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#295034] text-lg">local_shipping</span>
                <span>ارسال رایگان بالای ۵۰۰ هزار تومان</span>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="mt-16 bg-white rounded-3xl border border-[#d7d0c3]/60 p-6 sm:p-8 shadow-sm">
          <div className="flex items-center gap-4 border-b border-gray-100 pb-4 mb-6">
            <button
              onClick={() => setActiveTab('desc')}
              className={`pb-2 text-sm font-bold transition-colors ${
                activeTab === 'desc'
                  ? 'text-[#c89b3c] border-b-2 border-[#c89b3c]'
                  : 'text-[#534e44] hover:text-[#2a1e05]'
              }`}
            >
              توضیحات و ویژگی‌ها
            </button>
            <button
              onClick={() => setActiveTab('specs')}
              className={`pb-2 text-sm font-bold transition-colors ${
                activeTab === 'specs'
                  ? 'text-[#c89b3c] border-b-2 border-[#c89b3c]'
                  : 'text-[#534e44] hover:text-[#2a1e05]'
              }`}
            >
              شناسنامه کیفی و آزمون‌ها
            </button>
            <button
              onClick={() => setActiveTab('reviews')}
              className={`pb-2 text-sm font-bold transition-colors ${
                activeTab === 'reviews'
                  ? 'text-[#c89b3c] border-b-2 border-[#c89b3c]'
                  : 'text-[#534e44] hover:text-[#2a1e05]'
              }`}
            >
              نظرات خریداران ({toPersianDigits(product.reviewsCount)})
            </button>
          </div>

          {activeTab === 'desc' && (
            <div className="space-y-4 text-xs sm:text-sm text-[#534e44] leading-relaxed">
              <p>{product.description}</p>
              <h4 className="font-bold text-[#2a1e05] pt-2">ویژگی‌های بارز محصول:</h4>
              <ul className="list-disc list-inside space-y-1.5 text-xs sm:text-sm pr-2">
                {product.features.map((feat, idx) => (
                  <li key={idx}>{feat}</li>
                ))}
              </ul>
            </div>
          )}

          {activeTab === 'specs' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
              <div className="bg-[#f8f5ee] p-3.5 rounded-xl">
                <span className="text-[#857f74] block mb-1">مبدا جغرافیایی و خاستگاه:</span>
                <span className="font-bold text-[#2a1e05]">{product.province}</span>
              </div>
              <div className="bg-[#f8f5ee] p-3.5 rounded-xl">
                <span className="text-[#857f74] block mb-1">عیار یا مشخصه آزمایشگاهی:</span>
                <span className="font-bold text-[#295034]">
                  {product.specs?.crocinLevel || 'استاندارد ملی و صادراتی ایران'}
                </span>
              </div>
              <div className="bg-[#f8f5ee] p-3.5 rounded-xl">
                <span className="text-[#857f74] block mb-1">نوع بسته‌بندی:</span>
                <span className="font-bold text-[#2a1e05]">
                  {product.specs?.packaging || 'ظرف بهداشتی محافظت‌شده'}
                </span>
              </div>
              <div className="bg-[#f8f5ee] p-3.5 rounded-xl">
                <span className="text-[#857f74] block mb-1">مدت ماندگاری:</span>
                <span className="font-bold text-[#2a1e05]">
                  {product.specs?.shelfLife || '۱۲ ماه در جای خشک و خنک'}
                </span>
              </div>
            </div>
          )}

          {activeTab === 'reviews' && (
            <div className="space-y-4">
              <div className="bg-[#fbf2dc]/40 border border-[#c89b3c]/30 p-4 rounded-2xl flex items-center justify-between">
                <div>
                  <span className="font-black text-2xl text-[#2a1e05] block">{toPersianDigits(product.rating)} از ۵</span>
                  <span className="text-xs text-[#534e44]">رضایت‌مندی خریداران تاییدشده زرین‌دانه</span>
                </div>
                <div className="flex text-[#c89b3c]">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="material-symbols-outlined material-symbols-filled text-lg">
                      star
                    </span>
                  ))}
                </div>
              </div>

              <div className="border border-gray-100 rounded-xl p-4 text-xs space-y-1">
                <div className="flex items-center justify-between font-bold text-[#2a1e05]">
                  <span>محسن طاهری (تهران)</span>
                  <span className="text-gray-400 font-normal">هفته گذشته</span>
                </div>
                <p className="text-gray-600">
                  کیفیت و عطر زعفران واقعاً فوق‌العاده بود. بسته‌بندی بسیار بهداشتی و محکم به دستم رسید.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16">
            <h3 className="text-xl font-bold text-[#2a1e05] mb-6">محصولات مرتبط</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {relatedProducts.map((rel) => (
                <div
                  key={rel.id}
                  onClick={() => {
                    onNavigate('product-detail', { id: rel.id });
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="bg-white rounded-2xl border border-[#d7d0c3]/60 p-4 hover:shadow-lg transition-all cursor-pointer flex gap-3 items-center"
                >
                  <img src={rel.image} alt={rel.name} className="w-16 h-16 rounded-xl object-cover shrink-0" />
                  <div>
                    <h4 className="font-bold text-xs text-[#2a1e05] line-clamp-1">{rel.name}</h4>
                    <span className="text-xs text-[#93171a] font-bold block mt-1">
                      {formatPersianPrice(rel.price)} تومان
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
};
