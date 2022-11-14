const inputEl = document.getElementById("num-input")
const containerFooter = document.getElementById("container-footer")
const convertBtn = document.getElementById("convert-btn")
const resetBtn = document.getElementById("reset-btn")
// Dark mode
const head = document.getElementById("head");
let checkbox = document.querySelector("input[name=checkbox]");

checkbox.addEventListener('change', function() {
  if (this.checked) {
    head.innerHTML += `<link rel="stylesheet" href="darkModeStyle.css">`
  } else {
    let i = head.innerHTML.search(`<link rel="stylesheet" href="darkModeStyle.css">`)
    console.log(i)
    head.innerHTML = head.innerHTML.slice(0, i)
  }
});

// 1 meter = 3.281 feet
// 1 liter = 0.264 gallon
// 1 kilogram = 2.204 pound

function convertTo(num, unit){
    if (unit == "meters") {
        return (num / 3.281).toFixed(3)
    } else if (unit == "liters") {
        return (num / 0.264).toFixed(3)
    } else if (unit == "kilograms") {
        return (num / 2.204).toFixed(3)
    } else if (unit == "feet") {
        return (num * 3.281).toFixed(3)
    } else if (unit == "gallons") {
        return (num * 0.264).toFixed(3)
    } else{
        return (num * 2.204).toFixed(3)
    }
}

const impericalUnits = ["feet", "gallons", "pounds"]
const metricUnits = ["meters", "liters", "kilograms"]
const dimensions = ["Length", "Volume", "Mass"]

convertBtn.addEventListener("click", function (){
    let num = Number(inputEl.value)
    if (!num){
        return 
    }

    let DOM = ""

    for(let i = 0; i < 3; i++){
        DOM += `<div class="conversions">
        <h2>${dimensions[i]} (${metricUnits[i]}/${impericalUnits[i]})</h2>
        <p>${num} ${metricUnits[i]} = ${convertTo(num, impericalUnits[i])} ${impericalUnits[i]} 
        | ${num} ${impericalUnits[i]} = ${convertTo(num, metricUnits[i])} ${metricUnits[i]}</p>
        </div>`
    }
    containerFooter.innerHTML = DOM
})

resetBtn.addEventListener("click", function(){
    inputEl.value = ""
    containerFooter.innerHTML = ""
})



