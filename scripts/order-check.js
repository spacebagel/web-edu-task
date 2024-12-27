document.getElementById('order-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const soup = document.getElementById('soup-selected').innerText;
    const mainDish = document.getElementById('main-dish-selected').innerText;
    const salad = document.getElementById('salad-selected').innerText;
    const drink = document.getElementById('drink-selected').innerText;
    const dessert = document.getElementById('dessert-selected').innerText;

    let notificationText = '';
    let validOrder = true;

    const emptyDish = 'Блюдо не выбрано';

    if (soup === emptyDish && mainDish === emptyDish && salad === emptyDish && drink === emptyDish && dessert === emptyDish) {
        notificationText = 'Ничего не выбрано. Выберите блюда для заказа';
        validOrder = false;
    } 
    else if (drink === emptyDish && (mainDish !== emptyDish || (salad !== emptyDish && soup !== emptyDish))) {
        notificationText = 'Выберите напиток';
        validOrder = false;
    } 
    else if (soup !== emptyDish && (mainDish === emptyDish && salad === emptyDish)) {
        notificationText = 'Выберите главное блюдо/салат/стартер';
        validOrder = false;
    } 
    else if ((salad !== emptyDish && soup === emptyDish) && mainDish === emptyDish) {
        notificationText = 'Выберите суп или главное блюдо';
        validOrder = false;
    } 
    else if ((dessert !== emptyDish || drink !== emptyDish) && (mainDish === emptyDish)) {
        notificationText = 'Выберите главное блюдо';
        validOrder = false;
    }

    if (!validOrder) {
        showNotification(notificationText);
    } 
    else {
        document.getElementById('soup-selected-input').value = selectedDishes.soup ? selectedDishes.soup.name : '';
        document.getElementById('main-dish-selected-input').value = selectedDishes['main-dish'] ? selectedDishes['main-dish'].name : '';
        document.getElementById('salad-selected-input').value = selectedDishes.salad ? selectedDishes.salad.name : '';
        document.getElementById('drink-selected-input').value = selectedDishes.drink ? selectedDishes.drink.name : '';
        document.getElementById('dessert-selected-input').value = selectedDishes.dessert ? selectedDishes.dessert.name : '';
        this.submit();
    }
});

function showNotification(message) {
    const notification = document.createElement('div');
    notification.classList.add('notification');
    notification.innerHTML = `
        <div class="notification-content">
            <p>${message}</p>
            <button class="close-btn">Окей 👌</button>
        </div>
    `;
    document.body.appendChild(notification);

    notification.querySelector('.close-btn').addEventListener('click', function () {
        notification.remove();
    });
}