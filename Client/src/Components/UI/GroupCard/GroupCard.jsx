import React, { useContext } from "react";
import {
  GroupColor,
  Overlay,
} from "../../../StyledComponents/StyledComponents";
import "./GroupCard.scss";
import socket from "../../../WebSockets";
import UserContext from "../../../UserProvider";
import { IoMdCloseCircleOutline } from "react-icons/io";

export const GroupCard = ({
  password = "",
  name = "RoomName",
  usersConnected = "99",
    status = "Private",
  }) => {
  const [showPopUp, setShowPopUp] = React.useState(false);
  const { changeData } = useContext(UserContext);

  const changePopUp = () => {
    setShowPopUp(!showPopUp);
  };

  const [userName, setUserName] = React.useState("");
  const [inputPassword, setInputPassword] = React.useState("");

  const sendEvent = (event) => {
    let charCode = event.keyCode;
    if (charCode === 13) {
      joinRoom();
    }
  };

  const joinRoom = () => {
    let data = {
      userName : userName,
      room: 2,
      roomName: "test",
      users: 50,
    };
    try {
      socket.emit(
        "joinRoom",
        data,
        (response) => {
          response.status === "success"
            ? changeData(userName, data.room, data.roomName, data.users)
            : console.warn("error in joinRoom socket");
          changeData(userName, data.room, data.roomName, data.users);
          changePopUp();
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="groupCard-component" onClick={changePopUp}>
        <div className="groupCard-image">
          <img
            src="https://cdn.pixabay.com/photo/2014/07/08/10/47/team-386673_960_720.jpg"
            alt={"groupLogo"}
          />
        </div>
        <p resource="text">{name}</p>
        <div className="groupCard-status">
          <GroupColor color="#37F92A" />
          <p title="users">{usersConnected} / 100</p>
        </div>
      </div>
      {showPopUp && (
        <Overlay>
          <div className="sendGroup-content">
            <div className="sendGroup-header">
              <IoMdCloseCircleOutline className="modal-icon" onClick={changePopUp} />
            </div>
            <div className="sendGroup-Form">
              <input
                type="text"
                autoFocus
                placeholder="UserName"
                onChange={(e) => setUserName(e.target.value)}
                onKeyUp={sendEvent}
              />
              {status === "private" && (
                <input
                  type="password"
                  placeholder="Password"
                  onChange={(e) => setInputPassword(e.target.value)}
                />
              )}
            </div>

            <button onClick={joinRoom} >go to Room</button>
          </div>
        </Overlay>
      )}
    </>
  );
};
