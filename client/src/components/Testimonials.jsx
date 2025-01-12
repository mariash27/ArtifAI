import { assets, testimonialsData } from "../assets/assets";

const Testimonials = () => {
  return (
    <div className="flex flex-col items-center justify-center my-20 p-6 sm:p-12 bg-gray-50">
      {/* Section Title */}
      <h1 className="text-3xl sm:text-4xl font-semibold mb-3 text-gray-800">
        Customer Testimonials
      </h1>
      <p className="text-lg text-gray-600 mb-10">What Our Users Are Saying</p>

      {/* Testimonials Container */}
      <div className="flex flex-wrap gap-8 justify-center">
        {testimonialsData.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-lg border w-80 hover:shadow-xl transition-shadow"
          >
            {/* User Avatar and Info */}
            <div className="flex items-center gap-4 mb-4">
              <img
                src={testimonial.image}
                alt={`${testimonial.name}'s avatar`}
                className="rounded-full w-14 h-14 border border-gray-200"
              />
              <div>
                <h2 className="text-xl font-semibold text-gray-800">
                  {testimonial.name}
                </h2>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>

            {/* User Rating */}
            <div className="flex items-center mb-4">
              {Array(testimonial.stars)
                .fill()
                .map((_, starIndex) => (
                  <img
                    key={starIndex}
                    src={assets.rating_star}
                    alt="Star"
                    className="w-5 h-5"
                  />
                ))}
            </div>

            {/* Testimonial Text */}
            <p className="text-gray-600 text-sm leading-relaxed">
            {`"${testimonial.text}"`}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
