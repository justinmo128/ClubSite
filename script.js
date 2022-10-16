let mobileMenu = document.getElementById("mobilemenu")
let menuthing = document.getElementsByClassName("menuthing");

document.getElementById("menubutton").addEventListener("click", displayMenu)
document.getElementById("closemenubutton").addEventListener("click", displayMenu) 

function displayMenu() {
    if (mobileMenu.style.left == "-320px") {
        mobileMenu.style.left = "0";
        mobileMenu.style.boxShadow = "0 0 0 1000px rgba(0, 0, 0, 0.5)";
        menuthing[0].innerHTML = "menu_open";
        menuthing[1].innerHTML = "menu_open";
    } else {
        mobileMenu.style.left = "-320px";
        mobileMenu.style.boxShadow = "0 0 0 1000px rgba(0, 0, 0, 0.0)";
        menuthing[0].innerHTML = "menu";
        menuthing[1].innerHTML = "menu";
    }
}