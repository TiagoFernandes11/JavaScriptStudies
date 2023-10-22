const data = new Date();

console.log(data);
console.log(data.getTime());
console.log(data.getFullYear());
console.log(data.getDay());
console.log(data.getMonth());
console.log(data.getHours());
console.log(data.getMinutes());
console.log(data.getSeconds());
console.log(data.getTimezoneOffset());

data.setTime(0);

console.log(data)