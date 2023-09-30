

const progressBar = document.querySelector(".progress-bar");
const barPercentage = document.querySelector(".percentage");

let progressValue = 0;
let progressMaxValue = 86;
let speed = 25;

let barIntervalId = setInterval(() => {
    progressBar.style.backgroundImage = `conic-gradient(var(--clr) ${progressValue * 360 / 100}deg, #eeedef 0deg)`;
    barPercentage.textContent = `${progressValue}%`;
    ++progressValue;

    if (progressMaxValue + 1 === progressValue)
        clearInterval(barIntervalId);
}, speed);