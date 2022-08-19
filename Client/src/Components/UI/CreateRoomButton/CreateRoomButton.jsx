import React from "react";
import { Overlay, PopUp } from "../../../StyledComponents/StyledComponents";
import "./CreateRoomButton.scss";
import { IoMdCloseCircleOutline } from "react-icons/io";
import socket from "../../../WebSockets";

export const CreateRoomButton = () => {

  const [roomName, setRoomName] = React.useState("");
  const [roomType, setRoomType] = React.useState("public");
  const [roomPassword, setRoomPassword] = React.useState("");

  const [showPopUp, setShowPopUp] = React.useState(false);

  const changePopUp = () => {
    setShowPopUp(!showPopUp);
  };

  const [height, setHeight] = React.useState("200px");

  const changeValues = (e) => {
    setRoomType(e.target.value);
    if (e.target.value === "private") {
      setHeight("210px");
    } else {
      setHeight("200px");
    }
  };

  const createRoom = () => {
    let data = {	
      roomName: roomName,
      roomType: roomType,
      roomPassword: roomPassword,
    }
    socket.emit("createRoom", data , response => {
      console.warn(response.status);
    })
  }

  return (
    <>
      <button onClick={() => changePopUp()} name="create">
        Create Room
      </button>
      {showPopUp && (
        <Overlay>
          <PopUp height={height}>
            <div className="createForm-header">
              <IoMdCloseCircleOutline
                className="header-icon"
                onClick={() => {
                  changePopUp();
                }}
              />
            </div>
            <div className="createForm">
              <input
                type="text"
                name="roomName"
                placeholder="roomName"
                onChange={(e) => {
                  setRoomName(e.target.value);
                }}
              />
              <select onChange={(e) => changeValues(e)}>
                <option value="public">public</option>
                <option value="private">Private</option>
              </select>
              {height === "210px" ? (
                <input
                  type="text"
                  name="password"
                  placeholder="password"
                  onChange={(e) => {
                    setRoomPassword(e.target.value);
                  }}
                />
              ) : null}
            </div>

            <button onClick={createRoom} name="create">
              Create New Room
            </button>
          </PopUp>
        </Overlay>
      )}
    </>
  );
};
