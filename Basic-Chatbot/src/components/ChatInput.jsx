import React from 'react';

function ChatInput({ chatMessages, setChatMessages }) {
  const [inputText, setInputText] = React.useState('');

  function saveInputText(event) {
    setInputText(event.target.value);
  }

  function sendMessage() {
    const newChatMessages = [
      ...chatMessages,
      {
        message: inputText,
        sender: 'user',
        id: crypto.randomUUID(),
      },
    ];
    setChatMessages(newChatMessages);
    const response = Chatbot.getResponse(inputText);
    setChatMessages([
      ...newChatMessages,
      {
        message: response,
        sender: 'robot',
        id: crypto.randomUUID(),
      },
    ]);
    setInputText('');
  }

  function handleKeyDown(event) {
    if (event.key === 'Enter') {
      sendMessage();
    }
  }

  return (
    <>
      <input
        placeholder="Send a message to Chatbot"
        size="30"
        onChange={saveInputText}
        onKeyDown={handleKeyDown}
        value={inputText}
      />
      <button onClick={sendMessage}>Send</button>
    </>
  );
}

export default ChatInput;