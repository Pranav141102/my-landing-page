"use client";
import { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    "What is the purpose of email verifier?",
    "How do you find email addresses?",
    "What is the purpose of email verifier?",
    "How do you find email addresses?",
    "What is the purpose of email verifier?",
    "How do you find email addresses?",
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-[#EEF2FF] via-[#F5F8FF] to-[#FFF5F9]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-black text-[#2F327D] mb-6">
          Got a Question? <br /> Get Your Answers <br />
        </h2>
        <div className="bg-white rounded-3xl shadow-lg px-8 py-2">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`border-b border-gray-200 ${
                index === faqs.length - 1 ? "border-b-0" : "mb-2"
              }`}
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center p-3 cursor-pointer">
                <span className="text-lg text-gray-900 text-center">{faq}</span>
                <span className="text-xl text-gray-500 ml-4">
                  {openIndex === index ? "-" : "+"}
                </span>
              </div>
              {openIndex === index && (
                <div className="p-3 text-left text-gray-600">
                  This is the answer to the question.
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
