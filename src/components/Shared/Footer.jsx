import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-20">
      
      <div className="max-w-7xl mx-auto px-6 py-12 grid gap-10 md:grid-cols-4">
        
        {/* Brand */}
        <div>
          <h2 className="text-xl font-semibold text-gray-900">Florra</h2>
          <p className="mt-3 text-gray-600 text-sm">
            Your trusted online store for fashion, electronics, and lifestyle products. Quality, affordability, and fast delivery in one place.
          </p>
        </div>

        {/* Shop Links */}
        <div>
          <h3 className="text-gray-900 font-medium mb-3">Shop</h3>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li><Link href="/products">All Products</Link></li>
            <li><Link href="/categories">Categories</Link></li>
            <li><Link href="/offers">Hot Deals</Link></li>
            <li><Link href="/new-arrivals">New Arrivals</Link></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-gray-900 font-medium mb-3">Company</h3>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/support">Support</Link></li>
            <li><Link href="/faq">FAQ</Link></li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-gray-900 font-medium mb-3">Follow Us</h3>
          <div className="flex flex-col gap-2 text-gray-600 text-sm">
            <a href="#" className="hover:text-black transition">Facebook</a>
            <a href="#" className="hover:text-black transition">Instagram</a>
            <a href="#" className="hover:text-black transition">Twitter</a>
            <a href="#" className="hover:text-black transition">LinkedIn</a>
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-gray-200 py-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Florra. All rights reserved.
      </div>

    </footer>
  );
}