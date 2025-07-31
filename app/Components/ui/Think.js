"use client";
import React from "react";
import Image from "next/image";

export default function Think({ size = 18 }) {
  return (
    <div
      className="
        inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium cursor-pointer
        focus-visible:outline-none focus-visible:ring-1 disabled:opacity-60 disabled:cursor-not-allowed
        select-none h-10 px-3.5 py-1.5 text-sm rounded-full transition-colors duration-100 relative overflow-hidden
        bg-[var(--dark-grey)] hover:bg-[var(--light-grey)]
        dark:bg-[var(--light)] dark:hover:bg-[var(--selected-light-grey)]
        group/think-toggle
      "
    >
      <Image
        src="/input/ThinkDim.svg"
        alt="Think"
        width={size}
        height={size}
        className="transition-transform duration-100 group-hover/think-toggle:scale-110"
      />
      <span
        className="
          hidden sm:block text-[var(--light)] dark:text-[var(--dark-grey)]
          group-hover/think-toggle:text-[var(--dark-grey)]
          dark:group-hover/think-toggle:text-[var(--light)]
        "
      >
        Think
      </span>
    </div>
  );
}
