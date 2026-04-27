import Image from "next/image";
import aboutImg from "@/../public/dubai.jpg"; // you can replace later

export default function About() {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 pt-20">
      
      {/* Image */}
      <div className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-lg">
        
        {/* Image */}
        <Image src={aboutImg} alt="About us" fill className="object-cover" />

        {/* Black Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Centered Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            About Our Online Store
          </h1>

          <p className="text-gray-200 mt-4 max-w-2xl">
            We deliver high-quality products at the best prices with fast shipping and trusted service.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="text-center max-w-3xl mx-auto my-10">
        
        {/* Title */}
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Who We Are
        </h2>

        {/* Description */}
        <p className="text-gray-600 leading-relaxed mb-4">
          We are a modern eCommerce platform built to provide a smooth and reliable shopping experience for everyone. 
          Our goal is to connect customers with high-quality fashion, electronics, and lifestyle products in one convenient place.
        </p>

        <p className="text-gray-600 leading-relaxed mb-4">
          Founded with the vision of making online shopping simple and affordable, we focus on delivering trusted products at competitive prices. 
          Whether you are shopping for daily essentials, gadgets, or fashion items, we ensure a seamless and enjoyable experience from browsing to delivery.
        </p>

        <p className="text-gray-600 leading-relaxed mb-6">
          Our platform integrates secure payments, fast delivery services, and reliable product sourcing to guarantee customer satisfaction. 
          We work closely with verified sellers and logistics partners to ensure every order reaches you safely and on time.
        </p>

        <p className="text-gray-600 leading-relaxed mb-6">
          At the heart of our mission is trust, convenience, and quality. We believe online shopping should be easy, fast, and enjoyable. 
          That’s why we continuously improve our system with modern technology and customer-focused features to enhance your experience.
        </p>

      </div>

    </section>
  );
}