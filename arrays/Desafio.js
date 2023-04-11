function soma(){
    const numbers = [...arguments];
    return numbers.reduce(function(soma, atual){
        return soma + atual;
    }, 0)
};

function average(){
    return soma(...arguments)/ arguments.length;
}

console.log(soma(1,2,3,4,5));
console.log(average(1,2,3,4,5));
