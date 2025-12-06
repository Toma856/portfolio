let switchBtn = document.getElementById("themeBtn");
let bodyTag = document.body;

switchBtn.addEventListener("click", function() {
    bodyTag.classList.toggle("dark-theme");
        if (bodyTag.classList.contains("dark-theme")) {
            switchBtn.innerText = "☀️";
        } else {
            switchBtn.innerText = "🌙";
        }
});

let burger = document.getElementById("burgerBtn");
let menu = document.getElementById("mobileMenu");

if (burger) {
    burger.addEventListener("click", function(){
        menu.classList.toggle("active");
    });
}