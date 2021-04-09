// var str = 'fgfggg';//[0][1][2][3][4][5]


// console.log(str.charAt(0))//f
// console.log(str[0])//f
// console.log(str[str.length - 1])//g last latter
//
// console.log(str[6])//undefined
// console.log(str.charAt(6) )//' '
//
// console.log(str.length)//6
//
// console.log(str.includes('fg'))//true
// console.log(str.indexOf('fg'))//0
// for(let i of  str)
// console.log(i)//f,g,f...
//
// console.log(str.slice(0, 3))//fgf
// console.log(str.slice(1))//gfggg
// console.log(str.slice(1))//gfggg
// console.log(str.substr(0, 3) )//fgf


// str[2] = 'q'
// console.log(str)//'fgfggg'
// console.log(str[2])//f

// Строка в js — immutable, то есть из нее можно прочитать символ, а вот записать нет.
// Как мы знаем из главы Операторы сравнения, строки сравниваются посимвольно в алфавитном порядке.

// var str = "How can mirrors be real if our eyes aren't real";
// function toUpCase(str){
//   return  str.split(" ").map(item => item[0].toUpperCase()+item.slice(1)).join(" ")
// }console.log(toUpCase(str))


//карировние замыкание
// function add(x){
//   return function (y){
//     return x+y;
//   }
// }
//
// const addTree = add(3)
// console.log(addTree(4))
// console.log(addTree(8))

// const add2 = x => y => x + y;
// const addTwo = add2(2)
// console.log(addTwo(5))


function sum(x){
  return function (y){
    return function (z){
      return x+y+z;
    }
  }
}
// const addTree = add(3)
// console.log(addTree(2)(5))
// console.log(sum(3)(2)(5))
