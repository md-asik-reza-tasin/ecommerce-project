"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { products } from "@/data/items";


export default function Products() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [price, setPrice] = useState("all");

  const filteredProducts = products.filter((item) => {
    const matchSearch = item.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchCategory =
      category === "all" || item.category === category;

    const matchPrice =
      price === "all"
        ? true
        : price === "low"
        ? item.price < 1000
        : item.price >= 1000;

    return matchSearch && matchCategory && matchPrice;
  });

  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-10">

      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
          Products
        </h1>
        <p className="text-gray-600 mt-2">
          Search and filter your favorite items
        </p>
      </div>

      {/* Search + Filters */}
      <div className="grid md:grid-cols-3 gap-4 mb-10">

        {/* Search */}
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border border-gray-300 rounded-xl px-4 py-3 w-full"
        />

        {/* Category */}
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border border-gray-300 rounded-xl px-4 py-3 w-full"
        >
          <option value="all">All Categories</option>
          <option value="Fashion">Fashion</option>
          <option value="Electronics">Electronics</option>
          <option value="Footwear">Footwear</option>
          <option value="Accessories">Accessories</option>
          <option value="Furniture">Furniture</option>
        </select>

        {/* Price */}
        <select
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="border border-gray-300 rounded-xl px-4 py-3 w-full"
        >
          <option value="all">All Prices</option>
          <option value="low">Below 1000</option>
          <option value="high">1000 & Above</option>
        </select>

      </div>

      {/* Products Grid */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">

        {filteredProducts.map((item) => (
          <div
            key={item.id}
            className="bg-white overflow-hidden
                       hover:shadow-lg hover:-translate-y-1 transition duration-300"
          >

            {/* Image */}
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

              <p className="mt-3 font-bold text-gray-900">
                ৳{item.price}
              </p>

              <Link
                href={`/items/${item.id}`}
                className="inline-block mt-4 bg-black text-white px-4 py-2 rounded-xl hover:opacity-90 transition"
              >
                View Details
              </Link>

            </div>
          </div>
        ))}

      </div>

    </section>
  );
}