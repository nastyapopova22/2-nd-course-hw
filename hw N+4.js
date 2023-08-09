//Задание 1
let i = 0;
while (i < 2) {
    console.log ('Привет');
    i++;
}
//Задание 2

let a = 1;
while (a <= 5) {
    console.log (a);
    a++;
}

//Задание 3
 let b = 7;
 while (b <= 22) {
    console.log (b);
    b++;
 }

 //Задание 4

 let obj = {
    "Коля": 200,
    "Вася": 300,
    'Петя': 400,};
for (key in obj) {
    if (obj[key]){
        console.log ([key] + " - зарплата " + obj[key] + " долларов ");
    }
}
//задание 5

let n = 1000;
let num = 0;
while (n > 50) {
    console.log  (n);
    console.log (num);
    num++;
    n /= 2;
}

// задание 6

for ( let day = 6; day <= 31; day +=7) {
    console.log (' Сегодня пятница ${day}- число. Необходимо подготовить отчет.');
}


  

