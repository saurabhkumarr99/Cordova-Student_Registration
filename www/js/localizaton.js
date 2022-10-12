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
        
    },

    // Hindi translations
    "hindi": {
        "All_Student": "सभी छात्र",
        "Reg_std": "छात्र पंजीकृत करें",
    },

    // Arabic translations
    "ar": {
        "All_Student": "كل الطلاب",
        "Reg_std": "سجل الطالب",

    },
};

