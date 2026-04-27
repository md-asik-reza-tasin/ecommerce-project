"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext"; // 1. Import useAuth

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  
  // 2. Get real user and logout from context
  const { user, logout, loading } = useAuth();

  return (
    <nav className="p-4 sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        
        {/* Logo */}
        <div className="text-xl font-bold text-gray-900">
          <Link href="/">Florra</Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-gray-600 font-medium">
          <Link href="/" className="hover:text-black transition">Home</Link>
          <Link href="/items" className="hover:text-black transition">Shop</Link>
          <Link href="/categories" className="hover:text-black transition">Categories</Link>
          <Link href="/about" className="hover:text-black transition">About</Link>
          <Link href="/contact" className="hover:text-black transition">Contact</Link>
        </div>

        {/* Right Side */}
        <div className="hidden md:flex items-center gap-4 relative">
          
          {/* While Firebase checks auth status, we can show a small loading state */}
          {loading ? (
             <div className="w-8 h-8 rounded-full bg-gray-100 animate-pulse" />
          ) : !user ? (
            /* Guest User */
            <>
              <Link
                href="/auth/login"
                className="text-gray-600 hover:text-black transition"
              >
                Login
              </Link>

              <Link
                href="/auth/register"
                className="bg-black text-white px-4 py-2 rounded-xl hover:opacity-90 transition"
              >
                Register
              </Link>
            </>
          ) : (
            /* Logged-in User Dropdown */
            <div className="relative">
              <button
                onClick={() => setDropdown(!dropdown)}
                className="flex items-center gap-2 rounded-lg hover:bg-gray-100 transition"
              >
                {/* User Avatar - Shows first letter of name or Google profile pic */}
                {user?.photoURL ? (
                  <img src={user.photoURL} alt="User" className="w-8 h-8 rounded-full border" />
                ) : (
                  <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center font-semibold text-white text-sm">
                    {user?.displayName?.charAt(0) || user?.email?.charAt(0) || "U"}
                  </div>
                )}

                
              </button>

              {/* Dropdown Menu */}
              {dropdown && (
                <div 
                  className="absolute right-0 mt-3 w-56 bg-white border border-gray-200 rounded-xl shadow-xl overflow-hidden py-1"
                  onMouseLeave={() => setDropdown(false)} // Closes when mouse leaves
                >
                  <div className="px-4 py-3 border-black/20 border-b bg-gray-50/50">
                    <p className="font-bold text-gray-900 truncate">
                      {user?.displayName || "User"}
                    </p>
                    <p className="text-xs text-gray-500 truncate">
                      {user?.email}
                    </p>
                  </div>

                  <Link
                    href="/add-product"
                    className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-100 transition"
                    onClick={() => setDropdown(false)}
                  >
                    Add Product
                  </Link>

                  <Link
                    href="/manage-products"
                    className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-100 transition"
                    onClick={() => setDropdown(false)}
                  >
                    Manage Products
                  </Link>

                  <div className="border-black/20 border-t mt-1">
                    <button
                      onClick={() => {
                        logout();
                        setDropdown(false);
                      }}
                      className="w-full text-left px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 transition"
                    >
                      Logout
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-gray-700 text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-6 space-y-3 text-gray-700 bg-white border-t pt-4">
          <Link href="/" className="block py-1">Home</Link>
          <Link href="/items" className="block py-1">Shop</Link>
          <Link href="/categories" className="block py-1">Categories</Link>

          {!user ? (
            <div className="flex flex-col gap-2 pt-2 border-t">
              <Link href="/auth/login" className="block py-2">Login</Link>
              <Link href="/auth/register" className="block py-2 font-bold text-black">Register</Link>
            </div>
          ) : (
            <div className="pt-2 border-t space-y-3">
              <div className="flex items-center gap-2 py-2">
                 <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center text-xs">
                    {user?.displayName?.charAt(0)}
                 </div>
                 <p className="font-bold text-black">{user?.displayName}</p>
              </div>
              <Link href="/add-product" className="block text-gray-600">Add Product</Link>
              <Link href="/manage-products" className="block text-gray-600">Manage Products</Link>
              <button
                onClick={logout}
                className="block text-left w-full text-red-500 font-medium"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      )}
    </nav>
  );
}