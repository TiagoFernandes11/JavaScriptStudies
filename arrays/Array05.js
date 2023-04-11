let arr = [1, 2, 3];

//inverte o array
arr.reverse();

//retorna valor unico a partir de função
let soma = arr.reduce(function(acumulador, atual){
    return acumulador + atual;
});

console.log(soma);

console.log(arr);