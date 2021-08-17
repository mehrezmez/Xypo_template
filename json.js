var link = document.getElementById("link");
var x1 = document.getElementsByTagName("h3");
var x2 = document.getElementById("bd");
var x3 = document.getElementById("ficon");
var x4 = document.getElementById("funicon");
function list() {
    if (link.style.transform == "translateX(350px)") {
        link.style.transform = "translateX(0px)";
    }
    else {
        link.style.transform = "translateX(350px)";
    }
}
function dark_mode() {
    if (x4.style.color == "black") {
        x4.style.color = "white";
    }
    else {
        x4.style.color = "black";
    }
    for (var i = 0; i < x1.length; i++) {
        if (x1[i].style.color == "black") {
            x1[i].style.color = "white";
        }
        else {
            x1[i].style.color = "black";
        }
    }
    if (x2.style.backgroundColor == "white") {
        x2.style.backgroundColor = "#222";
    }
    else {
        x2.style.backgroundColor = "white";
    }
    if (x3.style.color == "black") {
        x3.style.color = "white";
    }
    else {
        x3.style.color = "black";
    }
}