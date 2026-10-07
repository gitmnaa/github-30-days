package com.example.day13

import android.os.Bundle
import android.widget.Button
import android.widget.EditText
import android.widget.Toast
import androidx.appcompat.app.AppCompatActivity

class MainActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        val note = findViewById<EditText>(R.id.noteInput)
        val save = findViewById<Button>(R.id.saveButton)
        val load = findViewById<Button>(R.id.loadButton)
        val delete = findViewById<Button>(R.id.deleteButton)

        val prefs = getSharedPreferences("notes", MODE_PRIVATE)

        save.setOnClickListener {
            prefs.edit().putString("note", note.text.toString()).apply()
            Toast.makeText(this, "Note saved", Toast.LENGTH_SHORT).show()
        }

        load.setOnClickListener {
            note.setText(prefs.getString("note", ""))
        }

        delete.setOnClickListener {
            prefs.edit().remove("note").apply()
            note.text.clear()
            Toast.makeText(this, "Note deleted", Toast.LENGTH_SHORT).show()
        }
    }
}
