const arr = [1,5,10, "ola mundo", true];

// verificando se todos os elementos sao numeros
let soNumeros = arr.every( function (elemento) {
    return typeof elemento === "number";
});

let algunsNumeros = arr.some(function(elemento){
    return typeof elemento === "number";
});

console.log("Every number ? ", soNumeros)
console.log("Some numeros? ",algunsNumeros);