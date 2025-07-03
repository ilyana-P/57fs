const starWarsHeroes = [
  { name: "Anakin Skywalker", age: 30, isJedi: true },
  { name: "Luke Skywalker", age: 25, isJedi: true },
  { name: "Han Solo", age: 35, isJedi: false },
  { name: "Princess Leia", age: 30, isJedi: false },
  { name: "Obi-Wan Kenobi", age: 60, isJedi: true },
];
//Используйте методы массивов.
//  1.2 Создайте новый массив с джедаями младше 40 лет

const youngJedi = starWarsHeroes.filter((el) => el.isJedi && el.age < 40);
console.log(youngJedi);

// 1.3 Посчитайте возраст всех джедаев
const totalAge = starWarsHeroes
  .filter((el) => el.isJedi)
  .reduce((acc, el) => acc + el.age, 0);
console.log(totalAge);

// 1.4 Повысьте возраст героев на 10 лет
const age_10 = starWarsHeroes.map((element) => ({
  ...element,
  age: element.age + 10,
}));
console.log(age_10);

// 1.5 Создайте новый массив, где "Anakin Skywalker" заменен на:
// `{ name: "Darth Vader", isJedi: false, age: 50 }`
// const newHero = [...starWarsHeroes];
// newHero.splice(0, 1);
// console.log(newHero);

// newHero.unshift({ name: "Darth Vader", isJedi: false, age: 50 });
// console.log(newHero);
const newHero = starWarsHeroes.map((hero) =>
  hero.name === "Anakin Skywalker"
    ? { name: "Darth Vader", isJedi: false, age: 50 }
    : { ...hero }
);
console.log(newHero);

// 1.6 Создайте на основе старого массива новый массив объектов по образу:
// `[{ name: "Luke Skywalker", isJedi: true }, { name: "Han Solo", isJedi: false }, ...]`
const newMassiv = starWarsHeroes.map((element) => ({
  name: element.name,
  isJedi: element.isJedi,
}));
console.log(newMassiv);
