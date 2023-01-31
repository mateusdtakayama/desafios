const startingDays = 8;
const startingHours = 12;
const startingMinutes = 44;
const startingSeconds = 28;
let time = (startingDays*24*60*60) + (startingHours*60*60) + (startingMinutes*60) + startingSeconds;

const DiasEl = document.getElementById('days')
const HoursEl = document.getElementById('hours')
const SecondsEl = document.getElementById('seconds')
const MinutesEl = document.getElementById('minutes')

setInterval(updateCountdown, 1000)

function updateCountdown() {
    let days = Math.floor(time/24/60/60)
    days = days < 10 ? '0' + days : days
    let hours = Math.floor((time - days*24*60*60)/60/60)
    hours = hours < 10 ? '0' + hours : hours
    let minutes = Math.floor((time - days*24*60*60 - hours*60*60)/60)
    minutes = minutes < 10 ? '0' + minutes : minutes;
    let seconds = time % 60;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    DiasEl.innerHTML = `${days}`;
    HoursEl.innerHTML = `${hours}`;
    MinutesEl.innerHTML = `${minutes}`;
    SecondsEl.innerHTML = `${seconds}`;
    time--;
}
