import { ChatGroups } from "./Components/Layout/ChatGroups/ChatGroups";
import { ChatRoom } from "./Components/Layout/ChatRoom/ChatRoom";
import "./Normalize.css";
import React, { useContext } from "react";
import { UserProvider } from "./UserProvider";

function App() {
  
  return (
    <UserProvider>
      <div className="app-content">
        <ChatGroups />
        <ChatRoom />
      </div>
    </UserProvider>
  );
}

export default App;
