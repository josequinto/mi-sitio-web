menu_Button = document.getElementById("menu-button");
menu = document.getElementById("menu");
header = document.getElementsByTagName("header")[0];

menu_Button.addEventListener("click", function () {
    menu.classList.toggle("visible");
    header.style.backgroundColor = menu.classList.contains("visible") ? "#ebecf5" : "transparent";    
});
 