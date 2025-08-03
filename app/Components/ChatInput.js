"use client";
import { useState } from "react";
import { messageText } from "../data/Message";
import SoundVisualizerButton from "./ui/SoundVisualizerButton";
import AiSelector from "./ui/AiSelector";
import Think from "./ui/Think";
import DeepSearch from "./ui/DeepSeacrch";
import AttachButton from "./ui/Attachment";

export default function ChatInput() {
  const [input, setInput] = useState("");
  const [userMessage, setUserMessage] = useState("");
  const [showResponse, setShowResponse] = useState(true);

  const handleAttach = () => {
    console.log("Attach button clicked");
  };
  return (
    <section
      className={`fixed bottom-[4vh] left-0 w-full flex justify-center z-10  ${
        showResponse ? "items-end" : "items-center"
      } `}
    >
      <div className="ff flex-col  min-h-20 w-5xl p-5 bg-[var(--chatinput)] rounded-3xl">
        <div className="ff">
          <input
            type="text"
            className="p-2 w-full"
            placeholder="Type your message here..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
        <div className="ff justify-between mt-2 w-full">
          <div className="ff gap-2">
            <AttachButton onClick={handleAttach} />
            <DeepSearch
              onToggle={() => console.log("DeepSearch toggled")}
              onDropdown={() => console.log("Dropdown clicked")}
            />
            <Think />
          </div>
          <div className="ff gap-2">
            <AiSelector
              label="Grok 3"
              onClick={() => {
                // Handle AI selection logic here
              }}
            />
            <SoundVisualizerButton />
          </div>
        </div>
      </div>
    </section>
  );
}
