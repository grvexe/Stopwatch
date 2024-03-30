// Declaring all the required elements

const display = document.getElementById("display");
const startbtn = document.getElementById("start");
const stopbtn = document.getElementById("stop");
const resetbtn = document.getElementById("reset");
let isRunning = false;
let timer = null;
let startTime = 0;
let elapsedTime = 0;


// function to start and stop the timer
// it alternates between start and stop state

function toggleStart(){
    if(!isRunning){

        // This gets the time when you clicked on the button
        startTime = Date.now() - elapsedTime; 
        
        timer = setInterval(update, 10);
        isRunning = true;
        startbtn.textContent = "Stop";
    }
    else if (isRunning){
        clearInterval(timer);
        elapsedTime = Date.now() - startTime;
        isRunning = false;
        startbtn.textContent = "Start";
    }
}

// function to reset the timer 

function reset(){
    if(isRunning){
        clearInterval(timer);
        elapsedTime = 0;
        isRunning = false;
    }

    elapsedTime = 0;
    display.textContent = `00:00:00:00`;
    startbtn.textContent = "Start";
}

// function to update the timer every 10 millisecond
// and display the result on the DOM

function update(){

    // This calculates the time that has passed since you clicked the start button
    let currentTime = Date.now();
    elapsedTime = currentTime - startTime;

    // Elapsed time is in milliseconds. Divide it by thousand for seconds
    // Divide thousand by 60 for minutes and another 60 for hours
    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    hours = hours.toString().padStart(2, '0');

    // Divide elapsed time by thousand for seconds and then divide it by 60 for minutes
    // Get the modulus of this equation so that anything above 60 returns to 0
    let minutes = Math.floor(elapsedTime / (1000 * 60) % 60);
    minutes = minutes.toString().padStart(2, '0');

    // Divide elapsed time by thousand to get seconds
    // Get the modulus of this equation so that anything above 60 returns to 0
    let seconds = Math.floor(elapsedTime / 1000 % 60);
    seconds = seconds.toString().padStart(2, '0');

    let milliseconds = Math.floor(elapsedTime % 1000 / 10);
    milliseconds = milliseconds.toString().padStart(2, '0');

    let timeString = `${hours}:${minutes}:${seconds}:${milliseconds}`;

    display.textContent = timeString;
}

