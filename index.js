const display = document.getElementById("display");
const startbtn = document.getElementById("start");
const stopbtn = document.getElementById("stop");
const resetbtn = document.getElementById("reset");
let isRunning = false;
let timer = null;
let startTime = 0;
let elapsedTime = 0;

function start(){
    if(!isRunning){
        startTime = Date.now() - elapsedTime;
        timer = setInterval(update, 10);
        isRunning = true;
    }
}

function stop(){
    if(isRunning){
        clearInterval(timer);
        elapsedTime = Date.now() - startTime;
        isRunning = false;
    }
}

function reset(){
    display.textContent = `00:00:00:00`;
}

function update(){
    let currentTime = Date.now();
    elapsedTime = currentTime - startTime;

    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    hours = hours.toString().padStart(2, '0');
    let minutes = Math.floor(elapsedTime / (1000 * 60) % 60);
    minutes = minutes.toString().padStart(2, '0');
    let seconds = Math.floor(elapsedTime / 1000 % 60);
    seconds = seconds.toString().padStart(2, '0');
    let milliseconds = Math.floor(elapsedTime % 1000 / 10);
    milliseconds = milliseconds.toString().padStart(2, '0');

    let timeString = `${hours}:${minutes}:${seconds}:${milliseconds}`;

    display.textContent = timeString;
}

