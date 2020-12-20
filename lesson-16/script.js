function checks() {
    let surName = validateString("What is your surname?");
    let yourName = validateString("What is your name?");
    let middleName = validateString("What is your middle name?");
    let age = validateNumber("How old are you?");

    const gender = confirm("Are your gender-man?") ? "man" : "woman";
    let retired;
    if ((gender === "man" && age >= 65) || (gender === "woman" && age >= 55)) {
        retired = "Yes";
    } else {
        retired = "No";
    }

    print(surName, yourName, middleName, age, gender, retired);
}

function print(surName, yourName, middleName, age, gender, retired) {
    alert(`ФИО:  ${surName} ${yourName} ${middleName},
           Возраст: ${age},
           Ваш пол: ${gender},
           Ваш возраст через 5 лет: ${age + 5},
           Вы на пенсии: ${retired}
   `);
}

function validateString(question) {
    let result = '';
    while (result === '' || result === null) {
        result = prompt(`${question}?`, "");
    }
    return result
}

function validateNumber(question) {
    let result = NaN;
    while (isNaN(result)) {
        result = +prompt(`${question}`, "");
    }
    return result;
}

checks();
