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
let sortBirthday = document.querySelector('#sortBirthday');
let sortDate = document.querySelector('#sortDate');


let arr = [];
let counter = 0;
btnAdd.addEventListener("click", () => {
    arr.push({name: name.value, birthday: birthday.value, day: day.value, salary: salary.value, id: counter});
    console.log(arr);
    createTable(arr);
    form.reset();
})
let createTable = (array) => {
    tbody.innerHTML = " ";
    array.forEach((element) => {
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
    counter++;
}

btnDelete.addEventListener("click", () => {
    let workers = [...document.querySelectorAll('input[name = "worker"]:checked')];
    workers.forEach((item) => {
        let trParent = item.parentElement.parentElement;
        console.log(trParent)
        trParent.remove();
        removeItemById(trParent.id)
    })
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
    let employers = [...document.querySelectorAll('input[name = "worker"]:checked')];
    employers.forEach((item) => {
        let checkSalary = item.parentElement.parentElement.lastElementChild.textContent;
        sum += Number(checkSalary);
        console.log(sum);
    })
    sumSalary.innerHTML = `${sum}`;
})

sortSalary.addEventListener("click", () => {
    let sortArrSalary = arr.sort((prev, next) => prev.salary - next.salary);
    createTable(sortArrSalary);
})

sortBirthday.addEventListener("click", () => {
    let sortArrBirthday = arr.sort((prev, next) => prev.birthday - next.birthday);
    createTable(sortArrBirthday);
})

sortDate.addEventListener("click", () => {
    let sortArrDate = arr.sort((a, b) => new Date(a.day) - new Date(b.day))
    createTable(sortArrDate);

})

