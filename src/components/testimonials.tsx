import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Felix Jimoh",
      rating: 4.9,
      quote:
        "I had a wonderful experience working with EcoHaven Realty to find my new home. They really took the time to understand what was important to me and helped me find a home that was not only beautiful but also eco-friendly and energy-efficient.",
    },
    {
      id: 2,
      name: "David T.",
      rating: 4.5,
      quote:
        "EcoHaven Realty is an amazing real estate agency that truly understands the importance of sustainability and eco-friendliness. They helped me find a beautiful home that was not only environmentally conscious.",
    },
    {
      id: 3,
      name: "Susan Lanre",
      rating: 4.5,
      quote:
        "I recently sold my home with EcoHaven Realty and couldn't be happier with the experience. The team was both professional, and really took the time to understand what was important to me.",
    },
    {
      id: 4,
      name: "Tolu Ayolade",
      rating: 4.5,
      quote:
        "I recently sold my home with EcoHaven Realty and couldn't be happier with the experience. The team was both professional, and really took the time to understand what was important to me.",
    },
    {
      id: 5,
      name: "Tomisin ",
      rating: 3.5,
      quote:
        "I recently sold my home with EcoHaven Realty and couldn't be happier with the experience. The team was both professional, and really took the time to understand what was important to me.",
    },
  ];

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    return (
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            xmlns="http://www.w3.org/2000/svg"
            className={`w-4 h-4 md:w-5 md:h-5 ${
              i < fullStars ? "text-yellow-400" : "text-gray-300"
            }`}
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <div className="py-12 md:py-16 bg-white min-h-[400px] md:min-h-[600px] flex flex-col justify-center">
      <div className="mx-auto px-4 flex flex-col gap-8 md:gap-16">
        <div className="text-center mb-6 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold mb-2">
            What our customers say?
          </h2>
          <p className="text-gray-600 text-sm md:text-base">
            Hear from our satisfied customers and clients.
          </p>
        </div>

        {/* Mobile view - single testimonial */}
        <div className="md:hidden flex justify-center">
          <div className="border border-gray-200 rounded-lg relative w-full max-w-[450px] p-6">
            <div className="absolute -top-4 left-6 bg-gray-100 rounded-full p-3">
              <Quote className="h-5 w-5 text-green-800" />
            </div>
            <div className="flex flex-col justify-center items-center pt-4">
              <h3 className="text-lg font-semibold">
                {testimonials[currentIndex].name}
              </h3>
              <div className="flex items-center space-x-1 mt-1">
                <span className="font-medium">
                  {testimonials[currentIndex].rating}
                </span>
                {renderStars(testimonials[currentIndex].rating)}
              </div>
              <p className="mt-4 text-gray-700 text-sm text-center">
                "{testimonials[currentIndex].quote}"
              </p>
            </div>
          </div>
        </div>

        {/* Desktop view - three testimonials */}
        <div className="hidden md:flex justify-center gap-6 lg:gap-20">
          {[0, 1, 2].map((offset) => {
            const index = (currentIndex + offset) % testimonials.length;
            return (
              <div
                key={testimonials[index].id}
                className="border border-gray-200 rounded-lg relative w-full max-w-[450px] p-6 md:p-8"
              >
                <div className="absolute -top-4 left-6 bg-gray-100 rounded-full p-3 md:p-4">
                  <Quote className="h-5 w-5 md:h-6 md:w-6 text-green-800" />
                </div>
                <div className="flex flex-col justify-center items-center pt-2">
                  <h3 className="text-base md:text-lg font-semibold">
                    {testimonials[index].name}
                  </h3>
                  <div className="flex items-center space-x-1 mt-1">
                    <span className="font-medium text-sm md:text-base">
                      {testimonials[index].rating}
                    </span>
                    {renderStars(testimonials[index].rating)}
                  </div>
                  <p className="mt-4 text-gray-700 text-sm md:text-base text-center max-w-[400px]">
                    "{testimonials[index].quote}"
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex justify-center mt-6 md:mt-10 space-x-4">
          <button
            onClick={handlePrevious}
            className="bg-gray-100 rounded-full p-2 md:p-3 hover:bg-gray-200 transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-5 w-5 md:h-6 md:w-6 text-gray-600" />
          </button>
          <button
            onClick={handleNext}
            className="bg-gray-100 rounded-full p-2 md:p-3 hover:bg-gray-200 transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-5 w-5 md:h-6 md:w-6 text-gray-600" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
