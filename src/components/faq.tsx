import { useState } from "react";
import { ChevronUp, ChevronDown, ArrowUpRight } from "lucide-react";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      id: 1,
      question:
        "What makes EcoHaven Realty different from other real estate agencies?",
      answer:
        "At EcoHaven Realty, we are committed to promoting sustainability in the real estate industry. We prioritize eco-friendly practices, such as green building techniques and energy-efficient systems, in all of our transactions. We believe that promoting environmental responsibility is not only the right thing to do, but it also benefits our clients by providing long-term cost savings and a healthier living environment.",
    },
    {
      id: 2,
      question: "Do you only work with eco-friendly properties?",
      answer:
        "While we specialize in promoting and selling eco-friendly properties, we work with all types of properties. Our focus is on promoting sustainable practices and educating our clients on how they can make their properties more eco-friendly.",
    },
    {
      id: 3,
      question: "Can you help me find an eco-friendly property?",
      answer:
        "Absolutely! We have a database of eco-friendly properties and can work with you to find a property that aligns with your sustainability goals. Additionally, we can provide guidance on how to make any property more eco-friendly.",
    },
    {
      id: 4,
      question: "What is your process for ensuring a property is eco-friendly?",
      answer:
        "We work with builders and contractors who specialise in eco-friendly building practices. We also conduct assessments of a property's energy and water usage, as well as its overall sustainability features, to ensure that it aligns with our eco-friendly standards.",
    },
    {
      id: 5,
      question: "Are eco-friendly properties more expensive?",
      answer:
        "Not necessarily. While some eco-friendly features may require an initial investment, such as solar panels or energy-efficient systems, they can ultimately lead to long-term cost savings on utility bills. Additionally, there are often government incentives and tax breaks available for eco-friendly properties and features.",
    },
  ];

  const toggleQuestion = (index: number) =>
    setOpenIndex(openIndex === index ? null : index);

  return (
    <div className="w-full mx-auto px-4 py-12 md:py-16 min-h-[400px]">
      <div className="flex flex-col md:flex-row gap-8 md:gap-12 justify-center items-center">
        {/* Left column */}
        <div className="flex flex-col justify-center text-center md:text-left w-full max-w-[600px] gap-4 md:gap-6">
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-2 md:gap-4 mb-2 md:mb-4">
            <div className="w-16 h-0.5 bg-green-800 hidden md:block"></div>
            <h3 className="text-green-800 font-medium tracking-wider text-sm md:text-md uppercase">
              FREQUENTLY ASKED QUESTIONS
            </h3>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">
            Common questions asked about our eco-friendly homes.
          </h2>

          <p className="text-gray-700 mb-6 md:mb-8 text-sm md:text-base">
            Here are some important questions that are frequently asked and the
            answers to the questions.
          </p>

          <div className="flex flex-col gap-4 items-center md:items-start">
            <h3 className="font-semibold text-lg md:text-xl">
              Have a different question?
            </h3>
            <a
              href="#contact"
              className="inline-flex items-center bg-green-800 text-white py-2 md:py-3 px-4 md:px-6 rounded-[30px] hover:bg-green-700 transition-colors h-[40px] w-[200px] justify-center"
            >
              Contact Us
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Right column - Accordion */}
        <div className="w-full max-w-[700px] mt-8 md:mt-0">
          {faqs.map((faq, index) => (
            <div key={faq.id} className="border-b border-gray-200">
              <button
                className="w-full flex justify-between items-center py-4 md:py-6 text-left"
                onClick={() => toggleQuestion(index)}
              >
                <h3 className="text-base md:text-xl font-medium pr-4">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 flex-shrink-0 text-gray-500" />
                ) : (
                  <ChevronDown className="h-5 w-5 flex-shrink-0 text-gray-500" />
                )}
              </button>

              <div
                className={`pb-4 md:pb-6 text-gray-700 overflow-hidden transition-all duration-300 text-sm md:text-base ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
