$(document).ready(function() {
  $(".btn").click(function() {
    $("#programing_quiz").show();
  });
  
  $("form#programing_quiz").submit(function(event) {
    const nameInput = $("#name").val();
    const result = parseInt($("#question1").val());
  
    $(".name").append(nameInput);

    if(result === 1) {


    $("#language_1").show();
    $("#programing_quiz").hide();
    $(".btn").click(reset());
    } 
    else if (result === 2) {



    $("#language_2").show();
    $("#programing_quiz").hide();
    $(".btn").click(reset());
    } 
    else if (result === 3) {



    $("#language_3").show()
    $("#programing_quiz").hide();
    }
    event.preventDefault();
  });
});