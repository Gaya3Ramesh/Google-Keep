// NoteForm.js

import React, { useState } from "react";
import CheckBoxOutlinedIcon from "@mui/icons-material/CheckBoxOutlined";
import BrushOutlinedIcon from "@mui/icons-material/BrushOutlined";
import AddAlertOutlinedIcon from "@mui/icons-material/AddAlertOutlined";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
import ColorLensOutlinedIcon from "@mui/icons-material/ColorLensOutlined";
import PhotoSizeSelectActualOutlinedIcon from "@mui/icons-material/PhotoSizeSelectActualOutlined";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import UndoOutlinedIcon from "@mui/icons-material/UndoOutlined";
import RedoOutlinedIcon from "@mui/icons-material/RedoOutlined";

function NoteForm({ addNote }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [expanded, setExpanded] = useState(false);

  const handleExpand = () => {
    setExpanded(true);
  };

  const handleCollapse = () => {
    setExpanded(false);
    setTitle("");
    setContent("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title || content) {
      addNote({
        title,
        content,
      });
      setTitle("");
      setContent("");
      setExpanded(false);
    }
  };

  return (
    <div className={`note-form ${expanded ? "expanded" : ""}`}>
      <form onSubmit={handleSubmit}>
        {expanded && (
          <>
            <input
              type="text"
              placeholder="Title"
              value={title}
              className="titleInput"
              onChange={(e) => setTitle(e.target.value)}
            />
            <input
              type="text"
              placeholder="Note content"
              value={content}
              className="noteInput"
              onChange={(e) => setContent(e.target.value)}
            />
            <div className="selectIconsOptions">
              <div className="selectIcons">
                <AddAlertOutlinedIcon />
              </div>
              <div className="selectIcons">
                <PersonAddAltOutlinedIcon />
              </div>
              <div className="selectIcons">
                <ColorLensOutlinedIcon />
              </div>
              <div className="selectIcons">
                <PhotoSizeSelectActualOutlinedIcon />
              </div>
              <div className="selectIcons">
                <ArchiveOutlinedIcon />
              </div>
              <div className="selectIcons">
                <MoreVertOutlinedIcon />
              </div>
              <div className="selectIcons">
                <UndoOutlinedIcon />
              </div>
              <div className="selectIcons">
                <RedoOutlinedIcon />
              </div>
              <button type="submit" className="addBtn">
                Add
              </button>
              <button type="button" className="closeBtn" onClick={handleCollapse}>
                Close
              </button>
            </div>
          </>
        )}
        <div
          className={`form-header ${expanded ? "hidden" : ""}`}
          onClick={handleExpand}
        >
          <div className="takeNotesContent">
            <span className="takeNotesTitle">Take a note...</span>
            <div className="takeNotesIcon">
              <span className="iconNotes">
                <CheckBoxOutlinedIcon />
              </span>
              <span className="iconNotes">
                <BrushOutlinedIcon />
              </span>
              <span className="iconNotes">
                <PhotoSizeSelectActualOutlinedIcon />
              </span>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default NoteForm;
