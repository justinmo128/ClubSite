/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
document.getElementById("naviicon").addEventListener("click", myFunction)

function myFunction() {
    var x = document.getElementById("topnav");
    if (x.className === "navilinkbox") {
      x.className += " responsive";
    } else {
      x.className = "navilinkbox";
    }
  }