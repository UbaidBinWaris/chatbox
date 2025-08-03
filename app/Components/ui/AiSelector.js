"use client";
import React from "react";

export default function AiSelector({ label = "Grok 3", onClick }) {
  return (
    <button
      type="button"
      role="combobox"
      aria-controls="radix-r66"
      aria-expanded="false"
      aria-autocomplete="none"
      dir="ltr"
      data-state="closed"
      data-slot="select-trigger"
      data-size="md"
      onClick={onClick}
      className={`
        ff  text-[var(--primary)]  p-2  rounded-full gap-3 hover:bg-[var(--hover)] 
      `}
    >
      <span className="text-[var(--primary)]">{label}</span>
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="stroke-[2]  text-[var(--primary)] transition-transform"
      >
        <path d="M6 9L12 15L18 9" stroke="currentColor" strokeLinecap="square" />
      </svg>
    </button>
  );
}
