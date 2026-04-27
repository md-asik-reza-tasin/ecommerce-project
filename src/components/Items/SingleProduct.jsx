"use client";

import React from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { products } from "@/data/items";


export default function SingleProduct() {
  const params = useParams();
  const id = Number(params?.id);

  const product = products.find((item) => item.id === id);

  if (!product) {
    return (
      <div className="text-center py-20 text-gray-500">
        Product not found
      </div>
    );
  }

  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-12">
      
      <div className="grid md:grid-cols-2 gap-10 items-start">

        {/* Image */}
        <div className="relative w-full h-[450px] overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            fill="cover"
            className="object-cover"
          />
        </div>

        {/* Details */}
        <div>

          <span className="text-sm text-gray-500">
            {product.category}
          </span>

          <h1 className="text-3xl font-bold text-gray-900 mt-2">
            {product.name}
          </h1>

          <p className="text-gray-600 mt-4 leading-relaxed">
            {product.description}
          </p>

          <p className="text-2xl font-bold text-gray-900 mt-6">
            ৳{product.price}
          </p>

          {/* Actions */}
          <div className="flex gap-4 mt-6">
            <button className="bg-black text-white px-6 py-3 rounded-xl hover:opacity-90 transition">
              Add to Cart
            </button>

            <button className="border border-gray-300 px-6 py-3 rounded-xl hover:bg-gray-100 transition">
              Buy Now
            </button>
          </div>

          {/* Extra Info */}
          <div className="mt-8 text-sm text-gray-500 space-y-1">
            <p>✔ Free Delivery Available</p>
            <p>✔ 7 Days Return Policy</p>
            <p>✔ Cash on Delivery</p>
          </div>

        </div>

      </div>
    </section>
  );
}