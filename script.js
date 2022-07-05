var settingsmenu = document.querySelector(".settings-menu");
var darkBtn = document.getElementById("dark-btn");
var inputSearch = document.querySelector(".search-box-container");

function SettingsMenuToggle() {
    settingsmenu.classList.toggle("settings-menu-height");
}

darkBtn.onclick = function() {
    darkBtn.classList.toggle("dark-btn-on");
    document.body.classList.toggle("dark-theme")
}

function InputSearchDisplay () {
    inputSearch.classList.toggle("search-box-input");
}