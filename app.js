const timeArea = document.querySelector(".time");
const partArea = document.querySelector(".part");


setInterval(() => {
    writeTime()
}, 1000);

const writeTime = ()=>{
let currentDate = new Date;
let seconds = currentDate.getSeconds();
if (seconds < 10) {
    seconds = "0"+seconds
}
let minutes = currentDate.getMinutes();
if (minutes < 10) {
    minutes = "0"+minutes
}
let hour = currentDate.getHours();
if (hour < 10) {
    hour = "0"+hour
}
if (hour > 12) {
    timeArea.innerHTML = (hour-12) + ":" + minutes + ":" + seconds;
    partArea.innerHTML = "PM"
} else {
    timeArea.innerHTML = hour + ":" + minutes + ":" + seconds;
    partArea.innerHTML = "AM"
    
}
}