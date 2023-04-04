const pessoa = new Object();
pessoa.nome = "Tiago";
pessoa.idade = "24";

console.log(pessoa);
console.log(pessoa.nome);
console.log(pessoa.idade);

let prop = "nome";

console.log(pessoa[prop]);

const outraPessoa = {
    nome:"tiago",
    idade:"24",
    apelido:"tiaguinho"
};

console.log(outraPessoa);