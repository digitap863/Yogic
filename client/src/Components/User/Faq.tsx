import React from "react";
import { Disclosure } from "@headlessui/react";
import { IoMdArrowDropright } from "react-icons/io";

interface FAQProps {
  faqData: { question: string; answer: string }[];
}


const FAQ: React.FC<FAQProps> = ({ faqData }) => {
  return (
    <div className="w-full flex flex-col items-center bg-white py-10 justify-center">
      <section className="py-8 px-4 sm:px-6 lg:px-8 w-full max-w-4xl">
        <h2 className="text-4xl font-semibold text-black mb-6 text-center uppercase font-galano">
          Frequently Asked <br/>Questions
        </h2>
        <div className="flex flex-col space-y-4 items-center justify-center w-full bg-white">
          {faqData.map((faq, index) => (
            <Disclosure key={index} as="div" className=" max-w-lg" >
              {({ open }) => (
                <>
                <div className="items-center justify-center">
                  <Disclosure.Button
                    className={` bg-white  justify-center flex items-center w-full py-4 text-center text-lg font-semibold text-black focus:outline-none ${
                      open ? "text-gray-900 " : ""
                    }`}
                  >
                    <IoMdArrowDropright
                      className={`${
                        open ? "rotate-90 transform" : ""
                      } w-5 h-5 text-black transition-transform duration-300`}
                    /> &nbsp;
                    <span className="font-galano">{faq.question}</span>
                  </Disclosure.Button>
                  </div>
                  <Disclosure.Panel className="text-center pb-2 text-gray-600 font-galano">
                    {faq.answer}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          ))}
        </div>
      </section>

      
    </div>
  );
};

export default FAQ;