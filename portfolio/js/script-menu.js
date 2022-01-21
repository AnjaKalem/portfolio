/* Toggle between showing and hiding the navigacija menu links when the user clicks on the menu icon */
function openMenu() {
    var x = document.getElementById("navigacija");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

const burger = document.querySelector(".burger");

burger.addEventListener("click", function () {
    const body = document.body;
    body.classList.toggle("nav-open");
    
});