"use client"
import { formatPrice } from "@/lib/formatPrice";
import { Product } from "@/types/products/products";
import { Trash2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

  const product: Partial<Product> = {
    name: "Mac Studio M4 Max",
    limit: 10,
    _id: "6a66299987913b4d83cba2c2",
    description: `Apple Mac Studio M4 Max
        The Apple Mac Studio M4 Max is Apple’s most advanced compact desktop, designed for professionals who need workstation-level performance in a sleek, space-saving design.
        Powered by the M4 Max chip, this Mac Studio combines a 14-core CPU, 32-core GPU, and 16-core Neural Engine to deliver extreme speed for creative workflows, AI tasks, and high-end productivity.
        With support for up to five displays, Thunderbolt 5 connectivity, and 10Gb Ethernet, the Apple Mac Studio M4 Max is built to be the ultimate hub for video editors, 3D artists, developers, and content creators.`,
    price: 285000,
    regularPrice: 313500,
    avgRating: 0,
    images: [
      "/images/mac-studio-m4-max/Mac-Studio-M4-Max-1.webp",
      "/images/mac-studio-m4-max/Mac-Studio-M4-Max-2.webp",
      "/images/mac-studio-m4-max/Mac-Studio-M4-Max-3.webp",
    ],

    mainImage: "/images/mac-studio-m4-max/Mac-Studio-M4-Max-preview.webp",
    brand: "Apple",

    stock: 10,
    code: "EB676E",

    keyFeatures: [
      {
        title: "Chip",
        value: "Apple M4 Max",
      },
      {
        title: "CPU",
        value: "14-Core",
      },
      {
        title: "GPU",
        value: "32-Core",
      },
      {
        title: "Memory",
        value: "36GB Unified",
      },
    ],

    technicalSpecifications: [
      {
        title: "Processor",
        value: "Apple M4 Max",
      },
      {
        title: "CPU",
        value: "14-Core",
      },
      {
        title: "GPU",
        value: "32-Core",
      },
      {
        title: "Neural Engine",
        value: "16-Core",
      },
      {
        title: "Memory",
        value: "36GB Unified Memory",
      },
      {
        title: "Storage",
        value: "1TB SSD",
      },
      {
        title: "Ports",
        value: "Thunderbolt 5, HDMI, USB-C",
      },
      {
        title: "Networking",
        value: "Wi-Fi 6E, Bluetooth 5.3, 10Gb Ethernet",
      },
      {
        title: "Operating System",
        value: "macOS",
      },
      {
        title: "Color",
        value: "Silver",
      },
    ],
  };

const CartItemCard = () => {
  const [quantity, setQuantity] = useState(1);
  const decreaseQuantity = () => {
    setQuantity((prev) => {
      if (prev <= 1) {
        return 1;
      }
      return prev - 1;
    });
  };

  const increaseQuantity = () => {
    setQuantity((prev) => {
      if (prev >= product.stock!) {
        return product.stock!;
      }
      return prev + 1;
    });
  };

  return (
    
    <div className="group relative bg-white rounded-lg border border-gray-50 items-center overflow-hidden transition-all duration-300 flex flex-row hover:shadow-lg">
      <Link href={`/products/${product._id}`}>
        <Image
          src={product.mainImage!}
          alt={product.name!}
          priority={true}
          sizes="(max-width: 768px) 50vw, (max-width: 1280px) 33vw, 20vw"
          width={120}
          height={120}
          className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
        />
      </Link>
      <div className="flex-1 p-6 flex flex-col justify-between">
        <span className="text-[9px] text-primary font-bold uppercase tracking-wider">
          {product.brand}
        </span>
        <div className="flex justify-between">
          <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-primary transition-colors">
            {product.name}
          </h3>
          <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden h-12 sm:h-14 w-44 shadow-sm bg-white">
            <button
              disabled={quantity <= 1}
              onClick={decreaseQuantity}
              className="w-12 sm:w-16 h-full border-r border-gray-100 flex items-center justify-center text-lg sm:text-xl font-bold transition-all duration-200 hover:bg-gray-50 active:scale-95 disabled:bg-gray-50 disabled:text-gray-300 disabled:cursor-not-allowed disabled:hover:bg-gray-50 disabled:active:scale-100"
            >
              -
            </button>
            <span className="flex-1 xl:flex-none px-4 sm:px-10 font-bold text-slate-800 text-sm sm:text-lg min-w-[50px] sm:min-w-[80px] text-center flex items-center justify-center bg-white">
              {quantity}
            </span>
            <button
              disabled={quantity >= product.stock!}
              onClick={increaseQuantity}
              className="w-12 sm:w-16 h-full border-l border-gray-100 flex items-center justify-center text-lg sm:text-xl font-bold transition-all duration-200 hover:bg-gray-50 active:scale-95 disabled:bg-gray-50 disabled:text-gray-300 disabled:cursor-not-allowed disabled:hover:bg-gray-50 disabled:active:scale-100"
            >
              +
            </button>
          </div>
          <div className="w-10 h-10 sm:w-14 sm:h-14 border-2 rounded-lg flex items-center justify-center transition-all flex-shrink-0 border-gray-50 text-gray-300 hover:text-red-500 hover:border-red-500">
            <Trash2 className="w-5 h-5"/>
          </div>
        </div>
        <div className="flex flex-col">
          <span className="text-base font-bold text-primary">৳{formatPrice(product.price!)}</span>
          <span className="text-[10px] text-gray-400 line-through">
            ৳{formatPrice(product.regularPrice!)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CartItemCard;
