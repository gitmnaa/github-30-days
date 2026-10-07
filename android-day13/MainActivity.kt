package com.example.day13

class MainActivity {

    private val notes = mutableListOf<String>()

    fun addNote(note: String) {
        if (note.isNotBlank()) {
            notes.add(note)
        }
    }

    fun deleteNote(note: String) {
        notes.remove(note)
    }

    fun getNotes(): List<String> {
        return notes
    }
}
