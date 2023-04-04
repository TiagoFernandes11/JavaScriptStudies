
const pessoas = [{
    nome: "Abraão",
    idade : 130
},{
    nome: "Isaque",
    idade: 120
},{
    nome : "Jacó",
    idade : 110
}]

for(let pessoa in pessoas){
    console.log(`O patriarca ${pessoas[pessoa].nome} possui ${pessoas[pessoa].idade} anos de idade`)
}