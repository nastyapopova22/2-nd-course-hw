//задание 1

const java = 'js';
console.log(java.toUpperCase());

//задание 2

const searchStart =['Кошка', 'Кит', 'Комар', 'Носорог'];
const search = 'ко';
searchStart.forEach((product) => {
    if (product.toLowerCase().includes(search.toLowerCase())){
		console.log(product);
	}
});

const foodBasket =['яблоко', 'груша', 'гриб', 'огурец'];
const question = 'гру';
foodBasket.forEach((product) => {
    if (product.toLowerCase().includes(question.toLowerCase())){
		console.log(product);
	}
});

const building =['Дом', 'Банк', 'Больница', 'Театр'];
const research = 'кино';
building.forEach((product) => {
    if (product.toLowerCase().includes(research.toLowerCase())){
		console.log(product);
	}
});

//задание 3
console.log(Math.floor(32.58884));
console.log(Math.ceil(32.58884));
console.log(Math.round(32.58884));

//задание 4
console.log(Math.max(52, 53, 49, 77, 21, 32));
console.log(Math.min(52, 53, 49, 77, 21, 32));

// задание 5

function randomInt(min, max) {
return Math.floor(Math.random() * (max - min + 1)) + min;

}
console.log(randomInt (1, 10));

// задание 6

const getRandomArrNumbers = (num) => {
    let arr = [];
    for (let x = 0; x < Math.floor(num / 2); x++) {
        arr.push(Math.floor(Math.random() * (num + 1)));
        
    }
    return arr;
}
console.log (getRandomArrNumbers(7));
console.log (getRandomArrNumbers(12));

// задание 7


function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }
  
  console.log( randomInteger(17, 77) );


  //задание 8


let myDate = new Date();
console.log(myDate); 

//задание 9

let currentDate = new Date ();
currentDate.setDate(currentDate.getDate() + 73);

console.log(currentDate);

//задание 10

const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
"Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

let getDateDate = new Date();

let fullDate = "Сегодня: " + getDateDate.getDate() +
" " + months[getDateDate.getMonth()] + " " + getDateDate.getFullYear() + ", " + days[getDateDate.getDay()]; 


let time = "Время: " + getDateDate.getHours() +  "ч "  + getDateDate.getMinutes() +  "мин "  + getDateDate.getSeconds() + "сек";


console.log(fullDate);
console.log(time);