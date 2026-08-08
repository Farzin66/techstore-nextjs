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
    wishlist: [],

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

