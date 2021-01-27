let task = document.querySelector("#task");
let title = document.querySelector("#title");

let toDo = document.querySelector("#toDo");
let progress = document.querySelector("#progress");
let done = document.querySelector("#done");
let del = document.querySelector("#delete");

let submit = document.querySelector("#submit");
let form = document.querySelector("form")

let arr = [];
const arrDelete = [];
let counter = 0;

const status = {
    TODO: "todo",
    IN_PROGRESS: "in_progress",
    DONE: "done",
    DELETED: "deleted",
}


submit.addEventListener("click", () => {
    let card = {title: title.value, task: task.value, id: counter, status: status.TODO};
    arr.push(card);
    addCard(card);
    form.reset();
})

let addCard = (element) => {
    toDo.innerHTML = " ";
    toDo.innerHTML += `
     <div class="card" id=${element.id}>
     <p id="curTitle">${element.title}</p>
     <p id="curTask">${element.task}</p>
     <button id="editor">&#9998;</button>
     <button id="process">&#10004;</button>
     <button id="btnDel">&#10006;</button>
     </div>`
    counter++;
}


toDo.addEventListener("click", (event) => {


    if (event.target.closest("#btnDel")) {
        let parentDelete = event.target.parentElement;
        let parentId = parentDelete.id
        deleteCard(parentId);
        parentDelete.remove();
    }

    if (event.target.closest("#editor")) {

    }

    if (event.target.closest("#process")) {

    }
})

let deleteCard = (parentId) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].id === Number(parentId)) {
            arr[i].status = status.DELETED;
            del.innerHTML += `
                   <div class="card" id=${arr[i].id}>
                   <p id="curTitle">${arr[i].title}</p>
                   <p id="curTask">${arr[i].task}</p>
                   <button id="editor">&#9998;</button>
                   <button id="process">&#10004;</button>
                   <button id="btnDel">&#10006;</button>
                    </div>`
            break;
        }
    }

}