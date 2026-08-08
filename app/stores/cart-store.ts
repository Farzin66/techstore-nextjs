import { CartItem } from "@/types/products/cart-item";
import { Product } from "@/types/products/products";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface CartState {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
}

const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      cart: [],

      addToCart: (product) =>
        set((state) => {
          const existingItem = state.cart.find(
            (item) => item.product._id === product._id
          );

          if (existingItem) {
            return {
              cart: state.cart.map((item) =>
                item.product._id === product._id
                  ? {
                      ...item,
                      quantity: item.quantity + 1,
                    }
                  : item
              ),
            };
          }

          return {
            cart: [
              ...state.cart,
              {
                product,
                quantity: 1,
              },
            ],
          };
        }),

      removeFromCart: (id) =>
        set((state) => ({
          cart: state.cart.filter(
            (item) => item.product._id !== id
          ),
        })),

      updateQuantity: (id, quantity) =>
        set((state) => ({
          cart: state.cart.map((item) =>
            item.product._id === id
              ? { ...item, quantity }
              : item
          ),
        })),
    }),
    {
      name: "cart-storage",

      version: 1,
      
      migrate: () => {
        return {
          cart: [],
        };
      },
    }
  )
);

export default useCartStore;