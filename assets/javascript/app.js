function Game() {

    // Attributes - what the game has
    this.correctAnswers = 0;
    this.incorrectAnswers = 0;
    this.currentQuestionIndex = 0;
    this.triviaQuestions= [
        {
            question: 'assets/images/stowe.jpg', 
            answers: ["Kirkwood", "Killington", "Stowe", "Mammoth"],
            rightAnswer: "Stowe"
        }, {
            question: 'assets/images/bachelor.jpg', 
            answers: ["Bachelor", "Big Sky", "Stevens Pass", "Sun Valley"],
            rightAnswer: "Bachelor"
        }, {
            question: 'assets/images/abasin.png', 
            answers: ["Snowbird", "Arapahoe Basin", "Telluride", "Breckenridge"],
            rightAnswer: "Arapahoe Basin"
        }, {
            question: 'assets/images/mammoth.jpg', 
            answers: ["Hood", "Copper", "Bachelor", "Mammoth"],
            rightAnswer: "Mammoth"
        }, {
            question: 'assets/images/steamboat.jpg', 
            answers: ["Steamboat", "Crested Butte", "Nozawa Onsen", "Deer Valley"],
            rightAnswer: "Steamboat"
        }, {
            question: 'assets/images/alta.jpg', 
            answers: ["Mammoth", "Squaw Valley", "Alta", "Crystal Mountain"],
            rightAnswer: "Alta"
        }, {
            question: 'assets/images/zermatt.jpg', 
            answers: ["Perisher", "Zermatt", "Eldora", "Mt. Hood"],
            rightAnswer: "Zermatt"
        }, {
            question: 'assets/images/jackson.jpg', 
            answers: ["Taos", "Copper", "Snowbird", "Jackson Hole"],
            rightAnswer: "Jackson Hole"
        }, {
            question: 'assets/images/whistler-blackcomb.jpg', 
            answers: ["Crested Butte", "Whistler-Blackcomb", "Keystone", "Park City"],
            rightAnswer: "Whistler-Blackcomb"
        }, {
            question: 'assets/images/hunter.jpg', 
            answers: ["Hunter Mountain", "Boyne", "Mt. Rose", "Bear Mountain"],
            rightAnswer: "Hunter Mountain"
        }, {
            question: 'assets/images/sunvalley.jpg', 
            answers: ["Sun Valley", "Northstar", "Snowbird", "Steamboat"],
            rightAnswer: "Sun Valley"
        }, {
            question: 'assets/images/tomamu.jpg', 
            answers: ["Aspen", "Whistler-Blackcomb", "Tomamu", "Sierra-at-Tahoe"],
            rightAnswer: "Tomamu"
        }, {
            question: 'assets/images/bigsky.jpg', 
            answers: ["Squaw-Alpine", "Vail", "Stowe", "Big Sky"],
            rightAnswer: "Big Sky"
        }, {
            question: 'assets/images/crestedbutte.jpg', 
            answers: ["Winter Park", "Brighton", "Crested Butte", "Mt. Baker"],
            rightAnswer: "Crested Butte"
        },{
            question: 'assets/images/sugarloaf.jpg', 
            answers: ["Sugar Loaf", "Stevens Pass", "Heavenly", "Purgatory"],
            rightAnswer: "Sugar Loaf"
        }, {
            question: 'assets/images/kirkwood.jpg', 
            answers: ["Silverton", "Kirkwood", "Wolf Creek", "Breckenridge"],
            rightAnswer: "Kirkwood"
        }
    
    ];

    var questionTimer = 20;
    var intervalId = null;

    // functions what the game can do
    this.startTimer = function() {
        questionTimer = 30;
        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);
    }

    function stop() {
        clearInterval(intervalId);
        questionTimer = [];
        $("#timer").text(questionTimer);
    }

    function decrement() {
        $("#timer").empty();
        $("#timer").append("<h2>" + questionTimer + "</h2>");
        questionTimer--;
        if (questionTimer === -2) {
            stop();
            alert("Time is over!")
            nextButton();

        }
    }

};

//end of "game" function

// $(document).ready(function() {???????

var currentGame = new Game();
var currentQuestion

$("#next").hide();
$("#question-container").hide();
$("#answer-container").hide();

// On clicking start button, below function will be activated.

$("#start").on("click", function () {
    $("#start").hide();
    $("#instructions").hide();
    $("#next").show();
    $("#question-container").show();
    $("#answer-container").show();
    currentGame.startTimer(); //Calling the timer function
    var i = currentGame.currentQuestionIndex 
    $("#question-container").attr("src", currentGame.triviaQuestions[i].question);
    
    
    $("#answer1").text(currentGame.triviaQuestions[0].answers[0]);
    $("#answer2").text(currentGame.triviaQuestions[0].answers[1]);
    $("#answer3").text(currentGame.triviaQuestions[0].answers[2]);
    $("#answer4").text(currentGame.triviaQuestions[0].answers[3]);
});
    
    
    
    $("#next").on("click", function() {
        
        quizScore();

        if (currentGame.currentQuestionIndex === 15) {
            endGameRevealScore();
        }
        
        else {

        $('input[name=radio-1]').attr('checked', false);
        currentGame.startTimer();
        
        currentGame.currentQuestionIndex = (currentGame.currentQuestionIndex + 1);
        $("#question-container").attr("src", currentGame.triviaQuestions[currentGame.currentQuestionIndex].question);
            
        $("#answer1").text(currentGame.triviaQuestions[currentGame.currentQuestionIndex].answers[0]);
        $("#answer2").text(currentGame.triviaQuestions[currentGame.currentQuestionIndex].answers[1]);
        $("#answer3").text(currentGame.triviaQuestions[currentGame.currentQuestionIndex].answers[2]);
        $("#answer4").text(currentGame.triviaQuestions[currentGame.currentQuestionIndex].answers[3]);
    }

    });

    function quizScore() {
        
            var answer = currentGame.triviaQuestions[currentGame.currentQuestionIndex].rightAnswer
            console.log("checking answer value " + answer);
            
            // Using :checked to see which answer (what radio) the user guessed.
            // var guess = $('input[name=radio-1]:checked').val();
            var guess = currentGame.triviaQuestions[currentGame.currentQuestionIndex].answers[$('input[name=radio-1]:checked').val()];
            console.log("checking guess value " + guess);
            
            //Comparing and updating the scores behind scenes
        
            if (answer === guess) {
                currentGame.correctAnswers++;
            } else {
                currentGame.incorrectAnswers++;
            }
            console.log("win " + currentGame.correctAnswers);
            console.log("loss " + currentGame.incorrectAnswers);
        };

    function endGameRevealScore() {
        $("#question-container").hide();
        $("#answer-container").hide();
        $("#timer").hide();
        $("#next").hide();
        
        alert("Correct Answers: " + currentGame.correctAnswers);
        alert("Incorrect Answers: " + currentGame.incorrectAnswers);
                
    };
}