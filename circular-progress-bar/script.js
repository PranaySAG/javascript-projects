let inputBox = document.querySelector(".input-field");
let circle = document.querySelector("circle");
let number = document.getElementById("number");

const circumference = 472;

inputBox.addEventListener("input", () => {
    let value = parseInt(inputBox.value, 10) || 0; 
    if (value < 0) value = 0; 
    if (value > 100) value = 100; 
    let offset = circumference - (circumference * value) / 100;
    circle.style.strokeDashoffset = offset;
    number.textContent = `${value}%`;
});
