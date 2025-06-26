//вывод в консоль
// console.log("hello.world")
// создание переменных
// cost, var, let
let dog = "Tuzik";
dog = "Sharik";
dog = 35;
// console.log(dog);

let bird;
bird = "Woody";

const car = "Opel";
// car = "Tesla";
console.log(car)

var age = 35;
//примитивные типы данных
//1.string-является примитивом

let str1 = "Можно в двойных"
let str2 = 'Можно в одинарных'
let str3="13" //стринг
let str4= str1 + " " + str2;
console.log(str1.toUpperCase())
console.log(str4)

let isDrunk = false;

// if (isDrunk){
//     console.log("Ты пьян")
// } else {
//     console.log("ты трезв")
// }
const result =isDrunk ? "Ты пьян!" : "ты трезв"
console.log(result)

// .5 undefined

let my_name;
console.log(my_name);

// * 6. null - нулевое значение
// явное указание на отсутствие значения
let empty=null;
console.log(empty);

// * 7. symbol - символ (не для frontend)
// уникальное значение используемое в объектах

let symbolIds1 = Symbol("something");
console.log(s1)

// 2. Преобразование в число неявное
    const num5 = +"6"; // 6
    const sum = +"9" +  +"10";
    console.log(sum);

 const num6 = Number("117"); // число 117   
 const num7 = Number("129&8*#")
