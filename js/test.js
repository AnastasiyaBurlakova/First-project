
// const defaultTo = (value, defaultValue) => {
//     if(typeof value === 'number' || typeof value === 'string'){
//         return defaultValue
//     }else{
//         return value
//     }

// }

// // console.log(typeof(5))
// // console.log(typeof('NaN'))




// // если null, NaN, undefined => defaultValue
// // если другие то value

// console.log(defaultTo(1, 10)); // 1;
//  console.log(defaultTo(undefined, 10)); // 10;
// // console.log(defaultTo(NaN, 10)); // 10;
// // console.log(defaultTo(null, 10)); // 10;
// // console.log(defaultTo('gsdgs', 10)); // 10;


function capitalize(str) {
  return str.split(' ').map(item =>
    item.charAt(0).toUpperCase() + item.slice(1).toLowerCase()).join(" ");
}

const str = 'sOme rANDoM sTrIng' // Some Random String
const str2 = 'HELLO WORLD' // Hello World
console.log(capitalize(str))




// ДЗ функция будет переворачивать строку, у который больше 5 символов
const reverseLongWords = (str) => {
  let strr = str.split(' ');

  for (let i = 0; i < strr.length; i++) {
    if (strr[i].length > 5) {
      strr[i] = strr[i].split("").reverse().join("");
    }
  }
  return strr.join(' ');

}
console.log(reverseLongWords('Hello warriors tyu!')) // Hello !sroirraw










// // задача на объекты
const lettersCount = (str) => {
  str = str.toLowerCase() // aaaabbbcccd
  const obj = {}
  // const r = ''
  for (let i = 0; i < str.length; i++) {
    // obj[str[i]] = 1
    if (!obj[str[i]]) {
      obj = obj + str[i];
      obj[str[i]] = 1;
    }

  }


  return obj
}

console.log(lettersCount('aAaaBbbcccd'))
// console.log(lettersCount('abcde'))
// const obj = {
//  a
//}

function lettersCount(str) {
  str = str.toLowerCase()
  let obj = {};
  let r = '';

  for (let i = 0; i < str.length; i++) {
    if (!obj[str[i]]) {
      r = r + str[i];
      obj[str[i]] = 1;
    }
  }

  return r
}

console.log(lettersCount("asdfasdfasdfssfsGHUU"));








ДЗ
const obj = {
  a: 4,
  b: 3,
  c: 3,
  d: 1,
}

console.log(obj['a'])




const lettersCount = (str) => {
  str = str.toLowerCase()
  const obj = {}
  for (let i = 0; i < str.length; i++) {
    if (!obj[str[i]]) {
      obj[str[i]] = 1;

    } else {
      obj[str[i]]++;

    }
  }
  return obj
}

console.log(lettersCount('aAaaBbbcccd'))


// str = 'aAaaBbbcccd'
// const objTest = {}
// for (let i = 0; i < str.length; i++){
//   objTest[str[i]] = 1
// }
// console.log(objTest)





//Обьъеты
// const arr = [1,2,3,4,5]

// const obj = {
//     a: [1,2,3,4,5,10],
//     b: 3,
//     c: 3,
//     d: 1
// }
// for(let value of obj){
//     console.log(value)
// }


// for (let i in obj){
//     console.log(i)
// }

// // for(let i in arr){
// //     console.log(arr[i])
// // }




// ДЗ

function Equality(arg1, arg2) {
  if (arg1 === arg2) {
    return true
  } else if (arg1 === false && arg2 === true) {
    return false
  } else if (arg1 === false || arg2 === false) {
    return true
    // }else if (Array.isArray(arg1) && Array.isArray(arg2)){
    //     for(let arrIndex = 0; arrIndex < arg1.length; arrIndex++){
    //       if (arg1[arrIndex] === arg2[arrIndex])
    //         return true
    //     }

  } else if (arg1 === arg2) return true;
  else if (arg2 == null || arg2 == null) return false;
  else if (arg1.length !== arg2.length) return false;
  for (var i = 0; i < arg1.length; ++i) {
    if (arg1[i] !== arg2[i]) return false;
  }
  return true;

}
     
  // }else if(arg1 === arg2){
  //   return JSON.stringify(arg1)===JSON.stringify(arg2)


  const deepEqual = (a, b) => {
    if(a === null || b === null ) return 1
    let keysA = Object.keys(a)
    let keysB = Object.keys(b)
    if(typeof a !== typeof b) {
        return false
    }
    if(keysA.length !== keysB.length) return false
    for (let i = 0; i < keysA.length; i++) {
        if(typeof a[keysA[i]] === 'object' && typeof b[keysB[i]] === 'object'){
            if(deepEqual(a[keysA[i]], b[keysB[i]])) continue
            else {return false}
        }
        if(a[keysA[i]] !== b[keysB[i]]) return false
    }
    return true
}

console.log(deepEqual({ a: 5 }, { a: 3 }))// false

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


const objTest1 = {
  c:5,
  b: {
    f:10
  }
}


const objTest2 = {
  a:5,
  b: {
    f:10
  }
}

function Equality(arg1, arg2) {
  let keys1 = Object.values(arg1) // ['5','10']
  let keys2 = Object.values(arg2) // ['5','25']

  if (arg1 === arg2) {   
    return true    // 1
  } else if (arg1 === false && arg2 === true) {
    return false   //2
  } else if ( arg1 === false || arg2 === false) {
    return true    //3

  } 
  else if (typeof arg1 == null || typeof arg2 == null) return false;       // массив
  else if (arg1.length !== arg2.length) return false;
 else if(keys1.length !== keys2.length){ return false
}
for (let i = 0; i < arg1.length; ++i) {
  if (arg1[i] !== arg2[i]) return false;     // массив 
}

for (let i = 0; i < keys1.length; i++){
  console.log(keys1[i])
  if( !keys2.includes(keys1[i]) || !Equality(keys1[i], keys2[i]) || Object.keys(keys1) !== Object.keys(keys2)){
    return false
  }
  return true
  
}
}
// keys1[i] !==keys2[i])

// console.log(Equality(5, 5)) // true
// console.log(Equality(false, false)) // true
// console.log(Equality(false, true)) // false
// console.log(Equality([1, 2, 3], [1, 2, 3])) // true
// console.log(Equality({ a: 5 }, { a: 7 }))// true
console.log(Equality({ a: 6 }, { b: 6 })) // false
console.log(Equality(objTest1, objTest2))

//////////////////////////////////////////////////////////////////////////////////////////////////////////////





// console.log(Object.values(objTest2))



function isDeepEqual(obj1, obj2) {
  var keys1 = Object.keys(obj1);
  var keys2 = Object.keys(obj2);

  if (keys1.length != keys2.length) {
      return false;
  }

  for (var key of keys1) {
      if (!keys2.includes(key) || !isDeepEqual(obj1[key], obj2[key])) {
          return false;
      }
  }

  return true;
}

console.log(isDeepEqual({ a: 5 }, { a: 9 })); // true





console.log(Equality(5, 5)) // true
console.log(Equality(false, false)) // true
console.log(Equality(false, true)) // false
console.log(Equality([1, 2, 3], [1, 2, 3])) // true
console.log(Equality({ a: 5 }, { a: 7 }))// true
console.log(Equality({ a: 7 }, { a: 7 })) // false
console.log(Equality({a:5}, {b:5})) // true
console.log(Equality(objTest1, objTest2))










// Напишите функцию, которая принимает число.
// Если число кратно 3, функция должна возвращать строку «Fizz».
// Если кратно 5, функция должна возвращать строку «Buzz».
// Если кратно и 3 и 5 - строку «FizzBuzz». В остальных случаях функция должна вернуть переданное число.


function FizzBuzz(number){
// for(let i=1; i<=100; i++) {
  if (number % 3 === 0 && number % 5 === 0) {
  return ('FizzBuzz');
} else if (number % 3 === 0) {
  return ('Fizz');
} else if (number % 5 === 0) {
  return ('Buzz');
} else {
  return (number);
}
}
console.log(FizzBuzz(1))


// DESCRIPTION:
// Your task is to remove all duplicate letters from a string, leaving only single (first) letters entries.

// Example:

// Input:
// 'alpha beta gamma'

// Output:
// 'alph bet gm'

function deleteDupl(str){
  let result = '';
    for(let i = 0; i < str.length; i++) {
      if(!result.includes(str[i])) {
      result += str[i]
      }
    }
    return result
  }               
console.log(deleteDupl('абракадабраз ваш'))
    


// Convert a hash into an array. Nothing more, Nothing less.
// {name: 'Jeremy', age: 24, role: 'Software Engineer'}

// should be converted into
// [["age", 24], ["name", "Jeremy"], ["role", "Software Engineer"]]

function allKeys(obj){
  let result = [];
  Object.keys(obj).sort().map(item)

  return result
}



// DESCRIPTION:
// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'
    function solution(str){
    return str.split('').reverse().join('');  
  }

console.log(solution('Привет'))

const obj123 = {
  a:5
  // c: 3
}



function invertObj(obj){
  let result = {};

  let keys = Object.keys(obj)
  for (let i = 0; i < keys.length; i++){
    console.log(keys[i])
    console.log(obj[keys[i]])
    result[obj[keys[i]]] = keys[i]
  }
  // for (const key in obj){
  //   console.log(key)
  //   console.log(obj[key])
  //   result[obj[key]] = key
 
  // }


 

  return result
}

console.log(invertObj({a:1, b:10})) // {1:a, 10:b}

// Клонирование объектов Object.assign  https://learn.javascript.ru/es-object

const obj321 = {
  a:5,
  b:10
}
const obj223 = {
  a:5,
  b:10
}
console.log(obj312 === obj223) // false
const copyObj = Object.entries(obj321)
const copyObj1 = Object.entries(obj223)
console.log(obj312 === obj223)
const reserveCopyObj = Object.fromEntries(copyObj)
const reserveCopyObj1 = Object.fromEntries(copyObj1)



let student = {
  name: "Дэвид Рэй",
  school: "VI",
  rollno: 12};

function _keys(obj) 
 {
    if (!isObject(obj)) return [];
    if (Object.keys) return Object.keys(obj);
    let keys = [];
    for (let key in obj) if (_.has(obj, key)) keys.push(key);
    return keys;
  }
function isObject(obj) 
{
    let type = typeof obj;
    return type ==='function' || type ==='object' && !!obj;
  }
console.log(_keys({red: "#FF0000", green: "#00FF00", white: "#FFFFFF"}));



function sumNums (name, age){
  let name = name;
  let age = age;
}
console.log(sumNums({}))


function generateGreeting(firstName, lastName, age) {
  return `Привет ${firstName} ${lastName} с возрастом ${age} лет`;
}

  
function getSex(a){
  return `Ваш пол ${a}`
}
console.log(getSex('мужской'))

function getDay (num){
  let Day = '';
  for (i = 1, i < 8; i++){
    Day += i
    return Day
  }
}
console.log(getDay(3))

function getDayOfWeek(num) { 
  const daysOfWeek = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье']; 
  return daysOfWeek[num - 1]; 
}
console.log(getDayOfWeek(5))
//////////////////////////////////////////////////////////////////////////////////////////////////////////



// Vozvrashaem znachenie massiva


const dataArray = [
  { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C', year: 2019 },
  { firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript', year: 2019 },
  { firstName: 'Piter', lastName: 'G.', country: 'Sweden', continent: 'Europe', age: 30, language: 'JavaScript', year: 2019 },
  { firstName: 'Ramon', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby', year: 2014 },
  { firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C', year: 2016 },
];

// function getData(data){
//   let countPeople = 0
//  for (let key in data){

//   if (data[key].continent === 'Europe'){
//     countPeople++
//   }
//  }
//  return countPeople
// }
// // вернуть сколько людей живет в Европе
// console.log(getData(dataArray))


// function getData(data){
//   let countPeople = 0
//  for (let key in data){

//   if (data[key].continent.includes('Europe')){
//     countPeople++
//   }
//  }
//  return countPeople
// }
// // вернуть сколько людей живет в Европе
// console.log(getData(dataArray))

///////////////////////////////////////////////////// Europe 2019

// function getData(data){
//   let newArr = data.filter((obj) => obj.continent == 'Europe' && obj.year == 2019 )
//  return newArr.length
// }
// // вернуть сколько людей живет в Европе
// console.log(getData(dataArray))


// function getData(data){
//   let countPeople = 0
//  for (let key in data){

//   if (data[key].continent === 'Europe' && (data[key].year === 2019)){
//     countPeople++
//   }
//  }
//  return countPeople
// }
// // вернуть сколько людей живет в Европе
// console.log(getData(dataArray))

{ firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C', year: 2019 },

function getDataFilter(data){
  let newArr = data.filter(({continent, year}) => continent == 'Europe' && year == 2019 )
  return newArr.length
}
console.log(getDataFilter(data))




// Реализуйте функционал для работы с книгами в библиотеке:

// создание книги(добавление новой книги в библиотеку)
// Выдача книги читателю
// Получение книги от читателя
// Получение у кого книга сейчас находится
//1. Необходимо создать контруктор объектов Book, который будет создавать объекты со следующими полями:

// name - имя книги
// author - имя автора
// year - год книги
// reader - текущий читатель книги(у кого она на руках) - если она сейчас свободна - должно быть равно null
// Необходимо реализовать на прототипе следующие методы работы с книгой:

// isAvailable() // true/false - доступна ли книга для выдачи или она у кого-то на руках
// takeBook(readerName) - должен выдавать книгу читателю, если она доступна для выдачи и записывать его имя в reader, возвращает true, если выдача книги возможна и она произведена, false, если книга уже выдана
// returnBook() - регистрирует возврат книги, устанавливает reader в null, возвращает true, если книга была на руках, false если книга и так в библиотеке
// changeBookName(newBookName) - изменяет название книги на newBookName, возвращает true/false, в зависимости от результата
// changeAuthorName(newAuthorName) - изменяет имя автора на newAuthorName, возвращает true/false в зависимости от результата
// getCurrentReader() - возвращает имя текущего читателя или null, если книга доступна для выдачи

function Book(name, author,year){
  this.name = name
  this.author = author
  this.year = year
  this.reader = null; // this.reader !== null // this.reader === null
};

Book.prototype.isAvailable = function(){
  return !this.reader
}

Book.prototype.takeBook = function(readerName){
  if (!this.reader) {
    this.reader = readerName
    return true
  }
  return false
}
Book.prototype.returnBook = function() {
  if (this.reader) {
    this.reader = null
    return true
  }
  return false
}
Book.prototype.changeBookName = function(newBookName) {
  if(this.reader) {
    this.name = newBookName
    return true
  }
  return false
}
Book.prototype.changeAuthorName = function(newAuthorName){
  if(this.author){  
  this.author = newAuthorName
  return true
  }
return false
}
Book.prototype.getCurrentReader = function(){
  if(this.reader){
    return this.reader
  }
  return null
}

const harryPotter = new Book('Harry Potter', 'Rowling', '1997')
console.log(harryPotter)


class Book1{
  constructor(name, author, year){
    this.name = name
    this.author = author
    this.year = year
    this.reader = null
  }
  isAvailable(){
    return !this.reader
  }
}

new Harry = new Book1('Harry Potter', 'Rowling', '1997')


function isUniq(string){
  for(let i = 0; i < string.length; i++){
    const res = string[i]
    if (string.indexOf(res) !== i){
      return false
    }
  }

  return false
}

console.log(isUniq('abccdef'))



// Необходимо добавить возможность логирования в функцию add класса Addition

// Используя прототип класса Addition добавить декоратор к функции add, дающий возможность логировать ее вызов
// При этом результат выполнения add должен быть как и в оригинале, но дополнительно при вызове выводить в консоль 'called'

// Менять изначальную функцию, класс или созданный объект нельзя.
// Код можно писать только в обозначенной зоне.

// Пример:
// const startedValue = new Addition(5);
// const result = startedValue.add(3,5,6) //В консоль выводится "called"
// console.log(result) //В консоль выводится 19
// чем прототипы отличаются от классов
// console.log('called')


class Addition {
  constructor(num) {
    this.num = num;
  }

  add(...nums) {
    const sum = (a, b) => a + b;
    console.log('called')
    return this.num + nums.reduce(sum);
  }
}

let a = new Addition(5);
console.log(a.add(1, 2, 3))
console.log(a.add(1,2,3,4,5,6,7,77,54,63))

// let add = Addition.prototype.add;

// Addition.prototype.add = function(...nums) {
//   console.log('called');
//   return add.call(this, ...nums);
// }

// let b = new Addition(2);
// console.log(b.add(1, 2, 3))
// console.log(a.add(1, 2, 3))




const printValue = (x) =>{
  return this.num + nums.reduce(printValue)
}



// создание историй банковских операций


class Person {
  constructor(firstName, lastName, birthday) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = birthday;
    this.fullName = this.firstName + this.lastName
  }

  getAge (){
    // дата сегодня
    const today = new Date()
    // дата др
    const birthday = new Date(this.birthday)

    let age = today.getFullYear() - birthday.getFullYear()
    const monthDiff = today.getMonth() - birthday.getMonth()
    const dayDiff = today.getDay() - birthday.getDay()
    if(monthDiff < 0 || (monthDiff === 0 && dayDiff < 0) ){
      age = age - 1
    }

    return age
  }
 
}




const Alex = new Person('Alex', 'Petrov', '1998-11-07')
const Gena = new Person('Gena', 'Bukin', '1976')

console.log(Alex.getAge())


class Account {
  constructor(person, balance){
    this.person = person;
    this.balance = balance;
    this.balanceSheet = []
  }
  addMoney(amount, description) {
    console.log(`Вам перевели: ${amount}, Комментарий: ${description}`)
    this.balance + amount
    this.balanceSheet.push({timestamp: Date.now(), target:'in', amount, description})
    return this
  }
  withdrawMoney(amount, description) {
    console.log(`Вы сняли ${amount}, Комментарий: ${description}`)
    this.balance - amount
    this.balanceSheet.push({timestamp: Date.now(), target:'out', amount, description})
    return this
  }
  getAmount() {
    return this.balance
  } 
  getAccountHistory() {
    return this.balanceSheet.map(data => ({
      timestamp: data.timestamp,
      target: data.target,
      amount: data.amount,
      description: data.description
    }))
  }
  static transfer(fromAccount, toAccount, amount){
    let description = "Перевод денег внутри c одного счета на другой";
    fromAccount.withdrawMoney(amount, `${description} на счет ${toAccount.person.fullName}`);
    toAccount.addMoney(amount, `${description} со счета ${fromAccount.person.fullName}`);
  }
}

const AccountAlex = new Account(Alex, 10000)
const AccountGena = new Account(Gena, 3000)
AccountAlex.addMoney(500, 'transfer')
AccountAlex.withdrawMoney(700, 'out transfer')
console.log(AccountAlex.getAccountHistory())
console.log(Account.transfer(AccountAlex, AccountGena, 2000))


console.log('hello1')
setTimeout(()=> console.log('hello2'), 0)
console.log('hello3')




let fileSizes = {
  file1: 65,
  file2: 48
}

function getFileSize(filename,cb){
  setTimeout(() => cb(fileSizes[filename]), 1000)
}


function sumFileSizes(filename1, filename2 ,cb){
  getFileSize(filename1, (size1) => {
     getFileSize(filename2, (size2) => {
       let totalSize = size1 + size2
       cb(totalSize)
     })
  })
}

sumFileSizes("file1", "file2", (totalSize) => {
  console.log(`Суммарный размер testFile1 и testFile2 ${totalSize} байт`)
})
