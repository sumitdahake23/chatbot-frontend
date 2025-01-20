import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import "../App.css"; // Custom styling

const Chatbot = () => {
  const [userMessage, setUserMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [botTyping, setBotTyping] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const chatEndRef = useRef(null);

  const sendMessage = async () => {
    if (!userMessage.trim()) return;

    const updatedMessages = [
      ...messages,
      { sender: "user", text: userMessage },
    ];
    setMessages(updatedMessages);

    setUserMessage("");
    setBotTyping(true);

    try {
      const response = await axios.post("https://chatbot-backend-j7kv.onrender.com/send-message", {
        userMessage,
      });

      setTimeout(() => {
        setMessages([
          ...updatedMessages,
          { sender: "bot", text: response.data.botResponse },
        ]);
        setBotTyping(false);
      }, 1500);
    } catch (error) {
      console.error("Error sending message:", error);
      setBotTyping(false);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      sendMessage();
    }
  };

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, botTyping]);

  return (
    <div className="chatbot-container">
      {isChatOpen ? (
        <div className="chatbot">
          <div className="chatbot-header bg-primary text-white d-flex justify-content-between align-items-center p-2">
            <h6 className="mb-0">Chatbot</h6>
            <button
              className="btn btn-sm btn-danger"
              onClick={() => setIsChatOpen(false)}
            >
              Close
            </button>
          </div>
          <div
            className="chat-window p-2"
            style={{ height: "calc(60vh - 60px)", overflowY: "auto" }}
          >
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`d-flex ${
                  msg.sender === "user"
                    ? "justify-content-end"
                    : "justify-content-start"
                } mb-2`}
              >
                <div
                  className={`p-2 rounded ${
                    msg.sender === "user"
                      ? "bg-primary text-white"
                      : "bg-light text-dark"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {botTyping && (
              <div className="d-flex justify-content-start mb-2">
                <div className="p-2 bg-light text-dark rounded">Typing...</div>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>
          <div className="chat-input bg-light p-2">
            <div className="input-group">
              <input
                type="text"
                className="form-control typing-input"
                placeholder="Type a message..."
                value={userMessage}
                onChange={(e) => setUserMessage(e.target.value)}
                onKeyDown={handleKeyPress}
              />
              <button className="btn btn-primary" onClick={sendMessage}>
                <i className="bi bi-send-fill"></i>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button
          className="btn btn-primary open-chatbot-btn"
          onClick={() => setIsChatOpen(true)}
        >
          Open Chatbot
        </button>
      )}
    </div>
  );
};

export default Chatbot;
