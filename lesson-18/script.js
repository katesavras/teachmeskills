let age = document.querySelector("#age");
let name = document.querySelector("#name");
let birthDate = document.querySelector("#birthDate");
let education = document.getElementById("education");
let educationOption = [...education.options];
let gender = [...document.getElementsByName("gender")];
let btnSubmit = document.querySelector(".btnSubmit");

let ageValue = document.querySelector("#ageValue");
let nameValue = document.querySelector("#nameValue");
let genderValue = document.querySelector("#genderValue");
let educationValue = document.querySelector("#educationValue");
let dataValue = document.querySelector("#dataValue");
let close = document.querySelector("#close");
let modal = document.querySelector(".modal");


btnSubmit.addEventListener("click", () => {
    name.style.outline = "none";
    if (name.value === "") {
        name.style.border = "2px solid red";

    } else {
        name.style.border = "2px solid green";
        nameValue.innerHTML = `Name: ${name.value}`;
        ageValue.innerHTML = `Age: ${age.value} years old`;
        for (let y = 0; y < educationOption.length; y++) {
            if (educationOption[0].selected) {
                educationValue.innerHTML = `Education: ${educationOption[0].value}`;
                break;
            } else if (educationOption[1].selected) {
                educationValue.innerHTML = `Education: ${educationOption[1].value}`;
                break;
            } else if (educationOption[2].selected) {
                educationValue.innerHTML = `Education: ${educationOption[2].value}`;
                break;
            }
        }
        for (let i = 0; i < gender.length; i++) {
            if (gender[0].checked) {
                genderValue.innerHTML = `Gender: ${gender[0].value}`;
                console.log(gender[0]);
                break;
            } else if (gender[1].checked) {
                genderValue.innerHTML = `Gender: ${gender[1].value}`;
                console.log(gender[1]);
                break;
            }
        }
        dataValue.innerHTML = `Birth date: ${birthDate.value}`;
        modal.style.display = "block"
    }

});

close.addEventListener("click", () => {
    modal.style.display = "none";
});

function validateAge() {

    age.style.outline = "none";
    if (!/^[0-9]+$/.test(age.value)) {
        age.style.border = "2px solid red";

    } else {
        age.style.border = "2px solid green";

    }
};



