function somar(){
    let count = 0;
    let total = 0;
    while(count < arguments.length){
        total += arguments[count++];
    }
    return total;
}


console.log("Total: " + somar(1,2,3,4,5,6,7,8));

