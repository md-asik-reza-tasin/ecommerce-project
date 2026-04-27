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
            About Our Travel Platform
          </h1>

          <p className="text-gray-200 mt-4 max-w-2xl">
            We make travel simple, affordable, and unforgettable. Your journey
            starts with the right experience.
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
          We are a modern travel and tour management platform dedicated to
          making travel planning simple, fast, and reliable for everyone. Our
          system is built to remove the stress of traditional travel booking by
          bringing flights, hotel packages, visa assistance, and tour planning
          into one seamless experience.
        </p>

        <p className="text-gray-600 leading-relaxed mb-4">
          Founded with the vision of transforming how people explore the world,
          we focus on delivering personalized travel solutions for both
          individuals and groups. Whether it’s a family vacation, business trip,
          or international tour package, we ensure every journey is carefully
          planned, cost-effective, and smooth from start to finish.
        </p>

        <p className="text-gray-600 leading-relaxed mb-6">
          Our platform integrates real-time availability, competitive pricing,
          and trusted travel partners to guarantee the best possible experience.
          We also provide dedicated customer support to assist travelers at
          every step—from planning and booking to reaching their destination
          safely.
        </p>

        <p className="text-gray-600 leading-relaxed mb-6">
          At the core of our mission is trust, transparency, and convenience. We
          believe travel should not be complicated or stressful—it should be
          exciting, accessible, and memorable for everyone. That is why we
          continuously improve our system with modern technology and
          user-focused features.
        </p>
      </div>
    </section>
  );
}
