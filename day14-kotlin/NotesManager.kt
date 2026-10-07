package day14

class NotesManager {

    private val notes = mutableListOf<String>()

    fun add(note: String) {
        if (note.isNotBlank()) {
            notes.add(note)
        }
    }

    fun remove(note: String) {
        notes.remove(note)
    }

    fun all(): List<String> {
        return notes
    }

    fun count(): Int {
        return notes.size
    }
}
