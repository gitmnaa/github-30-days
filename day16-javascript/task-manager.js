class TaskManager {
    constructor() {
        this.tasks = [];
    }

    addTask(title) {
        this.tasks.push({
            title: title,
            completed: false
        });
    }

    completeTask(title) {
        const task = this.tasks.find(item => item.title === title);

        if (task) {
            task.completed = true;
        }
    }

    getCompletedTasks() {
        return this.tasks.filter(task => task.completed);
    }

    showTasks() {
        this.tasks.forEach((task, index) => {
            const status = task.completed ? "Done" : "Pending";
            console.log(`${index + 1}. ${task.title} - ${status}`);
        });
    }
}

const manager = new TaskManager();

manager.addTask("Learn JavaScript");
manager.addTask("Build GitHub project");
manager.addTask("Complete Day 16");

manager.completeTask("Learn JavaScript");

manager.showTasks();

console.log(
    "Completed:",
    manager.getCompletedTasks().length
);
