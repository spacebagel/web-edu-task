var dishes = [
    {
        keyword: 'kimchi',
        name: 'Суп кимчи',
        price: 450,
        category: 'soup',
        weight: 330,
        image: '../imgs/dishes/soup-1.jpg',
        kind: 'meat'
    },
    {
        keyword: 'bachchi',
        name: 'Суп бахчи',
        price: 550,
        category: 'soup',
        weight: 320,
        image: '../imgs/dishes/soup-2.jpeg',
        kind: 'veg'
    },
    {
        keyword: 'harchi',
        name: 'Суп харчи',
        price: 600,
        category: 'soup',
        weight: 330,
        image: '../imgs/dishes/soup-3.jpeg',
        kind: 'fish'
    },
    {
        keyword: 'chicken-soup',
        name: 'Куриная лапша',
        price: 300,
        category: 'soup',
        weight: 200,
        image: '../imgs/dishes/soup-4.jpeg',
        kind: 'meat'
    },
    {
        keyword: 'cheese-soup',
        name: 'Пенопласт',
        price: 300,
        category: 'soup',
        weight: 200,
        image: '../imgs/dishes/soup-5.jpeg',
        kind: 'veg'
    },
    {
        keyword: 'red-fish-soup',
        name: 'Филейный',
        price: 800,
        category: 'soup',
        weight: 200,
        image: '../imgs/dishes/soup-6.jpeg',
        kind: 'fish'
    },
    // --------------
    {
        keyword: 'wok-tai',
        name: 'Wok Тайская креветка',
        price: 550,
        category: 'main-dish',
        weight: 330,
        image: '../imgs/dishes/main-dish-1.jpeg',
        kind: 'fish'
    },
    {
        keyword: 'wok-pan',
        name: 'Wok паназиатский',
        price: 300,
        category: 'main-dish',
        weight: 310,
        image: '../imgs/dishes/main-dish-2.jpeg',
        kind: 'fish'
    },
    {
        keyword: 'wok-classic',
        name: 'Wok классический',
        price: 445,
        category: 'main-dish',
        weight: 330,
        image: '../imgs/dishes/main-dish-3.jpeg',
        kind: 'meat'
    },
    {
        keyword: 'mashroom-meat',
        name: 'Wok грибной с курицей',
        price: 300,
        category: 'main-dish',
        weight: 310,
        image: '../imgs/dishes/main-dish-4.jpeg',
        kind: 'meat'
    },
    {
        keyword: 'mashroom-wok',
        name: 'Wok грибной',
        price: 300,
        category: 'main-dish',
        weight: 310,
        image: '../imgs/dishes/main-dish-5.jpeg',
        kind: 'veg'
    },
    {
        keyword: 'perez-wok',
        name: 'Wok перец',
        price: 300,
        category: 'main-dish',
        weight: 310,
        image: '../imgs/dishes/main-dish-6.jpeg',
        kind: 'veg'
    },
    // --------------
    {
        keyword: 'dragon-blood',
        name: 'Кровь дракона',
        price: 700,
        category: 'drink',
        weight: 330,
        image: '../imgs/dishes/drink-1.jpeg',
        kind: 'ice'
    },
    {
        keyword: 'old-drink',
        name: 'Столетняя жижа',
        price: 800,
        category: 'drink',
        weight: 330,
        image: '../imgs/dishes/drink-2.jpeg',
        kind: 'ice'
    },
    {
        keyword: 'acetone-drink',
        name: 'Ацетон',
        price: 430,
        category: 'drink',
        weight: 330,
        image: '../imgs/dishes/drink-3.jpeg',
        kind: 'hot'
    },
    {
        keyword: 'orange-drink',
        name: 'Макакафанта',
        price: 300,
        category: 'drink',
        weight: 200,
        image: '../imgs/dishes/drink-4.jpeg',
        kind: 'ice'
    },
    {
        keyword: 'tea-drink',
        name: '8 заварка',
        price: 50,
        category: 'drink',
        weight: 200,
        image: '../imgs/dishes/drink-5.jpeg',
        kind: 'hot'
    },
    {
        keyword: 'general-hot-drink',
        name: 'Кипяток',
        price: 100,
        category: 'drink',
        weight: 200,
        image: '../imgs/dishes/drink-6.jpeg',
        kind: 'hot'
    },
    // --------------
    {
        keyword: 'yummy-roll',
        name: 'Кусок сочный',
        price: 150,
        category: 'dessert',
        weight: 100,
        image: '../imgs/dishes/dessert-1.jpg',
        kind: 'piece'
    },
    {
        keyword: 'force-roll',
        name: 'Кусок прочный',
        price: 150,
        category: 'dessert',
        weight: 100,
        image: '../imgs/dishes/dessert-2.jpg',
        kind: 'piece'
    },
    {
        keyword: 'yummy-half-nutt',
        name: 'Сладость с орехом',
        price: 350,
        category: 'dessert',
        weight: 250,
        image: '../imgs/dishes/dessert-2.jpg',
        kind: 'half'
    },
    {
        keyword: 'yummy-full',
        name: 'Вкусная тарелка',
        price: 350,
        category: 'dessert',
        weight: 250,
        image: '../imgs/dishes/dessert-3.jpg',
        kind: 'full'
    },
    {
        keyword: 'yummy-5',
        name: 'Кусок точный',
        price: 150,
        category: 'dessert',
        weight: 100,
        image: '../imgs/dishes/dessert-4.jpg',
        kind: 'piece'
    },
    {
        keyword: 'yummy-half-fruit',
        name: 'Сладость с фруктом',
        price: 350,
        category: 'dessert',
        weight: 250,
        image: '../imgs/dishes/dessert-5.jpg',
        kind: 'half'
    },
    // --------------
    {
        keyword: 'vitamin-salad',
        name: 'Витаминный',
        price: 200,
        category: 'salad',
        weight: 200,
        image: '../imgs/dishes/salad-1.jpg',
        kind: 'veg'
    },
    {
        keyword: 'chuka-salad',
        name: 'Салат Чука',
        price: 300,
        category: 'salad',
        weight: 200,
        image: '../imgs/dishes/salad-2.jpg',
        kind: 'veg'
    },
    {
        keyword: 'chicken-salad',
        name: 'Собери сам с курицей',
        price: 400,
        category: 'salad',
        weight: 200,
        image: '../imgs/dishes/salad-3.jpg',
        kind: 'meat'
    },
    {
        keyword: 'fish-salad',
        name: 'Собери сам с рыбой',
        price: 400,
        category: 'salad',
        weight: 200,
        image: '../imgs/dishes/salad-4.jpg',
        kind: 'fish'
    },
    {
        keyword: 'red-salad',
        name: 'Красный салат',
        price: 300,
        category: 'salad',
        weight: 200,
        image: '../imgs/dishes/salad-5.jpg',
        kind: 'veg'
    },
    {
        keyword: 'bomj-salad',
        name: 'Нищий салат',
        price: 100,
        category: 'salad',
        weight: 200,
        image: '../imgs/dishes/salad-6.jpg',
        kind: 'veg'
    }
];