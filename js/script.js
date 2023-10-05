//var year = Date (2023, 2, 0);
//console.log(date.getDate());




// var year = new Date(2023, 2, 0);

// if (year.getDate() == 29) {
// 	console.log('високосный');
// } else {
// 	console.log('обычный');
// }


//let cleaner = 40000;
//if (cleaner)



// 1 задание

// var voice = 22000, education = 40000;
// var result = voice + education
// console.log(result)

// 2 задание 

// let song = "Владивасток" + " ",  num = 2000;
// let result = song + num;
// console.log(result)

//3 задание

// let chat = 128, laik = 254, read = 137, watch = 201;
// let result = chat + laik + read + watch
// console.log(result)

// ИЛИ

// let chat = 128 + 254 + 137 + 201;
// console.log(chat)

//4 задание 
// const result = 2 ** 5;
// console.log(result)

//5 задание 
// console.log("Нужно бежать со всех ног, чтобы только оставаться на месте, а чтобы куда-то попасть, надо бежать как минимум вдвое быстрее!")

//6 задание 
// const greetings = "Привет";
// const name = "Кот";
// console.log(greetings+name)

//7 задание 
// let  = 'time';
// let time = 34;
// console.log(`Старт поездки. Осталось минут: ${time}`)


//  const stories = 15;
// //  let result = time - stories
//  time -= stories
//  console.log('Немного сторис в соцсетях. Осталось минут: ' + time)

//  const news = 10;
// //  let total = result - news;
//     time -= news;
//  console.log( 'Немного не новостей, но событий. Осталось минут: ' + time)
// const obj = {name: 'Vasia'}
// let r = obj;

// r.name = 'Misha'
// obj.name // 'Misha'

 
 
//  console.log(a); // undefinde
//  console.log(b); // error
//  console.log(c); // error
//  let c = 1;
//  if(true){
//     var a = 1;
//     let b = 1;

//  }
//  console.log(a);
//  console.log(b);
//  console.log(c);
//  const 

//8 задание 
// let fahrenheit = 451;
// let celsius = (fahrenheit-32)/1.8;
// console.log(` ${fahrenheit}градуса по Фаренгейту — это ${celsius} градуса по Цельсию.`)


// урок 2
// const func = () => {console.log('Я учу JavaScript!')};
// func()


// const buttons = document.querySelectorAll(".gallery_button");
// console.log(buttons)
// buttons.forEach(element => {
//     console.log('element ',element )
//     element.addEventListener('click', ()=> console.log('Кнопка'));  // 1 аргумент:  какое именно событие мы хотим слушать. " аргумент: функция, которая выполнится"
//  });




// задача из 11 урока по функциям. Галерея

//  const vpered = document.querySelector("#vpered");

//  const nazad = document.querySelector("#nazad");

//  var items = document.querySelectorAll('.gallery_cat');





//  nazad.addEventListener('click', ()=> console.log('назад')); 


//  vpered.addEventListener('click', function(){

//      items[0].classList.remove("active");    

//      items[1].classList.add("active");    

//  }); 

//  nazad.addEventListener('click', function(){

//      items[1].classList.remove("active");    

//      items[0].classList.add("active");    
 
//  });     


// конец

// let cat = document.getElementById('.h2_price_of_cats');
// console.log('cat');

//  let cat_2 = document.getElementById('.h2_price_of_cat_2');
//  console.log('cat_2');

//  document.cat.innerHTML = 'cat';



//Типы данных

//1 ПРостой тип данных

//1.1 Строки

let name = 'Peter';
let secondName = "Ivanov";
const url = `htpps://devtochka.ru/toys/${name}asdas${secondName}`; //Интерполяция

//1.2 Числа - 2 ** 53 - 1

const num = 12;
const floatNum = 12.2;
const nan = 'asd' / 2; //NaN - не число
const inf = 123 / 0; //Infinity
const negativeInf = -123 / 0; //-Infinity

//1.3 Логический тип

const someTrue = true;
const someFalse = false;

//1.4 Undefined
let myCat;
console.log(myCat);//undefined

//1.5 Null

const someNull = null;

// console.log(somenv)


//2. Сложный тип данных

//2.1 Массив (Array);

//В нем лежит все в строгом порядке, любые обращения к массиву мы производим по ИНДЕКСУ (порядковый номер)

const arr = [1, 'cat', [], {}, false];

const myStr = arr[1];

arr[0] = 'Banana';


//2.2 Объекты - любые обращения мы производим по ствойствам(ключам)

const human = {
    name: 'Peter',
    age: 28,
    hasCar: true,
}

const humanName = human.name;

human.name = 'Alex';

//Если ты пытаешься обратиться к несуществующему свойству и присвоить какое-то значение, он его создаст

human.lastName = 'Ivanov';

let someKey = 'hasCar';

console.log(human[someKey])

//3. Базовые математические операторы

//+,-,*,/,%,**

//3.1 ПЛЮС(когда оба операнда - это числа, то просто сложение чисел) 5 + 5 ...10
//Когда ОДИН ИЗ операндов является строкой, то будет происходит сложение строк   '2' + 2 = '22';  2 + 2 + '2' = '42'

//3.2 -,*,/,%,** Если один из операндов не получается привести к числу, то получаем NaN  '2' - 1 = 1; 'city' * 2 = NaN


//3.3 Унарный плюс - переводит сущность в число

const someStrForNum = +'22';

console.log(typeof someStrForNum)


//3.4 = - это ПРИСВАИВАНИЕ

let someAnswer = 1;

//Длинный вариант
someAnswer = someAnswer + 1;

//Вариант нормальный
someAnswer += 1;
someAnswer *= 2;
someAnswer /= 4;


//3.5 Инкремент (увеличиваем на 1), декримент (уменьшает на 1). Его можно использовать ТОЛЬКО с переменными

//Постфиксная форма someNum++   someNum--

//Префиксная форма ++someNum, --someNum

//Постфикнсая форма сначала возвращает предыдущее значение, а только потом его меняет
//Префиксная форма сразу вовзращает измененное значение

for(let i = 0; i < 10; i++) {

}


//4. Опараторы сравнения - они всегда возвращают true/false
// >, <, >=, <=, ==(===), !=(!==)
console.log(123 <= 123)

//Нестрогое равно (==) - сравнивает сущности только по значению
//Строгое равно (===) - сравнивает сущности И ПО ТИПУ ДАННЫХ, и по ЗНАЧЕНИЮ

//'1' == 1 - true
//'1' === 1 - false

//Пользуемся только строгим сравнением


//5. Приведение сущностей к Boolean
//'', 0, undefined, null, NaN - это FALSE
//все остальное - это TRUE




//6. Сравнительные операторы
const isMarried = false;

if(isMarried === true){
    //Блок условия
    console.log('Go home and say hello to your wife');
}else {
    console.log('Go to the bar with your friends')
}


const trafficLight = 'red';

if(trafficLight === 'red') {
    console.log('Stop and wait')
} else if(trafficLight === 'yellow') {
    console.log('Get started to walk')
} else {
    console.log("Let's go")
}


//7. prompt - всегда возвращает строку, alert

// const age = prompt('Сколько вам лет?');

// console.log(typeof +age)

//Написать программу по решению квадратных уравнений. От пользователя с помощью промпта ты получаешь a, b, c. И ответ отдаешь с помощью alert

    let a = prompt("Введите A:"),
        b = prompt("Введите B:"),
        c = prompt("Введите C:");   

    let d = b * b - 4 * a * c;
    if (d > 0) {
        let x1 = (-b - Math.sqrt(d)) / (2 * a);
        let x2 = (-b + Math.sqrt(d)) / (2 * a);
        console.log("Корни уравнения: x1 = " + x1 + ", x2 = " + x2);
    }    

    else if (d === 0) {
        let x = -b / (2 * a);
        console.log("Уравнение имеет единственный корень: x = " + x);
    }    

    else {
        console.log("Уравнение не имеет действительных корней!");
    }

//8. Логически операторы

//&& - И, || - ИЛИ, ! - НЕ, !! - двойное НЕ



//&& - запинается(возвращает) первую ложь. Если лжи нет, то возвраащет последнюю правду

console.log('1abv' && 1);

const age = 18;

if(age >= 18 && age > 60) {
    console.log('You are too old')
}else {
    console.log('You are young')
}

// || - запинается(возвращает) первую правду. Если правды нет, то возвращает последнюю ложь

console.log(null || undefined) // undefined

//! - НЕ (приводит к обратному Boolean значению)

console.log(!1); //false

// !! - Двойное НЕ (просто приводит к Boolean)

console.log(!!1); //true


//9. Циклы

for(let i = 1; i < 11; i++) {
    console.log(i);
}

const someArr = [1, 2, 3, 4];

for(let i = 0; i < someArr.length; i++) {
    console.log(someArr[i])
}


fun

for(let i=1; i<=100; i++) {
    if (i%3 === 0 && i%5 === 0) {
    console.log('FizzBuzz');
  } else if (i%3 === 0) {
    console.log('Fizz');
  } else if (i%5 === 0) {
    console.log('Buzz');
  } else {
    console.log(i);
  }
}




let oddLine = '# # # # ';
let evenLine = ' # # # #';

for(let i = 0; i < 8; i++) {
    if(i % 2 === 0) {
        console.log(oddLine)
    }else {
        console.log(evenLine)
    }
}






























//9. Глобальные и локальные переменные
// Все, что заключено в фигурные скобки, являются локальными переменными, и их не видно на уровень выше (за скобками)

let _name  = 'Vasya';

if(_name) {
    let _name = 'Sophie';
    console.log(_name);
}


//10. Функции - это всегда какое-то действие. Стараемся называть наши фугкции с глаголов

//DRY - Don't Reapet Yourself

//10.1 Function Expression

sumNums(1, 2);

function sumNums(num1, num2) {
    console.log(num1 + num2);
}



sumNums(-30, 5);

sumNums(4, 7);




function concatInfo(name, age) {
    //Куча всяких операций
    return `Name is ${name} and age is ${age}`
}

const someVasyaInfo = concatInfo('Vasya', 20);

const somePeterInfo = concatInfo('Peter', 28);

const someManInfo = concatInfo('Vasya', 30);


//10.2 Function Declaration - в отличии от Function Expression мы не можем вызывать данную функцию до ее инициализации (до ее объявления)


const getInfoFromBD = function(bd) {
    console.log(bd);
}

getInfoFromBD('info')


//10.3 Arrow Function (стрелочная функция). Используется для сокращения синтаксиса в написании + у нее нет своего контекста!

function someExample(a, b) {
    return a + b
}

const anotherExampleFunc = (a, b) => a + b;

anotherExampleFunc(1, 2)




//11. Методы и свойства

//Свойство - способ доступа к внутреннему состоянию объекта, имитирующий переменную некоторого типа
//Метод - это функция, которая принадлежит конкретному объекту

const someHuman = {
    name: 'Peter',
    age: 28,
    greet: function() {
        console.log('Hello')
    }
}

console.log(someHuman.name)

someHuman.greet();


console.log(somePeterInfo)




//12. Методы и свойства строк

//12.1 Свойства строк - оно всего одно длина str.length

const someStrForProp = 'Peter';

console.log(someStrForProp.length); //5

//12.2 Методы строк - НЕ МЕНЯЮТ ИСХОДНУЮ СТРОКУ, а лишь возвращают новое значение

//toUpperCase() - приведение к высокому регистру

someStrForProp.toUpperCase(); //PETER
const strUpper = someStrForProp.toUpperCase()
console.log(strUpper)

const inputValue = 'CoLa';
console.log('Cola'.toLowerCase().includes(inputValue.toLowerCase()))



//toLowerCase() - приведение к низкому регистру

someStrForProp.toLowerCase(); //peter

//includes - принимает в качестве аргумента искомую подстроку в строке, на которой вызван метод. Возвращает true/false. ОЧЕНЬ ЧУВСТВИТЕЛЬНА К РЕГИСТРУ

const strForSearch = 'Hello World';

console.log(strForSearch.includes('Hello Wo')) //true

//indexOf(str) - принимает в качестве аргумента искомую подстроку и возвращает индекс начала искомой подстроки. Если подстрока не найдена - то  возвращается -1.ОЧЕНЬ ЧУВСТВИТЕЛЬНА К РЕГИСТРУ

const strForIndes = 'Hello World';

console.log(strForIndes.indexOf('World'));//6
console.log(strForIndes.indexOf('world'));//-1
console.log(strForIndes.indexOf(' '));//-5

//slice(start, end) - возвращает обрезанную строку. Аргумент start - индекс начало обрезки, end - индекс конца обрезки НЕ ВКЛЮЧАЯ ЕГО
//Если мы не передаем аргумент end, то мы обрезаем от start до конца
//мы так же можем обрезать стркоу задом наперед. Надо указывать отрицательные индексы. Последний элемент -1

const strForSlice = 'Hello World'

console.log(strForSlice.slice(0, 5));
console.log(strForSlice.slice(6));
console.log(strForSlice.slice(-3, -1));

//replaceAll(replaceValue, newValue) - меняет Все replaceValue на newValue

const date = '19-07-2023';
console.log(date.replaceAll('-', '.')); //'19.07.2023'


//split(separator) - превращает строку в массив разделяя их при помощи separator
//если сепаратор пустая строка, то он засунет все в массив посимвольно
//если ты вообще не передаешь сепаратор, то он засовывает всю строку в массив как единственный элемент массива

const strForSplit = 'nike;adidas;reebok';

const arrOfBrands = strForSplit.split(';');
console.log(arrOfBrands)

console.log('hello world'.split(''))


//Методы массива

//push(item) - добавляет В КОНЕЦ массива наш item

const arrForMethods = [1, 2, 3, 4];
arrForMethods.push(666);


//pop() - удаляет из массива ПОСЛЕДНИЙ Элемент
arrForMethods.pop();
console.log(arrForMethods);


//Не советую использовать эти методы
//unshift(item) - добавляет в НАЧАЛО массива наш item
//shift() - удаляет первый элемент массива

//splice(index, amount) - удаляет amount элементов с позиции index
const arrForSplice = ['pipe', 'cat', 'nail'];
arrForSplice.splice(1, 1); //['pipe','nail']

//reverse() - ВОЗВРАЩАЕТ новый перевернутый задом наперед массив. НЕ МЕНЯЕТ ИСХОДНЫЙ МАССИВ!
const arrForReverse = [1, 2, 3, 4];
const reversedArr = arrForReverse.reverse();

console.log(arrForReverse)
console.log(reversedArr);

//join(separator) - превращает массив в строку, разделяя элементы массива в этой строке через separator
const someBrands = ['nike', 'adidas', 'reebok'];
const someStrBrands = someBrands.join(', ');
console.log(someStrBrands)

//includes(item) - ищет в массиве item. Возвращает true/false. Item - это сущность, которая ищется
[1, 2, 9, 4].includes(3); //false

//sort() - метод сортировки массива. Сортировка - это изменения порядка элемнтов в массиве(либо от большего к меньшему, либо наоборот)

const arrForSort = ['big', 'arrow', 'wizard', 'take'];

arrForSort.sort();//так мы делаем, если мы хотим отсортировать СТРОКИ в алфавитном порядке по возрастанию

const numsForSort = [2, 1, 33, 11, 22, 34, 3]
numsForSort.sort();//так мы не делаем!
console.log(numsForSort)


//Если надо отсортировать по числовому значению! Если мы делаем из функции return a - b (будет восходящий порядок), а если b - a (будет нисходящий порядок)
const rightWayForNums = [2, 1, 33, 11, 22, 34, 3];

rightWayForNums.sort((a, b) => { 
    return a - b   
})

console.log(rightWayForNums)


//Если надо отсортировать посимвольно(алфавитный порядок)
const rightWayForStr = ['big', 'arrow', 'wizard', 'take'];

rightWayForStr.sort((a, b) => {
    if(a > b) {
        return 1
    }else if(a < b) {
        return -1
    }else {
        return 0
    }
})

console.log(rightWayForStr)



//Методы массивов связанные с перебором

//forEach(function(elem, index, array)) - это самый обычный перебор массива (замена для for)

const arrLoop = [34, 23, 12, 56];

arrLoop.forEach(function(num) {
    console.log(num)
})

arrLoop.forEach((num, idx) => {
    console.log(`${num} with index ${idx}`)
})

//map(function(elem, index, arr)) - возвращает новый массив, в котором элементе изменены по нашему правилу. НЕ МЕНЯЕТ ИСХОДНЫЙ МАССИВ
//Обязательно нужен return {наше правило (как мы будем изменять)}
const arrsNums = [-1, -2, 0, 4, 5];

const doubledNums = arrNums.map(function(item) {
    return item ** 2
})

const arrNums = [-1, -2, 0, 4, 5];

const doubleException = arrNums.map(item => {
    if(item % 2 === 0) {
        return item ** 2;
    }

    return item;

   
})
console.log(doubleException)

const trippleException = arrNums.map(item => {
    if(item > 0) {
        return true
    }else if(item < 0) {
        return false
    }else {
        return undefined
    }
})

console.log(trippleException);

//filter(function(elem, index, array)) - возвращает новый массив, фильтрует массив по нашему правилу. НЕ МЕНЯЕТ ИСХОДНЫЙ МАССИВ
//Обязательно нужен return {наше правило (как мы будем фильтровать)}

const arrForFilter = [1, 2, 3, 4, 5];

const filteredArr = arrForFilter.filter(num => {
    return num % 2 === 0;
})

console.log(filteredArr)


//some(function(elem, index, arr)) - возвращает true если хотя бы ОДИН элемент массива подходит под наше правило. Иначе возврпащает false
//Обязательно нужен return {наше правило}

const arrForSome = [23, 35, 12, 20, 60];

const isYoungPerson = arrForSome.some((item) => {
    return item < 18;
})

console.log(isYoungPerson)

//some(function(elem, index, arr)) - возвращает true если ВСЕ элементы массива подходит под наше правило. Иначе возврпащает false
//Обязательно нужен return {наше правило}


const someNums = [12, 2, 4, 8, 20, 10];
const areNumsOdd = someNums.every(item => {
    return item % 2 === 0
})

console.log(areNumsOdd)

//reduce(function(accumulator, elem, index), initialValue); accumulator - это переменная в которую складываются все итоги вычеслений; initialValue - изначальное значение аккумулятора
//Обязателен return. В return мы пишем, что мы делаем c аккумулятором
//reduce в конечном итоге возвращает нам accumulator

const arrForReduce = [1, 2, 3, 4];

//Решение задачи простым способом
let sum = 0;
for(let i = 0; i < arrForReduce.length; i++) {
    sum += arrForReduce[i];
}

//Решение задачи через reduce

const myCalculations = arrForReduce.reduce((sum, value) => {
        return sum + value
}, 0)

console.log(myCalculations)

[1, 2, 3, 4]

 1 3 6 10








/









// Напишите функцию sumEvenNumbers, которая принимает на вход массив чисел и возвращает сумму всех четных чисел из этого массива. 
// Если в массиве нет четных чисел, функция должна возвращать 0.


function getNums(a) {
    
}
console.log(getNums(3))


function reverseString(str) {
    // const arrStr = str.split('');
    // const reverseArr = arrStr.reverse();
    // const finalStr = reverseArr.join('');

    // return finalStr

    // return str.split('').reverse.join('');

    let finalStr;
    for(let i = str.length - 1; i >= 0; i--) {
        finalStr += str[i]
    }
    
    return finalStr;
}


console.log(reverseString('Peter'))


// 1 задание
        
function sumPrimeNumbers(x, y) { 
    let sum = 0;
  for (let i = x; i <= y; i++){
        // sum = sum + i
        sum += i;
  }
 
  
  return sum
}


console.log(sumPrimeNumbers(2, 100))


function isPrime(num) {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) return false;
    }
    return num;
  }

  function printPrimes(last) {
    for (let i = 2; i <= 100; i++) {
      if (isPrime(i)) console.log(i);
    }
    return num 
    //?????????????
  }



// 2 задание 
function isAnagram(str) {
    let reversedStr = '';
    for(let i=str.length-1; i >= 0; i--) {
        reversedStr+= str[i];
    }

    if(str === reversedStr) {
        return true
    }else {
        return false
    }
}

console.log(isAnagram('анна'))





// 3 задание 


const nums = [1, 2, 3];

function calculateAverage(nums) {
  const total = nums.reduce((num1+ num2 +num3));
  return total / nums.length;
}

const average = calculateAverage(nums);
console.log(average);


function calculateAverage(x,y) {
    let calculate = 0;
    for (let i = x; i <= y;)
}


function sumPrimeNumbers(x, y) { 
    let sum = 0;
  for (let i = x; i <= y; i++){
        // sum = sum + i
        sum += i;
  }
 
  
  return sum
}


console.log(sumPrimeNumbers(2, 100))


//4 задание 

function checkAllNumbers(arr) {
    if(checkAllNumbers) {
        let _name = 'Sophie';
        console.log(_name);
}
}

let arr [];



function checkAllNumbers(arr) {
    if (massiv=>0; i < arr.length; i++) {
      return(true)
    }
    
  }

  const massiv = num;
  



  const age = 18;

if(age >= 18 && age > 60) {
    console.log('You are too old')
}else {
    console.log('You are young')
}




// Написать функциюБ которая проверяет является ли строка палиндромом или нет. Вернуть true falce

function palindrom(str) {
    str = str.toLowerCase();
    let str2 = str.split('');
    str2 = str2.reverse();
    str2 = str2.join('');
    if(str === str2){
        return true
    }else {
        return false
    }

    
}
console.log(palindrom('hello'))




// ===================

function palindrom(str) {       // === const palindrom = (str) => {}
    str = str.toLowerCase();
    return str===str.split('').reverse().join('')
}

console.log(palindrom('abba'))