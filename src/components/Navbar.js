import React from "react";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import LabelOutlinedIcon from "@mui/icons-material/LabelOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarListItem active" >
          <div className="sidebarIcon">
            <LightbulbOutlinedIcon />
          </div>
          <span>Notes</span>
        </div>
        <div className="sidebarListItem">
          <div className="sidebarIcon">
            <NotificationsNoneOutlinedIcon />
          </div>
          <span>Reminders</span>
        </div>
        <div className="sidebarListItem">
          <div className="sidebarIcon">
            <LabelOutlinedIcon />
          </div>
          <span>Label</span>
        </div>
        <div className="sidebarListItem">
          <div className="sidebarIcon">
            <EditOutlinedIcon />
          </div>
          <span>Edit labels</span>
        </div>
        <div className="sidebarListItem">
          <div className="sidebarIcon">
            <ArchiveOutlinedIcon />
          </div>
          <span>Archive</span>
        </div>
        <div className="sidebarListItem">
          <div className="sidebarIcon">
            <DeleteOutlineOutlinedIcon />
          </div>
          <span>Bin</span>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
