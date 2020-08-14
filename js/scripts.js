$(document).ready(function() {
  $(".btn").click(function() {
    $("#programing_quiz").show();
  });
  
  $("programing_quiz").submit(function(event) {
    const answer = parseInt($("secret_question").val());
   
   
    if(answer === 1) {
    $("#language_1").show();
    } 
    else if (answer === 2) {
    $("#language_2").show();
    } 
    else if (answer === 3) {
    $("#language_3").show();
    }
    event.preventDefault();
  });
});