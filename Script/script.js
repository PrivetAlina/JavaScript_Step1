                
// 1. Написать функцию, преобразующую число в объект. Передавая на вход число от 0 до 999, надо получить на выходе объект, в котором в соответствующих свойствах описаны единицы, десятки и сотни. Например, для числа 245 надо получить следующий объект: {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}. Если число превышает 999, необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.                

var numberObj = {
        ones: 0,
        tens: 0,
        hundrets: 0
}
var max = 999;
var min = 0;
function createNumberObj (n) {
            if ( n >= min && n <= max) {
                numberObj.hundrets = n/100>>0;
                numberObj.tens = (n%100)/10>>0;
                numberObj.ones = (n%10);
            }
            else {
            console.log (`Число не попадает интервал [0..999]`);
            }
            return (console.log (numberObj))
        }
var currentNumber = + prompt ('Введите число'); 
createNumberObj (currentNumber);
     
//2. Продолжить работу с интернет-магазином:
//В прошлом домашнем задании вы реализовали корзину на базе массивов. Какими объектами можно заменить их элементы?
//Реализуйте такие объекты.
//Перенести функционал подсчета корзины на объектно-ориентированную базу.


var titles = ['Single Thruster 2014', 'Freestyle Wave FSW', 'The White Collection SURFBOARD 2014','OG SCALLOP SOLID','STRIPE 19 QS','YOKE 19 QS'];
var prices = [865, 770, 1580.7,765, 230.5, 1130.7];
var currencies = ['€','€','€','€','€','€'];        
var basketProd = [0,2];
var basketQuan = [3,4];

//* Подумать над глобальными сущностями. К примеру, сущность «Продукт» в интернет-магазине актуальна не только для корзины, но и для каталога. Стремиться нужно к тому, чтобы объект «Продукт» имел единую структуру для различных модулей сайта, но в разных местах давал возможность вызывать разные методы
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

console.log (product);
basket.addToBasket (basketProd,basketQuan);
console.log (basket);
console.log (basket.countBasketPrice (basket.addedProduct, basket.quantity));


