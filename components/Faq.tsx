"use client";
import React, { useState } from "react";

const faqs = [
  {
    id: 1,
    question: "What is AI Chat DB?",
    answer: "AI Chat DB is a database for managing chatbot data.",
  },
  {
    id: 2,
    question: "Does it support all languages?",
    answer: "Yes, it supports multiple languages.",
  },
  {
    id: 3,
    question: "Do I need to know code to use Wonderchat?",
    answer: "No, Wonderchat is designed to be user-friendly.",
  },
  {
    id: 4,
    question: "Will I be able to embed the chatbot into my website?",
    answer: "Yes, you can easily embed it into your website.",
  },
  {
    id: 5,
    question:
      "Can multiple team members in my organization manage my chatbots?",
    answer: "Yes, team collaboration is supported.",
  },
];

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <div className=" flex flex-col justify-center items-center w-full">
      <h1 className="inline-block w-fit font-bold text-[2.8rem] bg-[radial-gradient(100%_100%_at_50%_50%,rgba(229,229,229,1)_30%,rgba(255,255,255,0.2)_85%)] text-transparent bg-clip-text text-center leading-[4.5rem]">
        FAQ's
      </h1>
      <section className="text-white py-10 px-[9vw] w-full">
        <div className="mx-auto">
          {faqs.map((faq, index) => (
            <div key={faq.id} className="border border-[#2A2B3A]">
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex justify-between items-center  text-left font-medium text-lg focus:outline-none"
              >
                <div className="flex">
                  <div className="h-full w-[4vw] p-4 border-r border-r-[#2A2B3A] flex justify-center items-center">
                    <h1 className="inline-block w-fit font-bold text-[1.3rem] bg-[radial-gradient(100%_100%_at_50%_50%,rgba(229,229,229,1)_30%,rgba(255,255,255,0.2)_85%)] text-transparent bg-clip-text text-center">
                      {faq.id < 10 ? `0${faq.id}` : faq.id}
                    </h1>
                  </div>
                  <h1 className="p-4 inline-block w-fit font-bold text-[1.3rem] bg-[radial-gradient(100%_100%_at_50%_50%,rgba(229,229,229,1)_30%,rgba(255,255,255,0.2)_85%)] text-transparent bg-clip-text text-center">
                    {faq.question}
                  </h1>
                </div>
                <div className="h-full w-[4vw] p-4 border-l border-l-[#2A2B3A] flex justify-center items-center">
                  <h1 className="text-2xl inline-block w-fit font-bold text-[1.3rem] bg-[radial-gradient(100%_100%_at_50%_50%,rgba(229,229,229,1)_30%,rgba(255,255,255,0.2)_85%)] text-transparent bg-clip-text text-center">
                    {activeIndex === index ? "-" : "+"}
                  </h1>
                </div>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  activeIndex === index ? "max-h-40" : "max-h-0"
                }`}
              >
                <div className="p-4 border-t border-gray-700">
                  <p className="text-[#9CA3AF]">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
