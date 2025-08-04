"use client";
import { useEffect, useState } from "react";

// Optional: starter message pool
const randomStarters = [
  "Hello! How can I help you today?",
  "What's on your mind?",
  "Ask me anything — I'm listening.",
  "Hey there! Ready to explore something?",
];

export default function Chat({ chatMessages = [] }) {
  const [messages, setMessages] = useState([]);

  // Load a random welcome message once on mount
  useEffect(() => {
    const random = randomStarters[Math.floor(Math.random() * randomStarters.length)];
    setMessages([{ role: "assistant", message: random }, ...chatMessages]);
  }, [chatMessages]);

  return (
    <div className="w-full max-w-4xl mx-auto px-4 mt-6 space-y-4 overflow-y-auto">
      {messages.map((msg, idx) => (
        <div
          key={idx}
          className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
        >
          <div
            className={`max-w-[80%] px-4 py-2 rounded-2xl shadow-md whitespace-pre-wrap break-words ${
              msg.role === "user"
                ? "bg-[var(--user-bubble)] text-[var(--primary)]"
                : "bg-[var(--assistant-bubble)] text-[var(--primary)]"
            }`}
          >
            {msg.message}
          </div>
        </div>
      ))}
    </div>
  );
}
