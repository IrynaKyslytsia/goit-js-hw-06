// Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.

// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

const counterValue = {
    value: 0,
    increment() {
        this.value += 1;
    },
    decrement() {
        this.value -= 1;
    }
};

const decrementBtnEl = document.querySelector('button[data-action="decrement"]');
const incrementBtnEl = document.querySelector('button[data-action="increment"]');
const valueEl = document.querySelector('#value');

decrementBtnEl.addEventListener('click', () => {
    counterValue.decrement();
    valueEl.textContent = counterValue.value;
});

incrementBtnEl.addEventListener('click', () => {
    counterValue.increment();
    valueEl.textContent = counterValue.value;
});


//////////////////////////////////////////////////////////////////////////

// const countEl = document.getElementById("counter");
// const value = document.getElementById("value");

// let counterValue = 0;
// countEl.firstElementChild.addEventListener("click", () => {
//   counterValue--;
//   value.textContent = counterValue;
// });
// countEl.lastElementChild.addEventListener("click", () => {
//   counterValue++;
//   value.textContent = counterValue;
// });

