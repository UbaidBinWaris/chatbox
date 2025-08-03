"use client";

import React, { useEffect, useState } from "react";

export default function SoundVisualizerButton({ onClick }) {
  const barCount = 6;
  const [heights, setHeights] = useState([]);

  useEffect(() => {
    const randomHeights = Array.from(
      { length: barCount },
      () => `${(Math.random() * (1.2 - 0.4) + 0.4).toFixed(2)}rem`
    );
    setHeights(randomHeights);
  }, []);

  const animationClasses = ["bar-anim-0", "bar-anim-1", "bar-anim-2"];

  return (
    <>
      <button
        id="sound-visualizer-button"
        onClick={onClick}
        aria-label="Sound Visualizer"
        className="h-10 aspect-square ff gap-0.5 rounded-full bg-[var(--primary)] hover:scale-110 transition-transform duration-300 p-2 cursor-pointer group"
      >
        {heights.map((height, idx) => (
          <div
            key={idx}
            className={`bar-base ${
              animationClasses[idx % animationClasses.length]
            }`}
            style={{ height }}
          />
        ))}
      </button>

      <style jsx>{`
        .bar-base {
          width: 0.125rem;
          border-radius: 9999px;
          z-index: 10;
          background-color: var(--secondary);
          transition: height 0.3s ease-in-out;
        }

        @keyframes bounce0 {
          0%,
          100% {
            height: 0.4rem;
          }
          50% {
            height: 1.2rem;
          }
        }

        @keyframes bounce1 {
          0%,
          100% {
            height: 0.7rem;
          }
          50% {
            height: 1.5rem;
          }
        }

        @keyframes bounce2 {
          0%,
          100% {
            height: 1rem;
          }
          50% {
            height: 0.5rem;
          }
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
