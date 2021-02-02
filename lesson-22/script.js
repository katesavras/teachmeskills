let cardWrapper = document.querySelector(".cards__wrapper")

let toDo = cardWrapper.querySelector("#toDo");
let progress = cardWrapper.querySelector("#progress");
let done = cardWrapper.querySelector("#done");
let del = cardWrapper.querySelector("#delete");

let task = document.querySelector("#task");
let title = document.querySelector("#title");

let submit = document.querySelector("#submit");
let form = document.querySelector("form")

let arr = [];
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
     <p id="curTitle" contenteditable="false">${element.title}</p>
     <p id="curTask" contenteditable="false">${element.task}</p>
     <button id="editor">&#9998;</button>
     <button id="process">&#10004;</button>
     <button id="btnDel">&#10006;</button>
     </div>`
    counter++;
}


cardWrapper.addEventListener("click", (event) => {

    if (event.target.closest("#btnDel")) {
        let parentDelete = event.target.parentElement;
        let parentId = parentDelete.id
        deleteCard(parentId);
        parentDelete.remove();
    }

    if (event.target.closest("#editor")) {
        let parentEdit = event.target.parentElement;
        let parentId = parentEdit.id;
        let curTitle = parentEdit.querySelector("#curTitle");
        let curTask = parentEdit.querySelector("#curTask");
        parentEdit.style.backgroundColor = "green"
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

    if (event.target.closest("#process")) {
        let parentProgress = event.target.parentElement;
        let parentId = parentProgress.id;
        progressCard(parentId, parentProgress);
    }
})

const deleteCard = (parentId) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].id === Number(parentId)) {
            if (arr[i].status === status.DELETED) {
                arr.splice(i, 1);
            } else {
                arr[i].status = status.DELETED;

                appendElement(del, i);
                break;
            }

        }
    }

}

const progressCard = (parentId, parentEle) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].id === Number(parentId)) {
            if (arr[i].status === status.TODO) {
                arr[i].status = status.IN_PROGRESS;
                appendElement(progress, i);
                parentEle.remove();
                break;
            } else if (arr[i].status === status.IN_PROGRESS) {
                arr[i].status = status.DONE;
                appendElement(done, i);
                parentEle.remove();
                break;
            } else if (arr[i].status === status.DONE) {
                break;
            }

        }
    }

}
const editTitle = (parentId, newTitle) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].id === Number(parentId)) {
            arr[i].title = newTitle;
            break;
        }
    }
}
const editTask = (parentId, newTask) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].id === Number(parentId)) {
            arr[i].task = newTask;
            break;
        }
    }
}

const appendElement = (element, index) => {
    element.innerHTML += `
                   <div class="card" id=${arr[index].id}>
                   <p id="curTitle">${arr[index].title}</p>
                   <p id="curTask">${arr[index].task}</p>
                   <button id="editor">&#9998;</button>
                   <button id="process">&#10004;</button>
                   <button id="btnDel">&#10006;</button>
                    </div>`
}

