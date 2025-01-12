"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const assets_1 = require("../assets/assets");
const Testimonials = () => {
    return (<div className="flex flex-col items-center justify-center my-20 p-6 sm:p-12 bg-gray-50">
      {/* Заголовок */}
      <h1 className="text-3xl sm:text-4xl font-semibold mb-3 text-gray-800">
        Customer Testimonials
      </h1>
      <p className="text-lg text-gray-600 mb-10">What Our Users Are Saying</p>

      {/* Контейнер отзывов */}
      <div className="flex flex-wrap gap-8 justify-center">
        {assets_1.testimonialsData.map((testimonial, index) => (<div key={index} className="bg-white p-6 rounded-xl shadow-lg border w-80 hover:shadow-xl transition-shadow">
            {/* Аватар и информация */}
            <div className="flex items-center gap-4 mb-4">
              <img src={testimonial.image} alt={`${testimonial.name}'s avatar`} className="rounded-full w-14 h-14 border border-gray-200"/>
              <div>
                <h2 className="text-xl font-semibold text-gray-800">
                  {testimonial.name}
                </h2>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>

            {/* Рейтинг */}
            <div className="flex items-center mb-4">
              {Array(testimonial.stars)
                .fill()
                .map((_, starIndex) => (<img key={starIndex} src={assets_1.assets.rating_star} alt="Star" className="w-5 h-5"/>))}
            </div>

            {/* Текст отзыва */}
            <p className="text-gray-600 text-sm leading-relaxed">
              "{testimonial.text}"
            </p>
          </div>))}
      </div>
    </div>);
};
exports.default = Testimonials;
//# sourceMappingURL=Testimonials.js.map