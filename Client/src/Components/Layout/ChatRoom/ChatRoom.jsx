import React from "react";
import "./ChatRoom.scss";
import { IoMdSend } from "react-icons/io";
import socket from "../../../WebSockets";
import UserContext from "../../../UserProvider";
import { Socket } from "socket.io-client";

export const ChatRoom = () => {
  const { user } = React.useContext(UserContext);

  const [ chatLoad , setChatLoad ] = React.useState(false);

  React.useEffect(() => {
    if (user.room !== -1) {
      setChatLoad(true);
    }
  }, [user]);

  const [message, setMessage] = React.useState("");

  const sendMessage = async () => {
    if (message.trim() !== "") {
      let messageData = {
        message: message,
        room: 2,
        time: new Date(Date.now()).getHours() +":" + new Date(Date.now()).getMinutes(),
      };
      try {
        await socket.emit("message" ,messageData );
        setMessage("");
      } catch (error) {
        console.log(error);
      }
    }
  };

  React.useEffect(() => {
    socket.on("devolucion" ,(data) => {
      console.log(data);
    })
  },[socket])

  

  const sendEvent = (event) => {
    let charCode = event.keyCode;
    if (charCode === 13) {
      sendMessage();
    }
  };

  return (
    <>
      {chatLoad && <div className="ChatRoom-container">
        <div className="ChatRoom-header">
          <p title="header">{user.roomName}</p>
          <div className="ChatRoom-status">
            <p title="status">Public</p>
            <p title="status">{user.users}/100</p>
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
      </div>}
      
    </>
  );
};
