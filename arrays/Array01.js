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

//iterando array
arr.forEach(function(elemento, i){
    console.log(i," : ",elemento)
})

console.log("Every number ? ", soNumeros)
console.log("Some numeros? ",algunsNumeros);
console.log("Filter number: ",arr1)
console.log("Original array: ", arr)