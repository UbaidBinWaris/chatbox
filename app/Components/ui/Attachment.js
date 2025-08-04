"use client";
import React, { useRef, useState, useEffect } from "react";

const AttachButton = ({ onFileSelect, disabled }) => {
  const [open, setOpen] = useState(false);
  const imageInputRef = useRef(null);
  const documentInputRef = useRef(null);
  const dropdownRef = useRef(null);
  const timeoutRef = useRef(null);
  const containerRef = useRef(null);

  const handleToggle = () => {
    setOpen((prev) => !prev);
  };

  const handleFileUpload = (e, type) => {
    const files = Array.from(e.target.files);
    if (files.length === 0) return;

    const typedFiles = files.map((file) => ({ file, type }));

    if (onFileSelect) {
      onFileSelect(typedFiles);
    }

    console.log("Uploaded files:", typedFiles);
    setOpen(false);
  };

  // 🔒 Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // ⏱️ Auto-hide dropdown after 5s if not hovered
  const startHideTimer = () => {
    timeoutRef.current = setTimeout(() => {
      setOpen(false);
    }, 5000);
  };

  const cancelHideTimer = () => {
    clearTimeout(timeoutRef.current);
  };

  return (
    <div ref={containerRef} className="relative inline-block">
      {/* Trigger Button */}
      <button
        type="button"
        aria-label="Attach"
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={handleToggle}
        disabled={disabled}
        className="ff p-2 border border-[var(--text)] rounded-full text-[var(--primary)] hover:bg-[var(--hover)]"
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="stroke-[2]"
        >
          <path
            d="M10 9V15C10 16.1046 10.8954 17 12 17V17C13.1046 17 14 16.1046 14 15V7C14 4.79086 12.2091 3 10 3V3C7.79086 3 6 4.79086 6 7V15C6 18.3137 8.68629 21 12 21V21C15.3137 21 18 18.3137 18 15V8"
            stroke="currentColor"
          />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {open && (
        <ul
          ref={dropdownRef}
          onMouseEnter={cancelHideTimer}
          onMouseLeave={startHideTimer}
          className="absolute z-10 w-64 rounded-2xl shadow bg-[var(--hover)] text-[var(--primary)] overflow-hidden
            left-0 bottom-full mb-2 transition-all duration-200 ease-in-out"
        >
          {/* Import Image */}
          <li
            onClick={() => imageInputRef.current?.click()}
            className="cursor-pointer px-4 py-2 hover:bg-[var(--double-hover)] flex items-center gap-2"
          >
            <div className="flex items-center justify-center w-6 h-6">📷</div>
            <div className="ff flex-col items-start gap-1 w-fit">
              <span>Import Image</span>
              <span className="text-sm text-[var(--text-secondary)]">
                JPG, PNG, etc.
              </span>
            </div>
          </li>

          {/* Import Document */}
          <li
            onClick={() => documentInputRef.current?.click()}
            className="cursor-pointer px-4 py-2 hover:bg-[var(--double-hover)] flex items-center gap-2"
          >
            <div className="flex items-center justify-center w-6 h-6">📄</div>
            <div className="ff flex-col items-start gap-1 w-fit">
              <span>Import Document</span>
              <span className="text-sm text-[var(--text-secondary)]">
                PDF, DOCX, TXT, etc.
              </span>
            </div>
          </li>
        </ul>
      )}

      {/* Hidden File Inputs */}
      <input
        ref={imageInputRef}
        type="file"
        accept="image/*"
        multiple
        className="hidden"
        onChange={(e) => handleFileUpload(e, "image")}
      />
      <input
        ref={documentInputRef}
        type="file"
        accept=".pdf,.doc,.docx,.txt"
        multiple
        className="hidden"
        onChange={(e) => handleFileUpload(e, "document")}
      />
    </div>
  );
};

export default AttachButton;
