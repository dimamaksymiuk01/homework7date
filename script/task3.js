"use strict"; 

const inpDate2 = document.querySelector ("#inpDate");
const btn3 = document.querySelector ("#btn3");
const res2 = document.querySelector (".res2"); 

function daysB(birthday) {
    let today = new Date();
    let nextBirthday = new Date(today.getFullYear(), birthday.getMonth(), birthday.getDate()); 
    if (nextBirthday < today) { 
      nextBirthday.setFullYear(nextBirthday.getFullYear() + 1);
    }
    let timeDiff = nextBirthday.getTime() - today.getTime();
    let daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
    return daysDiff;
  }
  
btn3.addEventListener ('click', ()=> {
    let birthday = new Date (document.getElementById("inpDate2").value);
    let daysToBirthday = daysB(birthday);
    res2.textContent = (`До наступного дня народження залишилось ${daysToBirthday} днів`);
    daysB(birthday)
    })