window.addEventListener("load", function () {
    const loader = document.querySelector(".loader");
    setTimeout(function(){ loader.className += " hide-loader"; }, 2000)
});