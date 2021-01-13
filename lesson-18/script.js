let age = document.querySelector("#age");
let name = document.querySelector("#name");
let birthDate = document.querySelector("#birthDate");
let education = document.getElementById("education");
let btnSubmit = document.querySelector(".btnSubmit");
let ageValue = document.querySelector("#ageValue");
let nameValue = document.querySelector("#nameValue");
let genderValue = document.querySelector("#genderValue");
let educationValue = document.querySelector("#educationValue");
let dataValue = document.querySelector("#dataValue");
let close = document.querySelector("#close");
let modal = document.querySelector(".modal");
let form = document.querySelector(".form");
let error = document.querySelector(".error");


btnSubmit.addEventListener("click", () => {

    if(!validateName() && !validateAge()){
        nameValue.innerHTML = `Name: ${name.value}`;
        ageValue.innerHTML = `Age: ${age.value} years old`;

        let educationOption = education.options[education.selectedIndex].text;
        educationValue.innerHTML = `Education: ${educationOption}`;

        let gender = document.querySelector('input[name = "gender"]:checked').value;
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
        return  false
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



