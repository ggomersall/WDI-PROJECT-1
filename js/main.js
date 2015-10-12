$(function(){


  var duckHunt = {}

  duckHunt.setup = function(){
    var playerOneScore = 0;
    var playerTwoScore = 0;
    // var duckPoints = 100;
    var winner
    var duckOneMove = document.getElementById("duck-one");
    var duckTwoMove = document.getElementById("duck-two");

    var counter = 1;
    var gameStart = document.getElementById("gamestart")
    gameStart.addEventListener("click", duckHunt.playGame);
  }



  duckHunt.playGame = function(){
    $(".game-start").on("click", function(){

      var tlone = new TimelineLite();
      tlone.to(duckOneMove, 5, {x:200, y:-400});
      tlone.to(duckOneMove, 5, {x:400, y:0});
      tlone.to(duckOneMove, 5, {x:600, y:-400});
      tlone.to(duckOneMove, 1.25, {x:750, y:0});

      //var duckTwoMove = document.getElementById("duck-two");

      var tltwo = new TimelineLite();
      tltwo.to(duckTwoMove, 1, {x:-200, y:-400});
      tltwo.to(duckTwoMove, 1.2, {x:-400, y:0});
      tltwo.to(duckTwoMove, 1.5, {x:-600, y:-400});
      tltwo.to(duckTwoMove, 1, {x:-750, y:0});


    })
  }

  duckHunt.setup()
})