/**
 * Created by hanifa on 2/13/17.
 */
function  Questions(text, choice, answer, quizTime) {
    this.text = text;
    this.choice = choice;
    this.answer = answer;
    this.quizTime = quizTime;
}
Questions.prototype.getCorrectAnswer = function (yourAnswer) {
    return yourAnswer === this.answer;
}