$(document).ready(function() {
  $(".btn").click(function() {
    $("#programing_quiz").show();
  });
  
  $("form#programing_quiz").submit(function(event) {
    const nameInput = $("#name").val();
    const answer = parseInt($("#question").val());
   
    $(".name").append(nameInput);

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