import AddProductBanner from "./AddProductBanner";
import MediaAssets from "./MediaAssets";
import Organization from "./Organization";
import ProductInfo from "./ProductInfo";
import Stock from "./Stock";
import Specifications from "./Specifications";

const AddProduct = () => {
  return (
    <div className="mb-10 space-y-6">
      <AddProductBanner />

   
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 items-start">
        
        <div className="space-y-6 lg:col-span-2">
          <ProductInfo />
          <MediaAssets />
          <Specifications />
        </div>

        <div className="space-y-6 lg:col-span-1">
          <Organization />
          <Stock />
        </div>

      </div>
    </div>
  );
};

export default AddProduct;
