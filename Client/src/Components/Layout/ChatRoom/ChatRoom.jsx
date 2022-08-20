import React from "react";
import "./ChatRoom.scss";
import { IoMdSend } from "react-icons/io";
import socket from "../../../WebSockets";
import UserContext from "../../../UserProvider";
import { v4 as uuid } from "uuid";

export const ChatRoom = () => {
  const { user } = React.useContext(UserContext);

  const [chatLoad, setChatLoad] = React.useState(true);
  const [messageList, setMessageList] = React.useState([]);

  const [message, setMessage] = React.useState("");

  const sendEvent = (event) => {
    let charCode = event.keyCode;
    if (charCode === 13) {
      sendMessage();
    }
  };

  const sendMessage = () => {
    if (message.trim() !== "") {
      const uniqueId = uuid();
      const smallId = uniqueId.slice(0, 8);
      let data = {
        id: smallId,
        user: user.name,
        message: message,
        room: user.room,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      };
      socket.emit("sendMessage", data);
      setMessage("");
      setMessageList((item) => [...item, data]);
    }
  };

  React.useEffect(() => {
    socket.on("received", (data) => {
      setMessageList((item) => [...item, data]);
    });
  }, [socket]);

  return (
    <>
      {chatLoad && (
        <div className="ChatRoom-container">
          <div className="ChatRoom-header">
            <p title="header">{user.roomName}</p>
            <div className="ChatRoom-status">
              <p title="status">Public</p>
              <p title="status">{user.users}/100</p>
            </div>
          </div>
          <div className="ChatRoom-body">
            {messageList.map((item) => {
              if (item.user === user.name) {
                return (
                  <div className="user-message" key={item.id}>
                    <div className="userMessage-content">
                      <p title="message">{item.message}</p>
                      <p title="time">{item.time}</p>
                    </div>
                  </div>
                );
              } else {
                return (
                  <div className="other-message" key={item.id}>
                    <div className="otherMessage-content">
                      <p title="message">{item.message}</p>
                      <p title="time">{item.time}</p>
                    </div>
                  </div>
                );
              }
            })}
          </div>
          <div className="ChatRoom-Footer">
            <input
              autoFocus={true}
              name="message"
              type="text"
              autoComplete="off"
              placeholder="Type a message..."
              onChange={(e) => setMessage(e.target.value)}
              value={message}
              onKeyDown={sendEvent}
            />
            <IoMdSend onClick={() => sendMessage()} className="send-icon" />
          </div>
        </div>
      )}
    </>
  );
};
