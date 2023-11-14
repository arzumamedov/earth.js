let icon = document.querySelector(".fa-bag-shopping");
let asidebar = document.querySelector(".asside-bar");
let closebtn = document.querySelector(".fa-xmark");
icon.addEventListener("click", function () {
    asidebar.classList.add("show-asside")
    closebtn.style.display="block"
})
closebtn.addEventListener("click", function () {
    asidebar.classList.remove("show-asside")
    closebtn.style.display="none"

})