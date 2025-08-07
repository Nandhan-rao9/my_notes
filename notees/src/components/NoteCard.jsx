import React from 'react';
import './AddNote.css'

function NoteCard({ note, onDelete, onPin, onEdit }) {
  return (
    <div className={`note-card${note.pinned ? ' pinned' : ''}`}>
      <div className="note-header">
        <h3 className="note-title">
          {note.title || <span className="note-untitled">Untitled</span>}
          <button className="pin-btn" onClick={onPin} title="Pin/Unpin">
            {note.pinned ? '📌' : '📍'}
          </button>
        </h3>
        <button className="delete-btn" onClick={onDelete} title="Delete">🗑️</button>
      </div>
      <div className="note-content">{note.content}</div>
      <div className="note-footer">
        <span className="note-date">{new Date(note.createdAt).toLocaleString()}</span>
        <button className="edit-btn" onClick={onEdit} title="Edit">✏️</button>
      </div>
    </div>
  );
}

export default NoteCard;
