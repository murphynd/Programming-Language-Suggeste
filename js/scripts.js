$(document).ready(function() {
  $(".btn").click(function() {
    $("#programing_quiz").show();
    $(".jumbotron").hide();
  });

  $("form#programing_quiz").submit(function(event) {
    event.preventDefault();
    
    var score=[]
    $("input:check[name=skill]:checked").each(function(){
      score.push($(this).val());
    });
    console.log(score);
  });
});

//     const totalScore = score.reduce((a,b,c) => a + b + c, 0)
//     console.log(totalScore)

//       if (totalScore > num){
//       $("#language_1").show();
//       $("#programing_quiz").hide();
//       } else if (totalScore === 2) {
//         $("#language_2").show();
//         $("#programing_quiz").hide();
//       } else if (totalScore === 3) {
//         $("#language_3").show()
//         $("#programing_quiz").hide();
//       }
//       const nameInput = $("#name").val();
//       $(".name").append(nameInput);
//   });

//     $(".btn2").click(function() {
//       $("#language_1").hide();
//       $("#language_2").hide();
//       $("#language_3").hide();
//       $("#programing_quiz").trigger("reset").show();
//     });
//  });

//   $("form#programing_quiz").submit(function(event) {
//     const nameInput = $("#name").val();
//     const result = parseInt($("#question1").val());
  
//     $(".name").append(nameInput);

//     if(result === 1) {
//     $("#language_1").show();
//     $("#programing_quiz").hide();
//     } 
//     else if (result === 2) {
//     $("#language_2").show();
//     $("#programing_quiz").hide();
//     } 
//     else if (result === 3) {
//     $("#language_3").show()
//     $("#programing_quiz").hide();
//     }
//     event.preventDefault();
//   });



//   $(".btn2").click(function() {
//     $("#language_1").hide();
//     $("#language_2").hide();
//     $("#language_3").hide();
//     $("#programing_quiz").trigger("reset").show();
//   });
// });