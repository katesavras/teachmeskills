"use strict"

alert("Я JavaScript!");



 let name = "Джон";
 let admin = name;
alert( admin );

let ourPlanet;
let userCurrent;

let userName = prompt("What is your name?", "Name");
alert(userName);


let age = 15;
 if (age>=14 && age<=90){
  alert(age)
 }

if (-1 || 0) alert( 'first' );
if (-1 && 0) alert( 'second' );
if (null || -1 && 1) alert( 'third' );

let userName = prompt("Ваш логин?", '');
let password;
if (userName === "Админ") {
    password = prompt("Ваш пароль?", '');
    if (password === "Я главный") {
        alert("Здравствуйте!")
    } else {
        alert("Неверный пароль")
    }
} else if (userName == '' || userName == null) {
    alert( 'Отменено' )
} else {
    alert("Я вас не знаю");
}

let result;
let a =3;
let b =5;
if (a + b < 4) {
    result = 'Мало';
} else {
    result = 'Много';
}


(a + b < 4) ? result = 'Мало': result = 'Много';
alert(result);



