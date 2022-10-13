document.getElementById("navibutton").addEventListener("click", openNav);

function openNav() {
  let x = document.getElementById("openmenu");
  let y = document.getElementById("navibutton");
  if (x.className === "openmenu") {
    x.className += " opened"
    y.style = "background-color: #8734b1"
  } else {
    x.className = "openmenu"
    y.style = ""
  }
}