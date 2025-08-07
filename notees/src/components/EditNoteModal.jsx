import React, { useState, useEffect } from 'react';
import './AddNote.css';

function EditNoteModal({ note, onSave, onClose }) {
  const [title, setTitle] = useState(note.title || '');
  const [content, setContent] = useState(note.content || '');

  useEffect(() => {
    setTitle(note.title || '');
    setContent(note.content || '');
  }, [note]);

  function handleSubmit(e) {
    e.preventDefault();
    if (!title.trim() && !content.trim()) return;
    onSave({ ...note, title: title.trim(), content: content.trim() });
  }

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h3>Edit Note</h3>
        <form onSubmit={handleSubmit} className="edit-note-form">
          <input
            type="text"
            value={title}
            onChange={e => setTitle(e.target.value)}
            maxLength={40}
            placeholder="Title"
            className="add-note-title"
          />
          <textarea
            value={content}
            onChange={e => setContent(e.target.value)}
            rows={3}
            placeholder="Edit note..."
            className="add-note-content"
          />
          <div className="edit-note-actions">
            <button type="button" onClick={onClose} className="edit-cancel">Cancel</button>
            <button type="submit" className="edit-save">Save</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditNoteModal;
