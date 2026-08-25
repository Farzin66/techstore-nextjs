import AddProductBanner from "./AddProductBanner";
import MediaAssets from "./MediaAssets";
import Organization from "./Organization";
import ProductInfo from "./ProductInfo";
import Stock from "./Stock";


const AddProduct = () => {
  return (
    <div className="mb-10 space-y-6">
      <AddProductBanner />

      <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <ProductInfo />
        </div>

        <div className="lg:col-span-1">
          <Organization />
        </div>
      </div>

      <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <MediaAssets />
        </div>

        <div className="lg:col-span-1">
          <Stock />
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
