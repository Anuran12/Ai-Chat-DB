"use client";
import React, { useState, useRef, useEffect } from "react";

const ChatInterface: React.FC = () => {
  const [messages, setMessages] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isFirstMessage, setIsFirstMessage] = useState(true);
  const chatMessagesRef = useRef<HTMLDivElement>(null);

  const handleSendMessage = () => {
    if (inputValue.trim() !== "") {
      setMessages((prevMessages) => [...prevMessages, inputValue]);
      setInputValue("");

      if (isFirstMessage) {
        setIsFirstMessage(false);
      }

      if (chatMessagesRef.current) {
        chatMessagesRef.current.scrollTop =
          chatMessagesRef.current.scrollHeight;
      }
    }
  };

  useEffect(() => {
    if (chatMessagesRef.current) {
      chatMessagesRef.current.scrollTop = chatMessagesRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="flex flex-col h-full bg-[radial-gradient(160%_85%_at_50%_25%,rgba(0,0,0,0)_10%,rgba(0,0,0,0.05)_35%,rgba(74,144,164,0.2)_55%,rgba(85,155,170,0.4)_65%,rgba(100,170,180,0.7)_75%,rgba(150,200,210,0.9)_85%,rgba(200,230,240,1)_95%,rgba(255,255,255,1)_100%)] w-full rounded-[50px] items-center justify-center p-2.5">
      <div ref={chatMessagesRef} className="flex-grow overflow-y-auto p-4">
        {messages.map((message, index) => (
          <div key={index} className="mb-2">
            <div className="bg-gray-200 p-2 rounded-lg inline-block">
              {message}
            </div>
          </div>
        ))}
      </div>
      <div
        className={`flex items-center px-4 py-2 w-full rounded-full bg-[#010314] ${
          isFirstMessage ? "justify-center" : "justify-end"
        }`}
      >
        <input
          type="text"
          className="flex-grow bg-black/0 px-3 py-2 rounded-lg mr-2"
          placeholder="Type your message..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSendMessage();
            }
          }}
        />
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full"
          onClick={handleSendMessage}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatInterface;
