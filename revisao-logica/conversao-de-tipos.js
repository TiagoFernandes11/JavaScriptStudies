let n1 = 10;
let n2 = "10";

//Conversões implicitas
console.log(n1 * n2);
console.log(typeof n1, typeof n2);

console.log(n1 == n2);
console.log(n1 === n2);

console.log(n1 + n2);
console.log(typeof(n1 + n2));

//-------------------------------------------------------------------------//
//conversões explicitas


// parseInt, parseFloat, Number()
console.log(n1 + parseInt(n2));
