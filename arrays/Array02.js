let arr = [4 ,5 ,10 ,20 ,35, 4, 5 ];

console.clear();

console.log(arr.indexOf(4));
console.log(arr.lastIndexOf(4));
console.log(arr.includes(4));
console.log(arr.indexOf(555))

console.log(arr.find(function(element){
    return element > 20;
}));

console.log(arr.findIndex(function(element){
    return element > 20;
}));

