const arr = [1,5,10, "ola mundo", true];

// verificando se todos os elementos sao numeros
let soNumeros = arr.every( function (elemento) {
    return typeof elemento === "number";
});

// verificando se alguns dos elementos sao numeros
let algunsNumeros = arr.some(function(elemento){
    return typeof elemento === "number";
});

//filtrando os numeros do array
const arr1 = arr.filter(function(elemento, i, functionArray){
    return typeof elemento === "number";
})

//modificando um array
const arr2 = arr.map(function(elemento){
    return elemento ** 2;
})

//iterando array
console.log("Iteração forEach():")
arr.forEach(function(elemento, i){
    console.log(i," : ",elemento)
})


console.log("Every numbers ? ", soNumeros)
console.log("Some numbers? ",algunsNumeros);
console.log("Filter numbers: ",arr1)
console.log("Original array: ", arr)
console.log("Map array: ", arr2)