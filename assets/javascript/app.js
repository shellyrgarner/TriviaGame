$(document).ready(function () {

    $(".startBtn").on("click", function () {
        $(this).hide();

        // $( ".hide" ).show();
        // $(.h1).hide();

        startQuestions();
        // setTimer();      

    });
});

function startQuestions() {

    $(".hide").show();

    var totalTime = 15;
    var timeStop = setInterval(timer, 1000);
    function timer() {

        if (totalTime == -1) {

            // console.log("done");
            $("#time-left").append("<h2>Time's Up!</h2>");
            $(".hide").hide();
            clearInterval(timeStop);
            results();
        }
        else {
            $("#time-left").html("<h2>Time Remaining: " + totalTime + " Seconds</h2>");
            totalTime--;
        }
    };
};

function results() {
    var correctAnswers = 0;
    var wrongAnswers = 0;

    if ($('input[name=q1]:checked').val() == "true") {
        correctAnswers++;
    } else if ($('input[name=q1]:checked').val() == "false") {
        wrongAnswers++;
    } else {
        wrongAnswers++;
    }

    if ($('input[name=q2]:checked').val() == "true") {
        correctAnswers++;
    } else if ($('input[name=q2]:checked').val() == "false") {
        wrongAnswers++;
    } else {
        wrongAnswers++;
    }

    if ($('input[name=q3]:checked').val() == "true") {
        correctAnswers++;
    } else if ($('input[name=q3]:checked').val() == "false") {
        wrongAnswers++;
    } else {
        wrongAnswers++;
    }

    if ($('input[name=q4]:checked').val() == "true") {
        correctAnswers++;
    } else if ($('input[name=q4]:checked').val() == "false") {
        wrongAnswers++;
    } else {
        wrongAnswers++;
    }

    if ($('input[name=q5]:checked').val() == "true") {
        correctAnswers++;
    } else if ($('input[name=q5]:checked').val() == "false") {
        wrongAnswers++;
    } else {
        wrongAnswers++;
    }

    //  $("#correct").html("<h2>Correct:</h2> " + correctAnswers);
    //  $("#wrong").append("<h2>Wrong:</h2> " + wrongAnswers);

    $("#hide").show();
    $("#correct").html(correctAnswers);
    $("#wrong").append(wrongAnswers);
}







