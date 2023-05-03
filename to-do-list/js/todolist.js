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
        p.className = "task-name";
        p.textContent = obj.name;
        li.className = "todo-item";
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