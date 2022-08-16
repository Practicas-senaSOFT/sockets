import React from "react";
import { ChatRoom } from "../../../Modules/ChatRoom/ChatRoom";
import { ChatGroups } from "../../Layout/ChatGroups/ChatGroups";
import "./StartPage.scss";

export const StartPage = () => {
  return (
    <>
    
      <div className="startPage-content">
        <ChatGroups />
        <ChatRoom />
      </div>
    </>
  );
};
