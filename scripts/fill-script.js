function fiilTable() {
    var table = document.querySelector('#dish-table');
    
    var dish_data = [
        [1, 'Лазанья', 185, 385],
        [2, 'Том Ям с креветками', 161, 365],
        [3, 'Норвежский суп', 144, 270],
        [4, 'Жареная картошка с грибами', 132, 150],
        [5, 'Котлеты из курицы с картофельным пюре', 128, 225]
    ]

    for (var i = 0; i < 5; i++)
    {
        var tr = document.createElement('tr');
        for (var j = 0; j < 4; j++)
        {
            var td = document.createElement('td');
            td.textContent = dish_data[i][j];
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
}