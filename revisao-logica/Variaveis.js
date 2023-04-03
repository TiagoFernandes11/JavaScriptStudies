// var, let, const

// var -> ES5 - cross-browser
//let e const -> ES2015 (só nao funciona no IE, ou seja, funciona em todos)

let teste = "minha string";
console.log(teste);
// exemplo de tipagem fraca
teste = 10;
console.log(teste);

const teste2 = 10;
// não é possivel reatribuir valores a const
console.log("imprimindo uma constante = " + teste2);