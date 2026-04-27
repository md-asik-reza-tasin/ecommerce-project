"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import Link from "next/link";

export default function ManageProducts() {
  const router = useRouter();
  const { user, loading } = useAuth();

  const [products, setProducts] = useState([]);

  // Protect route
  useEffect(() => {
    if (!loading && !user) {
      router.push("/login");
    }
  }, [user, loading, router]);

  // Load products
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("products")) || [];
    setProducts(stored);
  }, []);

  // Delete product
  const handleDelete = (id) => {
    const updated = products.filter((item) => item.id !== id);

    setProducts(updated);
    localStorage.setItem("products", JSON.stringify(updated));
  };

  if (loading) return <p className="p-10">Loading...</p>;

  return (
    <section className=" w-full max-w-7xl mx-auto px-6 py-10">

      <h1 className="text-2xl font-bold mb-6">Manage Products</h1>

      {products.length === 0 ? (
        <p className="text-gray-500">No products found.</p>
      ) : (
        <div className="overflow-x-auto bg-white ">

          <table className="w-full text-left border-collapse">

            {/* Header */}
            <thead className="bg-gray-100">
              <tr>
                <th className="p-4">Image</th>
                <th className="p-4">Title</th>
                <th className="p-4">Price</th>
                <th className="p-4">Category</th>
                <th className="p-4 text-right">Actions</th>
              </tr>
            </thead>

            {/* Body */}
            <tbody>
              {products.map((item) => (
                <tr key={item.id} className="border-t">

                  {/* Image */}
                  <td className="p-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-14 h-14 object-cover rounded"
                    />
                  </td>

                  {/* Title */}
                  <td className="p-4 font-medium">
                    {item.name || item.title}
                  </td>

                  {/* Price */}
                  <td className="p-4">
                    ৳{item.price}
                  </td>

                  {/* Category */}
                  <td className="p-4 text-gray-600">
                    {item.category || "N/A"}
                  </td>

                  {/* Actions */}
                  <td className="p-4 text-right space-x-2">

                    <Link
                      href={`/products/${item.id}`}
                      className="px-3 py-1 text-sm bg-gray-200 rounded"
                    >
                      View
                    </Link>

                    <button
                      onClick={() => handleDelete(item.id)}
                      className="px-3 py-1 text-sm bg-red-500 text-white rounded"
                    >
                      Delete
                    </button>

                  </td>

                </tr>
              ))}
            </tbody>

          </table>

        </div>
      )}

    </section>
  );
}