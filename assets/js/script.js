var timerElement = document.querySelector(".timer");
var startButton = document.querySelector(".startbutton");
var secondsLeft = 30;
//function that starts a 30 second timer
function setTime() {
    var timerInterval = setInterval(function() {
    secondsLeft--;
    timerElement.textContent = secondsLeft + " seconds left";
    if(secondsLeft === 0) {
        clearInterval(timerInterval);
    }

    }, 1000);
}

//need event listener for button that links to the timer starting
startButton.addEventListener("click", setTime);