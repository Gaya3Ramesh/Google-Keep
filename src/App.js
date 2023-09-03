import React, { useState } from 'react';
import './App.css';
import NoteForm from './components/NoteForm';
import Note from './components/Note';
import Navbar from './components/Header';
import Sidebar from './components/Navbar';

function App() {
  const [notes, setNotes] = useState([]);

  const addNote = (newNote) => {
    setNotes([...notes, newNote]);
  };

  const deleteNote = (index) => {
    const updatedNotes = notes.filter((_, i) => i !== index);
    setNotes(updatedNotes);
  };

  return (
    <div className="App">
      <Navbar />
      <div className="main-content">
        <Sidebar />
        <div className="note-content">
          <NoteForm addNote={addNote} />
          <div className="note-list">
            {notes.map((note, index) => (
              <Note
                key={index}
                title={note.title}
                content={note.content}
                onDelete={() => deleteNote(index)} 
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
