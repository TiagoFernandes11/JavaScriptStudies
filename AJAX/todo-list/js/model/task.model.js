export class Task {
  constructor(title, completed, createdAt, updatedAt) {
    // if (!title) {
    //   throw new Error("Task need a required parameter: title");
    // }
    let _title = title;
    this.completed = completed || false;
    this.createdAt = createdAt || Date.now();
    this.updatedAt = updatedAt || null;
    this.toggleDone = function () {
      this.completed = !this.completed;
    };
    this.getTitle = () => _title;
    this.setTitle = function (newTitle) {
      _title = newTitle;
      this.updatedAt = Date.now();
      console.log("------");
      console.log(this);
    };
  }
}
