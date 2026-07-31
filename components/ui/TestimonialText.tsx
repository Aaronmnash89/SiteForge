"use client";

import { useState } from "react";

interface Props {
  text: string;
}

export default function TestimonialText({ text }: Props) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div>
      <p
        className={`leading-8 text-[#5E5A56] ${
          expanded ? "" : "line-clamp-5"
        }`}
      >
        {text}
      </p>

      {text.length > 220 && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-3 text-[#7A4B67] font-medium hover:underline"
        >
          {expanded ? "Show less" : "Read more"}
        </button>
      )}
    </div>
  );
}