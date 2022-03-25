var questions = [
    {
        question:"What HTML tag do we link JavaScript in?",
        optionA:"<script>",
        optionB:"<javascript",
        optionC:"<js>",
        optionD:"<main>",
        quizAnswer:"a"     
    },
    {
        question:"How do you create a function in Javascript?",
        optionA:"function newFunction()",
        optionB:"var newFunction = function()",
        optionC:"Both A and B",
        optionD:"Neither A and B",
        quizAnswer:"c"   
    },
    {
        question:"How do you call the previous function 'newFunction'?",
        optionA:"call newFunction()",
        optionB:"call function newFunction()",
        optionC:"function newFunction()",
        optionD:"newFunction()",
        quizAnswer:"d"  
    },
    {
        question:"What is the correct syntax to start an 'IF' statement?",
        optionA:"if i=7",
        optionB:"if (i === 7)",
        optionC:"if <i === 7>",
        optionD:"None of these",
        quizAnswer:"b"  
    },
    {
        question:"How do you write the previous syntax to NOT be equal 7?",
        optionA:"if (i != 7)",
        optionB:"if i != 7",
        optionC:"if i <> 7",
        optionD:"if (i <> 7)",
        quizAnswer:"a"    
    },
    {
        question:"What is the correct syntax to start a FOR loop?",
        optionA:"for i=0; i <= 7; i++",
        optionB:"for (i=0, i <= 7, i++)",
        optionC:"for (i=0; i <= 7; i++)",
        optionD:"for [i=0; i <= 7; i++]",
        quizAnswer:"c"     
    },
    {
        question:"How do you write an array in Javascript",
        optionA:"var numList = [1,45,56]",
        optionB:"var numList = 1,45,56",
        optionC:"var numList = (1,45,56)",
        optionD:"var numList = 1 = 2 = 3",
        quizAnswer:"a"    
    },
    {
        question:"What event happens when the user clicks on an HTML element?",
        optionA:"onmouseclick",
        optionB:"onmouse",
        optionC:"onmouseover",
        optionD:"onclick",
        quizAnswer:"d"     
    },
    {
        question:"How do you declare a variable in Javascript?",
        optionA:"variable newVar =",
        optionB:"var = newVar",
        optionC:"var newVar = ",
        optionD:"newVar = variable",
        quizAnswer:"c"     
    },
    {
        question:"What does HTML stand for?",
        optionA:"Hypertext Markup Language",
        optionB:"Hyper Tell Marking Language",
        optionC:"Hypertext Mockup Language",
        optionD:"How To Model Language",
        quizAnswer:"a"     
    },
];
// get score from local storage
var storedScores = localStorage.getItem("scores");
var highScores = [];
// fill highScores array if any scores in local storage
if (storedScores != null) {
    highScores = JSON.parse(storedScores);
};
var startQuiz = document.querySelector("#startQuiz");
var count = 0;
var score = 0;
var time = 60;
var mainquiz = document.querySelector("#quiz");
var counter = '';
var answerFeedback = '';
var scoreList = document.querySelector("#scores");

// Timer display
var timerDisplay = document.querySelector("#timer");
timerDisplay.innerText = "Time:" + time;

// Quiz function
function quiz () {
    // if first question
    if (count === 0) {
        // start timer
        counter = setInterval(countdown,1000);
        // remove text and button from screen
        var start = document.querySelector("#startQuiz");
        var string = document.querySelector("#welcome");
        mainquiz.removeChild(start);
        mainquiz.removeChild(string);
    // if last question
    } else if (count === questions.length) {
        // clear question and buttons
        var question = document.querySelector("#question" + (count-1));
        var bnA = document.querySelector("#btnA" + (count-1));
        var bnB = document.querySelector("#btnB" + (count-1));
        var bnC = document.querySelector("#btnC" + (count-1));
        var bnD = document.querySelector("#btnD" + (count-1));
        var answer = document.querySelector("#ans" + (count-1));
        answer.innerText = answerFeedback;
        mainquiz.removeChild(question);
        mainquiz.removeChild(bnA);
        mainquiz.removeChild(bnB);
        mainquiz.removeChild(bnC);
        mainquiz.removeChild(bnD);
        // stop timer
        clearInterval(counter);
        // create end of quiz report
        var end = document.createElement("p");
        end.id = "welcome";
        score = score + time;
        end.innerText = "End of Quiz. Your score is " + score;
        mainquiz.appendChild(end);
        // create input for initials
        var initialsEnd = document.createElement("input");
        initialsEnd.type = "text";
        initialsEnd.placeholder = "Enter Initials";
        initialsEnd.id = "initials";
        mainquiz.appendChild(initialsEnd);

        var newGame = document.createElement("input");
        newGame.type = "button";
        newGame.id = "highscore";
        newGame.className = "btn";
        newGame.value = "Submit Score";
        mainquiz.appendChild(newGame);

        // function to get initials
        document.getElementById("highscore").addEventListener("click", getInput);
        return;
    } else {
        // remove question and buttons for all other questions
        var question = document.querySelector("#question" + (count-1));
        var bnA = document.querySelector("#btnA" + (count-1));
        var bnB = document.querySelector("#btnB" + (count-1));
        var bnC = document.querySelector("#btnC" + (count-1));
        var bnD = document.querySelector("#btnD" + (count-1));
        var answer = document.querySelector("#ans" + (count-1));
        mainquiz.removeChild(question);
        mainquiz.removeChild(bnA);
        mainquiz.removeChild(bnB);
        mainquiz.removeChild(bnC);
        mainquiz.removeChild(bnD);
        mainquiz.removeChild(answer);
    }
    // create question
    var q = document.createElement("p");
    q.innerText = questions[count].question;
    q.id = 'question' + count;
    mainquiz.appendChild(q);
    // create buttons
    var btnA = document.createElement("button");
    btnA.className = "btn";
    btnA.innerText = questions[count].optionA;
    btnA.id = "btnA" + count;
    mainquiz.appendChild(btnA);

    var btnB = document.createElement("button");
    btnB.className = "btn";
    btnB.innerText = questions[count].optionB;
    btnB.id = "btnB" + count;
    mainquiz.appendChild(btnB);

    var btnC = document.createElement("button");
    btnC.className = "btn";
    btnC.innerText = questions[count].optionC;
    btnC.id = "btnC" + count;
    mainquiz.appendChild(btnC);

    var btnD = document.createElement("button");
    btnD.className = "btn";
    btnD.innerText = questions[count].optionD;
    btnD.id = "btnD" + count;
    mainquiz.appendChild(btnD);
    // last question feedback
    var answer = document.createElement("p");
    answer.innerText = answerFeedback;
    answer.id = "ans" + count;
    mainquiz.appendChild(answer);

    var bnA = document.querySelector("#btnA" + count);
    var bnB = document.querySelector("#btnB" + count);
    var bnC = document.querySelector("#btnC" + count);
    var bnD = document.querySelector("#btnD" + count);
    // question counter
    count = count + 1;

    // click event for answer
    bnA.addEventListener("click", function(){newQuestion("a");});
    bnB.addEventListener("click", function(){newQuestion("b");});
    bnC.addEventListener("click", function(){newQuestion("c");});
    bnD.addEventListener("click", function(){newQuestion("d");});
    // countdown function
    function countdown() {

        time = time - 1;
        timerDisplay.innerText = "Time:" + time;
        // if time runs out
        if (time <= 0)
        {
            // stop timer
            clearInterval(counter);
            // remove question and buttons
            var question = document.querySelector("#question" + (count-1));
            var bnA = document.querySelector("#btnA" + (count-1));
            var bnB = document.querySelector("#btnB" + (count-1));
            var bnC = document.querySelector("#btnC" + (count-1));
            var bnD = document.querySelector("#btnD" + (count-1));
            var answer = document.querySelector("#ans" + (count-1));
            mainquiz.removeChild(question);
            mainquiz.removeChild(bnA);
            mainquiz.removeChild(bnB);
            mainquiz.removeChild(bnC);
            mainquiz.removeChild(bnD);
            mainquiz.removeChild(answer);

            // create game over report
            var end = document.createElement("p");
            end.id = "welcome";
            end.innerText = "You've ran out of time! Please try again";
            mainquiz.appendChild(end);
            var newGame = document.createElement("button");
            newGame.className = "btn";
            newGame.innerText = "Start New Game";
            newGame.id = "startQuiz";
            mainquiz.appendChild(newGame);
            // reset variables
            count = 0;
            score = 0;
            time = 60;
            // start new quiz
            newGame.addEventListener("click", quiz);
        }
    }
}
// function to count quiz variables
function newQuestion (a) {
    if (a === questions[count-1].quizAnswer) {
        score = score + 1;
        time = time + 1;
        answerFeedback = "Correct";
    } else {
        time = time - 5;
        answerFeedback = "Incorrect";
    }
    // start quiz function for next count
    return quiz();
};
// function to get initials
function getInput () {
    // get value of user input
    var userInput = document.getElementById("initials").value;
    userInput = userInput.toUpperCase();
    // user input check
    if (userInput == false) {
        window.alert("Please Enter Initials");
    } else {
        // highScore function call
        highScore (score, userInput);
    }
}

function highScore (a, b) {
    // initialize temporary score holder
    var scoreArray = { initials : b, score : a};
    // push new input to highScores array
    highScores.push(scoreArray);
    // sort scores
    highScores.sort(function(a, b){
        return b.score - a.score
    });
    // displayHighScores function call
    displayHighscores();
    // finishGame function call
    finishGame();
}
function finishGame () {
    // clear and reset elements on page
    var submitField = document.querySelector("#initials");
    var submitButton = document.querySelector("#highscore");
    var scoreAlert = document.querySelector("#welcome");
    var answer = document.querySelector("#ans" + (count-1));
    mainquiz.removeChild(answer);
    scoreAlert.innerText = "Welcome";
    mainquiz.removeChild(submitField);
    mainquiz.removeChild(submitButton);
    var newGame = document.createElement("button");
    newGame.className = "btn";
    newGame.innerText = "Start New Game";
    newGame.id = "startQuiz";
    mainquiz.appendChild(newGame);
    // reset variables
    count = 0;
    score = 0;
    time = 60;
    answerFeedback = '';
    // send scores to local storage
    var scores = localStorage.setItem("scores", JSON.stringify(highScores))
    // click event to start new quiz
    newGame.addEventListener("click", quiz);
}
// display function
function displayHighscores () {
    // loop for scores up to maximum 10
    for (i = 0; i < highScores.length && i < 10; i++) {
        // if this is the last score, create new element
        if (i === (highScores.length-1)) {
            var listItem = document.createElement("li");
            listItem.id = "hs" + i;
            listItem.className = "ordered"
            listItem.setAttribute("style", "display: inline");
            listItem.style.marginRight = "20px"
        // listItem.setAttribute("style", "list-style-type:number")
        listItem.innerText = (i+1) + ': ' + highScores[i].initials + ': ' + highScores[i].score;
        scoreList.appendChild(listItem);
        } else {
            var fillScore = document.querySelector("#hs" + i);
            // if this is the first time the page loads, create element
            if (fillScore == null) {
                var listItem = document.createElement("li");
                listItem.id = "hs" + i;
                listItem.className = "ordered"
                listItem.setAttribute("style", "display: inline");
                listItem.style.marginRight = "20px"
                listItem.innerText = (i+1) + ': ' + highScores[i].initials + ': ' + highScores[i].score;
                scoreList.appendChild(listItem);
                // otherwise fill element
            } else {
                fillScore.innerText = (i+1) + ': ' + highScores[i].initials + ': ' + highScores[i].score;
            }
        }
    }
};

displayHighscores();
startQuiz.addEventListener("click", quiz);