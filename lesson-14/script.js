// "use strict"
//
// alert("Я JavaScript!");
//
//
//
//  let name = "Джон";
//  let admin = name;
// alert( admin );
//
// let ourPlanet;
// let userCurrent;
//
// let userName = prompt("What is your name?", "Name");
// alert(userName);
//
//
// let age = 15;
//  if (age>=14 && age<=90){
//   alert(age)
//  }
//
// if (-1 || 0) alert( 'first' );
// if (-1 && 0) alert( 'second' );
// if (null || -1 && 1) alert( 'third' );
//
// let userName = prompt("Ваш логин?", '');
// let password;
// if (userName === "Админ") {
//     password = prompt("Ваш пароль?", '');
//     if (password === "Я главный") {
//         alert("Здравствуйте!")
//     } else {
//         alert("Неверный пароль")
//     }
// } else if (userName == '' || userName == null) {
//     alert( 'Отменено' )
// } else {
//     alert("Я вас не знаю");
// }
//
// let result;
// let a =3;
// let b =5;
// if (a + b < 4) {
//     result = 'Мало';
// } else {
//     result = 'Много';
// }

//
// (a + b < 4) ? result = 'Мало': result = 'Много';
// alert(result);

// let i = 3;
// while (i){
//     console.log(i);
//     i--;
// }
//
// let i = 0;
//
// do{
//     console.log(i);
//     i++;
// } while (i<3);

// for(let i= 0; i<3 ; i++){
//     console.log(i);
// }
//
// while(true){
//     let value = +prompt("Введите число", '');
//     if (!value) break;
//     sum += value
// }
/*console.log(sum);
for(let i= 0; i<10 ; i++){
    if(i % 2 === 0)continue;
    console.log(i);
}*/
/*let a = 2+2;
switch (a){
    case 3:
        console.log("Маловато");
        break;
    case 4:
        console.log("гуд");
        break;
    case 5:
        console.log("Перебор");
        break;
    default:
        console.log("не норм");

}*/
/*let surName = prompt("What is your surname?", "");
while(surName === '' || surName === null){
    surName = prompt("What is your surname?", "") ;
}

let yourName = prompt("What is your name?", "");
while(yourName === '' || yourName === null){
    yourName = prompt("What is your name?", "") ;

}

let middleName = prompt("What is your  middle name?", "");
while(middleName === '' ||  middleName === null){
    middleName = prompt("What is your your   middle name?", "") ;

}
let age = +prompt("What is your  age?", "");
while(isNaN(age)) {
     age = +prompt("What is your  age?", "");
}

    const gender = confirm("Are your gender-man?")?"man":"woman";
    let retired;



     if((gender === "man" && age >= 65) || (gender === "woman" && age>=55)){
        retired = "Yes";
     }else{
         retired = "No";
     }


alert (`ФИО:  ${surName} ${yourName} ${middleName},
           Возраст: ${age},
           Ваш пол: ${gender},
           Ваш возраст через 5 лет: ${age+5},
           Вы на пенсии: ${retired},
   `);*/

/*

     let str = prompt("String?", "");
     let counts = [];
     function count(){
      counts = split [s/[уеёыаоэяию]//g]
        return alert(counts.length);
     }
    count()
console.log(count())*/

//
// let numbers;
// do{
//   numbers  = +prompt("Введите число больше 100", "");
// } while (numbers <= 100 ||  numbers === null);


// for (let i = 1; i<=10; i++){
//     if (i / i ){
//         alert (i)
//     }
// }

/*
function checkAge(age) {
    if (age > 18) {
        return true;
    } else {
        return confirm('Родители разрешили?');
    }
}
console.log(checkAge(30));
*/

// function checkAge(age) {
//     return(age > 18)?true:confirm('Родители разрешили?');
// }
// console.log(checkAge(30));

// function checkAge(age) {
//     return (age > 18) || confirm('Родители разрешили?');
//
// }
// console.log(checkAge(15));


// function min(a, b) {
//     if (a>b){
//         return a;
//     }
//        return b;
// }
// console.log(min(15, 3));
//
// function min(a, b) {
//   return (a>b)?a:b;
// }
// console.log(min(15, 60));

// let a = prompt("a?", '');
// let b = prompt("b?", '');
//
// if (b < 1) {
//     alert(`Степень ${b} не поддерживается, используйте натуральное число`);
// } else {
//     alert( pon(a, b) );
// }
// function pon(a, b) {
//    return a**b;
// }
// console.log(pon(3, 2));


/*
function getAge(question, yes, no){
    if(question){
        yes()
    }else{
        no()
    }
}
console.log (getAge(confirm("are you 18?"), function (){alert("watch")}, function (){alert("grow")}));
*/

/*
function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
}

ask(
    "Вы согласны?",
    function() { alert("Вы согласились."); },
    function() { alert("Вы отменили выполнение."); }
);
*/

/*
let ask = (question, yes, no) => (confirm(question))? yes() : no();

ask(
    "Вы согласны?",
    () => alert("Вы согласились."),
    () => alert("Вы отменили выполнение.")
)*/

//
// function count(){
//     let str = prompt("Введите строку", "");
//     let result;
//       result = str.match(/[аеёиоуыэюя]/gi);
//  return alert (result);
//
// }
// count();


// const user ={
//     firstName: "Jon",
//     lastName: "Doe",
//     age: 19,
//     pet: {
//         type: "Rabbit",
//     }
// }

// console.log(user.age)
// console.log(user.pet.type)

// for ( let key in user){
//  console.log(user[key])
// }

/*
const numbers = [1,2,3,4,5]
let n2 = numbers.push(4); //length
let n3 = numbers.unshift(0); //length

let n4 = numbers.pop(); // delete element
let n5 = numbers.shift();// delete element


console.log(n2);
console.log(n3);
console.log(n4);
console.log(n5);*/


// function logArrayElements(element, index, array) {
//     console.log(element.age)
//     console.log(array[index].age)
// }

// Notice that index 2 is skipped, since there is no item at
// that position in the array...
// data.forEach(logArrayElements)
//
// function pr() {
// let ask =+prompt("Our age?", " ");
// data.forEach(element => console.log(element.age));
// for (let obj in data.forEach){
//     console.log(obj.age)
// }
// console.log()
// let ask = 40;
// for (let key in data) {
//     console.log(key.age)
// let user = key.age;
// if (user === ask)
//     console.log(data[key]);
// }
// console.log("Ошибка")
// }

// pr();
const data = [
    {
        firstName: "Kate",
        lastName: "Kutcher",
        age: 40,
    },
    {
        firstName: "Sam",
        lastName: "Pitt",
        age: 54,
    },
    {
        firstName: "Alex",
        lastName: "Dakota",
        age: 24,
    },
];
function name(names){
    for (let key in data) {
        if (data[key].firstName.toLowerCase() === names.toLowerCase()) {
            return data[key];
        }
    }
    return "error"
}
console.log (name("Kate"));
console.log (name("Sam"));
console.log (name("Alex"));
console.log (name("kate"));
console.log (name("SAM"));
console.log (name("ALeX"));
console.log (name("SAM"));
console.log (name("Tom"));
console.log (name("Anna"));






