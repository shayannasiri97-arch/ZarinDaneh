import React, { createContext, useContext, useState, useEffect } from 'react';
import { CartItem, Product, ProductVariant, CustomerOrder } from '../types';
import { toPersianDigits } from '../utils/persian';

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product, quantity?: number, variant?: ProductVariant) => void;
  updateQuantity: (id: string, delta: number) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
  subtotal: number;
  discount: number;
  shippingFee: number;
  total: number;
  couponCode: string;
  couponDiscountPercent: number;
  applyCoupon: (code: string) => { success: boolean; message: string };
  wishlist: string[];
  toggleWishlist: (productId: string) => void;
  toastMessage: string | null;
  showToast: (message: string) => void;
  lastOrder: CustomerOrder | null;
  setLastOrder: (order: CustomerOrder) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const INITIAL_CART: CartItem[] = [
  {
    id: 'saffron-1g',
    productId: 'saffron-1g',
    name: 'زعفران سوپر نگین صادراتی (۱ گرم)',
    subtitle: 'بسته‌بندی کریستال خاتم • عیار کروسین ۲۸۰+',
    province: 'قائنات',
    price: 245000,
    quantity: 2,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCxOFePrYaHUFrj1xnS6wk2-Lzs_S03wVv0UmtDdHhnvfdXPWUqWdTLfG5xi4eUudPYRhqUxoYU3YNeyu9ZJyoSkgdlX1NluIyjga9JgvWOV5IqP71PY8c0IOFnaWlbOnt0FaoSm6DhcrmLc8o4DhKXGnnbXRYqPnimXrUoA2InM7dyjG7J5E-BegqXEFrn1IpZ7aaB8uVWbRco_wEQO5R7ywbKcwjN7Gen5QzfKHZO-2YkzVsRqiqV',
    selectedVariant: 'بسته تک‌گرمی کریستال'
  },
  {
    id: 'pistachio-500g',
    productId: 'pistachio-500g',
    name: 'پسته اکبری دستچین خندان (۵۰۰ گرم)',
    subtitle: 'برشته ملایم با نمک دریا و زعفران اعلا',
    province: 'رفسنجان',
    price: 480000,
    quantity: 1,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBxQ6bVb3w5IznkHlvKcqRl9QzZKH2w8VhzMN3ZNAG1vo1Uk81rNlpb8Qv6CJa6aVvf8WEtWrADwNgjtIgAT0b1hQC4C7KNAwDYcqPjDV3jZAngY3DDiJkchqQ4kYCMcUtJbkWydjHWSTvALaydhoDL2XwW9mUykhppG6mw5VBI8_jbe_5xqCSGFErRTjLC5ERGVMKVgCxtxjmbxsnIaK3_ETuoqW0jN_36NN0qlkI6DNmW2ecn-c4K',
    selectedVariant: 'بسته نیم کیلویی'
  }
];

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('zarindaneh_cart');
      return saved ? JSON.parse(saved) : INITIAL_CART;
    } catch {
      return INITIAL_CART;
    }
  });

  const [wishlist, setWishlist] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('zarindaneh_wishlist');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [couponCode, setCouponCode] = useState<string>('');
  const [couponDiscountPercent, setCouponDiscountPercent] = useState<number>(0);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [lastOrder, setLastOrderState] = useState<CustomerOrder | null>(() => {
    try {
      const saved = sessionStorage.getItem('lastOrder');
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('zarindaneh_cart', JSON.stringify(cart));
    } catch (e) {
      console.error(e);
    }
  }, [cart]);

  useEffect(() => {
    try {
      localStorage.setItem('zarindaneh_wishlist', JSON.stringify(wishlist));
    } catch (e) {
      console.error(e);
    }
  }, [wishlist]);

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage((current) => (current === message ? null : current));
    }, 3200);
  };

  const setLastOrder = (order: CustomerOrder) => {
    setLastOrderState(order);
    try {
      sessionStorage.setItem('lastOrder', JSON.stringify(order));
    } catch (e) {
      console.error(e);
    }
  };

  const addToCart = (product: Product, quantity: number = 1, variant?: ProductVariant) => {
    const itemPrice = variant ? variant.price : product.price;
    const variantLabel = variant ? variant.label : undefined;
    const itemId = variant ? `${product.id}-${variant.weight}` : product.id;

    setCart((prevCart) => {
      const existingIndex = prevCart.findIndex((item) => item.id === itemId);
      if (existingIndex > -1) {
        const updated = [...prevCart];
        updated[existingIndex].quantity += quantity;
        return updated;
      }
      return [
        ...prevCart,
        {
          id: itemId,
          productId: product.id,
          name: product.name,
          subtitle: product.subtitle,
          province: product.province,
          price: itemPrice,
          quantity: quantity,
          image: product.image,
          selectedVariant: variantLabel,
        },
      ];
    });

    showToast(`${toPersianDigits(quantity)} بسته از «${product.name}» به سبد خرید افزوده شد.`);
  };

  const updateQuantity = (id: string, delta: number) => {
    setCart((prevCart) => {
      return prevCart
        .map((item) => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[];
    });
  };

  const removeFromCart = (id: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
    showToast('کالا با موفقیت از سبد خرید حذف شد.');
  };

  const clearCart = () => {
    setCart([]);
  };

  const toggleWishlist = (productId: string) => {
    setWishlist((prev) => {
      const exists = prev.includes(productId);
      if (exists) {
        showToast('محصول از لیست علاقه‌مندی‌ها حذف شد.');
        return prev.filter((id) => id !== productId);
      } else {
        showToast('محصول به لیست علاقه‌مندی‌ها اضافه شد.');
        return [...prev, productId];
      }
    });
  };

  const applyCoupon = (code: string) => {
    const cleanCode = code.trim().toUpperCase();
    if (['ZARRIN10', 'GOLD10', 'NOROOZ', 'ZARIN'].includes(cleanCode)) {
      setCouponCode(cleanCode);
      setCouponDiscountPercent(10);
      showToast('کد تخفیف ۱۰٪ زرین‌دانه با موفقیت اعمال شد!');
      return { success: true, message: 'کد تخفیف ۱۰٪ با موفقیت ثبت شد!' };
    }
    return { success: false, message: 'کد تخفیف وارد شده معتبر نمی‌باشد.' };
  };

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discount = Math.round(subtotal * (couponDiscountPercent / 100));
  const shippingFee = subtotal >= 500000 || subtotal === 0 ? 0 : 45000;
  const total = Math.max(0, subtotal - discount + shippingFee);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
        subtotal,
        discount,
        shippingFee,
        total,
        couponCode,
        couponDiscountPercent,
        applyCoupon,
        wishlist,
        toggleWishlist,
        toastMessage,
        showToast,
        lastOrder,
        setLastOrder,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
