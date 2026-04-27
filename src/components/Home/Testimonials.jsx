const reviews = [
  {
    name: "Rahim Uddin",
    role: "Traveler",
    text: "Amazing experience! Everything was smooth from booking to returning. Highly recommended.",
  },
  {
    name: "Ayesha Khan",
    role: "Tourist",
    text: "Best travel agency I’ve used. Great support and affordable packages.",
  },
  {
    name: "Tanvir Hasan",
    role: "Business Traveler",
    text: "Professional service and very easy booking system. Saved me a lot of time.",
  },
];

export default function Testimonials() {
  return (
    <section className="w-full max-w-7xl mt-20 mx-auto px-6">
      
      {/* Header */}
      <div className="mb-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          What Our Clients Say
        </h2>
        <p className="text-gray-600 mt-2">
          Real feedback from happy travelers
        </p>
      </div>

      {/* Cards */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {reviews.map((item, i) => (
          <div
            key={i}
            className="bg-white p-6 
                       hover:shadow-xl hover:-translate-y-1 
                       transition duration-300"
          >
            
            {/* Quote */}
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              “{item.text}”
            </p>

            {/* User */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center font-semibold text-gray-700">
                {item.name.charAt(0)}
              </div>

              <div>
                <h4 className="text-gray-900 font-semibold">
                  {item.name}
                </h4>
                <p className="text-xs text-gray-500">
                  {item.role}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}