import Image from "next/image";
import dubai from "@/../public/dubai.jpg";
import maldives from "@/../public/maldives.jpg";
import thailand from "@/../public/thailand.jpg";
import singapore from "@/../public/singapore.jpg";

const destinations = [
  { name: "Dubai", image: dubai },
  { name: "Maldives", image: maldives },
  { name: "Thailand", image: thailand },
  { name: "Singapore", image: singapore },
];

export default function Popular() {
  return (
    <section className="w-full max-w-7xl my-20">
      
      {/* Section Header */}
      <div className="mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Popular Destinations
        </h2>
        <p className="text-gray-600 mt-2">
          Explore trending places loved by travelers
        </p>
      </div>

      {/* Cards */}
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
        {destinations.map((item, i) => (
          <div
            key={i}
            className="group relative rounded-2xl overflow-hidden cursor-pointer"
          >
            {/* Image */}
            <div className="relative w-full h-64">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover transition duration-500 group-hover:scale-110"
              />
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

            {/* Text */}
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-lg font-semibold">
                {item.name}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}