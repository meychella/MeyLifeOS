// ======================
// USER DATA
// ======================

let user = {

    name:"Princess",

    income:1200000,

    semester:1,

    gym:0,

    swimming:0,

    wishlist:0

}
const savedData = localStorage.getItem("user");

if(savedData){

    user = JSON.parse(savedData);

}
// ======================
// GREETING
// ======================

const greeting = document.getElementById("greeting");
const today = document.getElementById("today");

function updateGreeting(){

    const hour = new Date().getHours();

    if(hour < 12){

        greeting.innerHTML =
        "🌞 Good Morning, " + user.name;

    }

    else if(hour < 18){

        greeting.innerHTML =
        "☀️ Good Afternoon, " + user.name;

    }

    else{

        greeting.innerHTML =
        "🌙 Good Evening, " + user.name;

    }

}

updateGreeting();

today.innerHTML=new Date().toLocaleDateString("id-ID",{

weekday:"long",

day:"numeric",

month:"long",

year:"numeric"

});

// ======================
// SHOW MONEY
// ======================

const moneyDisplay = document.getElementById("moneyDisplay");

function updateMoney(){

    moneyDisplay.innerHTML =
        "Rp" + user.income.toLocaleString("id-ID");

}

updateMoney();

// Tombol tambah income
const button = document.getElementById("addMoney");

button.onclick = function () {

    let input = prompt("Masukkan pemasukan");

    if (input == null || input === "") return;

    user.income += Number(input);

    localStorage.setItem(
        "user",
        JSON.stringify(user)
    );

    updateMoney();

};
const settingBtn = document.getElementById("settingBtn");

const settings = document.getElementById("settings");

const overlay = document.getElementById("overlay");

settingBtn.onclick = function(){

    settings.classList.toggle("active");
    overlay.classList.toggle("active");

}
const closeBtn = document.getElementById("closeSettings");

overlay.onclick = function(){

    settings.classList.remove("active");
    overlay.classList.remove("active");

}
// ===========================
// DARK MODE
// ===========================

const darkModeBtn = document.getElementById("darkModeBtn");

darkModeBtn.onclick = function () {
    document.body.classList.toggle("dark");
};
// ===========================
// RESET DATA
// ===========================

const resetButton = document.getElementById("resetButton");

resetButton.onclick = function () {

    let yakin = confirm("Yakin ingin menghapus semua data?");

    if(!yakin) return;

    localStorage.removeItem("user");

    location.reload();

};
// ===========================
// EDIT NAME
// ===========================

const editNameBtn = document.getElementById("editNameBtn");

editNameBtn.onclick = function(){

    let newName = prompt("Masukkan nama baru", user.name);

    if(newName == null || newName == "") return;

    user.name = newName;

    localStorage.setItem(
        "user",
        JSON.stringify(user)
    );

    updateGreeting();

}