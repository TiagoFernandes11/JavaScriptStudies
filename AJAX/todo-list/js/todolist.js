import { Task } from "./model/task.model.js";
import { createXMLHttpRequest } from "./createXMLHttpRequest.js";
import { TasksServices } from "./services/tasks.services.js";
import { TaskController } from "./controllers/task.controller.js";
import { TaskView } from "./view/task.view.js";

// "https://jsonplaceholder.typicode.com/users/1/todos"

const taskService = new TasksServices();
const taskView = new TaskView();
const taskController = new TaskController(taskService, taskView);

taskService.getTasks(init);

function init(arrInstancesTasks) {
  if (arrInstancesTasks.error) return;
  const itemInput = document.getElementById("item-input");
  const todoAddForm = document.getElementById("todo-add");
  const ul = document.getElementById("todo-list");
  const lis = ul.getElementsByTagName("li");

  function generateLiTask(obj) {
    const li = document.createElement("li");
    const p = document.createElement("p");
    const checkButton = document.createElement("button");
    const editButton = document.createElement("i");
    const deleteButton = document.createElement("i");

    li.className = "todo-item";

    checkButton.className = "button-check";
    checkButton.innerHTML = `
              <i class="fas fa-check ${
                obj.completed ? "" : "displayNone"
              }" data-action="checkButton"></i>`;
    checkButton.setAttribute("data-action", "checkButton");

    li.appendChild(checkButton);

    p.className = "task-name";
    p.textContent = obj.title;
    li.appendChild(p);

    editButton.className = "fas fa-edit";
    editButton.setAttribute("data-action", "editButton");
    li.appendChild(editButton);

    const containerEdit = document.createElement("div");
    containerEdit.className = "editContainer";
    const inputEdit = document.createElement("input");
    inputEdit.setAttribute("type", "text");
    inputEdit.className = "editInput";
    inputEdit.value = obj.title;

    containerEdit.appendChild(inputEdit);
    const containerEditButton = document.createElement("button");
    containerEditButton.className = "editButton";
    containerEditButton.textContent = "Edit";
    containerEditButton.setAttribute("data-action", "containerEditButton");
    containerEdit.appendChild(containerEditButton);
    const containerCancelButton = document.createElement("button");
    containerCancelButton.className = "cancelButton";
    containerCancelButton.textContent = "Cancel";
    containerCancelButton.setAttribute("data-action", "containerCancelButton");
    containerEdit.appendChild(containerCancelButton);

    li.appendChild(containerEdit);

    deleteButton.className = "fas fa-trash-alt";
    deleteButton.setAttribute("data-action", "deleteButton");
    li.appendChild(deleteButton);

    return li;
  }

  function renderTasks() {
    ul.innerHTML = "";
    arrInstancesTasks.forEach((taskObj) => {
      ul.appendChild(generateLiTask(taskObj));
    });
  }

  function addTask(title) {
    createXMLHttpRequest(
      "POST",
      "http://localhost:3000/tasks",
      () => {
        renderTasks();
      },
      JSON.stringify({ title, completed: false, createdAt: "", updatedAt: "" })
    );
  }

  function clickedUl(e) {
    const dataAction = e.target.getAttribute("data-action");
    console.log(e.target);
    if (!dataAction) return;

    let currentLi = e.target;
    while (currentLi.nodeName !== "LI") {
      currentLi = currentLi.parentElement;
    }
    const currentLiIndex = [...lis].indexOf(currentLi);

    const actions = {
      editButton: function () {
        const editContainer = currentLi.querySelector(".editContainer");

        [...ul.querySelectorAll(".editContainer")].forEach((container) => {
          container.removeAttribute("style");
        });

        editContainer.style.display = "flex";
      },
      deleteButton: function () {
        arrInstancesTasks.splice(currentLiIndex, 1);
        renderTasks();
      },
      containerEditButton: function () {
        const val = currentLi.querySelector(".editInput").value;
        arrInstancesTasks[currentLiIndex].setName(val);
        renderTasks();
      },
      containerCancelButton: function () {
        currentLi.querySelector(".editContainer").removeAttribute("style");
        currentLi.querySelector(".editInput").value =
          arrInstancesTasks[currentLiIndex].getTitle();
      },
      checkButton: function () {
        // DEVE USAR O MÉTODO toggleDone do objeto correto
        arrInstancesTasks[currentLiIndex].toggleDone();
        renderTasks();
      },
    };

    if (actions[dataAction]) {
      actions[dataAction]();
    }
  }

  todoAddForm.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log(itemInput.value);
    taskController.add(itemInput.value);
    itemInput.value = "";
    itemInput.focus();
  });

  ul.addEventListener("click", clickedUl);

  renderTasks();
}
