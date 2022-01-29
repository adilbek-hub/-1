/*
//Нам нужно перебрать список с именами и их превратить с массив объектов.
//Например в ниже у меня массив и некаторые элементы у меня пустые.
const names = [  //Это массив с именами                  
    "Adilbek", // Это называется итерации                      
    "", //пустой элемент            
    "Nura",
    "", //пустой элемент
    "Amantur",
    "", //пустой элемент
    "Bektur",
];

//Некоторые элементы у меня пустые. Я просто добавил чтобы показать такой набор 
//проверки если массиве элемент пустую как с ним быть.
//Как Массив превращять в объект 

function toObj (arr) { //Паскольку я превращяюсь массив в объект придумал такую функцию toObj, превращение к объекту и это функция принимает аргументам массив arr.
let arrOfObj = []; // И внутри обявляю такой переменную в рамках этой функции массив объектов arrOfObj.
// И начинаю перебор переданного массива. Паскольку мне надо обсолютно все, использую
//ЦИКЛ for of.
for (let item of arr) { // Берём из массива item из arr 
if (item) {  // И здесь делаю маленкую проверку, Эсли Итерация не пустая то наряю внутр if --
arrOfObj.push({name:item}); // я беру пустой массив arrOfObj, делаю push добавляю конец и добавляю туда объект {name:item}. Объект у каторого будет ключ name а в качестве item 
//Когда ЦИКЛ возмет и прайдется по всему массиву то есть код выполняет свою задачу

}
}
return arrOfObj; // И моя функция возвращяется arrOfObj 
}
console.log(toObj(names)); // Конце я вывожу консоле toObj и вывожу names. 

*/

/*
//Следующий нам нужно перебрать массив фильмов и из этого массива нужно было 
//передать последные три фильмы.

// Например ниже у меня массив фильмов.

const movies = [
    {
        title: "Titanic",
        director: "Kemeron",
        duration: 194,
    },
    {
        title: "Titanic",
        director: "Jon Favreau",
        duration: 120,
    },
    {
        title: "Spider Man",
        director: "Джон Уоттс",
        duration: 148,
    },
    {
        title: "Butterfly",
        director: "Михаэль Ноер",
        duration: 133,
    },
    {
        title: "Terminator",
        director: "	Джеймс Кэмерон",
        duration: 123,
    },

];

// Здесь агай сделал два фуnкции.
//1я функциянын түшүндүрмөсүнө токтолобуз
// 1я фукция это getLongMovies

function getLongMovies (arr) { //Это функция будет принимать массив 
let sorted = arr.sort((a, b) => b.duration - a.duration); //Сортировать в порядке 
return sorted.slice(0, 5);
}

function showMovies (arr) {
    for (let item of arr) {
        document.write(
            `title ${item.title}<br>
            director ${item.director}<br>
            duration ${item.duration}<br>
            ${"=" .repeat(20)}<br>`)
    }
}

const theLonggestMovies = getLongMovies(movies);
showMovies(theLonggestMovies);

*/


/*
// Тема ООП/OOP
// Называемый подход Factory function  
// Сделаем круг
// Как создаются объекты функции фабрика
function createCurcle(radius) { //создать радиус
    return {  //Это объект
        radius: radius,
        draw: function () {
            document.write(`Drowing curcle....R ${radius}`);
        },
    };
}

const curcle = createCurcle(1);
curcle.draw();

const curcle2 = createCurcle(2);
curcle2.draw();

*/

/*
// Называемый подход Constructor function 
function Curcle(radius) {
    this.radius = radius;
    this.draw = function() {
        document.write(`Drawing curcle....R${this.radius}`);
    };
}
const curcle = new Curcle(1);
Curcle.draw();
*/

/*
// Синтаксис ES 6ого
// Это опеределение слова через ключевое слова класс.
// Теперь что такое класс. Класс это обектно ориантированным програмировании назвается
// шоблон кода для создания объектов, то есть как мы делали фукции то для создании
// объектов мы должны описать некий шаблон по которому наши объекты потом
// экземпляры должны создаватся.
// Новым синтаксиса принято использовать ключовое слова класс потом придумываем названия.
class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    draw() {
        document.write(`Drawing curcle....R${this.radius}`);
    }
} 
const circle = new Circle(1);
circle.draw();

const circle2 = new Circle(10);
circle2.draw();

*/

// // Объектно ориентированным программировании есть наследование
// // И для наследование мы сейчас напишем другой еще более такой деманстративный класс.
// class user {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     sayName() {
//         document.write(`Hello my name is ${this.name}`)
//     }
//     sayAge() {
//         document.write(`I am a ${this.age}`)
//     }
// } 

//Отличия Админа от юзера Админа есть больше прав чем простого юзера.

// class admin extends user {
//     constructor()
// };


