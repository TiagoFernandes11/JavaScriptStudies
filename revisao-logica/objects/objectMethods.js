const produto = {
    nome : "caneta",
    qtd : 10,
    comprar(numero){
        if(numero <= this.qtd){
            console.log(`Comprou ${numero} canetas`);
            this.qtd -= numero;
        }else{
            return "quantidade não disponível";
        }
    }
}

console.log(produto);
produto.comprar(3);
console.log(produto);
produto.comprar(10);
console.log(produto);

