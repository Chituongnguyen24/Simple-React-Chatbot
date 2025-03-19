import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './App.css';
import ChatInput from './components/ChatInput';
import ChatMessages from "./components/ChatMessages";

import "./index.css";

function App() {
  const [chatMessages, setChatMessages] = React.useState([]); 
  return (
    <div>
      <div>
         <ChatInput chatMessages={chatMessages} setChatMessages={setChatMessages}/>
         <ChatMessages chatMessages={chatMessages}/>
      </div>
      {chatMessages.length === 0 && ( 
        <p>Welcome to chatbot project! Send a message using textbox above</p>
      )}
    </div>
  );
}

export default App;
