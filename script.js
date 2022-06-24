"use strict"
// Как сохранить данные без БД. Работа с localStorage

// Как сохранить данные без БД. Работа с localStorage ------------------------

// LocalStorage - технология - позволяет сохранять данные на сайтах без робооты сервера и баз данных и вся инфа останется даже если перезагрузим стр и закр браузер

// Єто свойство глобального обьекта виндов или все же обьект (глоабльный)


//localStorage.setItem("number", 5) // - записать новій ключ

//localStorage.removeItem("number") // - удалить ключ

//localStorage.getItem("number") // - позволяет получать данные из локал сторайдж
//console.log(localStorage.getItem("number"));

//localStorage.clear(); // - полностью очистить локальное хранилище


const checkbox = document.querySelector("#checkbox");
const form = document.querySelector("form");
const change = document.querySelector("#color");

if(localStorage.getItem("isChecked")) {
    checkbox.checked = true;
}

if(localStorage.getItem("bg") === "changed"){
    form.style.backgroundColor = "red"
}

checkbox.addEventListener("change",()=>{
    localStorage.setItem("isChecked", true);
});

change.addEventListener("click",()=>{
    if(localStorage.getItem("bg") === "changed"){
        localStorage.removeItem("bg");
        form.style.backgroundColor = "#fff"
    } else {
        localStorage.setItem("bg", "changed");
        form.style.backgroundColor = "red"
    }
});

const persone = {
    name: "Alex",
    age: 25
};

const serializedPersone = JSON.stringify(persone);
localStorage.setItem("alex", serializedPersone);

console.log(JSON.parse(localStorage.getItem("alex")));
