import { create } from 'zustand'
import { Product } from '@/types/products/products'

interface WishlistState {
    wishlist: Product[];
    isInWishlist: (id:  string) => boolean;

    addToWishlist : (product: Product) => void;
    removeFromWishlist : (id: string) => void;
    clearWishlist : () => void;
    toggleWishlist : (product: Product) => void;

}


const useWishlistStore = create<WishlistState>((set, get) => ({
    wishlist: [
      {
        name: "Mac Studio M4 Max",
        _id: "123",
        price: 285000,
        stock: 10,
        avgRating: 4.8,
        mainImage: "/images/mac-studio-m4-max/Mac-Studio-M4-Max-preview.webp",
      }as Product,

      {
        name: "ROG Azoth Extreme",
        _id: "1234",
        price: 63999,
        stock: 0,
        avgRating: 4.2,
        mainImage: "/images/rog-azoth-extreme/ROG-Azoth-Extreme-preview.webp",
      }as Product,
    ],

    isInWishlist: (id)=>{
         return get().wishlist.some((item) => item._id === id)
        },

    addToWishlist: (product)=>
        set((state)=>({
            wishlist: [...state.wishlist, product]
        })),
    
    removeFromWishlist: (id)=>
        set((state)=>({
            wishlist: state.wishlist.filter((item)=> item._id !== id)
        })),

    clearWishlist: ()=> set({wishlist: []}), 
    
    toggleWishlist: (product)=>
        set((state)=>{
            const isAlreadyInWishlist = state.wishlist.some((item)=> item._id === product._id);
            if (isAlreadyInWishlist){
                return { wishlist: state.wishlist.filter((item)=> item._id !== product._id)};
            }else{
                return { wishlist: [...state.wishlist, product] };
            }
        })

}))

export default useWishlistStore;

