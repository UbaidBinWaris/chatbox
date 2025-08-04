"use client";
import React, { useState, useRef, useEffect } from "react";

export default function DeepSearch({
  deepsearchActive,
  deepersearchActive,
  setDeepSearchActive,
  setDeeperSearchActive,
  onSelectionChange,
}) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const containerRef = useRef(null);
  const timeoutRef = useRef(null);

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  const handleSelect = (option) => {
    if (option === "deep") {
      setDeepSearchActive(true);
      setDeeperSearchActive(false);
    } else {
      setDeepSearchActive(false);
      setDeeperSearchActive(true);
    }

    if (onSelectionChange) {
      onSelectionChange(option);
    }

    setDropdownOpen(false);
  };

  const isActive = deepsearchActive || deepersearchActive;
  const activeLabel = deepersearchActive ? "DeeperSearch" : "DeepSearch";

  // ⏱️ Auto-close after 5s if not hovered
  const startHideTimer = () => {
    timeoutRef.current = setTimeout(() => {
      setDropdownOpen(false);
    }, 5000);
  };

  const cancelHideTimer = () => {
    clearTimeout(timeoutRef.current);
  };

  // 🔒 Close if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      ref={containerRef}
      className={`ff relative border border-[var(--text)] rounded-full transition-colors ${
        isActive ? "bg-[var(--hover)]" : ""
      }`}
    >
      {/* Main Button */}
      <button
        type="button"
        onClick={() => {
          const newState = !deepsearchActive;
          setDeepSearchActive(newState);
          if (newState) setDeeperSearchActive(false);
        }}
        className={`ff gap-2 p-2 rounded-l-full text-[var(--primary)] w-full h-full
          ${
            deepsearchActive
              ? "bg-[var(--hover)] hover:bg-[var(--double-hover)]"
              : "hover:bg-[var(--hover)]"
          }
        `}
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`stroke-[2] mt-1 transition-transform duration-200
            ${deepsearchActive ? "rotate-[60deg]" : "rotate-0"}
          `}
        >
          <path
            d="M19.2987 8.84667C15.3929 1.86808 5.44409 5.76837 7.08971 11.9099C8.01826 15.3753 12.8142 14.8641 13.2764 12.8592C13.6241 11.3504 10.2964 12.3528 10.644 10.844C11.1063 8.839 15.9022 8.32774 16.8307 11.793C18.5527 18.2196 7.86594 22.4049 4.71987 15.2225"
            strokeWidth="5"
            strokeLinecap="round"
          />
          <path
            d="M2 13.8236C4.5 22.6927 18 21.3284 18 14.0536C18 9.94886 11.9426 9.0936 10.7153 11.1725C9.79198 12.737 14.208 12.6146 13.2847 14.1791C12.0574 16.2581 6 15.4029 6 11.2982C6 3.68585 20.5 2.2251 22 11.0945"
            stroke="currentColor"
          />
        </svg>
        <span className="hidden md:block">{activeLabel}</span>
      </button>

      <div className="bg-[var(--text)] w-[2px] h-6" />

      {/* Arrow Button */}
      <div className="relative">
        <button
          onClick={toggleDropdown}
          className={`ff w-full h-10 p-2 text-[var(--primary)] rounded-r-full ${
            isActive
              ? "bg-[var(--hover)] hover:bg-[var(--double-hover)]"
              : "hover:bg-[var(--hover)]"
          }`}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-[2] mt-0.5"
          >
            <path
              d="M6 9L12 15L18 9"
              stroke="currentColor"
              strokeLinecap="square"
            />
          </svg>
        </button>

        {/* Dropdown Menu */}
        {dropdownOpen && (
          <ul
            ref={dropdownRef}
            onMouseEnter={cancelHideTimer}
            onMouseLeave={startHideTimer}
            className="absolute z-10 w-64 rounded-2xl shadow bg-[var(--hover)] text-[var(--primary)] overflow-hidden
              left-0 top-auto bottom-full mb-2 transition-all duration-200 ease-in-out"
          >
            {/* DeepSearch */}
            <li
              onClick={() => handleSelect("deep")}
              className="cursor-pointer px-4 py-2 hover:bg-[var(--double-hover)] flex items-center gap-2"
            >
              <div className="flex items-center justify-center w-6 h-6">
                {deepsearchActive && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    className="text-[var(--primary)] mt-1"
                  >
                    <path d="M13.485 1.929a.75.75 0 011.06 1.06l-8.25 8.25a.75.75 0 01-1.06 0l-4-4a.75.75 0 111.06-1.06l3.47 3.47 7.72-7.72z" />
                  </svg>
                )}
              </div>
              <div className="ff items-start w-fit gap-1 flex-col">
                <span>DeepSearch</span>
                <span className="text-sm text-[var(--text-secondary)]">
                  Advance Search and reasoning
                </span>
              </div>
            </li>

            {/* DeeperSearch */}
            <li
              onClick={() => handleSelect("deeper")}
              className="cursor-pointer p-2 hover:bg-[var(--double-hover)] ff gap-2"
            >
              <div className="flex items-center justify-center w-6 h-6">
                {deepersearchActive && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    className="text-[var(--primary)] mt-1"
                  >
                    <path d="M13.485 1.929a.75.75 0 011.06 1.06l-8.25 8.25a.75.75 0 01-1.06 0l-4-4a.75.75 0 111.06-1.06l3.47 3.47 7.72-7.72z" />
                  </svg>
                )}
              </div>
              <div className="ff items-start w-[80%] gap-1 flex-col">
                <span>DeeperSearch</span>
                <span className="text-sm text-[var(--text-secondary)]">
                  Extend Search, more reasoning
                </span>
              </div>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}
