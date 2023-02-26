"use strict"; 

const inpDate3 = document.querySelector ("#inpDate3");
const btn4 = document.querySelector ("#btn4");
const res3 = document.querySelector (".res3"); 


btn4.addEventListener ('click', ()=> {
    let d = new Date (document.getElementById("inpDate3").value);
    const day = [true, false, false, false, false, false, true][d.getDay()];
    let result = day ? " Треба любити себе" : "Робота зробила з мавпи людину";
    res3.textContent = (`${result}`);
    })