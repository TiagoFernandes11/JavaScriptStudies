class Animal{
    constructor(tipo){
        this.tipo = tipo;
    }

    obterTipo(){
        return this.tipo
    }
}

let animal = new Animal("Cachorro")

console.log(animal)
console.log(animal.obterTipo())