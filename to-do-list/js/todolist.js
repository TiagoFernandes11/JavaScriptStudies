;(function (){
    "use strict"
    const itemInput = document.getElementById("item-input");
    const todoAddForm = document.getElementById("todo-add");
    const ul = document.getElementById("todo-list");
    //const lis = ul.getElementsByTagName("li");

    let arrTasks = [
        {
            name: "teste 1",
            createdAt: Date.now(),
            completed: false
        }
    ]

    function addEventLi(li){
        li.addEventListener("click", function(e){
            console.log(this);
        });
    }

    function generateLiTaks(obj){
        const li = document.createElement("li");
        const p = document.createElement("p");
        const checkButton = document.createElement("button");
        const editButton = document.createElement("i");
        const deleteButton = document.createElement("i");

        checkButton.classList.add("button-check");
        checkButton.innerHTML = '<i class="fas fa-check displayNone"></i>';
        li.appendChild(checkButton);

        editButton.className = "fas fa-edit";
        li.appendChild(editButton);

        const containerEdit = document.createElement("div");
        containerEdit.className = "editContainer";
        const inputEdit = document.createElement("input");
        inputEdit.setAttribute("type", "text");
        inputEdit.className = "editInput";
        containerEdit.appendChild(inputEdit);
        const containerEditButton = document.createElement("button");
        containerEditButton.className = "editButton";
        containerEditButton.textContent = "Edit";
        const containerCancelButton = document.createElement("button");
        containerCancelButton.className = "cancelButton";
        containerCancelButton.textContent = "Cancel";
        containerEdit.appendChild(containerEditButton);
        containerEdit.appendChild(containerCancelButton);

        li.appendChild(containerEdit);

        deleteButton.className = "fas fa-trash-alt";
        li.appendChild(deleteButton);

        /*<div class="editContainer">
        <input class="editInput" type="text">
        <button class="editButton">Edit</button>
        <button class="cancelButton">Cancel</button>
        </div>*/
        p.classList.add("task-name");
        p.textContent = obj.name;
        li.classList.add("todo-item");
        li.appendChild(p);
        addEventLi(li);
        return li;
    };
    
    function renderTasks(){
        ul.innerHTML = '';
        arrTasks.forEach(task => {
            ul.appendChild(generateLiTaks(task))
        });
    }

    function addTask(task){
        arrTasks.push({
            name: task,
            createdAt: Date.now(),
            completed: false
        })
    }

    todoAddForm.addEventListener("submit", function(e){
        e.preventDefault();
        addTask(itemInput.value);
        renderTasks();
        itemInput.value = "";
        itemInput.focus();
    });

    renderTasks();
})();