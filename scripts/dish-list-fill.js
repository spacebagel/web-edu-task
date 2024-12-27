let totalCost = 0;
const selectedDishes = { soup: null, 'main-dish': null, drink: null };

let selectedSubCategories = {
    soup: null,
    'main-dish': null,
    salad: null,
    drink: null,
    dessert: null
};

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

    const subcategories = {
        soup: ['рыбный', 'мясной', 'веганский'],
        'main-dish': ['рыбное', 'мясное', 'веганское'],
        salad: ['рыбный', 'мясной', 'веганский'],
        drink: ['холодный', 'горячий'],
        dessert: ['кусочек', 'половина', 'целый']
    };
    const categoryTrans = {
        рыбный: 'fish',
        мясной: 'meat',
        веганское: 'veg',
        рыбное: 'fish',
        мясное: 'meat',
        веганский: 'veg',
        кусочек: 'piece',
        половина: 'half',
        целый: 'full',
        холодный: 'ice',
        горячий: 'hot'
    };

    const container = document.querySelector('#dishes-container');
    container.innerHTML = '';

    Object.keys(categories).forEach(category => {
        const section = document.createElement('section');
        const heading = document.createElement('h2');
        heading.textContent = categories[category];
        section.appendChild(heading);

        const subCategoryContainer = document.createElement('div');
        subCategoryContainer.className = 'dish-subcategory-div';

        const dishSubCategories = subcategories[category];
        dishSubCategories.forEach(subCategory => {
            const subCategoryButton = document.createElement('button');
            subCategoryButton.className = 'dish-subcategory-button';
            subCategoryButton.id = `${category}-btn-${categoryTrans[subCategory]}`;
            subCategoryButton.textContent = subCategory;

            subCategoryButton.addEventListener('click', () => {
                let categoryName = subCategoryButton.id.substring(0, subCategoryButton.id.indexOf('-btn'));
                let subcategoryValue = subCategoryButton.id.substring(subCategoryButton.id.lastIndexOf('-') + 1);
                selectedSubCategories[categoryName] = subcategoryValue;

                if (subCategoryButton.classList.contains('active')) {
                    selectedSubCategories[categoryName] = null;
                    subCategoryButton.classList.remove('active');
                }
                else {
                    selectedSubCategories[categoryName] = subcategoryValue;
                    const buttonsInSection = section.querySelectorAll('.dish-subcategory-button');
                    buttonsInSection.forEach(button => {
                        button.classList.remove('active');
                    });

                    subCategoryButton.classList.add('active');
                }

                const dishContextContainer = section.querySelector('.lunch-dish-container');
                if (dishContextContainer) {
                    dishContextContainer.remove();
                }
                section.appendChild(updateContext(category));
            });

            subCategoryContainer.appendChild(subCategoryButton);
        });

        section.appendChild(subCategoryContainer);
        section.appendChild(updateContext(category));
        container.appendChild(section);
    });
}

function updateContext(category) {
    const dishContainer = document.createElement('div');
    dishContainer.className = 'lunch-dish-container';

    const sortedDishes = dishes
        .filter(dish => dish.category === category && (selectedSubCategories[category] == null ? true : dish.kind === selectedSubCategories[category]))
        .sort((a, b) => a.name.localeCompare(b.name));

    sortedDishes
        .forEach(dish => {
            const dishCard = document.createElement('div');
            dishCard.className = 'dish-card';

            dishCard.innerHTML = `
                <img src="${dish.image}" alt="${dish.name}">
                <p class="dish-cost">${dish.price}</p>
                <p class="dish-title">${dish.name}</p>
                <p class="dish-weight">${dish.weight}</p>
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

    return dishContainer;
}

document.addEventListener('DOMContentLoaded', renderDishes);
