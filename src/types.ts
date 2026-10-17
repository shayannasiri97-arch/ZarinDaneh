export type CategoryId = 'all' | 'saffron' | 'nuts' | 'sweets' | 'tea' | 'honey' | 'gift';

export interface ProductVariant {
  weight: string;
  price: number;
  label: string;
}

export interface Product {
  id: string;
  name: string;
  subtitle: string;
  category: CategoryId;
  categoryLabel: string;
  province: string;
  price: number;
  originalPrice?: number;
  badge?: string;
  rating: number;
  reviewsCount: number;
  image: string;
  gallery: string[];
  description: string;
  features: string[];
  specs?: {
    crocinLevel?: string;
    harvestYear?: string;
    origin?: string;
    packaging?: string;
    shelfLife?: string;
  };
  variants?: ProductVariant[];
  featured?: boolean;
  bestseller?: boolean;
}

export interface CartItem {
  id: string;
  productId: string;
  name: string;
  subtitle: string;
  province?: string;
  price: number;
  quantity: number;
  image: string;
  selectedVariant?: string;
}

export interface CustomerOrder {
  orderId: string;
  date: string;
  name: string;
  phone: string;
  province: string;
  city: string;
  address: string;
  postalCode?: string;
  shippingMethod: string;
  paymentMethod: string;
  notes?: string;
  items: CartItem[];
  subtotal: number;
  discount: number;
  shippingFee: number;
  total: number;
}
