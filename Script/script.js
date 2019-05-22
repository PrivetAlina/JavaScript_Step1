//        1.С помощью цикла while вывести все простые числа в промежутке от 0 до 100.
            console.log (`Задание 1.`);
            function normalCheck (number) { 
                for (var i = 2; i <number; i++) {
                    if (number % i ==0) {
                        return false;
                    } 
                }
                return true;
              }

            var i = 2;
            while ( i <= 100) {
                if (normalCheck(i) == true) {
                    console.log (`${i}`);
                }
                 i++;
            }

//        2. С этого урока начинаем работать с функционалом интернет-магазина. Предположим, есть сущность корзины. Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров. 
//       
            // Итерирование массива 
            
            var basket = [];
            for(var a=0; a < 3; a++) 
            {
            basket[a] = +prompt(`Введите стоимость ${a+1}/3 товара в корзине:`); // Заполняем массив

            }

            var sum1 = 0;    
            for (var b = 0; b < basket.length; b++){
                sum1 = sum1 + basket[b];
            }
            console.log (`Задание 2.1. Товаров в корзине на сумму: ${sum1}`);
            
            var sum2 = 0;
            basket.forEach (function (item){
                sum2 = sum2 + item;      
            })
            console.log (`Задание 2.2. Товаров в корзине на сумму: ${sum2}`);

            var sum3 = 0; 
            for (var c of basket){
                sum3 = sum3 + c;
            }
            console.log (`Задание 2.3. Товаров в корзине на сумму: ${sum3}`);
            
//    3. * Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла. 
            console.log (`Задание 3.`);
            for (var d=0; d<10; console.log (d++));
            
//    4. Нарисовать пирамиду с 20 рядами с помощью console.log.
            var piramid =' ';
            for (var e=0; e<20; e++) {
                var piramid = piramid + '*';
                console.log (`${piramid}`)
            };