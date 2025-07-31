"use client";

import React from "react";

export default function SoundVisualizerButton() {
  const barCount = 6;

  // Generate 6 random heights between 0.4rem and 1.2rem
  const initialHeights = Array.from({ length: barCount }, () =>
    `${(Math.random() * (1.2 - 0.4) + 0.4).toFixed(2)}rem`
  );

  const animationClasses = ["bar-anim-0", "bar-anim-1", "bar-anim-2", "bar-anim-0", "bar-anim-1", "bar-anim-2"];

  return (
    <>
      <div className="h-10 border bg-[var(--dark-grey)] aspect-square flex items-center justify-center gap-0.5 rounded-full dark:bg-white ring-1 ring-inset ring-transparent relative transform transition-transform duration-300 hover:scale-105 cursor-pointer group">
        {initialHeights.map((height, idx) => (
          <div
            key={idx}
            className={`bar-base dark:bg-[var(--light-grey)] bg-[var(--light)] ${animationClasses[idx]}`}
            style={{ height }}
          />
        ))}
      </div>

      <style jsx>{`
        .bar-base {
          width: 0.125rem; /* Tailwind w-0.5 */
          border-radius: 9999px; /* rounded-full */
          z-index: 10;
          transition: height 0.3s ease-in-out;
        }

        @keyframes bounce0 {
          0%, 100% { height: 0.4rem; }
          50% { height: 1.2rem; }
        }

        @keyframes bounce1 {
          0%, 100% { height: 0.7rem; }
          50% { height: 1.5rem; }
        }

        @keyframes bounce2 {
          0%, 100% { height: 1rem; }
          50% { height: 0.5rem; }
        }

        .group:hover .bar-anim-0 {
          animation: bounce0 1s ease-in-out infinite;
        }

        .group:hover .bar-anim-1 {
          animation: bounce1 1.1s ease-in-out infinite;
        }

        .group:hover .bar-anim-2 {
          animation: bounce2 1.2s ease-in-out infinite;
        }
      `}</style>
    </>
  );
}
