import useWishlistStore from "@/app/stores/wishlist-store"
import WishlistItemCard from "./WishlistItemsCard"


const WishlistItems = () => {
  const wishlistItems = useWishlistStore((state)=> state.wishlist);

  return (
    <div className='grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-6'>
        {
            wishlistItems.map((product)=> (
                <WishlistItemCard key={product._id} product={product}/>
            ))
        }
    </div>
  )
}

export default WishlistItems