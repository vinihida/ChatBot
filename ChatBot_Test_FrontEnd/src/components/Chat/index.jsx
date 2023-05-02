import React from "react";
import {
  ChatEngine,
  sendMessage,
  
} from "react-chat-engine";
import Header from "@/components/Header";
import { helloWorld } from "@/api/chat";

export default () => {

  return (
    <div style={{ height: "100%" }}>
      <ChatEngine 
        publicKey={import.meta.env.VITE_PROJECT_ID}
        userName={'test_user'}
        userSecret={'Ka1234'}
        style={{ height: "100%" }}
        onConnect={(creds) => console.log(creds)}
        onFailAuth={(props) => console.log(props)}
        onNewChat={(chat) => console.log(chat)}
        onEditChat={(chat) => console.log(chat)}
        onDeleteChat={(chat) => console.log(chat)}
        onNewMessage={(chatId, message) => console.log(chatId, message)}
        onEditMessage={(chatId, message) => console.log(chatId, message)}
        onDeleteMessage={(chatId, message) => console.log(chatId, message)}
      />
    </div>
  );
};