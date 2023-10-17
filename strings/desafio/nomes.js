function formatarNome(nome){
    let sobreNome = nome.slice(nome.indexOf(" "), nome.length);
    let primeiroNome = nome.slice(0, nome.indexOf(" ")); 

    return sobreNome + ", " + primeiroNome;
}

console.log(formatarNome("Tiago Fernandes Ribeiro"));