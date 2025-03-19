import React from "react";

function ChatMessage({ message, sender }) {
  return (
    <div className={`chat-message ${sender === "user" ? "user-message" : "bot-message"}`}>
      {sender === "robot" && <img src="robot.png" alt="Robot" className="avatar" />}
      <span className="message-content">{message}</span>
      {sender === "user" && <img src="user.png" alt="User" className="avatar" />}
    </div>
  );
}

export default ChatMessage;
