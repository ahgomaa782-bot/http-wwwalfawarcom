var header = document.querySelector("header");
window.addEventListener("scroll",function(){
    header.classList.toggle("sticky" , window this.scrollY > 0)
})