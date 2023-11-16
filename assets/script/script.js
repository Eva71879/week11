// Заголовок, который будет изменять свой текст при наведении курсора.

//Найдите заголовок по id и запишите его в перемнную
const title = document.getElementById ('title');
console.log(title.textContent);

// // Добавляем обработчики событий mouseenter и mouseleave
title.addEventListener("mouseenter", function() {
  //Измените текст заголовка при наведении курсора с помощью метода textContent
  //Ваш код
  title.textContent = 'Hello, world!';
});

title.addEventListener("mouseleave", function() {
  title.textContent = 'Привет, мир!';
 }); __________________________________________________________________________

