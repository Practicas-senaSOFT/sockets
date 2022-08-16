import { ChatGroups } from "./Components/Layout/ChatGroups/ChatGroups";
import { ChatRoom } from "./Components/Layout/ChatRoom/ChatRoom";
import { StartPage } from "./Components/Page/StartPage/startPage";
import "./Normalize.css";
import React from "react";

function App() {
  const [chatStatus, setChatStatus] = React.useState(true);
  return (
    <div className="app-content">
      <ChatGroups />
      {chatStatus && 
       <ChatRoom />}
    </div>
  );
}

export default App;
