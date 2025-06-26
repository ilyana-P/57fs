// Задание 1
// Создайте массив из следующих элементов: "Семен", "Иван", "Петр", "Татьяна".
// Создайте еще один массив с возрастами: 18, 27, 74, 34; Создайте и заполните
// при помощи цикла этот новый массив новыми элементами по образу: "Семен 18 лет/годов"

const persons= ["Семен", "Иван", "Петр", "Татьяна"];
const ages= [18, 27, 74, 34];
const newArr=[];

for (let i = 0; i < persons.length; i++) {
  newArr.push(persons[i] + " " + ages[i] + " лет");
}
console.log(newArr)

// ### Задание 2
// Используя пройденные на занятии методы массива получите из этого массива новый массив,
// в котором элементы идут в обратной последовательности.
// Используйте цикл, а не метод reversed()!
const newArr2=[];
for (let i=newArr2.length-1; i>=0; i--){
    reverse.push(newArr2[i]);
}
console.log(newArr2)


// ### Задание 3
// Создайте пустой массив fruits.
// добавьте в массив следующие фрукты: "яблоко", "банан", "апельсин".
// Удалите последний элемент из массива и сохраните значение в переменной.
// Добавьте его в начало массива.
// Выведите fruits в консоль
const fruits=[];
fruits.push("яблоко");
fruits.push("банан");
fruits.push("апельсин");
popFruit=fruits.pop();
fruits.unshift(popFruit);
console.log(fruits)



// ### Задание 4
// Объедините fruits с массивом veggies (в него добавьте строки овощи) через spread в массив fruitsAndVeggies
const veggies=["помидор","огурец","капуста","морковка"];
const fruitsAndVeggies= [...fruits,...veggies];
// Используя деструктуризацию заведите переменную под каждый элемент нового массива
const a = fruitsAndVeggies[0];
const b = fruitsAndVeggies[1];
const c= fruitsAndVeggies[2];
const d= fruitsAndVeggies[3];
const e = fruitsAndVeggies[4];
const f= fruitsAndVeggies[5];
const g= fruitsAndVeggies[6];
// Выведите fruitsAndVeggies в консоль
console.log(fruitsAndVeggies);



