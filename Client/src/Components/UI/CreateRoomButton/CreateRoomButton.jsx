import React from "react";
import { Overlay, PopUp } from "../../../StyledComponents/StyledComponents";
import "./CreateRoomButton.scss";

export const CreateRoomButton = () => {
  const [showPopUp, setShowPopUp] = React.useState(false);

  const changePopUp = () => {
    setShowPopUp(!showPopUp);
  };

  const [ height, setHeight ] = React.useState("250px");

  const changeHeight = (e) => {
    if(e.target.value === "private") {
      setHeight("300px");
    }else{
      setHeight("250px");
    }
  }
  
  return (
    <>
      <button onClick={() => changePopUp()} name="create">
        Create Room
      </button>
      {showPopUp && <Overlay>
        <PopUp height={height}>
          <input type="text" name="roomName" placeholder="roomName"  />
          <select onChange={e => changeHeight(e)}>
            <option value="public">public</option>
            <option value="private">Private</option>
          </select>{
            height === "300px" ? <input type="text" name="password" placeholder="password" /> : null
          }
         <button>Create New Room</button>
        </PopUp>
        </Overlay>}
    </>
  );
};
