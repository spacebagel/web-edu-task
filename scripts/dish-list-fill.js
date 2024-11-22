let totalCost = 0;
const selectedDishes = { soup: null, 'main-dish': null, drink: null };

function updateTotalCost() {
    const totalCostElement = document.getElementById('total-cost');
    if (totalCostElement) {
        totalCostElement.textContent = `${totalCost} ₽`;
    }
}

function renderDishes() {
    const categories = {
        soup: 'Выберите суп',
        'main-dish': 'Выберите главное блюдо',
        salad: 'Выберите салат',
        drink: 'Выберите напиток',
        dessert: 'Выберите десерт'       
    };

    const container = document.querySelector('#dishes-container');
    container.innerHTML = '';

    Object.keys(categories).forEach(category => {
        const section = document.createElement('section');
        const heading = document.createElement('h2');
        heading.textContent = categories[category];
        section.appendChild(heading);

        


        const dishContainer = document.createElement('div');
        dishContainer.className = 'lunch-dish-container';

        const sortedDishes = dishes
            .filter(dish => dish.category === category)
            .sort((a, b) => a.name.localeCompare(b.name));

        sortedDishes
            .filter(dish => dish.category === category)
            .forEach(dish => {
                const dishCard = document.createElement('div');
                dishCard.className = 'dish-card';

                dishCard.innerHTML = `
                    <img src="${dish.image}" alt="${dish.name}">
                    <p class="dish-cost">${dish.price}</p>
                    <p class="dish-title">${dish.name}</p>
                    <p class="dish-weight">${dish.weight} г</p>
                    <button class="select-dish-button">Добавить</button>
                `;

                dishCard.addEventListener('click', () => {
                    if (selectedDishes[category] === dish) return;
                    if (selectedDishes[category]) {
                        totalCost -= parseFloat(selectedDishes[category].price);
                    }

                    selectedDishes[category] = dish;
                    totalCost += parseFloat(dish.price);
                    updateTotalCost();
                    const categoryLabelId = `${category}-selected`;
                    const categoryLabel = document.querySelector(`#${categoryLabelId}`);
                    if (categoryLabel) {
                        categoryLabel.textContent = dish.name + ' ' + dish.price + ' ₽';
                    }
                });

                dishContainer.appendChild(dishCard);
            });

        section.appendChild(dishContainer);
        container.appendChild(section);
    });
}

document.addEventListener('DOMContentLoaded', renderDishes);