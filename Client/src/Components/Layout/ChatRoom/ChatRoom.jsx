import React, { useContext, useEffect } from "react";
import "./ChatRoom.scss";
import { userContext } from "../../../UserProvider";
import { IoMdSend } from "react-icons/io";

export const ChatRoom = (user) => {
  const [message, setMessage] = React.useState("");

  const sendMessage = () => {
    console.log("send message success");
    console.log(message);
    setMessage("");
  };

  const sendEvent = (event) => {
    let charCode = event.keyCode;
    if (charCode === 13) {
      sendMessage();
    }
  };

  return (
    <div className="ChatRoom-container">
      <div className="ChatRoom-header">
        <p title="header">Group Name</p>
        <div className="ChatRoom-status">
          <p title="status">Public</p>
          <p title="status">99/100</p>
        </div>
      </div>
      <div className="ChatRoom-body"></div>
      <div className="ChatRoom-Footer">
        <input
          autoFocus={true}
          name="message"
          type="text"
          placeholder="Type a message..."
          onChange={(e) => setMessage(e.target.value)}
          value={message}
          onKeyDown={sendEvent}
        />
        <IoMdSend onClick={sendMessage} className="send-icon" />
      </div>
    </div>
  );
};
