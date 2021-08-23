var valuetext = document.getElementById("range-value")
var getvalue = document.getElementById("slider-range")

var valuetext2 = document.getElementById("range-value2")
var getvalue2 = document.getElementById("slider-range2")

const shownumber = () => {
    valuetext.textContent = getvalue.value + "zł"
}

const shownumber2 = () => {
    valuetext2.textContent = getvalue2.value + "zł"
}

getvalue.addEventListener('mousemove', shownumber)
getvalue2.addEventListener('mousemove', shownumber2)

















