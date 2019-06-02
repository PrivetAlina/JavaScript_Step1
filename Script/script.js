//1. Быки и коровы
//Картинки по запросу быки и коровы правила
//Задумано тайное число «3219». Результат: две «коровы» (две цифры: «2» и «3» — угаданы на неверных позициях) и один «бык» (одна цифра «1» угадана вплоть до позиции). Игроки делают попытки угадать по очереди. Побеждает тот, кто угадает число первым, при условии, что он не начинал игру.
//
//var goal = generate();
//function randomize (){
//    return Math.floor (Math.random() * 10);
//};
//
//function generate() {
//    let arr = [];
//    while (arr.length < 4) {
//        let arrItem = randomize ();
//        
//        if (arr.indexOf(arrItem) < 0 ){
//            // [0, 1, 2, 3] indexOf (5) === -1 если элемента нет - то вовзращает -1 всегад
//            arr.push (arrItem);
//            };
//        
//    };
//        
//    return arr;
//};
//
//function round (etl){
//    let bulls = 0;
//    let cows = 0;
//    let attempt = [...prompt ('Введите значение')];//'1234'=>['1','2','3','4']
//
//    for (let i = 0; i < 4; i++){
//        if(+attempt [i] === etl[i]) {
//            bulls ++;
//        } else if (etl.indexOf (+attempt [i]) >=0){ // проверяем, присутствует ли вообще в массиве
//            cows++;
//        }
//    }
//    console.log (`Ваш вариант: ${attempt}`);
//    console.log (`Быков ${bulls}, коровы ${cows}`);
//    
//    return (bulls === 4 ? false : true); 
//};
//
//
//function game(status, att) {
//    console.log (goal);
//    while (status){
//        if (att > 0){
//            status = round (goal);
//            status ? console.log (`Осталось ${att--} ходов`): console.log (`Игра выграна`);
//            if (!status){
//                return false;
//            }
//        } else {
//            status = false;
//            return false; // прерываем фу
//        }
//    }
//};
//
//
//game(true, 10);
//
////2. Кто хочет стать миллионером
//
//function game (arr) {
//    let play = true;
//    let round = 0;
//    
//    while (play) {
//        if (round < questions.length){
//            let question = generateQuestion(arr,round);
//            let answer = +prompt (`${question.qT} \n ${question.qA}`); 
//             
//            play = check (answer, round);
//
//            round++;
//        }else {
//            play = false;
//        }
//    }
//};
//function check (ans, rnd){
//    if (ans === questions[rnd].correct){
//        alert ('все ок, продолжаем');
//        return (true);
//        
//    } 
//    else {
//        alert('Неправильно. Конец.')
//        return (false);
//    }
//}
//
//
//function generateQuestion (arr, rnd) {
//    let answers = '';
//    for (let i = 0; i < 4; i++) {
//        answers += `${i + 1} - ${arr [rnd].answers [i]} \n`;//\n - перенос каретки
//    }
//    let text = arr[rnd].text;
//    let correct = arr [rnd].correct - 1;
//    
//    return {
//				qT: text,
//				qC: correct,
//				qA: answers
//			}
//};
//game (questions);
//
//
//


////6. Упростим задачу шахматной доски, создать просто доску 8 на 8, в которой будут черные и белые ячейки.
let board = document.createElement("div");
board.className = "board";

document.body.appendChild(board);
 
function createSquare (ClassName){
   let square = document.createElement('div');
    square.className = ClassName; 
    return square;
               
}
function letterGeneration (number){
    let letters = 'ABCDEFGH'
    return letters[number];
}

for (let i = 0; i<=9; i++) {  
    for (let j = 0; j<=9; j++) {   
        if (i==0 || i==9) {
            let lettersSquare = createSquare ('letterNumberSquare');
                if (j!=0 && j !=9) {
                lettersSquare.innerHTML =  letterGeneration (j-1);
            }
            board.appendChild (lettersSquare); 
        } else { 
            if (j==0 || j ==9) {
                let numbersSquare = createSquare ('letterNumberSquare');
                numbersSquare.innerHTML = i;
                board.appendChild (numbersSquare);
            } else {    
                if ((i + j) % 2 == 0) {
                    board.appendChild (createSquare ('whiteSquare'));
                } else {
                    board.appendChild (createSquare ('blackSquare'));
                };  
            };
        };
    };
};

//2. Сделать генерацию корзины динамической: верстка корзины не должна находиться в HTML-структуре. Там должен быть только div, в который будет вставляться корзина, сгенерированная на базе JS:
//Пустая корзина должна выводить строку «Корзина пуста»;
//Наполненная должна выводить «В корзине: n товаров на сумму m рублей».

let basketImg = document.createElement("img");
basketImg.src='Images/trash.png';
basketImg.className = 'basketImg';
document.body.appendChild (basketImg);

var titles = ['Single Thruster 2014', 'Freestyle Wave FSW', 'The White Collection SURFBOARD 2014','OG SCALLOP SOLID','STRIPE 19 QS','YOKE 19 QS'];
var prices = [865, 770, 1580.7,765, 230.5, 1130.7];
var currencies = ['€','€','€','€','€','€'];     
var basketProd = [0,2];
var basketQuan = [3,4];

var product = {
	     creatProductItem: function (tit, pric, curr) {
	            for (let i = 0; i < tit.length; i++) {
					let newItem = {
					    title: tit [i],
					    price: pric [i],
					    currency: curr [i]
	                }
					product.items.push (newItem);
					}
				},
	    items: []  
	}
	
var basket = {
     addToBasket: function (addProd,quan) {
         for (let i = 0; i < quan.length; i++) {
             let j=addProd[i]
	    this.addedProduct.push (product.items[j]),
	    this.quantity.push (quan [i])
	}
},
	
    countBasketPrice: function (prodArr, quanArr) {
        let sum = 0;
        for (let i = 0; i < prodArr.length; i++) {
            sum += (prodArr[i].price * quanArr[i]);
        }
        return sum;
        },
	   addedProduct: [],
	   quantity: [],
	}

product.creatProductItem (titles, prices, currencies);
basket.addToBasket (basketProd,basketQuan);


let basketStatus = document.createElement("div");
basketStatus.className = 'basketStatusText';
if (basket.addedProduct == 0) {
    basketStatus.innerHTML = 'Корзина пока пуста'; 
    
} else {
    basketStatus.innerHTML = (`В корзине ${basket.addedProduct.length} товара на сумму ${basket.countBasketPrice (basket.addedProduct, basket.quantity)}€`);  
}
document.body.appendChild (basketStatus);


