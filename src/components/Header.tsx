import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { toPersianDigits, SUPPORT_PHONE, TELEGRAM_USERNAME } from '../utils/persian';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string, params?: Record<string, string>) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  const { cart } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const totalCartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      onNavigate('products', { search: searchQuery.trim() });
      setSearchModalOpen(false);
      setSearchQuery('');
    }
  };

  const navLinks = [
    { id: 'home', label: 'صفحه نخست' },
    { id: 'products', label: 'فروشگاه' },
    { id: 'about', label: 'داستان زرین‌دانه' },
    { id: 'contact', label: 'تماس و شعب' },
  ];

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="bg-[#2a1e05] text-[#fbf2dc] text-xs py-2 px-4 text-center border-b border-[#c89b3c]/20 z-40 relative">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <span className="hidden sm:inline-block text-[#d7d0c3]">
            ضمانت بازگشت وجه بی‌قید و شرط تا ۷ روز در صورت عدم رضایت از عیار زعفران
          </span>
          <span className="mx-auto sm:mx-0 font-medium text-[#fdbf40] flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[15px]">local_shipping</span>
            «ارسال رایگان به سراسر کشور برای سفارش‌های بالای ۵۰۰ هزار تومان»
          </span>
          <div className="hidden md:flex items-center gap-4 text-[#c89b3c]">
            <a href={`tel:${SUPPORT_PHONE.replace(/[^0-9]/g, '')}`} className="hover:underline flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px]">call</span> {SUPPORT_PHONE}
            </a>
            <span className="text-white/20">|</span>
            <a
              href={`https://t.me/${TELEGRAM_USERNAME}`}
              target="_blank"
              rel="noreferrer"
              className="hover:underline flex items-center gap-1 text-[#fbf2dc]"
            >
              <span className="material-symbols-outlined text-[14px]">send</span> مشاوره تلگرام
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <header className="sticky top-0 z-50 bg-[#fff8f5]/95 backdrop-blur-md border-b border-[#d7d0c3]/40 transition-shadow duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Logo & Brand */}
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center gap-3 text-right group focus:outline-none"
          >
            <div className="w-11 h-11 rounded-full bg-[#3e0508] border-2 border-[#c89b3c] flex items-center justify-center text-[#fbf2dc] shadow-sm group-hover:scale-105 transition-transform">
              <span className="material-symbols-outlined text-2xl text-[#fdbf40]">workspace_premium</span>
            </div>
            <div>
              <span className="font-bold text-2xl text-[#3e0508] tracking-tight block">زرین‌دانه</span>
              <span className="text-[11px] text-[#7c5800] tracking-wider block font-semibold">سوغات و خشکبار اصیل ایران</span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => onNavigate(link.id)}
                  className={`py-1 text-sm transition-colors ${
                    isActive
                      ? 'font-bold text-[#c89b3c] border-b-2 border-[#c89b3c]'
                      : 'font-medium text-[#534e44] hover:text-[#c89b3c]'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            {/* Search Button */}
            <button
              onClick={() => setSearchModalOpen(true)}
              aria-label="جستجو"
              className="w-10 h-10 rounded-full flex items-center justify-center text-[#534e44] hover:bg-[#ffeade] hover:text-[#3e0508] transition-colors"
            >
              <span className="material-symbols-outlined text-[22px]">search</span>
            </button>

            {/* Telegram Fast Order */}
            <a
              href={`https://t.me/${TELEGRAM_USERNAME}`}
              target="_blank"
              rel="noreferrer"
              className="hidden lg:flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#2a1e05] text-[#fbf2dc] text-xs font-semibold hover:bg-[#3f2f0a] transition-colors shadow-sm"
            >
              <span className="material-symbols-outlined text-[16px] text-[#c89b3c]">send</span>
              سفارش سریع در تلگرام
            </a>

            {/* Shopping Cart Button */}
            <button
              onClick={() => onNavigate('cart')}
              className="relative p-2.5 rounded-xl bg-white border border-[#d7d0c3]/60 text-[#211c15] hover:text-[#c89b3c] hover:border-[#c89b3c] transition-all shadow-sm group"
              aria-label="سبد خرید"
            >
              <span className="material-symbols-outlined text-2xl">shopping_bag</span>
              {totalCartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-[#93171a] text-white text-[11px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-white shadow-sm">
                  {toPersianDigits(totalCartCount)}
                </span>
              )}
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="md:hidden p-2 rounded-xl text-[#211c15] hover:bg-black/5"
              aria-label="منوی موبایل"
            >
              <span className="material-symbols-outlined text-2xl">menu</span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm md:hidden flex justify-end animate-fadeIn">
          <div className="w-80 max-w-[85%] bg-white p-6 shadow-2xl flex flex-col justify-between overflow-y-auto h-full">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-gray-100">
                <div className="flex items-center gap-2">
                  <div className="w-9 h-9 rounded-full bg-[#3e0508] border border-[#c89b3c] flex items-center justify-center text-[#fbf2dc]">
                    <span className="material-symbols-outlined text-lg text-[#fdbf40]">workspace_premium</span>
                  </div>
                  <span className="font-bold text-lg text-[#2a1e05]">زرین‌دانه</span>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-gray-500 hover:text-black rounded-lg"
                >
                  <span className="material-symbols-outlined">close</span>
                </button>
              </div>

              <nav className="mt-6 flex flex-col gap-2">
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => {
                      onNavigate(link.id);
                      setMobileMenuOpen(false);
                    }}
                    className={`w-full text-right p-3 rounded-xl transition-all ${
                      currentPage === link.id
                        ? 'bg-[#fbf2dc] text-[#c89b3c] font-bold'
                        : 'text-gray-800 hover:bg-[#fff8f5] font-medium'
                    }`}
                  >
                    {link.label}
                  </button>
                ))}
                <button
                  onClick={() => {
                    onNavigate('cart');
                    setMobileMenuOpen(false);
                  }}
                  className="w-full text-right p-3 rounded-xl hover:bg-[#fbf2dc] text-gray-800 font-medium flex items-center justify-between"
                >
                  <span>سبد خرید</span>
                  {totalCartCount > 0 && (
                    <span className="bg-[#93171a] text-white text-xs px-2 py-0.5 rounded-full font-bold">
                      {toPersianDigits(totalCartCount)}
                    </span>
                  )}
                </button>
              </nav>
            </div>

            <div className="pt-6 border-t border-gray-100 space-y-2">
              <a
                href={`https://t.me/${TELEGRAM_USERNAME}`}
                target="_blank"
                rel="noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#2a1e05] text-[#fbf2dc] font-bold text-xs"
              >
                <span className="material-symbols-outlined text-base text-[#c89b3c]">send</span>
                ارتباط مستقیم با کارشناس در تلگرام
              </a>
              <div className="text-center text-[11px] text-gray-500 pt-2">
                تلفن پشتیبانی: {SUPPORT_PHONE}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Search Modal */}
      {searchModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-start justify-center pt-24 px-4">
          <div className="bg-white rounded-2xl p-6 w-full max-w-lg shadow-2xl border border-[#d7d0c3]">
            <div className="flex items-center justify-between pb-3 border-b border-gray-100 mb-4">
              <h3 className="font-bold text-[#3e0508] text-base flex items-center gap-2">
                <span className="material-symbols-outlined text-[#c89b3c]">search</span>
                جستجوی محصولات زرین‌دانه
              </h3>
              <button
                onClick={() => setSearchModalOpen(false)}
                className="text-gray-400 hover:text-black"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            <form onSubmit={handleSearchSubmit}>
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="نام محصول را وارد کنید (مثال: زعفران، پسته، گز، عسل)..."
                  className="w-full px-4 py-3 rounded-xl bg-[#fff8f5] border border-[#d7d0c3] text-sm focus:outline-none focus:border-[#c89b3c]"
                  autoFocus
                />
                <button
                  type="submit"
                  className="absolute left-2 top-2 px-4 py-1.5 rounded-lg bg-[#3e0508] text-white text-xs font-semibold hover:bg-[#5b1a1a]"
                >
                  جستجو
                </button>
              </div>
            </form>
            <div className="mt-4 flex flex-wrap items-center gap-2 text-xs text-[#7c5800]">
              <span className="text-gray-400">جستجوهای پرطرفدار:</span>
              {['زعفران قائنات', 'پسته اکبری', 'گز انگبین', 'عسل سبلان'].map((tag) => (
                <button
                  key={tag}
                  onClick={() => {
                    onNavigate('products', { search: tag });
                    setSearchModalOpen(false);
                  }}
                  className="px-2.5 py-1 rounded-lg bg-[#ffeade] hover:bg-[#fee3d4] text-[#3e0508] transition-colors"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
