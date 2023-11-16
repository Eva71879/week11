// Есть список сообщений

// При помощи JavaScript для каждого сообщения добавьте слушатель события на крестик (один элемент - один слушатель), который по нажатию удаляет <div>

let firstMessage = document.querySelector('.horse');
function removeFirstMessage (){
    firstMessage.remove ();
}
firstMessage.addEventListener('click', removeFirstMessage);


let secondMessage = document.querySelector('.donkey');
function removeSecondMessage (){
    secondMessage.remove ();
}
secondMessage.addEventListener('click', removeSecondMessage);

let thirdMessage = document.querySelector('.cat');
function removeThirdMessage (){
    thirdMessage.remove ();
}
thirdMessage.addEventListener('click', removeThirdMessage);