// const exampleAttr = document.querySelector("#exampleAttr")
//
// exampleAttr.hasAttribute("id");
// exampleAttr.getAttribute("id");
// exampleAttr.setAttribute("class", "newClass");

// console.log(exampleAttr.dataset.desk);
// console.log(exampleAttr.getBoundingClientRect());
// console.log(exampleAttr.offsetParent);
// console.log(exampleAttr.offsetLeft);
// console.log(exampleAttr.offsetWidth);
// console.log(exampleAttr.clientLeft);
// console.log(exampleAttr.clientWidth);
// console.log(exampleAttr.scrollWidth);
// console.log(exampleAttr.scrollTop);


// const btn = document.querySelector("#btn");
// const block = document.querySelector("#block");
// const y = document.querySelector("#y");
// const x = document.querySelector("#x");
//
// btn.addEventListener("click", () => {
//    let calc = x.value - y.value;
//     block.innerHTML += `
//      <div class="card"  style="left:${y.value}%; width:${calc}%;"></div>`
// })


// let tooltipElem;
//
// document.onmouseover = function(event) {
//     let target = event.target;
//
//     // если у нас есть подсказка...
//     let tooltipHtml = target.dataset.tooltip;
//     if (!tooltipHtml) return;
//
//     // ...создадим элемент для подсказки
//
//     tooltipElem = document.createElement('div');
//     tooltipElem.className = 'tooltip';
//     tooltipElem.innerHTML = tooltipHtml;
//     document.body.append(tooltipElem);
//
//     // спозиционируем его сверху от аннотируемого элемента (top-center)
//     let coords = target.getBoundingClientRect();
//
//     let left = coords.left + (target.offsetWidth - tooltipElem.offsetWidth) / 2;
//     if (left < 0) left = 0; // не заезжать за левый край окна
//
//     let top = coords.top - tooltipElem.offsetHeight - 5;
//     if (top < 0) { // если подсказка не помещается сверху, то отображать её снизу
//         top = coords.top + target.offsetHeight + 5;
//     }
//
//     tooltipElem.style.left = left + 'px';
//     tooltipElem.style.top = top + 'px';
// };
//
// document.onmouseout = function(e) {
//
//     if (tooltipElem) {
//         tooltipElem.remove();
//         tooltipElem = null;
//     }
//
// };

//
// let animal = {
//     eats: true,
//     walk() {
//         console.log("Animal walk");
//     }
// };
//
// let rabbit = {
//     jumps: true,
//     __proto__: animal,
// };
// let longEar = {
//     earLength: 10,
//     __proto__: rabbit,
// };
//
//
//
// // rabbit.__proto__ = animal;
// longEar.walk();
// console.log(longEar.jumps);
// console.log(longEar);

// let obj ={
//     0: "Hello",
//     1: "world",
//     length: 2,
// };
//
// console.log(obj);
//
//
// obj.join =Array.prototype.join;
// obj.__proto__ = Array.prototype;
//
// console.log(obj.join(","))
const form = document.querySelector("#form");
const add = document.querySelector("#addUserBtn");
const data = [];

add.addEventListener("click", (event) => {
    event.preventDefault();
    const name = document.querySelector("#name").value;
    const age = document.querySelector("#age").value;
    const email = document.querySelector("#email").value;

    data.push(new User(name, age, email));
    console.log(data)
    data.forEach((item) => item.sayHi());
    form.reset();
})

class User {
    constructor(name, age, email) {
        this.name = name;
        this.age = age;
        this.email = email;

    }

    sayHi() {
        console.log(this.name);
    }
}


class Animal {
    constructor(name) {
        this.speed = 0;
        this.name = name;
    }
    run(speed){
        this.speed = speed;
        console.log(`${this.name} бежит сщ скоростью ${this.speed}`)
    }
    stop(){
        this.speed = 0;
        console.log(`${this.name} стоит`);
    }

}

class Rabbit extends Animal {
    hide() {
        console.log(`${this.name} прячится`);
    }

    stop(){
        super.stop();
        this.hide();
    }
}
let rabbit = new Rabbit ("Белый кролик");

rabbit.run(5);
rabbit.hide();
rabbit.stop();


// class Fish {
//     constructor(habitat, length) {
//         this.habitat = habitat;
//         this.length = length;
//     }
//
//     renderProperties(element) {
//        element.innerHTML = JSON.stringify((this));
//     }
// }
// class Trout extends Fish {
//     constructor(habitat, length, variety) {
//         super(habitat, length);
//         this.variety = variety;
//     }
//
//     renderPropertiesSuper(element){
//        element.className = "green"
//         super.renderPropertiesSuper(element)
//     }
// }
// let grouper = new Fish("saltwater", "26in");
// console.log(grouper);
// grouper.renderProperties(document.getElementById("grouper"));
//
// let rainbowTrout = new Trout("freshwater", "14in", "rainbow");
// console.log(rainbowTrout);
// //invoke function from parent prototype
// rainbowTrout.renderProperties(document.getElementById("rainbowTrout"));
// //invoke function from child's prototype
// rainbowTrout.renderPropertiesWithSuper(
//     document.getElementById("rainbowTroutParent")
// );

class Fish {
    constructor(habitat, length) {
        this.habitat = habitat;
        this.length = length;
    }

    renderProperties(element) {
        element.innerHTML = JSON.stringify(this);
    }
}

class Trout extends Fish {
    constructor(habitat, length, variety) {
        super(habitat, length);
        this.variety = variety;
    }

    renderPropertiesWithSuper(element) {
        element.className = "green";
        super.renderProperties(element);
    }
}

let grouper = new Fish("saltwater", "26in");
console.log(grouper);
grouper.renderProperties(document.getElementById("grouper"));

let rainbowTrout = new Trout("freshwater", "14in", "rainbow");
console.log(rainbowTrout);
//invoke function from parent prototype
rainbowTrout.renderProperties(document.getElementById("rainbowTrout"));
//invoke function from child's prototype
rainbowTrout.renderPropertiesWithSuper(
    document.getElementById("rainbowTroutParent")
);