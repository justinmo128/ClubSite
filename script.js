let mobileMenu = document.getElementById("mobilemenu");
let menuthing = document.getElementsByClassName("menuthing");

document.getElementById("menubutton").addEventListener("click", displayMenu);
document.getElementById("closemenubutton").addEventListener("click", displayMenu);
document.getElementById("closemenubox").addEventListener("mouseover", menuCloseOnHover);
document.getElementById("closemenubox").addEventListener("click", closeMenu);
mobileMenu.addEventListener("dblclick", closeMenu)

function menuCloseOnHover() {
    setTimeout(closeMenu, 250);
}

displayMenu();

function displayMenu() {
    if (mobileMenu.style.left == "-320px") {
        mobileMenu.style.left = "0";
        mobileMenu.style.boxShadow = "0 0 0 1000px rgba(0, 0, 0, 0.5)";
        menuthing[0].innerHTML = "menu_open";
        menuthing[1].innerHTML = "menu_open";
        document.getElementById("closemenubox").style.display = "block";
    } else {
        mobileMenu.style.left = "-320px";
        mobileMenu.style.boxShadow = "0 0 0 1000px rgba(0, 0, 0, 0.0)";
        menuthing[0].innerHTML = "menu";
        menuthing[1].innerHTML = "menu";
        document.getElementById("closemenubox").style.display = "none";
    }
}

function closeMenu() {
    mobileMenu.style.left = "-320px";
    mobileMenu.style.boxShadow = "0 0 0 1000px rgba(0, 0, 0, 0.0)";
    menuthing[0].innerHTML = "menu";
    menuthing[1].innerHTML = "menu";
    document.getElementById("closemenubox").style.display = "none";
}