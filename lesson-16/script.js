function checks() {
    let surName = validate("surname");
    let yourName = validate("name");
    let middleName = validate("middlename");
    let age = validateAge();

    const gender = confirm("Are your gender-man?") ? "man" : "woman";
    let retired;
    if ((gender === "man" && age >= 65) || (gender === "woman" && age >= 55)) {
        retired = "Yes";
    } else {
        retired = "No";
    }

    print(surName, yourName, middleName, age, gender, retired);
}

const print = (surName, yourName, middleName, age, gender, retired) => {
    alert(`ФИО:  ${surName} ${yourName} ${middleName},
           Возраст: ${age},
           Ваш пол: ${gender},
           Ваш возраст через 5 лет: ${age + 5},
           Вы на пенсии: ${retired}
   `);
}
checks();

function validate(name) {
    let result = '';
    while (result === '' || result === null) {
        result = prompt(`What is your ${name}?`, "");
    }
    return result
}

function validateAge() {
    let result = NaN;
    while (isNaN(result)) {
        result = +prompt(`How old are you?`, "");
    }
    return result;
}