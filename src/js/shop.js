var valuetext = document.getElementById("range-value")
var getvalue = document.getElementById("slider-range")

const shownumber = () => {
    valuetext.textContent = getvalue.value + "zł"
}

getvalue.addEventListener('mousemove', shownumber)
