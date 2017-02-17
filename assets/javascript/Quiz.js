/**
 * Created by hanifa on 2/13/17.
 */

function Quiz(questions){
    this.score =0;
    this.questions = questions;
    this.questionIndex =0;
    this.wrongAnswer =0;
    this.quesTionsTimedOut =0;
    this.wrongCounts =0;
    this.skipCount =0;

}

Quiz.prototype.getQuestionIndex =function(){
    return this.questions[this.questionIndex];
}
Quiz.prototype.isended = function(){
   return this.questions.length === this.questionIndex;
}

Quiz.prototype.quess = function (choice) {

    $(".button").hide();
    $("#decision").hide();

    if(this.getQuestionIndex().getCorrectAnswer(choice)){
        $(".answerresults1").text("Good Job");
        $(".answerresultimg1").show();
        console.log("THis is the answer you selected "+choice);
        this.score++;
    }

    else if(choice === "skip"){
        $(".answerresults1").text("Work With Time");
        $(".answerresultimg2").show();
        this.skipCount++;
    }

    else {
        $(".answerresults1").text("Study Some More");
        $(".answerresultimg3").show();
        this.wrongCounts++;
    }

    ++this.questionIndex;
};

function getNumberOfCorrectAnswers(){

}

function getNumberOfWrongAnswers(){

}
