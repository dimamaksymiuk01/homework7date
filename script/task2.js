"use strict"; 

const inpDate = document.querySelector ("#inpDate");
const btn2 = document.querySelector ("#btn2");
const res1 = document.querySelector (".res1"); 

btn2.addEventListener ('click', ()=> {
    let d = new Date();
    let m = new Date (document.getElementById("inpDate").value);
    date(d, m)
    })
    
function date(d, m) {
    let result = (d - m) / (1000 * 60 * 60);
    res1.textContent = (`Пройшло ${Math.floor(result)} годин`);
} 
