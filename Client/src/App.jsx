import { ChatGroups } from "./Components/Layout/ChatGroups/ChatGroups";
import { ChatRoom } from "./Components/Layout/ChatRoom/ChatRoom";
import "./Normalize.css";
import React , { useContext } from "react";
import { userContext, UserProvider } from "./UserProvider";

function App() {

  const user = useContext(userContext);
  console.log(user);

  const [chatStatus, setChatStatus] = React.useState(true);
  return (
    <UserProvider>
      <div className="app-content">
        <ChatGroups />
        {chatStatus && <ChatRoom />}
      </div>
    </UserProvider>
  );
}

export default App;
