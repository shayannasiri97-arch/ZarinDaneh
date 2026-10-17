import React, { useState, useMemo } from 'react';
import { PRODUCTS } from '../data/products';
import { useCart } from '../context/CartContext';
import { formatPersianPrice, orderViaTelegram, toPersianDigits } from '../utils/persian';
import { CategoryId } from '../types';

interface ProductsPageProps {
  initialCategory?: CategoryId;
  initialSearch?: string;
  onNavigate: (page: string, params?: Record<string, string>) => void;
}

export const ProductsPage: React.FC<ProductsPageProps> = ({
  initialCategory = 'all',
  initialSearch = '',
  onNavigate,
}) => {
  const { addToCart, wishlist, toggleWishlist } = useCart();
  const [selectedCategory, setSelectedCategory] = useState<CategoryId>(initialCategory);
  const [searchQuery, setSearchQuery] = useState(initialSearch);
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'rating'>('featured');

  const categories: { id: CategoryId; label: string }[] = [
    { id: 'all', label: `همه محصولات (${toPersianDigits(PRODUCTS.length)})` },
    { id: 'saffron', label: 'زعفران قائنات' },
    { id: 'nuts', label: 'پسته و خشکبار' },
    { id: 'sweets', label: 'گز و سوهان' },
    { id: 'honey', label: 'عسل و دمنوش' },
    { id: 'gift', label: 'پک هدیه فاخر' },
  ];

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      const matchCat =
        selectedCategory === 'all' ||
        product.category === selectedCategory ||
        (selectedCategory === 'honey' && product.category === 'tea');

      const matchSearch =
        !searchQuery.trim() ||
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.province.toLowerCase().includes(searchQuery.toLowerCase());

      return matchCat && matchSearch;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return 0;
    });
  }, [selectedCategory, searchQuery, sortBy]);

  return (
    <div className="w-full bg-[#fff8f5] min-h-screen">
      
      {/* Breadcrumbs & Header Banner */}
      <div className="bg-[#f4efe6] border-b border-[#d7d0c3]/40 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <nav className="flex items-center gap-2 text-xs text-[#6e5d3b] mb-4">
            <button onClick={() => onNavigate('home')} className="hover:text-[#c89b3c]">
              صفحه اصلی
            </button>
            <span className="material-symbols-outlined text-xs">chevron_left</span>
            <span className="text-[#211c15] font-semibold">فروشگاه محصولات اصیل</span>
          </nav>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h1 className="text-2xl sm:text-4xl font-extrabold text-[#2a1e05] tracking-tight">
                محصولات دستچین زرین‌دانه
              </h1>
              <p className="mt-2 text-xs sm:text-sm text-[#534e44] max-w-xl">
                مجموعه کامل زعفران ممتاز قائنات، پسته خندان رفسنجان، گز اصیل اصفهان و شیرینی‌های سنتی با گواهی آزمایشگاهی خلوص و تازگی.
              </p>
            </div>

            <div className="flex items-center gap-2 text-xs text-[#534e44] bg-white px-4 py-2.5 rounded-xl border border-[#d7d0c3] self-start md:self-auto">
              <span className="material-symbols-outlined text-[#c89b3c] text-sm material-symbols-filled">
                verified
              </span>
              <span>تضمین اصالت و تازگی ۱۰۰٪ محصولات</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Catalog View */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        
        {/* Filter Pills & Search/Sort Bar */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 mb-8 bg-white p-4 rounded-2xl border border-[#d7d0c3]/60 shadow-sm">
          
          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0 scrollbar-none text-xs font-semibold">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-xl whitespace-nowrap transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-[#2a1e05] text-[#fbf2dc] shadow-sm'
                    : 'bg-[#f4efe6] text-[#534e44] hover:bg-[#fbf2dc] hover:text-[#2a1e05]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search & Sort Controls */}
          <div className="flex items-center gap-3">
            <div className="relative flex-1 sm:w-64">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="جستجوی نام محصول..."
                className="w-full pl-3 pr-9 py-2 text-xs rounded-xl bg-[#f8f5ee] border border-[#d7d0c3] focus:outline-none focus:border-[#c89b3c]"
              />
              <span className="material-symbols-outlined text-[18px] text-[#857f74] absolute right-2.5 top-2.5">
                search
              </span>
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute left-2.5 top-2.5 text-gray-400 hover:text-black"
                >
                  <span className="material-symbols-outlined text-[16px]">close</span>
                </button>
              )}
            </div>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="text-xs py-2 px-3 rounded-xl bg-[#f8f5ee] border border-[#d7d0c3] text-[#534e44] focus:outline-none focus:border-[#c89b3c]"
            >
              <option value="featured">مرتب‌سازی: پیشنهادی</option>
              <option value="price-asc">ارزان‌ترین</option>
              <option value="price-desc">گران‌ترین</option>
              <option value="rating">محبوب‌ترین</option>
            </select>
          </div>
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => {
              const isFav = wishlist.includes(product.id);
              return (
                <div
                  key={product.id}
                  className="group bg-white rounded-2xl border border-[#d7d0c3]/60 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
                >
                  {/* Image container */}
                  <div className="relative overflow-hidden aspect-square bg-[#f4efe6]">
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
                      className="absolute top-3 left-3 z-20 w-8 h-8 rounded-full bg-white/90 text-gray-500 hover:text-[#93171a] flex items-center justify-center transition-colors shadow-sm"
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

                  {/* Body */}
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="text-[11px] text-[#c89b3c] font-bold mb-1">
                        {product.categoryLabel}
                      </div>
                      <h3
                        onClick={() => onNavigate('product-detail', { id: product.id })}
                        className="font-bold text-base text-[#2a1e05] group-hover:text-[#c89b3c] transition-colors leading-snug cursor-pointer"
                      >
                        {product.name}
                      </h3>
                      <p className="text-xs text-[#6e5d3b] mt-1.5 line-clamp-2">
                        {product.subtitle}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-[#f4efe6]">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs text-[#857f74]">قیمت مصرف‌کننده:</span>
                        <span className="text-base font-extrabold text-[#93171a]">
                          {formatPersianPrice(product.price)}{' '}
                          <span className="text-xs font-normal text-[#534e44]">تومان</span>
                        </span>
                      </div>

                      <div className="grid grid-cols-2 gap-2">
                        <button
                          onClick={() => addToCart(product, 1)}
                          className="w-full py-2 px-2 rounded-xl bg-[#fbf2dc] text-[#5b4308] hover:bg-[#c89b3c] hover:text-white font-bold text-xs transition-colors flex items-center justify-center gap-1"
                        >
                          <span className="material-symbols-outlined text-[16px]">add_shopping_cart</span>
                          <span>افزودن</span>
                        </button>
                        <button
                          onClick={() => orderViaTelegram(product.name, product.price, 1)}
                          className="w-full py-2 px-2 rounded-xl bg-[#2a1e05] text-[#fbf2dc] hover:bg-[#3f2f0a] font-bold text-xs transition-colors flex items-center justify-center gap-1"
                        >
                          <span className="material-symbols-outlined text-[14px] text-[#c89b3c]">send</span>
                          <span>سفارش تلگرام</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-3xl border border-[#d7d0c3] p-8">
            <span className="material-symbols-outlined text-5xl text-gray-400">search_off</span>
            <h3 className="font-bold text-lg text-[#2a1e05] mt-2">محصولی با این مشخصات یافت نشد</h3>
            <p className="text-xs text-gray-500 mt-1">لطفاً عبارت جستجو یا فیلتر دسته‌بندی را تغییر دهید.</p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="mt-4 px-5 py-2.5 rounded-xl bg-[#3e0508] text-white text-xs font-bold"
            >
              نمایش همه محصولات
            </button>
          </div>
        )}
      </main>
    </div>
  );
};
