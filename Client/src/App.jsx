import { ChatGroups } from "./Components/Layout/ChatGroups/ChatGroups";
import { ChatRoom } from "./Components/Layout/ChatRoom/ChatRoom";
import "./Normalize.css";
import React from "react";
import {  UserProvider } from "./UserProvider";

function App() {

  const [ name , setName ] = React.useState("");

  const setUserName = (event) => {
    setName(event.target.value);
    console.log(name);
  }

  const [chatStatus, setChatStatus] = React.useState(true);
  return (


    <UserProvider>
      <div className="app-content">
        <ChatGroups event={setUserName} />
        {chatStatus && <ChatRoom />}
      </div>
    </UserProvider>
  );
}

export default App;
