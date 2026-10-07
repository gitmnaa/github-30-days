interface Task {
    title: string;
    completed: boolean;
}

class TaskManager {
    private tasks: Task[] = [];

    addTask(title: string): void {
        this.tasks.push({
            title,
            completed: false
        });
    }

    completeTask(title: string): void {
        const task = this.tasks.find(item => item.title === title);

        if (task) {
            task.completed = true;
        }
    }

    getCompletedCount(): number {
        return this.tasks.filter(task => task.completed).length;
    }

    showTasks(): void {
        this.tasks.forEach((task, index) => {
            const status = task.completed ? "Done" : "Pending";
            console.log(`${index + 1}. ${task.title} - ${status}`);
        });
    }
}

const manager = new TaskManager();

manager.addTask("Learn TypeScript");
manager.addTask("Build GitHub project");
manager.addTask("Complete Day 20");

manager.completeTask("Learn TypeScript");

manager.showTasks();

console.log(
    `Completed tasks: ${manager.getCompletedCount()}`
);
