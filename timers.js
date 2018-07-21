console.log('conected');

let corretAnswers = 0;
let incorrectAnswers = 0;
let unansweredQuestions = 0;
let slectedAnswers = [];
var count=30;


let questions = [{
    testQuestion: "Queston One",
    Answers: ['AnsOne', 'AnsTwo', 'AnsThree', 'AnsFour'],
    CorrectAnswer: "AnsTwo"
},
{
    testQuestion: "Queston Two",
    Answers: ['AnsOne', 'AnsTwo', 'AnsThree', 'AnsFour'],
    CorrectAnswer: "AnsThree"
},
{
    testQuestion: "Queston Three",
    Answers: ['AnsOne', 'AnsTwo', 'AnsThree', 'AnsFour'],
    CorrectAnswer: "AnsFour"
}]

$(document).on('click', '#start', () =>{
    console.log("test");
    start();
});

//hides the start button, makes questions appear
let start = () => {
    $('#start').hide();
    //timer
    var counter=setInterval(timer, 1000); //1000 will  run it every 1 second
    
    //for loop for the question
    for (let i = 0; i < questions.length; i++) {
        console.log(questions[i].testQuestion);
        $('#questions').append('<div id="question' + i + '" data-answer="' + questions[i].CorrectAnswer + '">' + questions[i].testQuestion + '</div>')
        $('#questions').append('<br>')
        
        //for loop for answers
        let answersArray = questions[i].Answers;
        for (let j = 0; j < answersArray.length; j++) {
            $('#questions').append('<input type="radio" value="' + answersArray[j]+'">')
            $('#questions').append(answersArray[j])

            // <input type="text" name="firstname" value="Mickey">

            $('#questions').append('<br>')
        }
        $('#questions').append('<br>')

    }//for loop ends
    $('#questions').append('<input type="submit" value="Submit">')
};//end start function

$(document).on('submit', '#questions', (event) => {
    event.preventDefeault()
    console.log('test submit');
})

//defines the timer function
function timer() {
  count=count-1;
  if (count <= 0){
    //  clearInterval(counter);
    //  //counter ended, do something here
    console.log('time is up');
    return;
    }
  console.log(count);
  $("#timer").html("Time Remaining " + count + " secs")
}

// do google search for jquery submit and update function 

//auto submit when time is up

//put final scores in div

//look into clearinterval







