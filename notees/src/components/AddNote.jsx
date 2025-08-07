// src/components/AddNote.jsx
import React, { useState } from 'react';
import './AddNote.css'; // create this for styling

function AddNote({ onAddNote }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (!title.trim() && !content.trim()) return;
    onAddNote({
      title: title.trim(),
      content: content.trim(),
      pinned: false,
      createdAt: new Date().toISOString()
    });
    setTitle('');
    setContent('');
  }

  return (
    <form className="add-note" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={e => setTitle(e.target.value)}
        maxLength={40}
        className="add-note-title"
      />
      <textarea
        placeholder="Write your note..."
        value={content}
        onChange={e => setContent(e.target.value)}
        rows={3}
        className="add-note-content"
      />
      <button type="submit" className="add-note-btn">Add Note</button>
    </form>
  );
}

export default AddNote;
