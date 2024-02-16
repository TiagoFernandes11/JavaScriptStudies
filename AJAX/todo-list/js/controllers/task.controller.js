import { Task } from "../model/task.model.js";

export class TaskController {
  constructor(service, view) {
    this.service = service;
    this.view = view;
  }

  add(title) {
    this.service.add(new Task(title));
    this.view.render();
  }
}
