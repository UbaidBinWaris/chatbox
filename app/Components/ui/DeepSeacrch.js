import React from "react";

export default function DeepSearch({ onToggle, onDropdown }) {
  return (
    <div className="flex items-center">
      {/* Left Toggle Button */}
      <button
        type="button"
        aria-label="DeepSearch"
        aria-pressed="false"
        data-state="closed"
        tabIndex={0}
        onClick={onToggle}
        className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium cursor-pointer focus-visible:outline-none focus-visible:ring-1 disabled:opacity-60 disabled:cursor-not-allowed 
        [&_svg]:shrink-0 select-none h-10 px-3.5 py-1.5 text-sm rounded-full group/ds-toggle transition-colors 
        duration-100 focus-visible:ring-transparent box-border relative overflow-hidden rounded-r-none pr-3 
        bg-transparent hover:bg-button-ghost-hover focus-visible:bg-button-ghost-hover"
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="stroke-[2] text-fg-secondary group-hover/ds-toggle:text-fg-primary"
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
        <span className="hidden sm:block">DeepSearch</span>
      </button>

      {/* Divider */}
      <div
        className="h-4 w-[1px] bg-toggle-border focus:outline-none"
        tabIndex={-1}
      ></div>

      {/* Right Dropdown Button */}
      <button
        type="button"
        aria-label="Change mode"
        aria-haspopup="menu"
        aria-expanded="false"
        data-state="closed"
        id="radix-r60"
        onClick={onDropdown}
        className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium cursor-pointer focus-visible:outline-none focus-visible:ring-1 
        disabled:opacity-60 disabled:cursor-not-allowed [&_svg]:shrink-0 select-none h-10 px-3.5 py-1.5 text-sm 
        rounded-full transition-colors duration-100 relative overflow-hidden focus-visible:ring-transparent 
        rounded-l-none pl-2 pr-3 bg-transparent hover:bg-button-ghost-hover focus-visible:bg-button-ghost-hover"
      >
        <svg
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="stroke-[2] text-fg-secondary"
        >
          <path
            d="M6 9L12 15L18 9"
            stroke="currentColor"
            strokeLinecap="square"
          />
        </svg>
      </button>
    </div>
  );
}
