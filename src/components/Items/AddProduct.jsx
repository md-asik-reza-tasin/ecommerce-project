"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import toast from "react-hot-toast";

export default function AddProduct() {
  const router = useRouter();
  const { user, loading } = useAuth();

  const [form, setForm] = useState({
    title: "",
    shortDesc: "",
    fullDesc: "",
    price: "",
    image: "",
  });

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login");
    }
  }, [user, loading, router]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newProduct = {
      id: Date.now(),
      ...form,
    };

    const existing = JSON.parse(localStorage.getItem("products")) || [];

    localStorage.setItem(
      "products",
      JSON.stringify([...existing, newProduct])
    );

    toast.success("Product added successfully");

    setForm({
      title: "",
      shortDesc: "",
      fullDesc: "",
      price: "",
      image: "",
    });
  };

  if (loading) return <p className="p-10">Loading...</p>;

  return (
    <section className="w-full max-w-2xl mx-auto px-6 py-10">

      <h1 className="text-2xl font-bold mb-6">Add Product</h1>

      <form
        onSubmit={handleSubmit}
        className="space-y-4 bg-white p-6 rounded-xl shadow"
      >

        <input
          name="title"
          value={form.title}
          onChange={handleChange}
          placeholder="Title"
          className="w-full border p-3 rounded"
          required
        />

        <input
          name="shortDesc"
          value={form.shortDesc}
          onChange={handleChange}
          placeholder="Short Description"
          className="w-full border p-3 rounded"
          required
        />

        <textarea
          name="fullDesc"
          value={form.fullDesc}
          onChange={handleChange}
          placeholder="Full Description"
          className="w-full border p-3 rounded"
          rows={4}
          required
        />

        <input
          name="price"
          value={form.price}
          onChange={handleChange}
          placeholder="Price"
          type="number"
          className="w-full border p-3 rounded"
          required
        />

        <input
          name="image"
          value={form.image}
          onChange={handleChange}
          placeholder="Image URL"
          className="w-full border p-3 rounded"
        />

        <button
          type="submit"
          className="w-full bg-black text-white py-3 rounded"
        >
          Submit
        </button>

      </form>
    </section>
  );
}