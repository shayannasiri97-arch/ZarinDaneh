import React from 'react';
import { useCart } from '../context/CartContext';

export const Toast: React.FC = () => {
  const { toastMessage } = useCart();

  if (!toastMessage) return null;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-[#3e0508] text-[#fff8f5] px-6 py-3.5 rounded-2xl shadow-2xl flex items-center gap-3 text-center border border-[#c89b3c]/40 animate-bounce-short">
      <span className="material-symbols-outlined text-[#fdbf40] text-[22px] material-symbols-filled">
        check_circle
      </span>
      <span className="text-xs sm:text-sm font-semibold">{toastMessage}</span>
    </div>
  );
};
