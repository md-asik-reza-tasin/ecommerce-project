"use client";

import Image from "next/image";
import { products } from "@/data/items.js";
import Link from "next/link";

export default function HomeProducts() {
  const homeProducts = products.slice(0, 6);

  return (
    <section className="w-full max-w-7xl my-20 mx-auto px-6">
      
      {/* Header */}
      <div className="flex items-end justify-between mb-10">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Featured Products
          </h2>
          <p className="text-gray-600 mt-2">
            Best picks curated for you
          </p>
        </div>

        {/* See More */}
        <Link
          href="/items"
          className="text-sm font-medium text-black hover:underline"
        >
          See More →
        </Link>
      </div>

      {/* Grid */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {homeProducts.map((item) => (
          <div
            key={item.id}
            className="group bg-white overflow-hidden 
                       hover:shadow-xl hover:-translate-y-1 transition duration-300"
          >
            
            {/* Image */}
            <div className="relative w-full bg-gray-100">
              <img
                src={item.image}
                alt={item.name}
                fill="cover"
                className="w-full h-56 object-cover group-hover:scale-105 transition duration-500"
              />
            </div>

            {/* Content */}
            <div className="p-5">
              
              <span className="text-xs text-gray-500">
                {item.category}
              </span>

              <h3 className="text-lg font-semibold text-gray-900 mt-1">
                {item.name}
              </h3>

              <p className="text-sm text-gray-600 mt-2 line-clamp-2">
                {item.description}
              </p>

              {/* Price + Button */}
              <div className="flex items-center justify-between mt-4">
                <span className="text-lg font-bold text-gray-900">
                  ৳{item.price}
                </span>

                <Link
                  href={`/items/${item.id}`}
                  className="px-4 py-2 text-sm bg-black text-white rounded-xl hover:opacity-90 transition"
                >
                 View Details
                </Link>
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}