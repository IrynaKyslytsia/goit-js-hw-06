// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), перевіряє його вміст щодо правильної кількості введених символів.

// Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.

const input = document.querySelector('#validation-input');
input.addEventListener('blur', onValidInput);

function onValidInput(event) {
    if (event.currentTarget.value.length === Number(input.dataset.length)) {
        input.classList.remove("invalid");
        input.classList.add("valid");
        return
      }
        input.classList.remove("valid");
        input.classList.add("invalid");
      };


      ////////////////////////////////////////////////////////////

// function onValidInput(event) {    
//   input.classList.add(
//     event.currentTarget.value.length ===
//     Number(input.dataset.length)
//     ? "valid"
//     : "invalid"
//   );
//     };






