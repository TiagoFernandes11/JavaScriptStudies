function sum(){
    const numbers = [...arguments];
    return numbers.reduce(function(sum, atual){
        return sum + atual;
    }, 0)
};

function average(){
    return sum(...arguments)/ arguments.length;
}

console.log(sum(1,2,3,4,5));
console.log(average(1,2,3,4,5));
