//1.1. Получите доступ к элементам из HTML по их id :
const formElement = document.getElementById("form");
const listElement = document.getElementById("persons-list");
const clearBtnElement = document.getElementById("clear");
const clearOneBtnElement = document.getElementById("clear-one");
//2. Создайте пустой массив persons , в который будут добавляться объекты пользователей.
const persons = [];
//3.Реализуйте функцию clearList , которая:будет полностью очищать список <ul> от всех элементов <li> ,
// использовать цикл while , чтобы удалять по одному дочернему
// элементу, пока они есть.

function clearList() {
  while (listElement.firstElementChild) {
    listElement.removeChild(listElement.firstElementChild);
  }
}

function clearOne() {
  if (listElement.firstElementChild) {
    listElement.removeChild(listElement.firstElementChild);
  }
}

function clearInputs(event) {
  event.target.nickname.value = "";
  event.target.place.value = "";
}

// 📌 Функция переключения зачёркнутости
function changeStatus(event) {
  const element = event.target;
  if (element.style.textDecoration === "line-through") {
    element.style.textDecoration = "none";
  } else {
    element.style.textDecoration = "line-through";
  }
}

// 📌 Обработчик отправки формы
formElement.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = event.target.nickname.value.trim();
  const place = event.target.place.value.trim();

  if (name && place) {
    const person = {
      name: name,
      place: place,
    };

    persons.push(person);

    const li = document.createElement("li");
    li.textContent = `${person.name} ${person.place}🥷🏻`;

    // Навешиваем на li переключение зачёркнутости
    li.addEventListener("click", changeStatus);

    listElement.appendChild(li);
    clearInputs(event);
  }
});

// 📌 Обработчики кнопок
clearBtnElement.addEventListener("click", clearList);
clearOneBtnElement.addEventListener("click", clearOne);
