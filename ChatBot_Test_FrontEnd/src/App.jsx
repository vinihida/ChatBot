import { useState } from 'react';
import { sendMessage } from './api/chat';
function App() {
  const [messages, setMessages] = useState(['foo', 'bar'])
  const [newMessage, setNewMessage] = useState('')

  const addMessage = async () => {
    const response = await sendMessage(newMessage)
    console.log(response)
    setMessages([...messages, newMessage, response])
    
  }
  return(
    <div className="wrapper">
      <div className="messages">
        { messages.map((message, key) => <div className="message" key={key}>{message}</div>) }
      </div>
      <div className="new-message">
        <input type="text" onChange={(e) => {setNewMessage(e.target.value)}}/>
        <button onClick={addMessage}>Send</button>
      </div>
    </div>
  )
}

export default App;