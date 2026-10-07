package com.example.day11

import android.os.Bundle
import android.widget.Button
import android.widget.EditText
import android.widget.TextView
import androidx.appcompat.app.AppCompatActivity

class MainActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        val taskInput = findViewById<EditText>(R.id.taskInput)
        val addButton = findViewById<Button>(R.id.addButton)
        val taskList = findViewById<TextView>(R.id.taskList)

        addButton.setOnClickListener {
            val task = taskInput.text.toString().trim()

            if (task.isNotEmpty()) {
                taskList.append("• $task\n")
                taskInput.text.clear()
            }
        }
    }
}
