"use client";
import { useState, useRef, useEffect } from "react";
import { sendToBackend } from "@/lib/mockBackend";
import SoundVisualizerButton from "./ui/SoundVisualizerButton";
import AiSelector from "./ui/AiSelector";
import Think from "./ui/Think";
import DeepSearch from "./ui/DeepSeacrch";
import AttachButton from "./ui/Attachment";

export default function ChatInput() {
  const [showResponse, setShowResponse] = useState(true);
  const [search, setSearch] = useState(false);

  const [think, setThink] = useState(false);
  const [deepsearch, setDeepSearch] = useState(false);
  const [deepersearch, setDeeperSearch] = useState(false);
  const [attachedFiles, setAttachedFiles] = useState([]);

  const [input, setInput] = useState("");
  const textareaRef = useRef(null);

  const [chatMessages, setChatMessages] = useState([]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg = {
      role: "user",
      message: input,
      isThinking: think,
      deepSeek: deepsearch,
      deeperSeek: deepersearch,
      images: attachedFiles
        .filter((f) => f.type === "image")
        .map((f) => f.file.name),
      documents: attachedFiles
        .filter((f) => f.type === "document")
        .map((f) => f.file.name),
    };

    setChatMessages((prev) => [...prev, userMsg]);
    setInput("");

    const botResponse = await sendToBackend(input, {
      isThinking: think,
      deepSeek: deepsearch,
      deeperSeek: deepersearch,
      images: userMsg.images,
      documents: userMsg.documents,
    });

    setChatMessages((prev) => [...prev, botResponse]);

    // Reset toggle states
    setThink(false);
    setDeepSearch(false);
    setDeeperSearch(false);
    setAttachedFiles([]);
  };

  // Auto expand textarea
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height =
        textareaRef.current.scrollHeight + "px";
    }
  }, [input]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleFileSelect = (newFiles) => {
    setAttachedFiles((prev) => [...prev, ...newFiles]);
  };

  const handleThinkChange = (currentValue) => {
    setThink(currentValue);
  };

  const handleSelectionChange = (selected) => {
    console.log("AI selection changed:", selected);
  };

  return (
    <>
      {/* Chat Messages Section */}
      <div className="w-full   max-w-6xl border mx-auto px-4 pb-20 mt-20 space-y-4">
        {chatMessages.map((msg, idx) => (
          <div
            key={idx}
            className={`flex ${
              msg.role === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`max-w-[80%] px-4 py-2 rounded-xl text-[var(--primary)]  ${
                msg.role === "user" ? " bg-[var(--chatinput)]" : ""
              }`}
            >
              {msg.message}
            </div>
          </div>
        ))}
      </div>

      {/* Input Section */}
      <section
        className={`fixed bottom-10 md:bottom-20 left-0 w-full flex justify-center z-10 ${
          showResponse ? "items-end" : "items-center"
        }`}
      >
        <div className="ff flex-col min-h-20 w-5xl mx-3 p-5 bg-[var(--chatinput)] rounded-3xl">
          {/* Textarea */}
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

          {/* File Preview */}
          {attachedFiles.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-3 px-2">
              {attachedFiles.map((file, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--chip-bg)] text-[var(--primary)] text-sm border border-[var(--border-color)]"
                >
                  {file.type === "image" ? "🖼️" : "📄"}
                  <span className="truncate max-w-[120px]">
                    {file.file.name}
                  </span>
                  <button
                    onClick={() =>
                      setAttachedFiles((prev) =>
                        prev.filter((_, i) => i !== index)
                      )
                    }
                    className="text-[var(--danger)] hover:text-red-600 text-base"
                    title="Remove"
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* Action Buttons */}
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
              <Think isThinking={think} ThinkClick={handleThinkChange} />
            </div>
            <div className="ff gap-2">
              <AiSelector
                label="Grok 3"
                onClick={() => {
                  // Future AI selection logic
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
    </>
  );
}
