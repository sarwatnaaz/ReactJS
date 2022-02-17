const div = document.querySelector("#myDiv");
const text = document.querySelector("#myText");

div.style.width = "350px";
div.style.height = "75px";
div.style.border = "2px solid black";

div.addEventListener("mouseover", e => {
    div.style.color = "red";
})

div.addEventListener("mouseleave", e => {
    div.style.color = "black";
})

