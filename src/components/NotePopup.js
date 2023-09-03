import React from 'react';

function NotePopup({ title, content, onClose }) {
  return (
    <div className="note-popup">
      <div className="note-popup-content">
        <h3>{title}</h3>
        <p>{content}</p>
        <button className="close-btn" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}

export default NotePopup;
