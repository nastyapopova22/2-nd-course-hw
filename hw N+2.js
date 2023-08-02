let a=20;
alert(a);

let age= Number(prompt('год выпуска первого iPhone'));

let name= String(prompt('имя создателя языка JavaScript'));

let order=10;
let method=20;
alert(order+method);
alert (order-method);
alert (order*method);
alert (order/method);

let tale= 2;
let up=5;
let result= tale**up;
alert (result);

let A=9;
let b=2;
let newresult=A%b;
alert(newresult);

let num= 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num += 1;
num -=1;
num++;
++num;
-num;
alert(num);

let newage= prompt('Сколько Вам лет?');
alert(newage);

const user= { 
    name: "Dekster",
    year: 29, 
    isAdmin: true,
}
delete user[`city of residence`];
let info= prompt("Какую информацию хотите узнать о пользователе?");
console.log(user[info]);
alert(console.log(user[info]));

let newname=prompt('Введите ваше имя?');
alert(`Привет, ${newname} !`);