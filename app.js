const months = [
"January",
"February",
"March",
"April",
"May",
"June",
"July",
"August",
"September",
"October",
"November",
"December"
]
const weekdays = [
"Sunday", 
"Monday", 
"Tuesday",
"Wednesday",
"Thursday",
"Friday",
"Saturday" 
]

const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");

const futureDate = new Date(2023,9,11,14,55,0);
const year = futureDate.getFullYear();
const month = months[futureDate.getMonth()];
const date = futureDate.getDate();
const days = weekdays[futureDate.getDay()];
let hours = futureDate.getHours();
const mins = futureDate.getMinutes();
const sec = futureDate.getSeconds();

const minsDivision = hours < 12 ? 'AM' : 'PM'
hours = hours % 12;
hours = hours ? hours : 12; 

giveaway.textContent = `Giveaway ends on ${days}, ${date} ${month} ${year}, ${hours}:${mins}${minsDivision}`

const futureTime = futureDate.getTime();
function getRemainingTime(){
  const today = new Date().getTime();
  const t = futureTime - today;
  // 1s = 1000ms
  // 1m = 60s
  // 1hr = 60mins
  // 1d = 24hr
  // values in ms ...get total miliseconds in one day
  const oneDay = 24*60*60*1000;
  const oneHour = 60*60*1000;
  const oneMinute = 60 * 1000;

  let days = Math.floor(t /oneDay);
  let hours = Math.floor((t % oneDay) / oneHour);
  let mins = Math.floor((t % oneHour) / oneMinute )
  let secs = Math.floor((t % oneMinute) / 1000 );
  
  function addZero(item){
    if(item < 10){
      return (item = `0${item}`)
    }else{
      return item;
    }
 }

  const timeValues = [days, hours, mins, secs];
  items.forEach((item, i)=>{
          item.innerHTML = addZero(timeValues[i]);
  })

  if(t < 0) {
      deadline.innerHTML = `<h4> Sorry, the giveaway discount has ended :( </h4>`
  }

}
let counter = setInterval(getRemainingTime, 1000);
getRemainingTime();