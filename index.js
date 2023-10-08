// Create a new task by creating task objects
// A new task will be created as incomplete
const newTask = function (title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,
    logState: function() {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    },
    markCompleted: function() {
      this.complete = true;
    }
  };
  return task;
};

// prints out the provided task's details
const logTaskState = function(task) {
  console.log(`${task.title} has${task.complete ? " " : " not "}been completed`);
};

// marks the provided task as completed
const completeTask = function(task) {
  task.complete = true;
};

// DRIVER CODE BELOW

const task1 = newTask("Clean Cat Litter", "Take all the 💩 out of the litter box");
const task2 = newTask("Do Laundry", "😨");
const tasks = [task1, task2];

// for now, let's just make sure we see our tasks
// console.log(tasks);
task1.logState(); // Clean Cat Litter has not been completed
task1.markCompleted();
task1.logState(); // Clean Cat Litter has been completed
