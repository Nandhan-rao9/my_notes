// src/components/SearchBar.jsx
import React from 'react';
import './AddNote.css'

function SearchBar({ value, onChange }) {
  return (
    <div className="search-bar">
      <input
        type="text"
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder="Search notes..."
        className="search-input"
      />
    </div>
  );
}

export default SearchBar;
