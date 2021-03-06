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
});

let recreateCards = () => {
    card.innerHTML = "";
    arr.forEach((element) => {
        let divGroup = document.createElement('div');
        card.prepend(divGroup);
        let btnDelete = document.createElement('button');
        btnDelete.classList.add("text__element")
        btnDelete.innerHTML = "Delete";
        divGroup.prepend(btnDelete);


        let btnEdit = document.createElement('button');
        btnEdit.classList.add("text__element")
        btnEdit.innerHTML = "Edit";
        divGroup.prepend(btnEdit);


        let date = document.createElement('p');
        date.classList.add("text__element")
        date.innerHTML = `${element.date}`;
        divGroup.prepend(date);

        let descriptionValue = document.createElement('p');
        descriptionValue.classList.add("text__element");

        descriptionValue.innerHTML = `${element.description}`;
        divGroup.prepend(descriptionValue);

        let titleValue = document.createElement('p');
        titleValue.classList.add("text__element");
        titleValue.innerHTML = `${element.title}`;
        divGroup.prepend(titleValue);

        addHoverEffect(titleValue, descriptionValue);
        form.reset();
    })

}
card.addEventListener("click", (event) => {
    if (event.target.textContent === "Delete") {
        let curParent = event.target.parentElement;
        let curTitle = curParent.childNodes[0].innerText;
        let curDesc = curParent.childNodes[1].innerText;
        deleteElement(curTitle, curDesc)
    }
    if (event.target.textContent === "Edit") {
        let curParent = event.target.parentElement;
        curTitle = curParent.childNodes[0].innerText;
        curDesc = curParent.childNodes[1].innerText;

        document.querySelector("#titleNew").value = curTitle;
        document.querySelector("#descNew").value = curDesc;

        modal.style.display = "block";
    }
});

const deleteElement = (curTitle, curDesc) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].title === curTitle && arr[i].description === curDesc) {
            arr.splice(i, 1);
            break;
        }
    }
    recreateCards();
};

const editElement = (curTitle, curDesc, newTitle, newDesc) => {
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
    editElement(curTitle, curDesc, newTitle, newDesc);
});

let addHoverEffect = (title, description) => {
    title.addEventListener("mouseover", (eve) => {
        eve.target.style.boxShadow = "0 4px 8px 0 rgba(0, 0, 0, 0.2)";

    });
    title.addEventListener("mouseleave", (eve) => {
        eve.target.style.boxShadow = "none";

    });

    description.addEventListener("mouseover", (eve) => {
        eve.target.style.boxShadow = "0 4px 8px 0 rgba(0, 0, 0, 0.2)";

    });
    description.addEventListener("mouseleave", (eve) => {
        eve.target.style.boxShadow = "none";

    });
}