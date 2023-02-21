// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input), підставляє його поточне значення в span#name-output. Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".

const input = document.querySelector('#name-input');
const inputName = document.querySelector('#name-output');

input.addEventListener('input', onInputChange);

function onInputChange(event) {
    inputName.textContent = event.currentTarget.value === '' ? "Anonimous" : event.currentTarget.value;
};