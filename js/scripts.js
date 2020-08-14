
function tally(answer1, answer2, answer3, answer4, answer5) {
  count = [answer1,answer2,answer3,answer4,answer5];
  return count;
  alert return;
}

$(document).ready(function() {
  $(".btn").click(function() {
    $("#programing_quiz").show();
  });
  
  $("form#programing_quiz").submit(function(event) {
    const nameInput = $("#name").val();
    const answer1 = parseInt($("#question1").val());
    const answer2 = parseInt($("#question2").val());
    const answer3 = parseInt($("#question3").val());
    const answer4 = parseInt($("#question4").val());
    const answer5 = parseInt($("#question5").val());
    const result = tally(answer1, answer2, answer3, answer4, answer5);

   
    $(".name").append(nameInput);

    if(result === 1) {


    $("#language_1").show();
    $("#programing_quiz").hide();
    } 
    else if (result === 2) {



    $("#language_2").show();
    $("#programing_quiz").hide();
    } 
    else if (result === 3) {



    $("#language_3").show()
    $("#programing_quiz").hide();
    }
    event.preventDefault();
  });
});