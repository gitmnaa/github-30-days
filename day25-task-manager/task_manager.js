function addTask(tasks, title) {
  if (!title || !title.trim()) {
    throw new Error("Task title is required");
  }

  return [
    ...tasks,
    { id: tasks.length + 1, title: title.trim(), completed: false }
  ];
}

function completeTask(tasks, id) {
  return tasks.map(task =>
    task.id === id ? { ...task, completed: true } : task
  );
}

function deleteTask(tasks, id) {
  return tasks.filter(task => task.id !== id);
}

function getPendingTasks(tasks) {
  return tasks.filter(task => !task.completed);
}

module.exports = {
  addTask,
  completeTask,
  deleteTask,
  getPendingTasks
};
