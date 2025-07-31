"use client";
import React from "react";
import Link from "next/link";

export default function Header({ onToggleSidebar }) {
  return (
    <header
      className="
        h-16 top-0 absolute z-10 flex items-center justify-center w-full
        bg-gradient-to-b from-background via-background via-80% to-transparent
        @[80rem]/nav:h-0 @[80rem]/nav:top-8 @[80rem]/nav:from-transparent @[80rem]/nav:via-transparent
      "
    >
      {/* Left: Sidebar Toggle */}
      <div className="absolute start-1 flex gap-1 items-center">
        <div className="flex items-center">
          <button
            type="button"
            aria-label="Toggle sidebar"
            onClick={onToggleSidebar}
            className="
              inline-flex items-center justify-center gap-2 text-sm font-medium cursor-pointer
              focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring
              transition-colors duration-100 select-none text-fg-primary hover:bg-button-ghost-hover
              disabled:opacity-60 disabled:cursor-not-allowed border border-transparent h-10 w-10 rounded-full ms-2
            "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-align-justify"
            >
              <path d="M3 6h18M3 12h18M3 18h18" />
            </svg>
          </button>
        </div>
      </div>

      {/* Center: Placeholder for Nav (visible from sm) */}
      <div className="grow justify-center hidden max-w-[50%] @[640px]/nav:flex" />

      {/* Right: Icon Buttons */}
      <div className="absolute flex items-center gap-0.5 ms-auto end-3">
        {/* Home */}
        <Link
          href="/"
          aria-label="Home"
          className="
            inline-flex items-center justify-center gap-2 text-sm font-medium cursor-pointer
            focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring
            transition-colors duration-100 select-none text-fg-primary hover:bg-button-ghost-hover
            disabled:opacity-60 disabled:cursor-not-allowed border border-transparent h-10 w-10 rounded-full
          "
        >
          <svg
            width="20"
            height="20"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="square"
            viewBox="0 0 24 24"
          >
            <path d="M10 4C8.1 4 7.2 4 6.5 4.3C5.5 4.7 4.7 5.5 4.3 6.5C4 7.2 4 8.1 4 10V13.6C4 15.8 4 17 4.4 17.8C4.8 18.6 5.4 19.2 6.2 19.6C7 20 8.2 20 10.4 20H14C15.9 20 16.8 20 17.5 19.7C18.5 19.3 19.3 18.5 19.7 17.5C20 16.8 20 15.9 20 14" />
            <path d="M12.4 14.6L19.5 7.5C20.3 6.7 20.3 5.3 19.5 4.5C18.7 3.7 17.3 3.7 16.5 4.5L9.4 11.6C9.2 11.8 9 12.2 9 12.6V15H11.4C11.8 15 12.2 14.8 12.4 14.6Z" />
          </svg>
        </Link>

        {/* Pin */}
        <button
          type="button"
          aria-label="Pin"
          className="icon-btn"
        >
          <svg
            width="18"
            height="18"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="square"
            viewBox="0 0 24 24"
          >
            <path d="M4 20L8.5 15.5M14 20L4 10L5 9L9.1 8.3C10.3 8.1 11.3 7.4 11.9 6.3L13.2 3.9C13.9 2.7 15.5 2.5 16.4 3.4L20.6 7.6C21.5 8.5 21.3 10.1 20.1 10.8L17.7 12.1C16.6 12.7 15.9 13.7 15.7 14.9L15 19L14 20Z" />
          </svg>
        </button>

        {/* Share */}
        <button
          type="button"
          aria-label="Share conversation"
          className="icon-btn"
        >
          <svg
            width="20"
            height="20"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M7 9L12 4L17 9M12 4V16" />
            <path d="M4 15V16C4 18.2 5.8 20 8 20H16C18.2 20 20 18.2 20 16V15" />
          </svg>
        </button>

        {/* More */}
        <button
          type="button"
          aria-label="More"
          className="icon-btn"
        >
          <svg
            width="20"
            height="20"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
          >
            <circle cx="12" cy="12" r="1" />
            <circle cx="19" cy="12" r="1" />
            <circle cx="5" cy="12" r="1" />
          </svg>
        </button>
      </div>
    </header>
  );
}

// 👇 Shared icon button style
const iconBtnClass = `
  inline-flex items-center justify-center gap-2 text-sm font-medium cursor-pointer
  focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring
  transition-colors duration-100 select-none text-fg-primary hover:bg-button-ghost-hover
  disabled:opacity-60 disabled:cursor-not-allowed border border-transparent h-10 w-10 rounded-full
`;

Header.defaultProps = {
  onToggleSidebar: () => {},
};

