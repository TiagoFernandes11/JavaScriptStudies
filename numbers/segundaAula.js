// toString and toLocaleString

let numero = 15;

//toString -> transforma pra binario com o parametro 2 e com 16 hexadecimal

console.log(numero.toString(2));
console.log(numero.toString(16));

numero = 100000000.5;

//toLocaleString -> transforma para String local

console.log(numero.toLocaleString("pt-BR"));
console.log(
  numero.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })
);
