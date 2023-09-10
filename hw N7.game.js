function fruitsAll() {
    let fruits = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
    fruits = fruits.sort(() => Math.random() - 0.5);
    alert(fruits);

    let first = promt('Чему равнялся первый элемент массива?');
    let last = promt('Чему равнялся последний элемент массива?');

    for (let i = 0; i < fruits.length; i++) {
        const element = array[i];
        if (first === " " || first === " " || first === null) {
            alert('Не верный первый элемент');
        } else if (last === " " || last === " " || last === null){
            alert('Не верный последний элемент');
        } else if (fruits[0].toUpperCase().includes(fruits[0].toUpperCase()) && fruits[fruits.length - 1].toUpperCase().includes(fruits[0].
            toUpperCase())){
                alert('Молодец, поздравляю с победой!');
        } else if (fruits[0].toUpperCase().includes(fruits[0].toUpperCase()) || fruits[fruits.length - 1].toUpperCase().includes(fruits[0].
            toUpperCase())){
                alert('Вы были близки к победе!');
        } else {
            alert('Не угадал');
        }
        break

    }
}