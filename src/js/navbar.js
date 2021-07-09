window.addEventListener("scroll", function () {

    if (screen.width > 600) {
        var nav = document.querySelector("nav")
        nav.classList.toggle("stick", window.scrollY > 50)
    } 
})


function mobilemenu() {

    var nav = document.getElementById("navbar")
    var menubtn = document.getElementById("menu")
    var closebtn = document.getElementById("close")
    var links = document.getElementById("link-box")

       
    if (nav.className == "rwd-nav") {
        nav.classList.remove("rwd-nav")
        menubtn.style.display = "block"
        closebtn.style.display = "none"
        links.style.display = "none"

    } else {
        nav.classList.add("rwd-nav")
        nav.style.justifyContent = null
        menubtn.style.display = "none"
        closebtn.style.display = "block"
        links.style.display = "block"
    }
}