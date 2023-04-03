const arr = new Array(true, "Tiago", 24, new Array(1,2,3,4));

console.log(typeof arr);

console.log(arr);

arr[0] = "Qualquer";

//adicionando valores
arr[arr.length] = "Novo valor";

arr.push("Novo valor com push()");

console.log(arr);