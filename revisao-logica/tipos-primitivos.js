// strings, number (int, floats), boolean

let minhaString = "Minha string";
let minhaCopiaDaString = minhaString;
let meuNumero = 10;

console.log("imprimindo a copia da string = " + minhaCopiaDaString);

minhaString = 10;

// usando string literals para concatenar variaveis com ${}
console.log(`imprimindo a copia de string novamente = ${minhaCopiaDaString}`);


const meuNumeroInteiro = 10;
const meuNumeroFlutuante = 10.5;

//utilizando o typeOF:

console.log(typeof minhaString, typeof minhaCopiaDaString, typeof meuNumeroInteiro, typeof meuNumeroFlutuante);

const isValid = true;
console.log(`isValid : ${isValid} / and its type is: ${typeof isValid}`);