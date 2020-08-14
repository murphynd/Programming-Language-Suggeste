
function tally(answer1, answer2, answer3, answer4, answer5) {
  count [1] = [answer1,answer2,answer3,answer4,answer5];
  count [2] = [answer1,answer2,answer3,answer4,answer5];
  count [3] = [answer1,answer2,answer3,answer4,answer5];
  return count;
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
    alert(result)

    event.preventDefault();
  });
});