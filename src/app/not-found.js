import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-[80vh] flex flex-col items-center justify-center px-6">
      
      {/* Visual Element */}
      <h1 className="text-[120px] font-black text-gray-100 leading-none select-none">
        404
      </h1>
      
      {/* Text Content */}
      <div className="mt-[-40px] text-center">
        <h2 className="text-3xl font-bold text-gray-900">Page not found</h2>
        <p className="text-gray-500 mt-3 max-w-sm mx-auto">
          The page you are looking for doesn't exist or has been moved to a new URL.
        </p>
      </div>

      {/* Navigation Links */}
      <div className="mt-10 flex flex-col sm:flex-row gap-4 w-full max-w-xs sm:max-w-none justify-center">
        <Link
          href="/"
          className="px-8 py-4 bg-black text-white rounded-2xl font-semibold hover:opacity-90 transition text-center shadow-lg shadow-black/10 active:scale-95"
        >
          Back to Home
        </Link>
        
        <Link
          href="/items"
          className="px-8 py-4 border border-gray-200 text-gray-700 rounded-2xl font-semibold hover:bg-gray-50 transition text-center active:scale-95"
        >
          Shop All Products
        </Link>
      </div>

      {/* Decorative Footer */}
      <div className="mt-16 flex items-center gap-2 text-gray-400 text-sm">
        <span className="w-1.5 h-1.5 bg-gray-200 rounded-full" />
        <p>Florra - Modern Home Decor</p>
        <span className="w-1.5 h-1.5 bg-gray-200 rounded-full" />
      </div>

    </section>
  );
}