// Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) і змінює інлайн-стиль span#text, оновлюючи властивість font-size. В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.

const input = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

console.log(text);

input.addEventListener('input', onChangeFontSize);

function onChangeFontSize(event) {
    text.style.fontSize = `${event.currentTarget.value}px`;
};