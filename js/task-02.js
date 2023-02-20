const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.


const ingredientsEl = document.querySelector('#ingredients');

// ingredients.forEach(ing => {
//   const itemEl = document.createElement('li');
//   itemEl.classList.add('item');
//   itemEl.textContent = ing;
//   ingredientsEl.append(itemEl);
// });

const ingredientsList = ingredients.map(ing => {
  const itemEl = document.createElement('li');
  itemEl.classList.add('item');
  itemEl.textContent = ing;

  return itemEl;
});

ingredientsEl.append(...ingredientsList);





