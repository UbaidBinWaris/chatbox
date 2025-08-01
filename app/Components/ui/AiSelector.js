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
        inline-flex items-center justify-between gap-2 whitespace-nowrap cursor-pointer select-none
        font-medium text-sm h-10 px-3 py-2 rounded-full w-fit transition-colors duration-100
        focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50
        border border-border-l2 sm:border-0
        bg-[var(--primary)] text-[var(--secondary)] 
        hover:bg-[var(--hover)] 
        disabled:cursor-not-allowed disabled:opacity-50
      `}
    >
      <span className="text-xs @[400px]/input:text-sm">{label}</span>
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="stroke-[2] size-3 text-[var(--secondary)] transition-transform"
      >
        <path d="M6 9L12 15L18 9" stroke="currentColor" strokeLinecap="square" />
      </svg>
    </button>
  );
}
