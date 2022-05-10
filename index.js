
// console.log($('h1').css('color'));

// console.log($('h1').css('font-size'));


// $('h1').css('color', 'red');

// $("h1").addClass("big-title margin-50");

// $("h1").addClass("big-title margin-50");
//
// console.log($("h1").css ('margin'));

// $("h1").removeClass("big-title");

// $("h1").addClass("big-title");
// $ ("h1").text ("oops");

// $ ("button").text ("don't click me");

// $ ("button").html ("<em>hey<em>");
// console.log($ ('img').attr ("src"));
//
// $ ("a").attr ("href", "https://www.yahoo.com");
//
// console.log($ ('h1').attr ('class'));

// $("h1").click(function(){
//   $('h1').css('color', 'red');
// });

// for (var i=0;i<5; i++) {
//   document.querySelectorAll ("button")[i].addEventListener ("click", function() {
//     document.querySelector("h1").style.color ="purple";
//   });
// }

// $ ("button").click(function (){
//   $ ('h1').css ("color","red");
// });

// $('input').keypress (function (event){
//   console.log(event.key);
// });
//
// $(document).keypress (function (event){
//   $("h1").text(event.key);
// });

$ ("h1").on("mouseover", function(){
  $ ("h1").css ("color", "pink");
});

// $ ("button").on("click", function(){
//   $ ("h1").hide ();
// });

$ ("button").on("click", function(){
  $ ("h1").animate({opacity:0.5});
});
