//задание 1

const people = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
 ];
 people.sort(function (a, b) {
    if (a.age > b.age) {
      return 1;
    }
    if (a.age < b.age) {
      return -1;
    }
    return 0;
  });
 
 console.log(people.sort());

  
//задание 2

function isPositive(number) {
    if (Number(number) > 0) {
        return true;
    } else { 
        return false; 
    }
    }

    function isMale(gender) {
   if (gender === 'male')
          return true
    else 
          return false;
    }

    function filter(arr, ruleFunc) {
        let funcArr = [];

        for (let x = 0; x < arr.length; x++) {
           if (typeof arr [x] === 'object') {
               if (ruleFunc(arr[x].gender)) {
                funcArr.push(arr[x]);
               }
            } 
               else (ruleFunc(arr[x])); {
               funcArr.push(arr[x]);}
    
        }       
}

    
    console.log(filter([3, -4, 1, 9], isPositive)); // Должен выводить [3, 1, 9]
    
   //people = [
  //     {name: 'Глеб', gender: 'male'},
 //      {name: 'Анна', gender: 'female'},
  //     {name: 'Олег', gender: 'male'},
 //      {name: 'Оксана', gender: 'female'}
  //  ];
    
    console.log(filter(people, isMale)); // Должен выводить [{name: 'Глеб', gender: 'male'},  {name: 'Олег', gender: 'male'}]
    
    
    // задание 3


    let myDate = new Date;
    let interval = setInterval(() => console.log(new Date), 3000);
    setTimeout(() => { clearInterval(interval); console.log('30 секунд прошло')}, 30000);


    //задание 4

    function delayForSecond(callback) {
        setTimeout(callback, 1000);
    }

     delayForSecond(function (){
        console.log ('Привет, Глеб!');
    });

    //задание 5
    
    
// Функция delayForSecond через 1 секунду пишет в консоль «Прошла одна секунда», 
// а затем вызывает переданный колбэк
function delayForSecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
				if(cb) { 	cb(); }

    }, 1000)
}

// Функция sayHi выводит в консоль приветствие для указанного имени
function sayHi (name) {
    console.log(`Привет, ${name}!`);
}

function nearestSq(n){
  nearestSq = Math.pow(Math.round(Math.sqrt(n)), 2);
  }
  console.log(nearestSq(117));

  function nearestSq(n){
    nearestSq = Math.pow(Math.round(Math.sqrt(n)), 2);
    return (n);
    }
    console.log(nearestSq(117));