
//1. Есть кнопка button рядом с ней есть текст (Hello) необходимо при нажатии на кнопку поменять текст кнопки на (Привет)

//2. Есть кнопка button рядом с ней есть тэг <b></b> (Hello) необходимо при нажатии на кнопку поменять тэг на <h3></h3>

let helloButton = document.getElementById('helloButton');

let second = document.querySelector('.secondHello');

helloButton.onclick = function () {
     helloButton.innerHTML = ('Привет!');
        second.innerHTML = ('<h3>Hello! Big second task! </h3>');
};

//3. Дан код 
//<h2>Заголовок.</h2>
//<ul>
//<li>list</li>
//<li>list</li>
//<li>list</li>
//<li>list</li>
//</ul>
//Поменяйте содержимое списка на текс list их порядковый номер в коде.

let third = document.querySelectorAll('li.third_task');
for (var i = 0; i < third.length; i++) {
    third[i].innerHTML = i;
};



//4. Создадим калькулятор 


let sum = document.getElementById('sum');
let minus = document.getElementById('minus');
let multi = document.getElementById('multi');
let division = document.getElementById('division');
let result = document.getElementById('result');
let firstNumber = document.getElementById('firstNumber');
let secondNumber = document.getElementById('secondNumber');

sum.onclick = function () {
     result.innerHTML = +firstNumber.value + +secondNumber.value;
};
minus.onclick = function () {
     result.innerHTML = +firstNumber.value - +secondNumber.value;
};

multi.onclick = function () {
     result.innerHTML = +firstNumber.value * +secondNumber.value;
};

division.onclick = function () {
    if (secondNumber.value == 0) {
        result.innerHTML = ('Делить на 0 нельзя')
    } else {
     result.innerHTML = +firstNumber.value / +secondNumber.value;
    }
};


//5. Дан элемент ul, а в нем li #list. Вставьте перед элементом #list новую li с текстом 'Первый элемент списка'
var arrList = document.getElementById('listItems').getElementsByTagName('li');
var newItem = document.createElement("li");
newItem.innerHTML = 'Первый элемент списка';
listItems.insertBefore(newItem,arrList[0]);    

// Не успела остальное :( 

//6. Упростим задачу шахматной доски, создать просто доску 8 на 8, в которой будут черные и белые ячейки.

//3)1)** Создать функцию, генерирующую шахматную доску. При этом можно использовать любые html-теги по своему желанию. Доска должна быть разлинована соответствующим образом, т.е.
//чередовать черные и белые ячейки. Строки должны нумероваться числами от 1 до 8, столбцы
//– латинскими буквами A, B, C, D, E, F, G, H.
//2) *Заполнить созданную таблицу буквами, отвечающими за шахматную фигуру, например К-
//король, Ф – ферзь и тп., причем все фигуры должны стоять на своих местах и быть
//соответственно черными и белыми.
//3) * Заменить буквы, обозначающие фигуры картинками.