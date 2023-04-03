//  Esses são os tipos primitivos:
//  strings, number (int, floats), boolean
//  undenfined, null, symbol (ES2015)

let minhaString = "Minha string";
let minhaCopiaDaString = minhaString;
let meuNumero = 10;

console.log("imprimindo a copia da string = " + minhaCopiaDaString);

minhaString = 10;

// usando string literals para concatenar variaveis com ${}
console.log(`imprimindo a copia de string novamente = ${minhaCopiaDaString}`);


//declarando constantes do tipo numericos
const meuNumeroInteiro = 10;
const meuNumeroFlutuante = 10.5;

//utilizando o typeOF:

console.log(typeof minhaString, typeof minhaCopiaDaString, typeof meuNumeroInteiro, typeof meuNumeroFlutuante);

//declarando booleans
const isValid = true;
console.log(`isValid : ${isValid} / and its type is: ${typeof isValid}`);

let varUndefined;
console.log("Valor da variavel Undefined: " +varUndefined);
console.log("Tipo da variavel Undefined: " +typeof varUndefined);

//atribuindo valores: 
varUndefined = 10;
console.log("Valor da variavel Undefined após atribuição de valor: " +varUndefined);
console.log("Tipo da variavel Undefined após atribuição de valor: " +typeof varUndefined);