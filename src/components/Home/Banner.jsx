import Link from "next/link";

export default function Banner() {
  return (
    <section className="w-full max-w-7xl my-20 mx-auto px-6">
      
      <div className="relative overflow-hidden bg-gradient-to-r from-gray-900 to-black">
        
        {/* Glow effect */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.15),transparent_60%)]" />

        {/* Content */}
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10 px-8 py-14">
          
          {/* Text */}
          <div className="text-white max-w-xl">
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              Discover Amazing Products at Best Prices
            </h2>
            <p className="text-gray-300 mt-3">
              Shop premium fashion, electronics, and lifestyle products with fast delivery and trusted service.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex gap-4">
            <Link
              href="/products"
              className="bg-white text-black px-6 py-3 rounded-xl font-medium hover:opacity-90 transition"
            >
              Shop Now
            </Link>

            <Link
              href="/contact"
              className="border border-white text-white px-6 py-3 rounded-xl font-medium hover:bg-white hover:text-black transition"
            >
              Support
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}