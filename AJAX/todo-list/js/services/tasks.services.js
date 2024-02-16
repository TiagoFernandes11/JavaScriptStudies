import { Task } from "../model/task.model.js";
import { createXMLHttpRequest } from "../createXMLHttpRequest.js";

export class TasksServices {
  constructor() {
    this.tasks = [];
  }

  add(task) {
    if (!task instanceof Task) {
      throw TypeError("Task must be an instance of taskmodel");
    }
    const fn = (dados) => {
      console.log(dados);
    };
    createXMLHttpRequest(
      "POST",
      "http://localhost:3000/tasks",
      fn,
      JSON.stringify(task)
    );
    this.tasks.push(task);
  }

  getTasks(cb) {
    const fn = (dados) => {
      this.tasks = dados.map((task) => {
        const { title, completed, createdAt, updatedAt } = task;
        return new Task(title, completed, createdAt, updatedAt);
      });
      cb(this.tasks);
    };
    createXMLHttpRequest("GET", "http://localhost:3000/tasks", fn);
  }
}
