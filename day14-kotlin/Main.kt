package day14

fun main() {

    val manager = NotesManager()

    manager.add("Learn Kotlin")
    manager.add("Build GitHub project")
    manager.add("Complete Day 14")

    println("Notes:")
    manager.all().forEachIndexed { index, note ->
        println("${index + 1}. $note")
    }

    println("Total notes: ${manager.count()}")

    manager.remove("Learn Kotlin")

    println("After deletion:")
    manager.all().forEach {
        println("- $it")
    }
}
