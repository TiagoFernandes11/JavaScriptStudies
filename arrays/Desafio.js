function soma(){
    let result = 0;
    for(elementos in arguments){
        result += elementos;
    }
    return result;
};

function media(){
    return soma(arguments)/arguments.length;
};