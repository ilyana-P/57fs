const form =document.querySelector("#form-book");
const ul = document.querySelector('#book-list');
const clearList= document.querySelector("#clear-list");

let books=[
{title:"Гарри Поттер", author:"Джоан Роулинг"},
{title:"Война и мир", author:"Лев Толстой"},
{title:"1984", author:"Джордж Оруэлл"},
{title:"Над пропастью во ржи", author:"Дж. Д. Сэлинджер"},

];
form.addEventListener("submit", (event) => {
  // убираем перезагрузку формы по умолчанию
  event.preventDefault();

// забираем данные из input уточняя name
let book = {
    title: event.target.title.value.toLowerCase(),
    author: event.target.author.value.toLowerCase()
  };
  // чистим input от введенных значений
  event.target.title.value = "";
  event.target.author.value = "";
  // делаем проверку есть ли элемент в массиве
const check = books.find(el =>
    el.title === book.title && el.author === book.author
  );
   // если идентичный элемент найден - вызываем ошибку
  if (check) {
    alert("This book is already in list 🙅‍♂️");
  } else {
    // добавляем задачу в массив
    books.push(book);
    // создаем элемент
    const li = document.createElement("li");