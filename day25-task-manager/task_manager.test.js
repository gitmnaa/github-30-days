const test = require("node:test");
const assert = require("node:assert/strict");
const {
  addTask,
  completeTask,
  deleteTask,
  getPendingTasks
} = require("./task_manager");

test("adds a task", () => {
  assert.equal(addTask([], "Learn Git").length, 1);
});

test("rejects an empty title", () => {
  assert.throws(() => addTask([], "  "), /required/);
});

test("marks a task completed", () => {
  const tasks = addTask([], "Learn JavaScript");
  assert.equal(completeTask(tasks, 1)[0].completed, true);
});

test("deletes a task", () => {
  const tasks = addTask([], "Learn Git");
  assert.equal(deleteTask(tasks, 1).length, 0);
});

test("returns only pending tasks", () => {
  const tasks = addTask([], "Task A");
  const updated = addTask(tasks, "Task B");
  assert.equal(getPendingTasks(completeTask(updated, 1)).length, 1);
});
