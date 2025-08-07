// src/components/NotesList.jsx
import React from 'react';
import NoteCard from './NoteCard';
import './AddNote.css'

function NotesList({ notes, onDelete, onPin, onEdit }) {
  // Sort: pinned notes first
  const sorted = [...notes].sort((a, b) => (b.pinned === a.pinned ? 0 : b.pinned ? 1 : -1));

  if (sorted.length === 0) return <p style={{textAlign:'center'}}>No notes yet.</p>;

  return (
    <div className="notes-list">
      {sorted.map((note, idx) => (
        <NoteCard
          key={note.createdAt}
          note={note}
          onDelete={() => onDelete(note)}
          onPin={() => onPin(note)}
          onEdit={() => onEdit(note)}
        />
      ))}
    </div>
  );
}

export default NotesList;
