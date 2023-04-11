const arr = [1,2,3];

sum(1,2,3); //arguments.lenght = 3;
sum(arr); //arguments.lenght = 1;

//separar / quebrar array
sum(...arr) //spread operator arguments.lenght = 3;