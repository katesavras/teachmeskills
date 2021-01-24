let form = document.querySelector('form');
let name = document.querySelector('#name');
let birthday = document.querySelector('#birthday');
let day = document.querySelector('#today');
let salary = document.querySelector('#salary');
let btnAdd = document.querySelector('#btnAdd');
let btnDelete = document.querySelector('#btnDelete');
let btnCount = document.querySelector('#btnCount');
let tbody = document.querySelector('.tab_body');
let numberEmploy = document.querySelector('#numberEmploy');
let sumSalary = document.querySelector('#sumSalary');
let sortSalary = document.querySelector('#sortSalary');
let sortDate = document.querySelector('#sortDate');


let arr = [];
let counter = 0;
btnAdd.addEventListener("click", () => {
    arr.push({name: name.value, birthday: birthday.value, day: day.value, salary: salary.value, id: counter});
    console.log(arr);
    createTable();
    form.reset();
})
let createTable = () => {
    tbody.innerHTML = " ";
    arr.forEach((element) => {
        tbody.innerHTML += `
     <tr class="string" id=${element.id}>
     <td><input type="checkbox" name="worker" class="worker"></td>
     <td>${element.name}</td>
     <td>${element.birthday}</td>
     <td>${element.day}</td>
     <td>${element.salary}</td>
     </tr>`;
    });
    numberEmploy.innerHTML = `${arr.length}`;

}

btnDelete.addEventListener("click", (event) => {
    let workers = [...document.querySelectorAll('input[name = "worker"]:checked')];
    console.log(workers);
    workers.forEach((item) => {
        let trParent = item.parentElement.parentElement;
        trParent.remove();
        removeItemById(trParent.id)
    })
    console.log(arr);
    numberEmploy.innerHTML = `${arr.length}`;
})
const removeItemById = (id) => {
    const index = arr.findIndex(
        (elem) => elem.id === (Number(id))
    );
    arr.splice(index, 1);
}

btnCount.addEventListener("click", () => {
    let sum = 0;
    let sal;
    for (let i = 0; i < arr.length; i++) {
        sal = arr[i].salary;
        sum += Number(sal);
        console.log(sum);
    }
    sumSalary.innerHTML = `${sum}`;
})

sortSalary.addEventListener("click", () => {
    let sortArr = [];
    for (let i = 0; i < arr.length; i++) {
        sortArr.push(arr[i].salary);
        sortArr.sort(function compareNumbers(a, b) {
            return a - b;
        });
        console.log(sortArr);
    }
})


sortDate.addEventListener("click", () => {
})