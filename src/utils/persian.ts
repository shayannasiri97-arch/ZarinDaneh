import { CartItem } from '../types';

export const TELEGRAM_USERNAME = 'zarindaneh';
export const SUPPORT_PHONE = '۰۲۱-۸۸۸۸۹۹۹۹';

export function toPersianDigits(num: number | string | null | undefined): string {
  if (num === null || num === undefined) return '';
  const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
  return num.toString().replace(/\d/g, (d) => persianDigits[parseInt(d, 10)]);
}

export function formatPersianPrice(amount: number): string {
  const formatted = amount.toLocaleString('en-US');
  return toPersianDigits(formatted);
}

export function orderViaTelegram(productName: string, price: number, quantity: number = 1): void {
  const pQty = toPersianDigits(quantity);
  const pPrice = formatPersianPrice(price);
  const message = `سلام و احترام،
مایل به ثبت سفارش از مجموعه زرین‌دانه هستم:
• محصول: ${productName}
• تعداد: ${pQty}
• قیمت واحد: ${pPrice} تومان

لطفاً اطلاعات پرداخت و هماهنگی ارسال را ارسال فرمایید. سپاسگزارم.`;

  const url = `https://t.me/${TELEGRAM_USERNAME}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
}

export function orderCartViaTelegram(items: CartItem[], total: number, customerInfo?: { name?: string; phone?: string; address?: string }): void {
  let text = `سلام و احترام،
درخواست ثبت و تسویه سفارش از فروشگاه زرین‌دانه:\n\n`;

  if (customerInfo && customerInfo.name) {
    text += `👤 تحویل‌گیرنده: ${customerInfo.name}\n`;
    text += `📞 تلفن: ${customerInfo.phone || '-'}\n`;
    text += `📍 نشانی: ${customerInfo.address || '-'}\n\n`;
  }

  text += `📦 اقلام سفارش:\n`;
  items.forEach((item, idx) => {
    const itemTotal = item.price * item.quantity;
    text += `${toPersianDigits(idx + 1)}. ${item.name} (${toPersianDigits(item.quantity)} عدد) — ${formatPersianPrice(itemTotal)} تومان\n`;
  });

  text += `\n💰 جمع کل فاکتور: ${formatPersianPrice(total)} تومان\n\nلطفاً شماره کارت یا درگاه و زمان ارسال را اعلام فرمایید. سپاسگزارم.`;

  const url = `https://t.me/${TELEGRAM_USERNAME}?text=${encodeURIComponent(text)}`;
  window.open(url, '_blank');
}
