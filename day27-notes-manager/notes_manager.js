function addNote(notes, title, content) {
  if (!title || !title.trim()) {
    throw new Error("Title is required");
  }

  if (!content || !content.trim()) {
    throw new Error("Content is required");
  }

  return [
    ...notes,
    { id: notes.length + 1, title: title.trim(), content: content.trim() }
  ];
}

function deleteNote(notes, id) {
  return notes.filter(note => note.id !== id);
}

function searchNotes(notes, query) {
  const term = query.toLowerCase();

  return notes.filter(note =>
    note.title.toLowerCase().includes(term) ||
    note.content.toLowerCase().includes(term)
  );
}

module.exports = { addNote, deleteNote, searchNotes };
