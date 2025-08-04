
"use client";
import { useState, useRef, useEffect } from "react";
import { messageText } from "../data/Message";
import SoundVisualizerButton from "./ui/SoundVisualizerButton";
import AiSelector from "./ui/AiSelector";
import Think from "./ui/Think";
import DeepSearch from "./ui/DeepSeacrch";
import AttachButton from "./ui/Attachment";

export default function ChatInput() {
  // const [userMessage, setUserMessage] = useState("");
  const [showResponse, setShowResponse] = useState(true);
  const [search, setSearch] = useState(false);

  const [think, setThink] = useState(false);
  const [deepsearch, setDeepSearch] = useState(false);
  const [deepersearch, setDeeperSearch] = useState(false);
  const [attachedFiles, setAttachedFiles] = useState([]);

  const [input, setInput] = useState("");
  const textareaRef = useRef(null);

  // Handle attachment click
  const handleAttach = () => {
    console.log("Attach button clicked");
  };

  const handleThinkChange = (currentValue) => {
    setThink(currentValue);
    console.log("New value from Think:", currentValue);
  };

  const handleSelectionChange = (selected) => {
    console.log("Selection changed to:", selected);
  };

  const handleFileSelect = (newFiles) => {
    setAttachedFiles((prev) => [...prev, ...newFiles]);
    console.log("Attached files:", [...attachedFiles, ...newFiles]);
  };

  // Auto-expand textarea height
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = textareaRef.current.scrollHeight + "px";
    }
  }, [input]);

  // Handle Enter and Shift+Enter
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      console.log("Sending message:", input);
      setInput("");
    }
  };

  return (
    <section
      className={`fixed bottom-10 md:bottom-20 left-0 w-full flex justify-center z-10 ${
        showResponse ? "items-end" : "items-center"
      }`}
    >
      <div className="ff flex-col min-h-20 w-5xl mx-3 p-5 bg-[var(--chatinput)] rounded-3xl">
        {/* Textarea Input */}
        <div className="ff w-full">
          <textarea
            ref={textareaRef}
            className="w-full p-3 transition duration-200 placeholder-[var(--text-secondary)] text-[var(--primary)] focus:outline-none focus:ring-0 max-h-80 resize-none overflow-y-auto overflow-x-hidden bg-transparent whitespace-pre-wrap break-words"

            placeholder="Type your message here..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            rows={1}
          />
        </div>

        {/* Buttons Section */}
        <div className="ff justify-between mt-2 w-full">
          <div className="ff gap-2">
            <AttachButton onFileSelect={handleFileSelect} />
            <DeepSearch
              deepsearchActive={deepsearch}
              deepersearchActive={deepersearch}
              setDeepSearchActive={setDeepSearch}
              setDeeperSearchActive={setDeeperSearch}
              onSelectionChange={handleSelectionChange}
            />
            <Think ThinkClick={handleThinkChange} />
          </div>
          <div className="ff gap-2">
            <AiSelector
              label="Grok 3"
              onClick={() => {
                // AI selection logic
              }}
            />
            <SoundVisualizerButton
              onClick={() => {
                setSearch((prev) => !prev);
                console.log(`Sound Visualizer Button Clicked ${search}`);
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
