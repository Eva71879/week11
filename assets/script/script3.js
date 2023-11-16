//Найдите кнопку по id. Запишите её в переменную. Добавьте событие onclick на кнопку, при клике на которую, будет выводиться всплывающее окно с сообщением "Привет, мир!"

const button = document.getElementById('myButton');
button.onclick = function () {
  alert('Привет, мир!');
}