"use client";
import React, { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [dropdown, setDropdown] = useState(false);

  return (
    <nav className="p-3 sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        
        {/* Logo */}
        <div className="text-xl font-semibold text-gray-900">
          <Link href="/">Florra</Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-gray-600 font-medium">
          <Link href="/" className="hover:text-black transition">Home</Link>
          <Link href="/products" className="hover:text-black transition">Products</Link>
          <Link href="/about" className="hover:text-black transition">About</Link>
          <Link href="/contact" className="hover:text-black transition">Contact</Link>
        </div>

        {/* Right Side */}
        <div className="hidden md:flex items-center gap-4 relative">
          {!user ? (
            <>
              <Link
                href="/login"
                className="text-gray-600 hover:text-black transition"
              >
                Login
              </Link>
              <Link
                href="/register"
                className="bg-black text-white px-4 py-2 rounded-xl hover:opacity-90 transition"
              >
                Register
              </Link>
            </>
          ) : (
            <div className="relative">
              <button
                onClick={() => setDropdown(!dropdown)}
                className="flex items-center gap-2 text-gray-700 hover:text-black"
              >
                <span>{user?.name || "User"}</span>
              </button>

              {dropdown && (
                <div className="absolute right-0 mt-3 w-52 bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden">
                  <div className="p-3 border-b">
                    <p className="font-semibold text-gray-900">
                      {user?.name}
                    </p>
                    <p className="text-sm text-gray-500">
                      {user?.email}
                    </p>
                  </div>

                  <Link
                    href="/add-product"
                    className="block px-4 py-2 hover:bg-gray-100 transition"
                  >
                    Add Product
                  </Link>
                  <Link
                    href="/manage-products"
                    className="block px-4 py-2 hover:bg-gray-100 transition"
                  >
                    Manage Products
                  </Link>

                  <button
                    onClick={() => setUser(null)}
                    className="w-full text-left px-4 py-2 hover:bg-gray-100 transition"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 text-gray-700">
          <Link href="/" className="block">Home</Link>
          <Link href="/products" className="block">Products</Link>
          <Link href="/about" className="block">About</Link>
          <Link href="/contact" className="block">Contact</Link>

          {!user ? (
            <>
              <Link href="/login" className="block">Login</Link>
              <Link href="/register" className="block">Register</Link>
            </>
          ) : (
            <>
              <p className="pt-2 border-t">{user?.name}</p>
              <Link href="/add-product" className="block">Add Product</Link>
              <Link href="/manage-products" className="block">Manage Products</Link>
              <button onClick={() => setUser(null)} className="block">
                Logout
              </button>
            </>
          )}
        </div>
      )}
    </nav>
  );
}