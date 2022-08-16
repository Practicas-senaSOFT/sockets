import React from "react";
import "./ChatGroups.scss";
import { GroupCard } from "../../UI/GroupCard/GroupCard";
import { FaUsers } from "react-icons/fa";

export const ChatGroups = () => {
  return (
    <div className="chatGroups-content">
      <div className="chatGroups-Header">
        <FaUsers />
        <h3>Groups</h3>
      </div>
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
  );
};
