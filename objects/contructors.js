class Task {
    constructor(name) {
        let _name = name;
        this.createdAt = new Date();
        this.changeName = function (newName) {
            _name = newName;
        };
        this.getName = function () {
            return _name;
        };
    }
};

// ou usar esse para nao poluir escopo global

function Task(name){
    "use strict" // isso garante
    let _name = name;
    this.createdAt = new Date()
    this.changeName = function(newName){
        _name = newName;
    }
    this.getName = function(){
        return _name;
    }
};


const task1 = new Task();
const task2 = new Task("chora nene");

console.log(task1);
console.log(task2);
task1.changeName("pinto");
console.log(task1.getName());