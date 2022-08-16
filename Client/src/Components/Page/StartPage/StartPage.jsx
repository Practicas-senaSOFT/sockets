import React from "react";
import { ChatGroups } from "../../Layout/ChatGroups/ChatGroups";
import "./StartPage.scss";

export const StartPage = () => {
  return (
    <>
      <div className="startPage-content">
        <ChatGroups />
      </div>
    </>
  );
};
