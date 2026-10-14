const test = require("node:test");
const assert = require("node:assert/strict");
const {
  addNote,
  deleteNote,
  searchNotes
} = require("./notes_manager");

test("adds a note", () => {
  assert.equal(addNote([], "Git", "Learn commits").length, 1);
});

test("rejects an empty title", () => {
  assert.throws(() => addNote([], " ", "Content"), /Title is required/);
});

test("rejects empty content", () => {
  assert.throws(() => addNote([], "Title", " "), /Content is required/);
});

test("deletes a note by id", () => {
  const notes = addNote([], "Git", "Learn commits");
  assert.equal(deleteNote(notes, 1).length, 0);
});

test("searches titles and content without case sensitivity", () => {
  const notes = addNote([], "JavaScript", "Learn testing");
  assert.equal(searchNotes(notes, "TESTING").length, 1);
});
