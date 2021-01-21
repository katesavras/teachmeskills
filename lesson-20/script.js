
let btnSubmit = document.querySelector('.btnSubmit')
let card = document.querySelector('.card');
let form = document.querySelector('form');
let inputTitle = document.querySelector('#title');
let inputDesc = document.querySelector('#description');
let modal = document.querySelector(".modal");
let btnOk = document.querySelector(".btnOk");

let curTitle;
let curDesc;
let arr = [];


btnSubmit.addEventListener("click", () => {
    const today = new Date();
    arr.push({title: inputTitle.value, description: inputDesc.value, date: today.toLocaleString()});
    recreateCards();
    form.reset();
});

let recreateCards = () => {
    card.innerHTML = "";
    arr.forEach((element) => {
        card.innerHTML += `
     <div class="card__wrapper">
     <p class="text__element">Title: <span class="card__title">${element.title}</span></p>
     <p class="text__element">Description: <span class="card__desc">${element.description}</span></p>
     <p class="text__element">Date: <span>${element.date}</span></p>
     <button class="text__element" id="btnDel">Delete</button>
     <button class="text__element" id="btnEdit">Edit</button>
     </div>`;

    });
}

card.addEventListener("click", (event) => {
    if (event.target.closest("#btnDel")) {
        let curParent = event.target.parentElement;
        let curTitle = curParent.querySelector(".card__title").textContent;
        let curDesc = curParent.querySelector(".card__desc").textContent;
        deleteCard(curTitle, curDesc)
    }

    if (event.target.closest("#btnEdit")) {
        let curParent = event.target.parentElement;
        curTitle = curParent.querySelector(".card__title").textContent;
        curDesc = curParent.querySelector(".card__desc").textContent;

        document.querySelector("#titleNew").value = curTitle;
        document.querySelector("#descNew").value = curDesc;

        modal.style.display = "block";
    }

});

const deleteCard = (curTitle, curDesc) => {
    const index = arr.findIndex(
        (elem) => elem.title === curTitle && elem.description === curDesc
    );
    arr.splice(index, 1);
    recreateCards();
};

const editCard = (curTitle, curDesc, newTitle, newDesc) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].title === curTitle && arr[i].description === curDesc) {
            arr[i].title = newTitle;
            arr[i].description = newDesc;
            break;

        }
    }
    recreateCards();
};

btnOk.addEventListener("click", () => {
    let newTitle = document.querySelector("#titleNew").value;
    let newDesc = document.querySelector("#descNew").value;
    modal.style.display = "none";
    editCard(curTitle, curDesc, newTitle, newDesc);
});

