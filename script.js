let color1 = document.getElementsByClassName("color1")[0];
let color2 = document.getElementsByClassName("color2")[0];
let h3 = document.querySelector("h3");
let body = document.querySelector("body");

body.onload
//we will be listening to an event called input.
function setGradientColor (){
    body.style.background = 
    "linear-gradient(180deg, " 
    + color1.value 
    +", "
    + color2.value 
    +")";
    h3.innerHTML = body.style.background + ";" ;
}

color1.addEventListener("input", setGradientColor)

color2.addEventListener("input", setGradientColor)