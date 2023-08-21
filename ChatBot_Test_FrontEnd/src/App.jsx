import React, { useState } from 'react';
import { sendMessage } from './api/chat';
import './index.scss';
import logo from './assets/png-clipart-star-trek-starship-enterprise-uss-enterprise-ncc-1701-others-film-starship-enterprise.png';
import picture from './assets/BotImage.png';
import { IoSend } from 'react-icons/io5';

function App() {
  const [messages, setMessages] = useState([
    { text: '', isUser: false, id: Date.now() }
  ]);
  const [newMessage, setNewMessage] = useState('');

  const addMessage = async () => {
    if (newMessage.trim() === '') {
      return;
    }

    const response = await sendMessage(newMessage);
    setNewMessage('');

    setMessages((prevMessages) => [
      ...prevMessages,
      { text: newMessage, isUser: true, id: Date.now() },
      { text: response, isUser: false, id: Date.now() + 1 }
    ]);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      addMessage();
    }
  };

  return (
    <div className="body">
      <div className="header">
        <img src={logo} alt="Star Trek Enterprise" />
      </div>
      <div className="content">
        <div className="chat-wrapper">
          <div className="text-box">
            {messages.length > 1 && (
              <>
                {messages.map((message) => (
                  <div
                    className={message.isUser ? 'user-input' : 'bot-output'}
                    key={message.id}
                  >
                    <div className="message-container">
                      <div className="user-name">{message.isUser ? 'User' : 'Stellar'}</div>
                      <div className="message">{message.text}</div>
                    </div>
                    <div className={message.isUser ? 'profile-pic' : 'bot-profile-pic'}>
                      {message.isUser ? 'VH' : 'Bot'}
                    </div>
                  </div>
                ))}
              </>
            )}
          </div>
          <div className="input">
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <IoSend onClick={addMessage} className="send-icon" />
          </div>
          <div className="input-placeholder"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
