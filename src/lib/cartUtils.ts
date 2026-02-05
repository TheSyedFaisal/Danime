import { CartItem } from "./constant";

export const formatPrice = (priceInCents: number): string => {
  return `$${(priceInCents / 100).toFixed(2)}`;
};

export const calculateItemTotal = (price: number, quantity: number): number => {
  return price * quantity;
};

export const generateCartItemId = (productId: number, size: string): string => {
  return `${productId}-${size}`;
};

const CART_STORAGE_KEY = "danime_shopping_cart";

export const loadCartFromStorage = (): CartItem[] => {
  if (typeof window === "undefined") return [];

  try {
    const cartData = localStorage.getItem(CART_STORAGE_KEY);
    return cartData ? JSON.parse(cartData) : [];
  } catch (error) {
    console.error("Error loading cart from storage:", error);
    return [];
  }
};

export const saveCartToStorage = (cart: CartItem[]): void => {
  if (typeof window === "undefined") return;

  try {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
  } catch (error) {
    console.error("Error saving cart to storage:", error);
  }
};

export const clearCartStorage = (): void => {
  if (typeof window === "undefined") return;

  try {
    localStorage.removeItem(CART_STORAGE_KEY);
  } catch (error) {
    console.error("Error clearing cart storage:", error);
  }
};
