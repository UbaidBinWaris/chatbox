"use client";
import React, { useState } from "react";

export default function Think({ size = 18 }) {
  const [isThinking, setIsThinking] = useState(false);

  const handleClick = () => {
    setIsThinking((prev) => !prev);
  };

  return (
    <button
      type="button"
      aria-label="Think"
      onClick={handleClick}
      className={`ff p-[7px] border border-[var(--text)] rounded-full hover:bg-[var(--hover)] gap-2 ${
        isThinking ? "bg-[var(--hover)]" : ""
      } ${isThinking ? "text-[var(--primary)]" : ""}`}
    >
      <div className="text-[var(--primary)]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill={isThinking ? "#FFD700" : "none"}
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.75 21h4.5m-6.364-2.25h8.227m-6.113-3.837a5.25 5.25 0 118.089-4.663c0 2.25-1.75 4.25-2.25 5.25-.5 1-1.5 2-1.5 3.25H11.25c0-1.25-1-2.25-1.5-3.25-.5-1-2.25-3-2.25-5.25a5.25 5.25 0 0110.5 0z"
          />
        </svg>
      </div>
      <span className="hidden sm:block text-[var(--primary)] px-1">Think</span>
    </button>
  );
}
