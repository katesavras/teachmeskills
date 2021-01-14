const age = document.querySelector("#age");
const name = document.querySelector("#name");
const birthDate = document.querySelector("#birthDate");
const education = document.getElementById("education");


const btnSubmit = document.querySelector(".btnSubmit");
const close = document.querySelector("#close");
const modal = document.querySelector(".modal");
const form = document.querySelector(".form");
const error = document.querySelector(".error");


btnSubmit.addEventListener("click", () => {
    const ageValue = document.querySelector("#ageValue");
    const nameValue = document.querySelector("#nameValue");
    const genderValue = document.querySelector("#genderValue");
    const educationValue = document.querySelector("#educationValue");
    const dataValue = document.querySelector("#dataValue");


    if (!validateName() && !validateAge()) {
        nameValue.innerHTML = `Name: ${name.value}`;
        ageValue.innerHTML = `Age: ${age.value} years old`;

        const educationOption = education.options[education.selectedIndex].text;
        educationValue.innerHTML = `Education: ${educationOption}`;

        const gender = document.querySelector('input[name = "gender"]:checked').value;
        genderValue.innerHTML = `Gender: ${gender}`;

        dataValue.innerHTML = `Birth date: ${birthDate.value}`;

        modal.style.display = "block"
    }
});

let validateName = () => {
    name.style.outline = "none";
    if (name.value === "") {
        name.style.border = "2px solid red";
        error.style.display = "block";
        return true
    } else {
        return false
    }
}


let validateAge = () => {
    age.style.outline = "none";
    if (!/^[0-9]+$/.test(age.value)) {
        age.style.border = "2px solid red";
        return true
    } else {
        age.style.border = "2px solid green";
        return false
    }
}


close.addEventListener("click", () => {
    modal.style.display = "none";
    name.style.border = "1px solid black";
    error.style.display = "none";
    age.style.border = "1px solid black";
    form.reset();

});



