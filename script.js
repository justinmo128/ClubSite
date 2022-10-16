let mobileMenu = document.getElementById("mobilemenu")

document.getElementById("menubutton").addEventListener("click", displayMenu)
document.getElementById("closemenubutton").addEventListener("click", displayMenu)

function displayMenu() {
    if (mobileMenu.style.display === "flex") {
        mobileMenu.style.display = "none";
    } else {
        mobileMenu.style.display = "flex";
    }
}