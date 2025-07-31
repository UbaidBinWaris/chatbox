"use client";
import React from "react";
import Image from "next/image";

export default function Think({ size = 18 }) {
  return (
    <div className="flex items-center gap-1 cursor-pointer group/think-toggle">
      <Image
        src="/input/ThinkDim.svg"
        alt="Think"
        width={size}
        height={size}
        className="transition-transform duration-100 group-hover/think-toggle:scale-110"
      />
      <span className="text-sm hidden sm:block font-medium text-fg-secondary group-hover/think-toggle:text-fg-primary">
        Think
      </span>
    </div>
  );
}
