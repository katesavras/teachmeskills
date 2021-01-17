let btnSubmit = document.querySelector('.btnSubmit')
let card = document.querySelector('.card');
let cardWrapper = document.querySelector('.card__wrapper');
let i = 0;

btnSubmit.addEventListener("click", () => {
    let form = document.querySelector('form');
    let titleValue;
    let descriptionValue;
    let btnDelete;
    let divGroup;
    let btnEdit;
    let arr = [];

    let inputs = document.querySelectorAll('input');
    inputs.forEach((element) => {
        arr.push({title: element.value, description: element.value});

    });
    divGroup = document.createElement('div');
    card.prepend(divGroup);
    divGroup.classList.add(i);

    btnDelete = document.createElement('button');
    btnDelete.classList.add("text__element")
    btnDelete.innerHTML = "Delete";
    btnDelete.addEventListener("click", ()=>{
        divGroup.remove();
    })


    btnEdit = document.createElement('button');
    btnEdit.classList.add("text__element")
    btnEdit.innerHTML = "Edit";


    descriptionValue = document.createElement('p');
    descriptionValue.classList.add("text__element")
    descriptionValue.innerHTML = `${arr[1].description}`;



    titleValue = document.createElement('p');
    titleValue.classList.add("text__element")
    titleValue.innerHTML = `${arr[0].title}`;


    divGroup.prepend(btnDelete);

    divGroup.prepend(btnEdit);
    divGroup.prepend(descriptionValue);
    divGroup.prepend(titleValue);


    i++;
    console.log(i)
    form.reset();
});

// divGroup.addEventListener("click", (event) => {
//     if (event.target.textContent === "Delete") {
//
//         .remove();
//
//     }
//     if (event.target.textContent === "Edit") {
//         console.log("no")
//     }
// })

