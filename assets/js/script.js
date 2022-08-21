var timerElement = document.querySelector(".timer");
var startButton = document.querySelector(".startbutton");
var startText = document.querySelector(".starttext");
var highScores = document.querySelector(".highscores")
var question1 = document.querySelector(".question1");
var question2 = document.querySelector(".question2");
var question3 = document.querySelector(".question3");
var question4 = document.querySelector(".question4");
var answer1 = document.querySelector(".answer1");
var answer2 = document.querySelector(".answer2");
var answer3 = document.querySelector(".answer3");
var correctAnswer = document.querySelector(".correctanswer");
var highScoreName = prompt("Save your score! Enter name:")
var leaderboard = document.querySelector(".leaderboard");
    
// var question = document.createElement("h2");
// var answer1 = document.createElement("h3");
// var answer2 = document.createElement("h3");
// var answer3 = document.createElement("h3");
// var answer4 = document.createElement("h3");
var score = 0;
var highScore = 0;     
var secondsLeft = 20;//change back to 30

// document.querySelector(".mainsection").appendChild(question);
// document.querySelector(".mainsection").appendChild(answer1);
// document.querySelector(".mainsection").appendChild(answer2);
// document.querySelector(".mainsection").appendChild(answer3);
// document.querySelector(".mainsection").appendChild(answer4);
question1.style.display = "none";
question2.style.display = "none";
question3.style.display = "none";
question4.style.display = "none";

//function that starts a 30 second timer
function setTime() {
    
    var questionHolder = document.querySelector(".questionholder");
    startButton.style.display = "none";
    startText.style.display = "none";
    highScores.textContent = "";
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timerElement.textContent = secondsLeft + " seconds left";
        if(secondsLeft === 0) {
            clearInterval(timerInterval);
            timerElement.textContent = "Times up!";
            startButton.style.display = "block";
            secondsLeft = 30;
            highScores.textContent = "Your score is " + score + "!";
            leaderboard.textContent = highScoreName + ": " + score
            score = 0;
            question1.style.display = "none";
            question2.style.display = "none";
            question3.style.display = "none";
            question4.style.display = "none";
            
    }
    
    }, 1000);

    questions();
}


function questions() {

    var fourthQuestion = function() {
        question4.style.display = "block";
        correctAnswer.onclick = function() {
            score++;
            console.log(score);
            question4.style.display = "none";
            // secondQuestion(); make highscore function
        } 
    }

    var thirdQuestion = function() {
        question3.style.display = "block";
        answer1.addEventListener("click", function(){
            question2.style.display = "none";
            thirdQuestion();
        });
        answer2.addEventListener("click", function(){
            question2.style.display = "none";
            thirdQuestion();
        });
        answer3.addEventListener("click", function(){
            question2.style.display = "none";
            thirdQuestion();
        });
        correctAnswer.addEventListener("click", function(){
            score++;
            console.log(score)
            question2.style.display = "none";
            thirdQuestion();
        });
    }

    var secondQuestion = function() {
        question2.style.display = "block";
        answer1.addEventListener("click", function(){
            question2.style.display = "none";
            thirdQuestion();
        });
        answer2.addEventListener("click", function(){
            question2.style.display = "none";
            thirdQuestion();
        });
        answer3.addEventListener("click", function(){
            question2.style.display = "none";
            thirdQuestion();
        });
        correctAnswer.addEventListener("click", function(){
            score++;
            console.log(score);
            question2.style.display = "none";
            thirdQuestion();
        });
    };

    var firstQuestion = function() {
        question1.style.display = "block";
        answer1.addEventListener("click", function(){
            question1.style.display = "none";
            seconds -= 5;
            secondQuestion();
        });
        answer2.addEventListener("click", function(){
            question1.style.display = "none";
            secondQuestion();
        });
        answer3.addEventListener("click", function(){
            question1.style.display = "none";
            secondQuestion();
        });
        correctAnswer.addEventListener("click", function(){
            score++;
            console.log(score);
            question1.style.display = "none";
            secondQuestion();
        });
    };

firstQuestion();
}




    //need event listener for button that links to the timer starting
startButton.addEventListener("click", setTime);