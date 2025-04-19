import { useState } from "react";
import { ContentFaq, ContentFaq2 } from "../assets/constant/faq";

const AccordionItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-4 text-left text-lg font-medium text-gray-900 dark:text-white focus:outline-none"
      >
        <span className="flex items-center">
          <svg
            className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
              clipRule="evenodd"
            />
          </svg>
          {question}
        </span>
        <svg
          className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <p className="pb-4 text-gray-500 dark:text-gray-400">{answer}</p>
      )}
    </div>
  );
};

const Faq = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <h2 className="mb-8 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
          Frequently asked questions
        </h2>
        <div className="grid pt-8 border-t border-gray-200 dark:border-gray-700 md:grid-cols-2 md:gap-16">
          <div>
            {ContentFaq.map((item, index) => (
              <AccordionItem
                key={index}
                question={item.question}
                answer={item.answer}
              />
            ))}
          </div>
          <div>
            {ContentFaq2.map((item, index) => (
              <AccordionItem
                key={index}
                question={item.question}
                answer={item.answer}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
