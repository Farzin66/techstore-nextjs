import { Schema, model, models } from "mongoose";

const ProductFeatureSchema = new Schema(
  {
    title: { type: String, required: true },
    value: { type: String, required: true },
  },
  { _id: false }
);

const ReviewSchema = new Schema(
  {
    userId: { type: String, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    rating: { type: Number, required: true, min: 1, max: 5 },
    comment: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
  },
  { _id: false }
);

const ProductSchema = new Schema(
  {
    name: { type: String, required: true },
    slug: { type: String, required: true, unique: true },

    description: { type: String, required: true },

    brand: { type: String },
    code: { type: String },

    category: {
      type: Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },

    price: { type: Number, required: true },
    regularPrice: { type: Number, required: true },

    stock: { type: Number, default: 0 },

    avgRating: { type: Number, default: 0 },
    numReviews: { type: Number, default: 0 },

    mainImage: { type: String, required: true },
    images: {
      type: [String],
      default: [],
    },

    keyFeatures: {
      type: [ProductFeatureSchema],
      default: [],
    },

    technicalSpecifications: {
      type: [ProductFeatureSchema],
      default: [],
    },

    reviews: {
      type: [ReviewSchema],
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

const Product = models.Product || model("Product", ProductSchema);

export default Product;