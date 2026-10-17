/**
 * Zarindaneh - Persian Gourmet Heritage Website
 * Vanilla JavaScript Core Application Logic
 */

// Persian number converter
function toPersianDigits(num) {
  if (num === null || num === undefined) return '';
  const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
  return num.toString().replace(/\d/g, d => persianDigits[d]);
}

function formatPersianPrice(amount) {
  const formatted = amount.toLocaleString('en-US');
  return toPersianDigits(formatted);
}

// Telegram Ordering Support
// Telegram destination: @zarindaneh
const TELEGRAM_USERNAME = 'zarindaneh';

function orderViaTelegram(productName, price, quantity = 1) {
  const pQty = toPersianDigits(quantity);
  const message = `سلام و احترام،
مایل به ثبت سفارش از مجموعه زرین‌دانه هستم:
• محصول: ${productName}
• تعداد: ${pQty}
• قیمت واحد: ${price} تومان

لطفاً اطلاعات پرداخت و هماهنگی ارسال را ارسال فرمایید. سپاسگزارم.`;

  const url = `https://t.me/${TELEGRAM_USERNAME}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
}

// Global Cart State Management
const DEFAULT_CART_ITEMS = [
  {
    id: 'saffron-1g',
    title: 'زعفران سرگل ممتاز ۱ گرمی زرین‌دانه',
    subtitle: 'بسته‌بندی کریستال خاتم • عیار ۲۶۰+',
    province: 'قائنات',
    price: 185000,
    quantity: 2,
    image: 'assets/images/product-saffron-1g.jpg',
    fallbackImage: 'assets/images/cart-saffron.jpg'
  },
  {
    id: 'pistachio-500g',
    title: 'پسته اکبری اعلا ۵۰۰ گرمی',
    subtitle: 'دستچین خندان • برشته با نمک ملایم دریایی',
    province: 'رفسنجان',
    price: 520000,
    quantity: 1,
    image: 'assets/images/product-pistachio-500g.jpg',
    fallbackImage: 'assets/images/cart-pistachio.jpg'
  },
  {
    id: 'gaz-400g',
    title: 'گز لقمه‌ای پسته ۴۰٪ اصفهان',
    subtitle: 'انگبین و گلاب دوآتشه کاشان • وزن ۴۰۰ گرم',
    province: 'اصفهان',
    price: 240000,
    quantity: 1,
    image: 'assets/images/product-gaz-400g.jpg',
    fallbackImage: 'assets/images/cart-gaz.jpg'
  }
];

function getCartItems() {
  const stored = localStorage.getItem('zarindaneh_cart');
  if (!stored) {
    localStorage.setItem('zarindaneh_cart', JSON.stringify(DEFAULT_CART_ITEMS));
    return DEFAULT_CART_ITEMS;
  }
  try {
    return JSON.parse(stored);
  } catch (e) {
    return DEFAULT_CART_ITEMS;
  }
}

function saveCartItems(items) {
  localStorage.setItem('zarindaneh_cart', JSON.stringify(items));
  updateCartBadge();
}

function updateCartBadge() {
  const items = getCartItems();
  const totalCount = items.reduce((acc, item) => acc + item.quantity, 0);
  document.querySelectorAll('[data-cart-badge]').forEach(badge => {
    badge.textContent = toPersianDigits(totalCount);
  });
}

// Toast notification helper
function showToast(message, duration = 3000) {
  let toast = document.getElementById('global-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'global-toast';
    toast.className = 'fixed bottom-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 bg-primary text-on-primary px-6 py-3 rounded-xl shadow-2xl flex items-center gap-3 text-center opacity-0 pointer-events-none';
    toast.innerHTML = `
      <span class="material-symbols-outlined text-secondary-container text-[20px]" style="font-variation-settings: 'FILL' 1;">check_circle</span>
      <span id="global-toast-text" class="font-label-md text-label-md"></span>
    `;
    document.body.appendChild(toast);
  }

  const textEl = document.getElementById('global-toast-text');
  if (textEl) textEl.textContent = message;

  toast.classList.remove('opacity-0', 'pointer-events-none');
  toast.classList.add('opacity-100');

  setTimeout(() => {
    toast.classList.remove('opacity-100');
    toast.classList.add('opacity-0', 'pointer-events-none');
  }, duration);
}

// Copy tracking code
function copyTrackingCode(code = 'ZRN-۹۸۴۲۱') {
  navigator.clipboard.writeText(code).then(() => {
    showToast('کد پیگیری با موفقیت در حافظه کپی شد');
  }).catch(() => {
    showToast('کد پیگیری: ' + code);
  });
}

// Product detail tab switcher
function switchTab(tabId, triggerBtn) {
  document.querySelectorAll('.tab-pane').forEach(el => {
    el.classList.add('hidden');
    el.classList.remove('flex');
  });
  const activePane = document.getElementById('tab-' + tabId);
  if (activePane) {
    activePane.classList.remove('hidden');
    activePane.classList.add('flex');
  }

  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.classList.remove('bg-primary', 'text-on-primary', 'shadow-sm');
    btn.classList.add('text-on-surface-variant', 'hover:bg-surface-container-low');
  });
  if (triggerBtn) {
    triggerBtn.classList.add('bg-primary', 'text-on-primary', 'shadow-sm');
    triggerBtn.classList.remove('text-on-surface-variant', 'hover:bg-surface-container-low');
  }
}

// Product detail gallery image updater
function updateGalleryImage(buttonEl, promptText, imgSrc) {
  const mainImg = document.getElementById('main-product-image');
  if (mainImg) {
    if (imgSrc) {
      mainImg.src = imgSrc;
    } else {
      const thumbImg = buttonEl.querySelector('img');
      if (thumbImg && thumbImg.src) mainImg.src = thumbImg.src;
    }
    if (promptText) mainImg.setAttribute('data-alt', promptText);
  }

  document.querySelectorAll('.thumbnail-btn').forEach(btn => {
    btn.classList.remove('ring-2', 'ring-primary', 'opacity-100');
    btn.classList.add('opacity-75');
  });
  buttonEl.classList.add('ring-2', 'ring-primary', 'opacity-100');
  buttonEl.classList.remove('opacity-75');
}

// Product detail weight/packaging variant selector
let currentVariantPrice = 185000;
function selectVariant(btn, rawPrice, displayPrice) {
  currentVariantPrice = parseInt(rawPrice.replace(/,/g, ''), 10) || 185000;
  document.querySelectorAll('.variant-btn').forEach(el => {
    el.classList.remove('ring-2', 'ring-primary', 'bg-surface-container-lowest');
    el.classList.add('bg-surface-container-low');
    const icon = el.querySelector('.material-symbols-outlined');
    if (icon) {
      icon.textContent = 'radio_button_unchecked';
      icon.className = 'material-symbols-outlined text-outline/30 text-[18px]';
    }
  });

  btn.classList.add('ring-2', 'ring-primary', 'bg-surface-container-lowest');
  btn.classList.remove('bg-surface-container-low');
  const activeIcon = btn.querySelector('.material-symbols-outlined');
  if (activeIcon) {
    activeIcon.textContent = 'check_circle';
    activeIcon.className = 'material-symbols-outlined text-secondary-container text-[18px]';
  }

  const priceElem = document.getElementById('product-price');
  if (priceElem) {
    priceElem.textContent = displayPrice;
  }
}

// Product detail quantity stepper
let currentDetailQuantity = 1;
function changeQty(delta) {
  currentDetailQuantity = Math.max(1, currentDetailQuantity + delta);
  const qtyElem = document.getElementById('cart-quantity');
  if (qtyElem) {
    qtyElem.textContent = toPersianDigits(currentDetailQuantity);
  }
}

// Wishlist toggle
function toggleWishlist(btn) {
  const icon = btn.querySelector('.material-symbols-outlined');
  if (icon) {
    const isFilled = icon.style.fontVariationSettings?.includes("'FILL' 1") || icon.classList.contains('fill-1');
    if (isFilled) {
      icon.style.fontVariationSettings = "'FILL' 0";
      icon.classList.remove('fill-1');
      btn.classList.remove('text-error');
      showToast('محصول از لیست علاقه‌مندی‌ها حذف شد');
    } else {
      icon.style.fontVariationSettings = "'FILL' 1";
      icon.classList.add('fill-1');
      btn.classList.add('text-error');
      showToast('محصول به لیست علاقه‌مندی‌ها افزوده شد');
    }
  }
}

// Add to Cart handler
function addToCart(title, price, quantity = 1, image = 'assets/images/product-saffron-1g.jpg') {
  const items = getCartItems();
  const existing = items.find(i => i.title === title);
  if (existing) {
    existing.quantity += quantity;
  } else {
    items.push({
      id: 'item-' + Date.now(),
      title: title,
      subtitle: 'دستچین اعلای زرین‌دانه',
      price: price,
      quantity: quantity,
      image: image
    });
  }
  saveCartItems(items);
  showToast(`${toPersianDigits(quantity)} بسته از «${title}» به سبد خرید افزوده شد.`);
}

// Initialize on DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
  updateCartBadge();

  // Highlight active nav link based on current page path
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('header nav a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.className = 'px-space-sm py-space-xs transition-all bg-primary-container text-on-primary rounded-lg font-semibold';
      link.setAttribute('aria-current', 'page');
    }
  });

  // Wire search buttons to prompt
  document.querySelectorAll('button[aria-label="جستجو"]').forEach(btn => {
    btn.addEventListener('click', () => {
      const query = prompt('نام محصول مورد نظر خود را برای جستجو وارد کنید: (مثال: زعفران، پسته، گز)');
      if (query && query.trim()) {
        window.location.href = `products.html?search=${encodeURIComponent(query.trim())}`;
      }
    });
  });

  // Wire favorite buttons across site
  document.querySelectorAll('button[aria-label="افزودن به علاقه‌مندی‌ها"]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      toggleWishlist(btn);
    });
  });
});
