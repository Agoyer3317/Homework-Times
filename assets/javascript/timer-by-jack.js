console.log('conected');

let runningTallyCorrect = 0;
let runningTallyIncorrect = 0;
let unansweredQuestions = 0;
let slectedAnswers = [];
var count=30;
let counter;

let questions = [{
    testQuestion: "Which fictional city is the home of Batman?",
    Answers: ['AnsOne', 'Gotham City', 'AnsThree', 'AnsFour'],
    CorrectAnswer: "Gotham City"
},
{
    testQuestion: "In which sport would you perform the Fosbury Flop",
    Answers: ['AnsOne', 'AnsTwo', 'The high jump', 'AnsFour'],
    CorrectAnswer: "The high jump"
},
{
    testQuestion: "Spinach is high in which mineral?",
    Answers: ['AnsOne', 'AnsTwo', 'AnsThree', 'Iron'],
    CorrectAnswer: "Iron"
}]

$(document).on('click', '#start', () =>{
    console.log("test");
    start();
});

//hides the start button, makes questions appear
let start = () => {
    $('#start').hide();
    $('#results').html('');
    unansweredQuestions = 0;
    runningTallyCorrect = 0;
    runningTallyIncorrect = 0;
    //timer
     counter=setInterval(timer, 1000); //1000 will  run it every 1 second
    
    //for loop for the question
    for (let i = 0; i < questions.length; i++) {
        console.log(questions[i].testQuestion);
        //add class='question'
        $('#questions').append('<div class="question-css" id="question' + i + '" data-answer="' + questions[i].CorrectAnswer + '">' + questions[i].testQuestion + '</div>')
        $('#questions').append('<br>')
        
        //for loop for answers
        let answersArray = questions[i].Answers;
        for (let j = 0; j < answersArray.length; j++) {
            $('#question' + i).append('<br>')
            $('#question' + i).append('<div class="answer-css"><input name="answer' + i + '" type="radio" value=" + answersArray[j]+">' + answersArray[j] + '</div>')
            //$('#question' + i).append(answersArray[j])

            // <input type="text" name="firstname" value="Mickey">

            $('#question' + i).append('<br>')
        }
        $('#questions').append('<br>')
        
    }//for loop ends
    debugger;
    $('#questions').append('<input type="submit" value="Submit">')
};//end start function

$('#questions').on('submit', function(event) {
    event.preventDefault()
    tallyScores();
});//closes submit

let tallyScores = () => {
    for (let i = 0; i < questions.length; i++) {
        let answerSelected = ($('input[name="answer' + i + '"]:checked').val());
        let chosenOne = questions[i].CorrectAnswer;
        console.log(answerSelected);
     //    console.log(chosenOne);
       if (answerSelected === chosenOne) {
           runningTallyCorrect++;
       } else if (!answerSelected){
           unansweredQuestions++;
       } else{
           runningTallyIncorrect++;
       }
     }//closes forloop
     clearInterval(counter);
     finished();
     console.log(runningTallyCorrect, runningTallyIncorrect, unansweredQuestions);
}//closes tallyscores

//defines the timer function
function timer() {
  count=count-1;
  if (count <= 0){
    //  clearInterval(counter);
    //  //counter ended, do something here
    console.log('time is up');
    tallyScores();
    return;
    }
  console.log(count);
  $("#timer").html("Time Remaining " + count + " secs")
}

let finished = () => {
    $('#questions').html('');
    $('#results').append('Number of Answers Correct: ' + runningTallyCorrect);
    $('#results').append("<br>")
    $('#results').append('Number of Incorrect Answers: ' + runningTallyIncorrect);
    $('#results').append("<br>")
    $('#results').append('Number of Unanswered Questions: ' + unansweredQuestions);
    $('#start').show();
    
}//closes finished
// do google search for jquery submit and update function 

//auto submit when time is up

//put final scores in div

//look into clearinterval

//clear tim





