const features = [
  {
    title: "Best Price Guarantee",
    desc: "We offer competitive pricing with no hidden charges.",
  },
  {
    title: "Easy Booking",
    desc: "Book your trips quickly with a smooth process.",
  },
  {
    title: "24/7 Support",
    desc: "Our team is always available to help you anytime.",
  },
  {
    title: "Trusted Agency",
    desc: "Thousands of happy travelers trust our service.",
  },
];

export default function Choose() {
  return (
    <section className="w-full max-w-7xl my-20">
      
      {/* Section Header */}
      <div className="mb-10 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Why Choose Us
        </h2>
        <p className="text-gray-600 mt-2">
          We make your travel experience simple and reliable
        </p>
      </div>

      {/* Cards */}
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-2">
        {features.map((item, i) => (
          <div
            key={i}
            className="bg-white p-6 
                       hover:shadow-lg transition duration-300 cursor-pointer"
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {item.title}
            </h3>
            <p className="text-sm text-gray-600">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}