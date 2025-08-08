import React, { useState } from 'react';
import AddNote from './components/AddNote';
import NotesList from './components/NotesList';
import EditNoteModal from './components/EditNoteModal';
import SearchBar from './components/SearchBar';
import './App.css'

function App() {
  const [notes, setNotes] = useState([]);
  const [editingNote, setEditingNote] = useState(null); // null or note to edit
  const [search, setSearch] = useState('');


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
  function handleEdit(note) {
  setEditingNote(note);
}

function handleUpdateNote(updated) {
  setNotes(notes =>
    notes.map(n =>
      n.createdAt === updated.createdAt ? { ...n, ...updated } : n
    )
  );
  setEditingNote(null); // close modal
}
  function dummy(){
    console.log("hi");
  }

function filterNotes(notes, search) {
  if (!search.trim()) return notes;
  return notes.filter(note =>
    (note.title && note.title.toLowerCase().includes(search.toLowerCase())) ||
    (note.content && note.content.toLowerCase().includes(search.toLowerCase()))
  );
}


  return (
  <div className="container">
    <h1 className="main-title">Notion-like Notes <span role="img" aria-label="notes">📝</span></h1>
    <AddNote onAddNote={handleAddNote} />
    <SearchBar value={search} onChange={setSearch} />
    <NotesList
      notes={filterNotes(notes, search)}
      onDelete={handleDelete}
      onPin={handlePin}
      onEdit={handleEdit}
    />
    {editingNote && (
      <EditNoteModal
        note={editingNote}
        onSave={handleUpdateNote}
        onClose={() => setEditingNote(null)}
      />
    )}
  </div>
);
}

export default App;

//checking auto commit