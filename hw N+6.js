//Задание 1

let number = [1, 5, 4, 10, 0, 3];
for ( let i=0; i < number.length; i++) {
    console.log(number [i]);
    if (number [i] == 10) 
    break;
   
}

// задание 2
let array = [1, 5, 4, 10, 0, 3];
console.log(array.indexOf(4));

// задание 3
let task = [1, 3, 5, 10, 20];
task = task.join(' ');
console.log(task);

// задание 4
let arr = [[1, 1, 1], [1, 1, 1], [1, 1, 1]];

for (let i = 0; i < 1; i++) {
	arr[i] = [1, 1, 1]; //
	
	for (let j = 0; j < 1; j++) {
		arr[i].push(j + 1); 
	}
}

console.log(arr);

// задание 5
let and = [ 1, 1, 1];
and.push(2, 2, 2);
console.log(and);

// задание 6

let mission = [9, 8, 7, 'a', 6, 5];
mission. sort();
mission.pop();
console.log(mission);

// задание 7

let newNumber = [9, 8, 7, 6, 5];
newNumber = prompt('Угадайте число');
if (newNumber >= 5 && newNumber <=9) {
    alert('Угадал');
} else {
    alert(' Не угадал');
}


// задание 8

let target = ['abcdef'];
target.reverse();
target. join('');
console.log(target);

//задание 9
let labor = [[1, 2, 3],[4, 5, 6]];
labor.concat();
console.log(labor);

//задание 10

let sum = [3,1,5,6,1];
for ( let i= 0; i < sum.length; i++ ) {
    console.log(sum [i] + 1);
}
//задание 11

const suareNumber = [ 2, 5, 7];
const amount = suareNumber.map((num) => num ** 2);
console.log(amount);

// задание 12

const getLenghtWords = sourse => sourse.map(str => str.length);
console.log(getLenghtWords (['слово', '', 'слог', 'длинное предложение', 'буква']));

// задание 13
const help = ([-1, 0, 5, -10, 56]);
function filterPositive (help){
    return help < 0
}
  
  console.log(filterPositive);