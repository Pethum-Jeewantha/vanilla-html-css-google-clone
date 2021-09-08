window.addEventListener("scroll", function(){
    var header = document.querySelector(".page__header");
    header.classList.toggle("sticky", window.scrollY > 0);
});