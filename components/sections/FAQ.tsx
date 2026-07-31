"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

import Container from "@/components/ui/Container";
import { FAQData } from "@/types/site";
import { ThemeConfig } from "@/configs/themes/types";

interface FAQProps {
  faq: FAQData;
  theme: ThemeConfig;
}

export default function FAQ({
  faq,
  theme,
}: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="bg-[#F7F3EE] py-36 overflow-hidden"
    >
      <Container className="max-w-5xl">

        {/* 
            HEADER
         */}

        <div className="max-w-4xl mx-auto text-center">

          <p
            className="
              uppercase
              tracking-[0.35em]
              text-sm
              text-[#7A4B67]
              mb-6
            "
          >
            {faq.eyebrow}
          </p>

          <h2
            className={`
              ${theme.typography.heading}

              text-[#261020]

              text-5xl
              lg:text-7xl

              leading-[1.02]
            `}
          >
            {faq.title}
          </h2>

          <p
            className={`
              ${theme.typography.body}

              mt-8

              max-w-3xl
              mx-auto

              text-lg
              leading-9

              text-[#5E5A56]
            `}
          >
            {faq.subtitle}
          </p>

        </div>

        {/* 
            DIVIDER
         */}

        <div className="mt-14 max-w-xl mx-auto">

          <div className="flex items-center gap-4">

            <div className="h-px flex-1 bg-[#A87897]" />

            <span
              className="
                uppercase
                tracking-[0.35em]
                text-xs
                text-[#A87897]
                whitespace-nowrap
              "
            >
              Frequently Asked Questions
            </span>

            <div className="h-px flex-1 bg-[#A87897]" />

          </div>

        </div>

        {/* 
            FAQ LIST
         */}

        <div className="mt-20 space-y-6">

          {faq.questions.map((item, index) => {

            const open = openIndex === index;

            return (

              <div
                key={item.question}
                className="
                  overflow-hidden

                  rounded-[28px]

                  border
                  border-[#D6CBC2]

                  bg-white

                  shadow-[0_18px_45px_rgba(0,0,0,.06)]

                  transition-all
                  duration-300

                  hover:shadow-[0_28px_70px_rgba(0,0,0,.10)]
                "
              >

                <button
                  onClick={() =>
                    setOpenIndex(open ? null : index)
                  }
                  className="
                    flex
                    w-full
                    items-center
                    justify-between

                    px-8
                    py-7

                    text-left
                  "
                >

                  <h3
                    className={`
                      ${theme.typography.heading}

                      text-[#261020]

                      text-2xl
                    `}
                  >
                    {item.question}
                  </h3>

                  <ChevronDown
                    size={24}
                    className={`
                      text-[#7A4B67]

                      transition-all
                      duration-300

                      ${open ? "rotate-180" : ""}
                    `}
                  />

                </button>

                <div
                  className={`
                    overflow-hidden
                    transition-all
                    duration-300

                    ${
                      open
                        ? "max-h-96 opacity-100"
                        : "max-h-0 opacity-0"
                    }
                  `}
                >

                  <div
                    className="
                      border-t
                      border-[#E6DDD6]

                      px-8
                      py-7
                    "
                  >

                    <p
                      className={`
                        ${theme.typography.body}

                        text-[#5E5A56]

                        text-lg
                        leading-9
                      `}
                    >
                      {item.answer}
                    </p>

                  </div>

                </div>

              </div>

            );

          })}

        </div>

      </Container>
    </section>
  );
}