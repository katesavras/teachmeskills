/*
Задача
*/

// const data = [
//     {
//         firstName: "Kate",
//         lastName: "Kutcher",
//         age: 40,
//     },
//     {
//         firstName: "Sam",
//         lastName: "Pitt",
//         age: 54,
//     },
//     {
//         firstName: "Alex",
//         lastName: "Dakota",
//         age: 24,
//     },
// ];
//
// function askName(){
//     let result = "error"
//     let name = prompt("What is your name?");
//
//     for (let key in data) {
//         if (data[key].firstName.toLowerCase() === name.toLowerCase()) {
//            result = data[key];
//            break;
//         }
//     }
//     return result;
// }
// let findName = askName();
// console.log(findName)
//

/*
let user ={
    name: "John",
    surname: "Smith",

}
delete user.name;

console.log(user.surname = "Kate");
console.log(user)



function isEmpty(empty){
    for(let key in empty){
        return false
    }
    return true
}
console.log(isEmpty({}));
console.log(isEmpty({
    name: "Kate"
}));


function countSum(salaries){
    let sum = 0;
      for (let key in salaries){
          sum += salaries[key];
          if(sum === 0){
              return false;
          }
      }
    return sum;

}
console.log(countSum({
    John: 100,
    Ann: 160,
    Pete: 130
}));
console.log(countSum({}));
*/
/*function sumInput() {
    let arr = [];
    let sum = 0;
    while (true) {
        let number = prompt("Write number");
        if (number === null || number === "" || !isFinite(number)) {
            break;
        }

        arr.push(+number);
        sum = 0;
        for (let i = 0; i < arr.length; i++) {
            sum += arr[i];
        }
    }

    return sum;
}
let result = sumInput();
console.log(result);*/


/*let str = "Kate";
let num = 123;
let u = "123"*/

/*console.log(typeof str === "number");
console.log(typeof num === "number");
console.log( typeof u === "number");*/


/*console.log(parseInt(u))*/

function checks() {


        let surName = prompt("What is your surname?", "");
        let checkSurName = () => {
            while (surName === '' || surName === null) {
                surName = prompt("What is your surname?", "");
            }
        }
        checkSurName(surName);

    let yourName = prompt("What is your name?", "");
    let checkYourName = () => {
        while (yourName === '' || yourName === null) {
            yourName = prompt("What is your name?", "");

        }
    }
    checkYourName(yourName);


    let middleName = prompt("What is your  middle name?", "");
    let checkMiddleName = () => {
        while (middleName === '' || middleName === null) {
            middleName = prompt("What is your your   middle name?", "");

        }
    }
    checkMiddleName(middleName);
    let age = +prompt("What is your  age?", "");
        let checkAge = () => {

            while (isNaN(age)) {
                age = +prompt("What is your  age?", "");
            }
        }
       checkAge(age);


    const gender = confirm("Are your gender-man?") ? "man" : "woman";
    let retired;

    if ((gender === "man" && age >= 65) || (gender === "woman" && age >= 55)) {
        retired = "Yes";
    } else {
        retired = "No";
    }

    print(surName, yourName, middleName, age, gender, retired);
}

const print = (surName, yourName, middleName, age, gender, retired) => {
    alert(`ФИО:  ${surName} ${yourName} ${middleName},
           Возраст: ${age},
           Ваш пол: ${gender},
           Ваш возраст через 5 лет: ${age + 5},
           Вы на пенсии: ${retired},
   `);
}
checks();

