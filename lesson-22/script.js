let cardWrapper = document.querySelector(".cards__wrapper")

const todo = cardWrapper.querySelector("#toDo");
const progress = cardWrapper.querySelector("#progress");
const done = cardWrapper.querySelector("#done");
const del = cardWrapper.querySelector("#delete");

let task = document.querySelector("#task");
let title = document.querySelector("#title");

let submit = document.querySelector("#submit");
let form = document.querySelector("form")

let arr = [];
let counter = 0;

const status = {
    todo: "todo",
    in_progress: "in_progress",
    done: "done",
    deleted: "deleted",
}

submit.addEventListener("click", () => {
    let card = {title: title.value, task: task.value, id: counter, status: status.todo};
    arr.push(card);
    counter++;
    form.reset();
    displayCards();
})

function cleanCards() {
    todo.innerHTML = "";
    progress.innerHTML = "";
    done.innerHTML = "";
    del.innerHTML = "";
}

function displayCards() {
    cleanCards()

    arr.forEach((item) => {
        if (item.status === status.todo) {
            appendToElement(todo, item);
        } else if (item.status === status.in_progress) {
            appendToElement(progress, item);
        } else if (item.status === status.done) {
            appendToElement(done, item);
        } else if (item.status === status.deleted) {
            appendToElement(del, item);
        }
    })
}

cardWrapper.addEventListener("click", (event) => {

    if (event.target.closest("#btnDel")) {
        let parentDelete = event.target.parentElement;
        let parentId = parentDelete.id
        deleteCard(parentId);
        displayCards();
    }

    if (event.target.closest("#editor")) {
        let parentEdit = event.target.parentElement;
        let parentId = parentEdit.id;
        let curTitle = parentEdit.querySelector("#curTitle");
        let curTask = parentEdit.querySelector("#curTask");
        if (curTitle.contentEditable === "true" && curTask.contentEditable === "true") {
            parentEdit.style.backgroundColor = "#e6cff5";
            curTitle.contentEditable = "false";
            curTask.contentEditable = "false";
        } else {
            parentEdit.style.backgroundColor = "pink";
            curTitle.contentEditable = "true";
            curTask.contentEditable = "true";

            curTitle.addEventListener("blur", () => {
                let newTitle = curTitle.textContent;
                editTitle(parentId, newTitle);
            })
            curTask.addEventListener("blur", () => {
                let newTask = curTask.textContent;
                editTask(parentId, newTask);
            })
        }
    }

    if (event.target.closest("#process")) {
        let parentProgress = event.target.parentElement;
        let parentId = parentProgress.id;
        progressCard(parentId);
        displayCards();
    }
})

const deleteCard = (parentId) => {
    arr.forEach((item, index, object) => {
        if (item.id === Number(parentId)) {
            if (item.status === status.deleted) {
                object.splice(index, 1);
            } else {
                item.status = status.deleted;
            }
        }
    })
}

const progressCard = (parentId) => {
    arr.forEach((item) => {
        if (item.id === Number(parentId)) {
            if (item.status === status.todo) {
                item.status = status.in_progress;
            } else if (item.status === status.in_progress) {
                item.status = status.done;
            }
        }
    })
}

const editTitle = (parentId, newTitle) => {
    arr.forEach((item) => {
        if (item.id === Number(parentId)) {
            item.title = newTitle;
        }
    })
}

const editTask = (parentId, newTask) => {
    arr.forEach((item) => {
        if (item.id === Number(parentId)) {
            item.task = newTask;
        }
    })
}

const appendToElement = (element, item) => {
    element.innerHTML += `
                   <div class="card" id=${item.id}>
                   <p id="curTitle" contenteditable="false">${item.title}</p>
                   <p id="curTask" contenteditable="false">${item.task}</p>
                   <button id="editor">&#9998;</button>
                   <button id="process">&#10004;</button>
                   <button id="btnDel">&#10006;</button>
                    </div>`
}

