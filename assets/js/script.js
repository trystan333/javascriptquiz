var questionHolder = document.getElementById('.questionholder');
var currentQuestion = document.getElementById('.question');
var question1 = {
    question: `Which HTML element do we put the JavaScript?`,
    answers: ['<javascript>', '<script>', '<scripting>', '<js>'],
    correct: 2, 
};
var question2 = {
    question: `How do you write "Hello World" in an alert box?`,
    answers: ['alertBox("Hello World");', 'msg("Hello World");', 'msgBox("Hello World");', 'alert("Hello World");'],
    correct: 4,
};
var question3 = {
    question: `How do you create a function in JavaScript?`,
    answers: ['function = myFunction()', 'function myFunction()', 'function:myFunction()', 'function(myFunction)'],
    correct: 1,
};
var question4 = {
    question: `How can you add a comment in JavaScript?`,
    answers: ['\'This is a comment', '//This is a comment', '<!--This is a comment-->', '/* This is a comment */'],
    correct: 2,
};
