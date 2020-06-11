var i;
console.log("Задание 1:")
for(i=0; i<=10; i++){
    if(i%2==0){
        console.log(i);
    }
}

var k, sum;
console.log("Задание 2:")
k=1;
sum=0;
while(sum<10){
    if(k%2==0){
        console.log(k);
        sum++;
    }
    k++;
}

console.log("Задание 3:")
let userPass = '';
let currentPass = '.';
do {
    userPass = prompt("Введите пароль");
} 
while (userPass != currentPass);
console.log("Вы авторизованы");

var i;
console.log("Задание 4:")
for(i=0; i<=10; i++){
    if(i%2==0){
        console.log(i);
    }
}

console.log("Задание 5:")
let m=1
let n = prompt("Введите n:");
do {
    console.log("*");
    m++;
} while (m<=n);