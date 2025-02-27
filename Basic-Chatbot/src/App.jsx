import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import ChatInput from './components/ChatInput';
import ChatMessages from "./components/ChatMessages";

function App() {
  const [chatMessages, setChatMessages] = React.useState([{
    message: 'hello chatbot',
    sender: 'user',
    id: uuidv4()
  }, {
    message: 'Hello! How can I help you?',
    sender: 'robot',
    id: uuidv4()
  }, {
    message: 'can you get me todays date?',
    sender: 'user',
    id: uuidv4()
  }, {
    message: 'Today is September 27',
    sender: 'robot',
    id: uuidv4()
  }]);

  return (
    <>
      <div>
         <ChatInput chatMessages={chatMessages} setChatMessages={setChatMessages}/>
         <ChatMessages chatMessages={chatMessages}/>
      </div>
     <div>
      <b>Welcome to the chatbot project! Send a message using the textbox above.
      </b>
     </div>
    </>
  )
}

export default App;