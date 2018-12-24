function Game() {

    // Attributes - what the game has
    this.correctAnswers = 0;
    this.inCorrectAnswers = 0;
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
            question: 'assets/images/abasin.jpg', 
            answers: ["Snowbird", "Arapahoe Basin", "Telluride", "Breckenridge"],
            rightAnswer: "Arapahoe Basin"
        }, {
            question: 'assets/images/mammoth.jpg', 
            answers: ["Hood", "Copper", "Bachelor", "Mammoth"],
            rightAnswer: "Mammoth"
        }, {
            question: 'assets/images/steamboat.jpg', 
            answers: ["", "", "", ""],
            rightAnswer: "Steamboat"
        }, {
            question: 'assets/images/alta.jpg', 
            answers: ["", "", "", ""],
            rightAnswer: "Alta"
        }, {
            question: 'assets/images/zermatt.jpg', 
            answers: ["", "", "", ""],
            rightAnswer: "Zermatt"
        }, {
            question: 'assets/images/jackson.jpg', 
            answers: ["", "", "", ""],
            rightAnswer: "Jackson"
        }, {
            question: 'assets/images/whistler-blackcomb.jpg', 
            answers: ["", "", "", ""],
            rightAnswer: "Whistler-Blackcomb"
        }, {
            question: 'assets/images/hunter.jpg', 
            answers: ["", "", "", ""],
            rightAnswer: "Hunter"
        }, {
            question: 'assets/images/sunvalley.jpg', 
            answers: ["", "", "", ""],
            rightAnswer: "Sun Valley"
        }, {
            question: 'assets/images/tomamu.jpg', 
            answers: ["", "", "", ""],
            rightAnswer: "Tomamu"
        }, {
            question: 'assets/images/bigsky.jpg', 
            answers: ["", "", "", ""],
            rightAnswer: "Big Sky"
        }, {
            question: 'assets/images/crestedbutte.jpg', 
            answers: ["", "", "", ""],
            rightAnswer: "Crested Butte"
        },{
            question: 'assets/images/sugarloaf.jpg', 
            answers: ["", "", "", ""],
            rightAnswer: "Sugar Loaf"
        }, {
            question: 'assets/images/kirkwood.jpg', 
            answers: ["", "", "", ""],
            rightAnswer: "Kirkwood"
        }
    
    ];

    var questionTimer = 20;
    var intervalId = null;

    // functions what the game can do
    this.startTimer = function() {
        questionTimer = 20;
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
            quizScore();
        }
    }
    function quizScore() {
        
        var answer = triviaQuestions[currentQuestionIndex].rightAnswer
        
        // For selects, checkboxes and radio buttons, we can use :checked to select the right element.
        var guess = $("input[name='question-" + currentQuestionIndex + "']:checked").attr("value");
        
        //Comparing and updating the scores behind scenes
    
        if (answer === guess) {
            correctAnswers++;
        } else {
            inCorrectAnswers++;
        }
    }

    function endGameRevealScore() {

    }

};

//end of "game" function

// $(document).ready(function() {???????

var currentGame = new Game();

$("#next").hide();

// On clicking start button, below function will be activated.

$("#start").on("click", function () {
    $("#start").hide();
    $("#next").show();
    currentGame.startTimer(); //Calling the timer function
    var i = currentGame.currentQuestionIndex 
    $("#question-container").attr("src", currentGame.triviaQuestions[i].question);
    
    
    $("#answer1").text(currentGame.triviaQuestions[0].answers[0]);
    $("#answer2").text(currentGame.triviaQuestions[0].answers[1]);
    
    
    
    
    // var input = $("<input>");
    //         input.attr("type", "radio"); 

    //          input.attr("name", "answer1");
    //         //input.attr("value", currentGame.triviaQuestions[0].answers[0]);
    //         $("#answer-container").append(input);
    //         $("#answer-container").appendTo(currentGame.triviaQuestions[0].answers[0]);
    //         $("#answer-container").appendTo(currentGame.triviaQuestions[0].answers[1]);
    //         $("#answer-container").appendTo(currentGame.triviaQuestions[0].answers[2]);
    //         $("#answer-container").appendTo(currentGame.triviaQuestions[0].answers[3]);
    
    //     for (var j = 0; j < currentGame.triviaQuestions[i].answers.length; j++) {
    //         var input = $("<input>");
    //         input.attr("type", "radio"); 

    //         // input.attr("name", "question-" + j);
    //         input.attr("value", currentGame.triviaQuestions[i].answers[j]);
    //         $("#answer-container").append(input);
    //         $("#answer-container").append(currentGame.triviaQuestions[i].answers[j]);

    //     }
    })
    
    $("#next").on("click", function () {
        currentGame.startTimer(); //Calling the timer function
        
        for (var i = 1; i < currentGame.triviaQuestions.question.length; i++);
        console.log("questions length :: " + currentGame.triviaQuestions.length);
        $("#question-container").attr("src", currentGame.triviaQuestions[i].question);
            
        for (var i = 0; i < currentGame.triviaQuestions[i].answers.length; i++) {
                var input = $("<input>"); // Defining the radio button and assigning attributes.
                input.attr("type", "radio");
                input.attr("name", "question-" + i);
                input.attr("value", currentGame.triviaQuestions[i].answers[i]);
                $("#answers-radios").text(input).text(currentGame.triviaQuestions[i].answers[i]); //Here we are appending the radio button to each answers beloging to each question.
            }
        })
