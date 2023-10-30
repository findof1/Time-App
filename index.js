const date = document.querySelector(".displayDate")
let temp = "Date: ";
temp += dayjs().format('M/D/YYYY');

date.innerHTML = temp;
const time = document.querySelector(".displayTime")
temp = "Time: ";
temp += dayjs().format('hh:mm:ss  A')
time.innerHTML = temp;

