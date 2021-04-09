// immutable
// let a = 4;
// let b = a;
// b++;
// console.log(a)//1
// console.log(b)//2


// mutable
// let x = [1, 2, 3];
// let y = x;
// y.push(4)
// console.log(x)
// console.log(y)

//metods object on ptimitives
// создают обертку и можно применять методы как для объектов
// let name = "kate";
// let k = name.toUpperCase()
// console.log(k);
//
// let xr = ["k", "a", "t", "e"].join().toUpperCase().split(",");
// console.log(xr);


// let fiz =[0, 1];
// let buz = fiz;
//  buz[0] = "a";
// console.log(fiz);//["a", 1]
// console.log(buz);//["a", 1]
//
// let fiz =[0, 1];
// let buz = fiz;
// buz = ['a', 'b']
// console.log(fiz);//[0, 1]
// console.log(buz);//['a', 'b']


//
// console.log(false == "0");// 0 == 0 -true
// console.log(false == 0);// 0 == 0 -true
// console.log(false == "");//0 == 0 -true
// console.log(false == []);// 0 == 0 -true
// // [] вызывается ToPrimitive
// console.log([].valueOf())// []
// console.log([].toString())// "" => приведено к числу 0
//
// console.log("" == 0);// 0 ==0 -true
// console.log("" == []);// 0 == true
// console.log(0 == []);// 0 == true
// console.log(NaN === NaN);// false
// console.log(NaN == NaN);// 0 false
// console.log(null == null);// 0 == true
// console.log(null === null);// 0 == true
// console.log(null == undefined);// 0 == true
// console.log(null === undefined);// 0 == false

// замыкание это функция внутри которой есть еще одна функция.

// function getNumber(n){
//     return function curNumber(){
//          console.log( 5 * n);
//     }
// }
//
// const getTwo = getNumber(2);
// const getTree = getNumber(3)
// getTwo();
// getTree();

// пример this, - объект контекста исполнения, bind-опривязывает объект для контекста исполнения, вызываем сами,
//     call сам вызывается, apply сам вызывается, чуть-чуть другой синтаксис.
// const arr ={
//     name: "Kate",
//     age: 25,
//     getName: function (){
//         console.log(this.name)
//     },
//     getAge: function (){
//         console.log(this.age)
//     },
//
// }
// arr.getName();
// arr.getAge();
//
//
// const alex = {
//     name: "Alex",
//     age: 32,
//
//
// }
// arr.getName.bind(alex)();
// arr.getAge.bind(alex)();


//
//
// function bind(person){
//     return function (){
//         console.log (`Person: ${this.name}, ${this.age}, ${this.job}`)
//     }
// }
// const person1 = {name: "Alex", age: 32, job: "Piton",};
// const person2 ={name: "Kate", age: 25, job: "Java Script",};
//
//  const getUser1 = bind(person1);
//  const getUser2 = bind(person2);
//
// getUser1.bind(person1)();
// getUser2.bind(person2)();
//
// let b = 4;
//
// function call() {
//     if (b > 0) {
//         let a = 2;
//     }
//     console.log(a)
// }
//
// call();

//
// let array = [{name: "a", age: 53}, {name: "b", age: 43}, {name: "c", age: 50}, ];
// function sortArr(array){
//     array.sort(function (a, b){
//         return a.age - b.age
//     })
//  return (array[0].name)
// }
// sortArr(array);

// 1)
// Дан массив с разными типами данных
// Сделать так чтобы в нём остали сь одни числа
// умножить их на 2
// найти сумму
// Решение должно быть цепочкой (chainig)
// const arr = [1, 2, 3, "ads", "adss"].filter(num => !isNaN(num)).map(num => num*2).reduce((reducer, value) => reducer + value)
// console.log(arr)
// 2)
// What values will be in a, b, c, d and why?
//
// var obj = { outerWidth: 20 };
// function getWidth() {
//     return this.outerWidth;
// }
// getWidth();
 // var a = getWidth();//undefined
// var b = getWidth.apply(obj);//error
// var c = new getWidth();//getWidth {}
// var d = new (getWidth());//error
//
// console.log(a)


//
// 3)
// Чему будет равно аа и почему?
// aa = { name: 1 };
// bb = aa;
// bb.name = 2;
// console.log(aa) //объекты мутабельны


// // 4)
// // Что будет в консоли и почему?
// function A(item, n) {
//     item.a = 1;
//     n = 2;
// }
// const a = { a: 0 };
// const number = 1;
// A(a, number);
// console.log(a, number); //a =1; n=1

// // 5)
// // What will the code output and why?
// var x = 0;
// (function () {
//     var x = 3;
// })();
// console.log(x++);//0 - постфиксная форма возвращает старое значение
// console.log(x);// 1- и увеличивает на еденицу
// console.log(++x);// 2 - префиксная форма возвращает новое значение
// console.log(x);// 2  и увеличивает на еденицу


// 6)
// Что будет в консоли и почему?
// function bar(a, b) {
//     c = a + b;
// }
// bar(1, 2);
// console.log(c + 2);

//
// // 7)
// Что будет в консоли и почему?
// с = "some stirng";
// String.prototype.newMethod = .....;
