;(function (){
    "use strict"
    const itemInput = document.getElementById("item-input");
    const todoAddForm = document.getElementById("todo-add");
    const ul = document.getElementById("todo-list");
    const lis = ul.getElementsByTagName("li");

    let arrTasks = getSavedData();

    function getSavedData() {
        let tasksData = localStorage.getItem("tasks")
        tasksData = JSON.parse(tasksData)
 
        return tasksData && tasksData.length ? tasksData : [
            {
                name: "exemplo 1",
                createAt: Date.now(),
                completed: false
            }
        ]
 
    }

    function setNewData(){
        localStorage.setItem("tasks", JSON.stringify(arrTasks));
    }

    setNewData();

    function generateLiTaks(obj){
        const li = document.createElement("li");
        const p = document.createElement("p");
        const checkButton = document.createElement("button");
        const editButton = document.createElement("i");
        const deleteButton = document.createElement("i");

        checkButton.classList.add("button-check");
        checkButton.innerHTML = `<i class="fas fa-check ${obj.completed ? "" : "displayNone"}" data-action= "checkButton"></i>`;
        checkButton.setAttribute("data-action", "checkButton");
        li.appendChild(checkButton);

        editButton.className = "fas fa-edit";
        editButton.setAttribute("data-action", "editButton");
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
        containerEditButton.setAttribute("data-action", "containerEditButton");
        const containerCancelButton = document.createElement("button");
        containerCancelButton.className = "cancelButton";
        containerCancelButton.textContent = "Cancel";
        containerCancelButton.setAttribute("data-action", "containerCancelButton");
        containerEdit.appendChild(containerEditButton);
        containerEdit.appendChild(containerCancelButton);

        li.appendChild(containerEdit);

        deleteButton.className = "fas fa-trash-alt";
        deleteButton.setAttribute("data-action", "deleteButton");
        li.appendChild(deleteButton);

        p.classList.add("task-name");
        p.textContent = obj.name;
        li.classList.add("todo-item");
        li.appendChild(p);
        // addEventLi(li);
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
        setNewData();
    }

    function clickedUl(e){
        const dataAction = e.target.getAttribute("data-action");

        if(!dataAction) return;

        let currentLi = e.target;
        while(currentLi.nodeName !== "LI"){
            currentLi = currentLi.parentElement;
        }

        const currentLiIndex = [...lis].indexOf(currentLi);

        const actions = {
            editButton : function(){
                const editContainer = currentLi.querySelector(".editContainer");
                
                [...ul.querySelectorAll(".editContainer")].forEach(container => {
                    container.style.display = "none";
                });

                currentLi.querySelector(".editInput").value = arrTasks[currentLiIndex].name;
                editContainer.style.display = "flex"; 
            },
            containerEditButton : function(){
                const valor = currentLi.querySelector(".editInput").value;
                arrTasks[currentLiIndex].name = valor;
                renderTasks();
                setNewData()
            },
            containerCancelButton: function(){
                currentLi.querySelector(".editContainer").style.display = "none";
                currentLi.querySelector(".editInput").value = arrTasks[currentLiIndex].name;
            },
            deleteButton : function(){
                arrTasks.splice(currentLiIndex, 1);
                renderTasks();
                setNewData()
            },
            checkButton : function(){
                arrTasks[currentLiIndex].completed = !arrTasks[currentLiIndex].completed;
                
                if(arrTasks[currentLiIndex].completed){
                    currentLi.querySelector(".fa-check").classList.remove("displayNone");
                } else{
                    currentLi.querySelector(".fa-check").classList.add("displayNone");
                }
                renderTasks();
                setNewData()
            }
        }

        if(actions[dataAction]){
            actions[dataAction]();
        }
    }

    todoAddForm.addEventListener("submit", function(e){
        e.preventDefault();
        addTask(itemInput.value);
        renderTasks();
        itemInput.value = "";
        itemInput.focus();
    });

    ul.addEventListener("click", clickedUl);

    renderTasks();
})();