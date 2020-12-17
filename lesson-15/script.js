/*
Задача
*/

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

function askName(){
    let result = "error"
    let name = prompt("What is your name?");

    for (let key in data) {
        if (data[key].firstName.toLowerCase() === name.toLowerCase()) {
           result = data[key];
           break;
        }
    }
    return result;
}
let findName = askName();
console.log(findName)


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


