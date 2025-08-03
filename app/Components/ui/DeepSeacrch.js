"use client";
import React from "react";

export default function DeepSearch({ onToggle, onDropdown }) {
  return (
    <button
    className="group/ds-toggle flex items-center justify-center text-[var(--light)] dark:text-[var(--light-grey)] dark:group-hover/ds-toggle:text-[var(--light)] p-2 rounded-full hover:bg-[var(--hover)] transition-colors duration-100 gap-2"
    >

      <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="stroke-[2] text-[var(--light)] dark:text-[var(--light-grey)] dark:group-hover/ds-toggle:text-[var(--light)] transition-colors duration-100"
        >
          <path
            d="M19.2987 8.84667C15.3929 1.86808 5.44409 5.76837 7.08971 11.9099C8.01826 15.3753 12.8142 14.8641 13.2764 12.8592C13.6241 11.3504 10.2964 12.3528 10.644 10.844C11.1063 8.839 15.9022 8.32774 16.8307 11.793C18.5527 18.2196 7.86594 22.4049 4.71987 15.2225"
            strokeWidth="5"
            strokeLinecap="round"
            className="stroke-black/10 dark:stroke-white/20 transition-[opacity,transform] duration-200 origin-center opacity-0 scale-0"
          />
          <path
            d="M2 13.8236C4.5 22.6927 18 21.3284 18 14.0536C18 9.94886 11.9426 9.0936 10.7153 11.1725C9.79198 12.737 14.208 12.6146 13.2847 14.1791C12.0574 16.2581 6 15.4029 6 11.2982C6 3.68585 20.5 2.2251 22 11.0945"
            stroke="currentColor"
            className="transition-transform duration-200 ease-out origin-center rotate-0"
          />
        </svg>

      <span>DeepSearch</span>

    </button>
  );
}