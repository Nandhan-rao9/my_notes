import React, { useState } from 'react';
import AddNote from './components/AddNote';
import NotesList from './components/NotesList';
import './App.css'

function App() {
  const [notes, setNotes] = useState([]);

  function handleAddNote(note) {
    setNotes([note, ...notes]);
  }
function handleDelete(noteToDelete) {
    setNotes(notes => notes.filter(n => n.createdAt !== noteToDelete.createdAt));
  }
  function handlePin(noteToPin) {
    setNotes(notes => notes.map(n =>
      n.createdAt === noteToPin.createdAt ? { ...n, pinned: !n.pinned } : n
    ));
  }


  return (
    <div className="container">
      <h1 className="main-title">Notion-like Notes <span role="img" aria-label="notes">📝</span></h1>
      <AddNote onAddNote={handleAddNote} />
      <NotesList
        notes={notes}
        onDelete={handleDelete}
        onPin={handlePin}
      />
    </div>
  );
}

export default App;
