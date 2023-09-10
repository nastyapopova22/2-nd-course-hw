// Задание 1

function min (a, b) {
    if (a < b) {
        return a;
    } else  {
        return b;
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
   if (c**2) {
    console.log(square);
   }
 }
 
 function square(p) {
    return (p**2);
 
  }

 //задание 4

 function age() {
    let answer = prompt('Сколько Вам лет?');

    if (isNaN(answer) || answer === "" || answer === null) {
        return alert('не число');
    } else if (answer < 0 ) {
        return ('Вы ввели неправильное значение');

    } else if (answer >= 0 && answer <= 12) {
        return alert('Привет, друг!');
        
    } else (answer >= 13)
    return alert('Добро пожаловать!');
    }
 
age();

// задание 5
const type = (n, d) => {
    if (isNaN (Number(n)) || isNaN (Number(d))) {
        return (' Одно или оба значения не являются числом');
    } else {
        return (n * d);
    }
}


//задание 6
function example () {
    let cube = prompt('Введите число');
    if (isNaN(cube) || cube === "" || cube === null) {
        alert(`Переданный параметр не является числом`);
    } else{ 
        alert (`${cube} в кубе равняется ${cube ** 3} `);
    }


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
}
