import React from "react";
import heroImg from "@/../public/hero.jpg";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full h-[90vh] flex items-center">
      {/* Background Image */}
      <Image
        src={heroImg}
        alt="Hero Background"
        fill
        priority
        quality={100}
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center">
          
          {/* Left Content */}
          <div className="text-white space-y-6">
            {/* Headline */}
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Explore the World with Confidence
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-gray-200">
              Discover amazing destinations, plan your trips easily, and make unforgettable memories.
            </p>

            {/* CTA */}
            <div className="flex gap-4">
              <button className="border border-white px-6 py-3 rounded-xl font-medium hover:bg-white hover:text-black transition">
                Get Started
              </button>

              <button className="border border-white px-6 py-3 rounded-xl font-medium hover:bg-white hover:text-black transition">
                Learn More
              </button>
            </div>
          </div>

          {/* Right Side (optional content) */}
          <div />
        </div>
      </div>
    </section>
  );
}