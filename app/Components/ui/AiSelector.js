import React from "react";

export default function AiSelector({ label = "Grok 3", onClick }) {
  return (
    <button
      className="font-medium cursor-pointer focus-visible:outline-none duration-100 select-none text-fg-primary hover:bg-button-ghost-hover disabled:hover:bg-transparent h-10 data-[placeholder]:text-muted-foreground 
        [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 
        aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive 
        dark:bg-input/30 dark:hover:bg-input/50 flex w-fit items-center justify-between gap-2 bg-transparent 
        px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none 
        focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 
        data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex 
        *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 
        [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 
        border border-border-l2 sm:border-0 rounded-full"
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
    >
      <span className="inline-block text-xs text-primary @[400px]/input:text-sm">{label}</span>
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="stroke-[2] size-3 text-secondary transition-transform"
      >
        <path d="M6 9L12 15L18 9" stroke="currentColor" strokeLinecap="square" />
      </svg>
    </button>
  );
}
