// Задание 1

function min (a, b) {
    if (a < b) {
        return (a);
    } else  {
        return (b);
    }
}
console.log(min(10,5));

//задание 2
function comparison (n) {
    if (n % 2 == 0) {
        return ('Число четное');
    } else  {
        return ('Число нечетное');
    }
}
console.log(comparison(8));

//задание 3

 function square(c) {
   return (c*c);

 }
 console.log(square(7));

 //задание 4

 function age() {
    let answer = (prompt('Сколько Вам лет?'));

    if (isNaN(answer) || answer === "" || answer === null) {
        return('не число');
    } else if (answer < 0 ) {
        return ('Вы ввели неправильное значение');

    } else if (answer >= 0 && answer <= 12) {
        return ('Привет, друг!');
        
    } else (answer >= 13) 
    return ('Добро пожаловать!');
    }
age();

// задание 5
const type = (n, d) => {
    if (isNaN (Number(n)) || isNaN (Number(d))) {
        return (' Одно или оба значения не являются числом');
    } else (Number(n)) ||(Number(d))
        return (n * d);
    }


//задание 6
function example () {
    let cube = Number(prompt('Введите число'));
    if (Number(cube) ** 3) {
        alert(`${example} в кубе равняется ${cube} `);
    } else 
        alert ('Переданный параметр не является числом');
    }
    example();


//задание 7

function getRectangleArea() {
    return  this.p * this.radius * this.radius;
  }
  function getRectanglePerimeter() {
    return 2 * this.p * this.radius;
  }
  
  const circle1 = {
    radius: 20,
    p: 3.14,
  
    getArea: getRectangleArea,
    getPerimeter: getRectanglePerimeter,
  };
  
  const circle2 = {
    radius: 10,
    p: 3.14,
  
    getArea: getRectangleArea,
    getPerimeter: getRectanglePerimeter,
  };
  
  console.log(circle1.getArea());
  console.log(circle1.getPerimeter());
  console.log(circle2.getArea());
  console.log(circle2.getPerimeter());


  //задание 8

  function season() {
    let month = Number(prompt( 'Введите номер месяца'));
    if (month === 1 && month === 2 || month === 12) {
        return alert('Зима');
    } else if (month >= 3 && month <= 5){
        return alert('Весна');
    } else if (month >= 6 && month <= 8){
        return alert('Лето');
    } else if (month >= 9 && month <= 11){
        return alert('Осень');
    } else {
        return alert('Вы ввели неверное значение');
    }
}
season();