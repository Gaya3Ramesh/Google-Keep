import React, { useState } from 'react';
import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined';
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';


function Note({ title, content, onDelete, onArchive }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleArchiveClick = () => {
    onArchive();
  };

  return (
    <div
      className={`note ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <h3>{title}</h3>
      <p>{content}</p>
      <div className={`note-icons ${isHovered ? 'visible' : ''}`}>
        <AddAlertOutlinedIcon />
        <ColorLensOutlinedIcon />
        <InsertPhotoOutlinedIcon/>
        <ArchiveOutlinedIcon onClick={handleArchiveClick} />
        <DeleteOutlinedIcon onClick={onDelete} />
        <MoreVertOutlinedIcon/>
      </div>
    </div>
  );
}

export default Note;
