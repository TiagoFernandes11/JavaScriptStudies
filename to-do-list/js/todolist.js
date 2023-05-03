;(function (){
    "use strict"
    const itemInput = document.getElementById("item-input");
    const todoAddForm = document.getElementById("todo-add");
    const ul = document.getElementById("todo-list");

    todoAddForm.addEventListener("submit", function(e){
        e.preventDefault();
        console.log(itemInput.value);
        ul.innerHTML += `
        <li class="todo-item">
        <button class="button-check">
            <i class="fas fa-check displayNone"></i>
        </button>
        <p class="task-name">${itemInput.value}</p>
        <i class="fas fa-edit"></i>
        <!-- <div class="editContainer">
            <input class="editInput" type="text">
            <button class="editButton">Edit</button>
            <button class="cancelButton">Cancel</button>
        </div> -->
        <i class="fas fa-trash-alt"></i>
    </li>`;

    itemInput.value = "";
    itemInput.focus();
    });
})();