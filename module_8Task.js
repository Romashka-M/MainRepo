// задание 8.7.1 
// Создайте функцию printInfo, которая будет выводить информацию о человеке в формате "Name: <имя>, Age: <возраст>". 
// Создайте объект person с двумя свойствами: name и age. 
// Используйте метод call, чтобы вызвать функцию printInfo от имени объекта person.

// Ответ: 
const name = prompt('Введите свое имя')
    if(!isNaN(name) || !name) {alert('Ошибка ввода данных имени!')}
const age = +prompt('Введите свой возраст числом')
    if(isNaN(age) || !age) {alert(`Ошибка ввода данных возраста!`)}
const person = {
  name: name,
  age: age
}
function printInfo () {
    alert(`Информация о человеке: ${this.name}, ${this.age}`);
}
printInfo.call(person);

// задание 8.7.2 
// Создайте функцию calculate, которая будет принимать три параметра: a, b и operator. 
// Функция должна производить математическую операцию между a и b в зависимости от значения operator 
// (может быть "+", "-", "*" или "/") и возвращать результат операции. 
// Используйте метод apply, чтобы вызвать функцию calculate с передачей объекта со значениями a, b и operator 
// в качестве первого аргумента и массива с тремя значениями [2, 3, "+"] в качестве второго аргумента.

// Ответ:

const a = +prompt('Введите число "А"')
    if(isNaN(a) || !a) {alert(`Ошибка ввода данных!`)}
const b = +prompt('Введите число "B"')
    if(isNaN(b) || !b) {alert('Ошибка ввода данных!')}
const operator = prompt(`Что нужно сделать с числами ${a} и ${b}?\n Введите "+", что бы сложить,\n "-", что бы вычесть,\n "*", что бы умножить или\n "/", что бы разделить`)
function calculate (a, b, operator) {
  switch(operator) 
    {
      case '+' :
        return a + b;
        break;
      case '-' :
        return a - b;
        break;
      case '*' :
        return a * b;
        break;
      case '/' :
        return a / b;
        break;
  default : alert('Ошибка ввода данных!');
  }
}
const result = calculate.apply(null, [a, b, operator]);
console.log(result);
alert(result);

// задание 8.7.3 
// Есть массив объектов, представляющих собой пользователей, каждый из которых имеет свойство age (возраст). 
// Создайте новый массив, содержащий только тех пользователей, чей возраст больше или равен 18. 
// Затем создайте новый массив, содержащий только свойства name (имя) каждого пользователя.

//Ответ: 

const users = [
  { name: 'Дарт Сидиус', age: 65},
  { name: 'Дарт Молл', age: 27},
  { name: 'Джанго Фетт', age: 39},
  { name: 'Боба Фетт', age: 14},
  { name: 'Энакин Скайуокер', age: 23},
  { name: 'Асока Тано', age: 13},
  { name: 'Оби-Ван Кеноби', age: 42}
];
const filteredUsers = users.filter((user) => {
  return user.age >= 18});
const usersName = filteredUsers.map((user) => {
  return user.name
});
console.log(usersName)

// задание 8.7.4
// Создайте функцию setFullName, которая будет устанавливать свойство fullName у переданного ей объекта. 
// Используйте метод bind, чтобы создать новую функцию setPersonFullName, которая будет устанавливать fullName 
// для объекта person из предыдущего примера. 
// Вызовите setPersonFullName с параметром "John Smith" и убедитесь, что свойство fullName объекта person 
// было изменено соответствующим образом.

// Ответ: 

function setFullName(name) {
  this.fullName = name
}
const pers = {
  age: 33
}
const setPersonFullName = setFullName.bind(pers)
setPersonFullName('John Smith')
console.log(pers)


// задание 8.7.5
// Напишите функцию, которая принимает массив чисел и возвращает новый массив, содержащий только уникальные числа, 
// отсортированные в порядке возрастания.

// Ответ: 

const someNumArr = [3, 1, 5, 22, 3, 9, 13, 128, 272, 22, 13, 272];
function smartNum(nums) { 
const unicumNum = [...new Set(nums)]
unicumNum.sort((a, b) => a - b);
console.log(unicumNum)
};
smartNum(someNumArr)