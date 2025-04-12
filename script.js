const btn = document.getElementById("btn");
const light = document.getElementById("light");
const boxesConainer = document.getElementById("boxes-container");
const button = document.getElementById("button");

    function toggleBtn(){
        btn.classList.toggle("active");
        light.classList.toggle("on")
        }

button.addEventListener("click" , ()=>{
    boxesConainer.style.display = "flex";
    setTimeout( ()=>{
        boxesConainer.style.opacity = "1";
        AOS.refresh();
    },3000)
})