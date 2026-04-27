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
            Discover amazing products and experiences. Built with quality and passion.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-gray-900 font-medium mb-3">Company</h3>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/careers">Careers</Link></li>
          </ul>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-gray-900 font-medium mb-3">Resources</h3>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/help">Help Center</Link></li>
            <li><Link href="/privacy">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-gray-900 font-medium mb-3">Follow Us</h3>
          <div className="flex gap-4 text-gray-600">
            <a href="#" className="hover:text-black transition">Facebook</a>
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