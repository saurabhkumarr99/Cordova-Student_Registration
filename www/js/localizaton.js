var locale = "en";

function localization(lan) {

    if (lan == "English") {
        locale = "en";
        //console.log(document.querySelectorAll("[data-lang]"));
        document.querySelectorAll("[data-lang]").forEach(translateElement);

    } else if (lan == "Hindi") {
        locale = "hindi";
        document.querySelectorAll("[data-lang]").forEach(translateElement);
        //console.log(document.querySelectorAll("[data-lang]"));

    } else if (lan == "Arab") {
        locale = "ar";
        document.querySelectorAll("[data-lang]").forEach(translateElement);
        //console.log(document.querySelectorAll("[data-lang]"));
    }
}

function translateElement(element) {
    const key = element.getAttribute("data-lang");
    const translation = translations[locale][key];
    element.innerText = translation;
}


const translations = {
    // English translations
    "en": {
        "All_Student": "All Student",
        "Reg_std": "Register Student",
        "register": "Register",
        "Student_Name":"Student Name",
        "Father_Name":"Father Name",
        "Mother_Name":"Mother Name",
        "Gender":"Gender",
    },

    // Hindi translations
    "hindi": {
        "All_Student": "सभी छात्र",
        "Reg_std": "छात्र पंजीकृत करें",
        "register": "पंजीकृत",
        "Student_Name":"छात्र का नाम",
        "Father_Name":"पिता का नाम",
        "Mother_Name":"माँ का नाम",
        "Gender":"लिंग",
    },

    // Arabic translations
    "ar": {
        "All_Student": "كل الطلاب",
        "Reg_std": "سجل الطالب",
        "register": "يسجل",
        "Student_Name":"أسم الطالب",
        "Father_Name":"اسم الأب",
        "Mother_Name":"اسم الأم",
        "Gender":"جنس",
    },
};

