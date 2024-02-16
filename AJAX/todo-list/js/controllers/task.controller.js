import { Task } from "../model/task.model.js";
import { TasksServices } from "../services/tasks.services.js";

export class TaskController {
  constructor(service, view) {
    this.service = service;
    this.view = view;
  }

  add(title) {
    this.service.add(new Task(title));
  }
}
