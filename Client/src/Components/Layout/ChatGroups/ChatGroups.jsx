import React from "react";
import "./ChatGroups.scss";
import { GroupCard } from "../../UI/GroupCard/GroupCard";
import { FaUsers } from "react-icons/fa";
import { CreateRoomButton } from "../../UI/CreateRoomButton/CreateRoomButton";

export const ChatGroups = () => {
  return (
    <div className="chatGroups-content">
      <div className="chatGroups-Header">
        <FaUsers className="header-icon" />
        <h3 title="header">Groups</h3>
      </div>
      <div className="chatGroups-body">
        <GroupCard />
        <GroupCard />
        <GroupCard />
        <GroupCard />
        <GroupCard />
        <GroupCard />
        <GroupCard />
        <GroupCard />
        <GroupCard />
        <GroupCard />
        <GroupCard />
        <GroupCard />
        <GroupCard />
        <GroupCard />
      </div>

      <CreateRoomButton />
    </div>
  );
};
