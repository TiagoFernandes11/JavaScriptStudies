function calcularMedia(){
    let count = 0;
    let soma = 0;
    while(count < arguments.length){
        if(typeof arguments[count] !== "number"){
            throw Error("only numbers allowed");
        }
        soma += arguments[count++]
    }
    return soma/count;
}

console.log(calcularMedia(1,2));
