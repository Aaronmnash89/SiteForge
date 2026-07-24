"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
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
      className={`${theme.colors.primary} ${theme.layout.sectionSpacing}`}
    >
      <Container className="max-w-4xl">

        <SectionHeading
          eyebrow={faq.eyebrow}
          title={faq.title}
          subtitle={faq.subtitle}
          theme={theme}
        />

        <div className="mt-12 space-y-5">
          {faq.questions.map((item, index) => {
            const open = openIndex === index;

            return (
              <div
                key={item.question}
                className={`
                  overflow-hidden
                  rounded-2xl
                  border
                  ${theme.colors.border}
                  ${theme.colors.surface}
                  ${theme.cards.shadow}
                `}
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
                    py-6
                    text-left
                    transition-colors
                  "
                >
                  <h3
                    className={`
                      text-xl
                      font-semibold
                      ${theme.colors.text}
                    `}
                  >
                    {item.question}
                  </h3>

                  <ChevronDown
                    size={24}
                    className={`
                      transition-transform duration-300
                      ${theme.colors.accent}
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
                    className={`
                      border-t
                      ${theme.colors.border}
                      px-8
                      py-6
                    `}
                  >
                    <p
                      className={`
                        leading-8
                        ${theme.colors.textLight}
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

