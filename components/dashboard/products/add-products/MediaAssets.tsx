"use client";

import React, { useState } from "react";
import { Image as ImageIcon, Plus, Trash2 } from "lucide-react";

interface MediaAssetsProps {
  maxImages?: number;
  images: string[];
  onChange: (images: string[]) => void;
}

const MediaAssets: React.FC<MediaAssetsProps> = ({
  maxImages = 5,
  images,
  onChange,
}) => {
  const handleRemoveImage = (index: number) => {
    onChange(images.filter((_, i) => i !== index));
  };

  const handleAddImage = (file: File) => {
    const url = URL.createObjectURL(file);
    onChange([...images, url]);
  };

  return (
    <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm">
      <div className="mb-8 flex items-center justify-between">
        <h3 className="flex items-center gap-2 text-sm font-black uppercase tracking-[0.15em] text-primary">
          <ImageIcon className="h-4 w-4" />
          Media Assets
        </h3>

        <span className="text-xs font-bold text-gray-400">
          {images.length} / {maxImages}
        </span>
      </div>

      <div className="flex flex-wrap items-center gap-4">
        {images.map((imgUrl, index) => (
          <div
            key={index}
            className="group relative h-24 w-24 overflow-hidden rounded-2xl border border-gray-100 bg-gray-50 shadow-inner"
          >
            <img
              src={imgUrl}
              alt={`Product preview ${index + 1}`}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />

            {index === 0 && (
              <span className="absolute bottom-1.5 left-1/2 -translate-x-1/2 rounded-full bg-primary px-2 py-0.5 text-[9px] font-black tracking-wider text-white shadow-sm">
                PRIMARY
              </span>
            )}

            <button
              type="button"
              onClick={() => handleRemoveImage(index)}
              className="absolute right-1.5 top-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-black/60 text-white opacity-0 transition-opacity group-hover:opacity-100 hover:bg-rose-500"
            >
              <Trash2 className="h-3 w-3" />
            </button>
          </div>
        ))}

        {images.length < maxImages && (
          <label className="flex h-24 w-24 cursor-pointer flex-col items-center justify-center gap-1.5 rounded-2xl border-2 border-dashed border-gray-200 bg-gray-50/50 text-gray-400 transition-all hover:border-primary hover:bg-primary/5 hover:text-primary">
            <Plus className="h-5 w-5" />

            <span className="text-[10px] font-black uppercase tracking-wider">
              Upload
            </span>

            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => {
                const file = e.target.files?.[0];

                if (file) {
                  handleAddImage(file);
                }
              }}
            />
          </label>
        )}
      </div>
    </div>
  );
};

export default MediaAssets;