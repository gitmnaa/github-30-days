package com.example.day12

import android.os.Bundle
import androidx.appcompat.app.AppCompatActivity
import androidx.recyclerview.widget.LinearLayoutManager
import androidx.recyclerview.widget.RecyclerView

class MainActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        val recyclerView = findViewById<RecyclerView>(R.id.contactRecyclerView)

        val contacts = listOf(
            Contact("Alice", "alice@example.com"),
            Contact("Bob", "bob@example.com"),
            Contact("Charlie", "charlie@example.com"),
            Contact("Diana", "diana@example.com"),
            Contact("Edward", "edward@example.com")
        )

        recyclerView.layoutManager = LinearLayoutManager(this)
        recyclerView.adapter = ContactAdapter(contacts)
    }
}
