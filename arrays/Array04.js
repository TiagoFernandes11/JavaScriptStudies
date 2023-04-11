let arr = [1,3,5,7,9]

//adiciona ao final
arr.push(11);

//remove e retorna o ultimo item
console.log(arr.pop());

//remove e retorna o primeiro item
console.log(arr.shift())

//adiciona elemento ao inicio
arr.unshift(1);

//recortar array apartir de indices
console.log(arr.slice(1,4));

//recortar e alterar array original
console.log(arr.splice(1, 4, "novo valor"));

console.log(arr);