"use client";
import React, { useState, useRef, useEffect } from "react";

const ChatInterface: React.FC = () => {
  const [messages, setMessages] = useState<
    Array<{ text: string; sender: "user" | "bot" }>
  >([]);
  const [inputValue, setInputValue] = useState("");
  const [isFirstMessage, setIsFirstMessage] = useState(true);
  const chatMessagesRef = useRef<HTMLDivElement>(null);

  const handleSendMessage = () => {
    if (inputValue.trim() !== "") {
      // Add user message
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: inputValue, sender: "user" },
      ]);

      // Simulate bot response
      setTimeout(() => {
        const botReplies = [
          "Interesting! Tell me more.",
          "I see what you mean.",
          "That's a great point!",
          "Let me think about that.",
          "Fascinating perspective.",
        ];
        const randomReply =
          botReplies[Math.floor(Math.random() * botReplies.length)];

        setMessages((prevMessages) => [
          ...prevMessages,
          { text: randomReply, sender: "bot" },
        ]);
      }, 1000);

      setInputValue("");
      setIsFirstMessage(false);
    }
  };

  useEffect(() => {
    if (chatMessagesRef.current) {
      chatMessagesRef.current.scrollTop = chatMessagesRef.current.scrollHeight;
    }
  }, [messages]);
  console.log(isFirstMessage);

  return (
    <div className="flex flex-col h-[calc(100vh-120px)] md:h-full w-full bg-[radial-gradient(160%_85%_at_50%_25%,rgba(0,0,0,0)_10%,rgba(0,0,0,0.05)_35%,rgba(74,144,164,0.2)_55%,rgba(85,155,170,0.4)_65%,rgba(100,170,180,0.7)_75%,rgba(150,200,210,0.9)_85%,rgba(200,230,240,1)_95%,rgba(255,255,255,1)_100%)] rounded-[25px] md:rounded-[50px] items-center justify-between p-2 md:p-4">
      <div
        ref={chatMessagesRef}
        className="flex-grow w-full overflow-y-auto px-2 md:p-4 mb-4 custom-scrollbar"
        style={{ maxHeight: "calc(100vh - 200px)" }}
      >
        {messages.map((message, index) => (
          <div
            key={index}
            className={`mb-2 flex ${
              message.sender === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`p-2 md:p-3 rounded-lg max-w-[85%] md:max-w-[70%] text-sm md:text-base ${
                message.sender === "user"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-300 text-black"
              }`}
            >
              {message.text}
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center w-full bg-[#010314] rounded-full px-2 md:px-4 py-2 sticky bottom-0">
        <input
          type="text"
          className="flex-grow bg-transparent text-white px-2 md:px-3 py-1.5 md:py-2 rounded-lg mr-2 focus:outline-none text-sm md:text-base"
          placeholder="Type your message..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSendMessage();
          }}
        />
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white px-3 md:px-4 py-1.5 md:py-2 rounded-full text-sm md:text-base"
          onClick={handleSendMessage}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatInterface;
