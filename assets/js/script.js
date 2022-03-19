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
        optionC:"var newVar = ''",
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
var highScores = [];
var startQuiz = document.querySelector("#startQuiz");
var count = 0;
var score = 0;
var time = 60;


function quiz () {
    var mainquiz = document.querySelector("#quiz");
    if (count === 0) {
        var counter = setInterval(countdown,1000);
        var start = document.querySelector("#startQuiz");
        mainquiz.removeChild(start);
    } else if (count === questions.length) {
        var question = document.querySelector("#question" + (count-1));
        var bnA = document.querySelector("#btnA" + (count-1));
        var bnB = document.querySelector("#btnB" + (count-1));
        var bnC = document.querySelector("#btnC" + (count-1));
        var bnD = document.querySelector("#btnD" + (count-1));
        mainquiz.removeChild(question);
        mainquiz.removeChild(bnA);
        mainquiz.removeChild(bnB);
        mainquiz.removeChild(bnC);
        mainquiz.removeChild(bnD);

        var end = document.createElement("p");
        end.innerText = "End of Quiz";
        mainquiz.appendChild(end);
        return;
    } else {
        var question = document.querySelector("#question" + (count-1));
        var bnA = document.querySelector("#btnA" + (count-1));
        var bnB = document.querySelector("#btnB" + (count-1));
        var bnC = document.querySelector("#btnC" + (count-1));
        var bnD = document.querySelector("#btnD" + (count-1));
        mainquiz.removeChild(question);
        mainquiz.removeChild(bnA);
        mainquiz.removeChild(bnB);
        mainquiz.removeChild(bnC);
        mainquiz.removeChild(bnD);
    }

    var q = document.createElement("p");
    q.innerText = questions[count].question;
    q.id = 'question' + count;
    mainquiz.appendChild(q);

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

    var bnA = document.querySelector("#btnA" + count);
    var bnB = document.querySelector("#btnB" + count);
    var bnC = document.querySelector("#btnC" + count);
    var bnD = document.querySelector("#btnD" + count);
    count = count + 1;

    
    bnA.addEventListener("click", function(){newQuestion("a");});
    bnB.addEventListener("click", function(){newQuestion("b");});
    bnC.addEventListener("click", function(){newQuestion("c");});
    bnD.addEventListener("click", function(){newQuestion("d");});

    function countdown() {

        time = time - 1;
        if (time <= 0)
        {
            clearInterval(counter);
            return;
        }
        console.log(time);
    }
}

function newQuestion (a) {
    if (a === questions[count-1].quizAnswer) {
        score = score + 1;
    }
    console.log(score);
    return quiz();
}

// function countdown() {

//     time = time - 1;
//     if (time <= 0)
//     {
//         clearInterval(counter);
//         return;
//     }
//     console.log(time);
// }


startQuiz.addEventListener("click", quiz);