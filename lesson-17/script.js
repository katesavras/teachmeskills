// console.log (this);
//
// var name = "Jay";
// function foo(){
//
//     console.log (this.name);
// }
//
// foo();
//
//
// var obj = {
//     name: "Jay",
//     foo: foo,
// };
// obj.foo();
// console.log(obj);

//
// function Foo(name){
//     this.name =name;
// }
// var bar = new Foo("Jay");
// console.log(bar.name);


// function Person(name, age, gender, salary){
//     this.name = name;
//     this.age =age;
//     this.gender = gender;
//     this.salary = `${salary}$`
// }
// var jay = new Person ("Jay", 23, "M", 2000);
// var jane = new Person ("Jane", 83, "F", 200);
// var banek = new Person ("Banek", 123, "M", 20000);
//
// console.log(jay, jane, banek);

//
// function foo(){
//     console.log(this.name);
// }
//
// var object = {
//     name: "Jay"
// }
//
// foo.call(object);
//
// function foo(age) {
//     console.log(this.name);
//     console.log(age);
// }

// function foo(age) {
//     console.log(this.name);
//     console.log(age);
//     return this.name + " - " + age;
// }
//
// var obj = {
//     name: "Jay",
// }
//
// var bar = foo.bind(obj);
// var b = bar(3);
// console.log(b);
/*
class Person {
    constructor(age, gender) {
         this.age =age;
         this.gender = gender;
    }

    showAge(){
        return this.age
    }
}
const jay = new Person(23, 'F');
const showAge =document.getElementById("showAge");


showAge.addEventListener("click", () => {
  console.log( jay.showAge());
});*/

//
// let calculator = {
//     read() {
//          this.a = 3;
//          this.b = 2;
//     },
//     sum(){
//         return this.a + this.b;
//     },
//     mult(){
//         return this.b *this.a;
//     }
//
// }
//
// console.log(calculator.read());
// console.log(calculator.sum());
// console.log(calculator.mult());

// function Calculator(){
//      this.read = function (){
//          this.a = 3;
//          this.b = 5;
//     };
//     this.sum = function (){
//       return  this.a + this.b;
//     };
//     this.mul = function (){
//         return this.a * this.b;
//     }
// }
//
// let calculator = new Calculator();
//
// calculator.read();
//
// console.log( "Sum=" + calculator.sum() );
// console.log( "Mul=" + calculator.mul() );

//
// function Accumulator(startingValue){
//     this.read = function (){
//         this.num = 3;
//         this.value = this.num + startingValue
//         return  this.value;
//     }
// }
// let accumulator = new Accumulator(5); // начальное значение 1
//
// console.log (accumulator.read()); // прибавит ввод prompt к текущему значению
// console.log (Accumulator.name);

//
// const arr =[
//     {number: 1},
//     {number: 2},
//     {number: 3},
//     {number: 4},
//     {number: 5}
// ]
//
// const result = arr.reduce((acc, current) => acc + current.number, 0)
// console.log(result);


// let salaries = {
//     "John": 100,
//     "Pete": 300,
//     "Mary": 250
// };
// let newSalaries;
// function sumSalaries(obj){
//    newSalaries = Object.fromEntries(
//     Object.entries(salaries).
// )
// }
//
//
// alert( sumSalaries(salaries) );
//
// let salaries = {
//     "John": 100,
//     "Pete": 300,
//     "Mary": 250
// };
// let newSalaries;
// let sum = 0;
// function sumSalaries(obj){
//     newSalaries = Object.values(obj);
//     for (let i =0; i<newSalaries.length; i++){
//         sum += newSalaries[i];
//     }
//     console.log(sum)
//     return sum;
// }
//
//
// console.log(sumSalaries(salaries));

//
// let salaries = {
//     "John": 100,
//     "Pete": 300,
//     "Mary": 250
// };
//
// let sum = 0;
// function sumSalaries(obj){
//
//     for (let newSalaries of Object.values(obj)){
//         sum += newSalaries;
//     }
//     console.log(sum)
//     return sum;
// }
//
//
// console.log(sumSalaries(salaries));

//
// let salaries = {
//     "John": 100,
//     "Pete": 300,
//     "Mary": 250
// };
// function sumSalaries(salaries) {
//     return Object.values(salaries).reduce((a, b) => a + b, 120)
// }
// console.log(sumSalaries(salaries));


// let user = {
//     name: 'John',
//     age: 30,
//     ages: 40
// };
//
// function count(user){
//     return Object.values(user).length
// }
//
// console.log( count(user) );
//
// let user = {
//     name: "John",
//     years: 30
// };
// let {name, years, isAdmin = false} = user;
// console.log(name);
// console.log(years);
// console.log(isAdmin);

//
// let salaries = {
//     "John": 100,
//     "Pete": 300,
//     "Mary": 250
// };
// function topSalary(salaries){
//     let arr = Object.entries(salaries);
//     let [john, pete, mary] = arr;
//     let [name1, salary1] =john;
//     let [name2, salary2] =pete;
//     let [name3, salary3] =mary;
//     if(salary1>salary2 && salary1>salary3 ){
//         return name1;
//     }else if(salary2>salary1 && salary2>salary3){
//         return name2;
//     }else if(salary3>salary1 && salary3>salary2){
//         return name3;
//     }else{
//         return null;
//     }
// }
// console.log (topSalary(salaries));

// let salaries = {
//     "John": 100,
//     "Pete": 300,
//     "Mary": 250
// };
// function topSalary(salaries) {
//
//     let max = 0;
//     let maxName = null;
//
//     for(const [name, salary] of Object.entries(salaries)) {
//         if (max < salary) {
//             max = salary;
//             maxName = name;
//         }
//     }
//
//     return maxName;
// }
// console.log (topSalary(salaries));


// function sumTo(n) {
//     let sum = 0;
//     for (let i = 1; i <= n; i++ ){
//         console.log(i);
//         sum += i;
//     }
//     return sum;
// }
// console.log( sumTo(100) ); // 5050
//
// let str = "123 456 123 123";
// // console.log(str);
// console.log([...str]);
//
// console.log(Array.from(str));


// let num = [1, 2, 3, 4, 5];
// let sum = '';
// num.forEach(function (num){
//     console.log(num*2);
//    return  sum  += num*2;
// })
// console.log(sum);
// console.log(typeof sum);

//
// let num = [1, 2, 3, 4, 5];
// let sum = num.map(function (num){
//     console.log(num*2);
//     return num*2;
// })
// console.log(sum);
// console.log(typeof sum);
//
//
// class Storage {
//     constructor() {
//         this.drinkStorage = {};
//     }
//     addValue(key, value) {
//      this.drinkStorage[key] = value;
//      console.log(this.drinkStorage);
//
//      return this.drinkStorage;
//
//     }
//
//     getValue(key) {
//         const result = this.drinkStorage[key];
//         console.log(this.drinkStorage[key]);
//
//         if (result) {
//             console.log(result);
//             return result;
//         }else{
//             console.log(`${key} is empty`);
//             return false;
//         }
//     }
//
//     getKeys() {
//         console.log(Object.keys(this.drinkStorage))
//     }
//
//     deleteValue(key) {
//         if (this.drinkStorage[key]) {
//            delete this.drinkStorage[key];
//             console.log(true);
//             return true;
//         }else{
//             console.log(false);
//             return false;
//         }
//     }
//
//     reset() {
//         this.drinkStorage ={};
//     }
// }

// const drink = new Storage();
// drink.addValue('vodka', 'alco');
// drink.addValue('tea', 'green');
// drink.addValue('cola', 'black');
//
// drink.getValue("tea");
// drink.getKeys();
// drink.deleteValue("sf");
// drink.reset();
// console.log(drink);

// let user = {
//     name: "John",
//     years: 30
// };
// let clone = Object.assign({}, user);
// clone.name = "Kate"
// console.log(user.name);
// console.log(clone.name);

//
// function pow(x, n){
//    let result =1;
//    for( let i =0; i< n; i++){
//        result *= x;
//    }
//    return result;
// }


// function pow(x, n){
//   console.log("x", x, "n", n)
//     if (n == 1){
//         return x;
//
//     }else{
//         return x * pow(x, n-1);
//     }
// }
// console.log(pow (2,3))

//
// function makeAdder(x){
//     return function (y){
//         return x +y;
//     }
// }
//
// const add5 = makeAdder(5);
// const add10 = makeAdder(10);
// console.log(add5);
//
// console.log(add5(2));
// console.log(add10(2));

// document.body.style.backgroundColor = "red";
//
// const element = document.querySelector(".abc");
// const elements = document.querySelectorAll([...".abc"]);
// console.log(element);
// let uls = element.querySelector("ul");
// console.log(uls);
//
// const cub = document.getElementById("cub");
// console.log(cub);
//
// document.body.innerHTML = "<div>Rfss</div>";
// document.body.innerHTML += "<div>Rfss</div>";
// console.log (document.body.textContent);
// const showAge =document.getElementById("showAge");
// showAge.addEventListener('click', () =>
// {
//     const inputText = document.getElementById("inputText");
//     console.log(inputText.value);
// });