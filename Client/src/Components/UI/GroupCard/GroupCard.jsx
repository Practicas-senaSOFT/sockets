import React, { useEffect } from "react";
import {
  GroupColor,
  Overlay,
} from "../../../StyledComponents/StyledComponents";
import "./GroupCard.scss";
import socket from "../../../WebSockets";

export const GroupCard = ({
  name = "RoomName",
  password = "",
  usersConnected = "99",
  status = "Private",
}) => {
  const [showPopUp, setShowPopUp] = React.useState(false);

  const changePopUp = () => {
    setShowPopUp(!showPopUp);
  };

  useEffect(() => {}, [showPopUp]);

  const [userName, setUserName] = React.useState("");

  const room = 13212121;

  const [inputPassword, setInputPassword] = React.useState("");

  const joinPrivateRoom = () => {
    try {
      if (status === "Private") {
        if (inputPassword === inputPassword) {
          socket.emit("joinRoom", room);
        }
        alert("Wrong Password");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const joinRoom = () => {
    try {
      socket.emit("joinRoom", userName, room, (response) => {
        if (response.status === "success") {
          console.log("success");
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="groupCard-component" onClick={changePopUp}>
        <div className="groupCard-image">
          <img
            src="data:image/jpeg;base64,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"
            alt={"groupLogo"}
          />
        </div>
        <p resource="text">{name}</p>
        <div className="groupCard-status">
          <GroupColor color="green" />
          <p title="users">{usersConnected} / 100</p>
        </div>
      </div>
      {showPopUp && (
        <Overlay>
          <div className="sendGroup-content">
            <input
              type="text"
              placeholder="UserName"
              onChange={(e) => setUserName(e.target.value)}
            />
            {status === "private" && (
              <input
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            )}
            <button onClick={() => joinRoom()}>go to Room</button>
          </div>
        </Overlay>
      )}
    </>
  );
};
