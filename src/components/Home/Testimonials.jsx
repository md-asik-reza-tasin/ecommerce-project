const reviews = [
  {
    name: "Rahim Uddin",
    role: "Verified Buyer",
    text: "Amazing quality products! Fast delivery and exactly what I ordered. Highly recommended store.",
  },
  {
    name: "Ayesha Khan",
    role: "Happy Customer",
    text: "Great shopping experience. Affordable prices and excellent customer support.",
  },
  {
    name: "Tanvir Hasan",
    role: "Regular Customer",
    text: "Very smooth ordering system. Products always arrive on time and in perfect condition.",
  },
];

export default function Testimonials() {
  return (
    <section className="w-full max-w-7xl mt-20 mx-auto px-6">
      
      {/* Header */}
      <div className="mb-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          What Our Customers Say
        </h2>
        <p className="text-gray-600 mt-2">
          Real feedback from verified buyers
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