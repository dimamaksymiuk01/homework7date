"use strict"; 
const btn = document.querySelector ("#btn")
const res = document.querySelector (".res")

let d = new Date();
const dayTitle = [
  "Неділя",
  "Понеділок",
  "Вівторок",
  "Середа",
  "Четвер",
  "П'ятниця",
  "Субота",
];
const monthTitle = [
  "січня",
  "лютого",
  "березня",
  "квітня",
  "травня",
  "червня",
  "липня",
  "серпня",
  "вересня",
  "жовтня",
  "листопада",
  "грудня",
];

btn.addEventListener ('click', ()=> {
    function formatUaDate(d) {
        const day = d.getDate().toString().padStart(2, "0");
        const dayOfweek = d.getDay();
        const month = d.getMonth();
        const year = d.getFullYear().toString();
        const hours = d.getHours().toString().padStart(2, "0");
        const minutes = d.getMinutes().toString().padStart(2, "0");
        return `${day} ${monthTitle[month]} ${year} року`;
      }
      res.textContent = formatUaDate(d);
})