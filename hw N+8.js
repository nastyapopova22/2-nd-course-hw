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
  });
 
 console.log(people.sort());

  
//задание 2

function isPositive(filter) {
    if (filter > 0)
        return true;
    }
    function isMale(filter) {
   if (filter.gender === 'male')
          return true;
    }
    function filter(arr,ruleFunction) {
        let output = [];

        for (let i = 0; i < arr.length; i++) {
           if (ruleFunction (arr[i])) {
            output.push(arr[i]);
        }
    }
    return output;
}
console.log(filter([3, -4, 1, 9], isPositive));
console.log(filter(people, isMale)); 
    
    
// задание 3

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
    
function delayForSecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
		if(cb) { 	cb(); }

    }, 1000)
}
function sayHi (name) {
    console.log(`Привет, ${name}!`);
}
delayForSecond(() => sayHi('Глеб'));

