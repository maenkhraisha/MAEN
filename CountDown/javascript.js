const daysEL = document.getElementById('days');
const hourEL = document.getElementById('hour');
const minutesEL = document.getElementById('minutes');
const secondEL = document.getElementById('second');

const nextRamadan = "2 April 2022";

function countDown() {
    const nextRamadanDate = new Date(nextRamadan);
    const currentDate = new Date();

    const totalSecondLeft = new Date(nextRamadanDate - currentDate) / 1000;

    const daysLeft = Math.floor(totalSecondLeft / 3600 / 24);
    const hoursLet = Math.floor(totalSecondLeft / 3600) % 24;
    const minutesLet = Math.floor(totalSecondLeft / 60) % 60;
    const secondsLet = Math.floor(totalSecondLeft % 60);

    daysEL.innerHTML = daysLeft;
    hourEL.innerHTML = hoursLet;
    minutesEL.innerHTML = minutesLet;
    secondEL.innerHTML = secondsLet;


}

countDown();

setInterval(countDown, 1000);