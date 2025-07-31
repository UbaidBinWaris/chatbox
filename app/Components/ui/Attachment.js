"use client";
import React from "react";

const AttachButton = ({ onClick, disabled }) => {
  return (
    <button
      type="button"
      aria-label="Attach"
      tabIndex={0}
      aria-haspopup="menu"
      aria-expanded="false"
      data-state="closed"
      onClick={onClick}
      disabled={disabled}
      className="inline-flex items-center border justify-center gap-2 whitespace-nowrap text-sm font-medium leading-[normal] cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:opacity-60 disabled:cursor-not-allowed transition-colors duration-100 [&_svg]:shrink-0 select-none border-border-l2 text-fg-primary dark:hover:bg-gray-700 dark:bg-[var(--light)] bg-gray-800 h-10 w-10 rounded-full group/attach-button"
    >
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="stroke-[2] dark:text-[var(--light-grey)] text-[var(--light)] transition-colors duration-100"
      >
        <path
          d="M10 9V15C10 16.1046 10.8954 17 12 17V17C13.1046 17 14 16.1046 14 15V7C14 4.79086 12.2091 3 10 3V3C7.79086 3 6 4.79086 6 7V15C6 18.3137 8.68629 21 12 21V21C15.3137 21 18 18.3137 18 15V8"
          stroke="currentColor"
        />
      </svg>
    </button>
  );
};

export default AttachButton;
