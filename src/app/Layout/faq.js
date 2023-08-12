"use client";

import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

const faqData = [
  {
    question: "What does LOREM mean?",
    answer:
      "‘Lorem ipsum dolor sit amet, consectetur adipisici elit…’ (complete text) is dummy text that is not meant to mean anything. It is used as a placeholder in magazine layouts, for example, in order to give an impression of the finished document. The text is intentionally unintelligible so that the viewer is not distracted by the content. The language is not real Latin and even the first word ‘Lorem’ does not exist. It is said that the lorem ipsum text has been common among typesetters since the 16th century.",
  },
  {
    question: "Where can I subscribe to your newsletter?",
    answer:
      "‘Lorem ipsum dolor sit amet, consectetur adipisici elit…’ (complete text) is dummy text that is not meant to mean anything. It is used as a placeholder in magazine layouts, for example, in order to give an impression of the finished document. The text is intentionally unintelligible so that the viewer is not distracted by the content. The language is not real Latin and even the first word ‘Lorem’ does not exist. It is said that the lorem ipsum text has been common among typesetters since the 16th century.",
  },
  {
    question: "Where can I subscribe to your newsletter?",
    answer:
      "‘Lorem ipsum dolor sit amet, consectetur adipisici elit…’ (complete text) is dummy text that is not meant to mean anything. It is used as a placeholder in magazine layouts, for example, in order to give an impression of the finished document. The text is intentionally unintelligible so that the viewer is not distracted by the content. The language is not real Latin and even the first word ‘Lorem’ does not exist. It is said that the lorem ipsum text has been common among typesetters since the 16th century.",
  },
  {
    question: "Can I order a free sample copy of a magazine?",
    answer:
      "‘Lorem ipsum dolor sit amet, consectetur adipisici elit…’ (complete text) is dummy text that is not meant to mean anything. It is used as a placeholder in magazine layouts, for example, in order to give an impression of the finished document. The text is intentionally unintelligible so that the viewer is not distracted by the content. The language is not real Latin and even the first word ‘Lorem’ does not exist. It is said that the lorem ipsum text has been common among typesetters since the 16th century.",
  },
  {
    question: "Can I order a free sample copy of a magazine?",
    answer:
      "‘Lorem ipsum dolor sit amet, consectetur adipisici elit…’ (complete text) is dummy text that is not meant to mean anything. It is used as a placeholder in magazine layouts, for example, in order to give an impression of the finished document. The text is intentionally unintelligible so that the viewer is not distracted by the content. The language is not real Latin and even the first word ‘Lorem’ does not exist. It is said that the lorem ipsum text has been common among typesetters since the 16th century.",
  },
];

function Icon({ id, open }) {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className={`${
          id === open ? "rotate-180" : ""
        } h-5 w-5 transition-transform `}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
        />
      </svg>
    </div>
  );
}

export default function FAQ() {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <>
      <div className="md:px-36 px-10 bg-white py-10">
        <p className="md:text-[55px] text-[30px] font-normal text-center mb-5">
          Frequently Aske Questions
        </p>
        {faqData.map((item, index) => {
          return (
            <Accordion
              open={open === index + 1}
              key={index + 1}
              className={`mb-2 rounded-lg border border-blue-gray-100 px-4 py-7 ${
                open === index + 1 ? "text-[#123123] bg-[#2E62A5]" : ""
              }`}
              icon={<Icon id={index + 1} open={open} />}
            >
              <AccordionHeader
                onClick={() => handleOpen(index + 1)}
                className={`border-b-0 transition-colors flex ${
                  open === index + 1 ? "text-white" : ""
                }`}
              >
                {item.question}
              </AccordionHeader>
              <AccordionBody
                className={`pt-0 text-base font-normal ${
                  open === index + 1 ? "text-white" : ""
                }`}
              >
                {item.answer}
              </AccordionBody>
            </Accordion>
          );
        })}
      </div>
    </>
  );
}
