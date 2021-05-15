var caracter = document.getElementById("caracter");
var block = document.getElementById("block");
function jump() {
    if (caracter.classList != "animation") {
        caracter.classList.add("animation");
    }
    setTimeout(function(){
        caracter.classList.remove("animation");
    },500);
}
var checkDead = setInterval(function(){
    var caracterTop =
    parseInt(window.getComputedStyle(caracter).getPropertyValue("top"));
    
    var blockLeft = 
    parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if (blockLeft<20 && blockLeft>0 && caracterTop>=130) {
        alert("hh 5seret")
        block.style.animation = "none"
    }
},10)