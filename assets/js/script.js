var questionHolder = document.getElementById('questionholder');
var score = 0;
var highscore = 0;
var secondsLeft = 30;

var question1 = {
    query: 'Which HTML element do we put the JavaScript?',
    answers: ['<javascript>', '<script>', '<scripting>', '<js>'],
    correct: 2, 
};
var question2 = {
    query: `How do you write "Hello World" in an alert box?`,
    answers: ['alertBox("Hello World");', 'msg("Hello World");', 'msgBox("Hello World");', 'alert("Hello World");'],
    correct: 4,
};
var question3 = {
    query: `How do you create a function in JavaScript?`,
    answers: ['function = myFunction()', 'function myFunction()', 'function:myFunction()', 'function(myFunction)'],
    correct: 1,
};
var question4 = {
    query: `How can you add a comment in JavaScript?`,
    answers: ['\'This is a comment', '//This is a comment', '<!--This is a comment-->', '/* This is a comment */'],
    correct: 2,
};


// function startTimer() {
//     var timerInterval = setInterval(function() {
//         secondsLeft--;
//         timerElement.textContent = secondsLeft + " seconds left";
//         if(secondsLeft === 0) {
//             clearInterval(timerInterval);
//             timerElement.textContent = "Times up!";
//             startButton.style.display = "block";
//             secondsLeft = 30;
//             score = 0;
//         }
//     }, 1000);
// }


//selects element and displays question passed to it
function showQuestion(newQuestion) {
    var currentQuestion = document.getElementById('query');
    var shownAnswers = document.querySelectorAll('.answer');
    currentQuestion.textContent = newQuestion.query;

    //iterates thru each answer to populate it with the answers in the given question obj
    shownAnswers.forEach(function(ans, i){
        ans.textContent = newQuestion.answers[i];
    })
}

showQuestion(question4);