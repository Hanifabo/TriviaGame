
var total_second;
var t_minutes;
var t_seconds;
var stopTimeer;
total_second = total_second*10;
t_minutes = parseInt(total_second/60);
t_seconds = parseInt(total_second%60);

var questions =[

    new Questions("Where was the 1986 World Cup held?",["Ghana","England","Mexico","USA","skip"],"Mexico",60),

    new Questions("Which of these players never captained England's senior team: ",["Peter Beardsley,","Paul Ince","Gordon Banks","Bobby Charlton","skip"],"Gordon Banks",60),

    new Questions("Where and when were the three World Cup tournaments that England failed to qualify for after 1966?",["Germany 1974","Argentina 1978","USA 1994","South Africa 2010","skip"],"Argentina 1978",60),

    new Questions("What is the minimum number of players per team that FIFA allows during a football game?",["6 players","7 players","8 players","no minimum number ","skip"],"7 players",60),

    new Questions("Which law is not one of the 17 individual FIFA laws of the game?",["Goal Kick","Yellow and red card","Play Start and Restart","Method of Scoring","skip"],"Play Start and Restart",60)

];

var  quiz = new Quiz(questions);

function populate(){

    if(quiz.isended()){
        showScores();
    }

    else {
        console.log("THIS IS THE QUESTION NUMBER: "+quiz.questionIndex+"  and the number of questions are: "+quiz.questions.length);
        $(".answerresults1").hide();
        $(".pictureSizer").hide();
        //show questions
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        console.log("THE QUESTION INDEX BEFORE LOOP")
        var maltchoice = quiz.getQuestionIndex().choice;

        total_second = quiz.getQuestionIndex().quizTime;
        console.log("Questin selected time:  "+total_second);

        for(var i =0; i < maltchoice.length; i++){
            var element = document.getElementById("choice"+i);
            element.innerHTML = maltchoice[i];
            $(".button").show();
            $("#decision").show();
            console.log(maltchoice[i]);

            quizTimer("btn"+i, maltchoice[i]);
            showPregress();
        }

    }

}

function  showScores() {

    $("#quizBoard").hide();
    $("#categoryConfirmationBoard").show();
    var gameOver = document.getElementById("scores");
    var results = quiz.score;
    gameOver.innerHTML=results;

    var gameOverQustions = document.getElementById("totalQuestions");
    var gmquestions = quiz.questions.length;
    gameOverQustions.innerHTML=gmquestions;

    var gameOverSkip = document.getElementById("skipQuestions");
    var skipQstns = quiz.skipCount;
    gameOverSkip.innerHTML=skipQstns;

    var gameOverWrongQtns = document.getElementById("WrongAnswer");
    var wrongAnswer = quiz.wrongCounts;
    gameOverWrongQtns.innerHTML=wrongAnswer;

    $(".categoryboard").hide();
    $("#startTest").hide();
    $("#restart").show();
    $("#qstnDeatals").show();
    console.log("THIS IS YOUR SCORE "+quiz.score);

}

function skipQuestion() {
    var button = document.getElementById("btn4");
    button.click();

    myStopFunction();
    console.log("QUESTION SKIPPED");
    populate();
}

function showPregress() {
       var currentQuestionNumber = quiz.questionIndex+1;
       $("#crrnNumber").text(currentQuestionNumber);
        $("#ttlqstns").text(quiz.questions.length);

       console.log("THIS IS "+currentQuestionNumber+" of" + quiz.questions.length);
}

function guessPopulate(guessed) {
    quiz.quess(guessed);
    myStopFunction();
    $("#answerresults1").hide();
    $(".answerresultimg").hide();
    populate();
}

function myStopFunction() {
    clearTimeout(stopTimeer);
    total_second = 0;
}

function quizTimer(id,guessed) {

    var showTime = document.getElementById("clockdisplay");
    showTime.innerHTML = t_seconds+" seconds remains";

    var button = document.getElementById(id);

    if(button){
        button.addEventListener("click", function(){guessPopulate(guessed)}, false);
    }

    if(total_second <= 0){
        skipQuestion(guessed);

    }else{

        total_second = total_second -1;
        t_minutes = parseInt(total_second/60);
        t_seconds = parseInt(total_second%60);
        stopTimeer = setTimeout("quizTimer()",1000);

    }

}

function clickToStartQuiz() {
    var button = document.getElementById("startTest");
    button.onclick = function(){
        $("#Selecct_question_cat").hide();
        $("#categoryConfirmationBoard").hide();
        $("#quizBoard").show();
        populate();
    };
}

$("#quizBoard").hide();
$("#restart").hide();
$("#qstnDeatals").hide();

$(".answerresults1").hide();
$(".answerresultimg1").hide();
$(".answerresultimg2").hide();
$(".answerresultimg3").hide();

clickToStartQuiz();

var button = document.getElementById("restart");
button.onclick = function(){
location.reload();
};