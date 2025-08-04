// components/ChatDisplay.jsx
"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { chatHistory as initialHistory } from "../data/p";

export default function chat({ newMessage }) {
  const [messages, setMessages] = useState(initialHistory);

  useEffect(() => {
    if (newMessage) {
      setMessages((prev) => [...prev, newMessage]);
    }
  }, [newMessage]);

  return (
    <div className="p-4 max-h-[60vh] overflow-y-auto space-y-2">
      {messages.map((msg, idx) => (
        <div
          key={idx}
          className={`p-3 rounded-xl ${
            msg.role === "user" ? "bg-blue-100 text-right" : "bg-gray-100"
          }`}
        >
          <div>{msg.message}</div>
          {(msg.isThinking || msg.deepSeek || msg.deeperSeek) && (
            <div className="text-sm text-gray-500 mt-1">
              {msg.isThinking && "🤔 Thinking"}
              {msg.deepSeek && " 🔍 DeepSeek"}
              {msg.deeperSeek && " 🔬 DeeperSeek"}
            </div>
          )}
          {msg.images?.length > 0 && (
            <div className="mt-2">
              {msg.images.map((img, i) => (
                <Image key={i} src={img} alt={`Chat image ${i + 1}`} width={400} height={300} className="max-w-xs" />
              ))}
            </div>
          )}
          {msg.documents?.length > 0 && (
            <div className="mt-2 text-sm text-blue-600 underline">
              {msg.documents.map((doc, i) => (
                <div key={i}>{doc}</div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
