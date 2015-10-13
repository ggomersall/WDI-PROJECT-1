$(function(){

  var playerOneScore = 0;
  var playerTwoScore = 0;
  var winner
  var duckOneMove = document.getElementById("duck-one");
  var duckTwoMove = document.getElementById("duck-two");
  var duckThreeMove = document.getElementById("duck-three")
  var duckFourMove = document.getElementById("duck-four")
  var gunShot = new Audio ("./sounds/remington.mp3")
  var squawk = new Audio ("./sounds/squawk.mp3")
  var counter = 1;

  $(".game-reload").hide()
  var gameStart = document.getElementById("gamestart")
  $(".game-start").on("click", playerOneTurn);


  function playerOneTurn() {

    $(".game-info").fadeTo(0, 0);

    $(".game-start").fadeTo(0, 0, function(){
      $(this).attr("disabled", "disabled")
    });

    alert("player 1 get ready")

    $(".playone-ducks").on("click", function(){
      squawk.play()
      playerOneScore += 100;
      $("#player-one-score").text(playerOneScore);
      console.log("player one points =" + playerOneScore);
      
    })

      var tlone = new TimelineLite();
      tlone.to(duckOneMove, 1, {x:200, y:-400});
      tlone.to(duckOneMove, 1.7, {x:400, y:0});
      tlone.to(duckOneMove, 1.5, {x:600, y:-400});
      tlone.to(duckOneMove, 1.25, {x:750, y:0});

      //var duckTwoMove = document.getElementById("duck-two");

      var tltwo = new TimelineLite();
      tltwo.to(duckTwoMove, 1, {x:-200, y:-400});
      tltwo.to(duckTwoMove, 1.7, {x:-400, y:0});
      tltwo.to(duckTwoMove, 1.5, {x:-600, y:-400});
      tltwo.to(duckTwoMove, 1, {x:-750, y:0});


      // this sets the timeout for the current player game to end
      // then runs playerTwo Turn
      setTimeout(function(){  playerTwoTurn(); }, 6000);


  }

  function playerTwoTurn() {
    alert("player 2 get ready")

    $(".playtwo-ducks").on("click", function(){
      squawk.play()
      playerTwoScore += 100;
      $("#player-two-score").text(playerTwoScore);

      console.log("player two points =" + playerTwoScore)
      
    })

    var tlthree = new TimelineLite();
    tlthree.to(duckThreeMove, 1, {x:200, y:-400});
    tlthree.to(duckThreeMove, 1.7, {x:400, y:0});
    tlthree.to(duckThreeMove, 1.5, {x:600, y:-400});
    tlthree.to(duckThreeMove, 1.25, {x:750, y:0});

    //var duckTwoMove = document.getElementById("duck-two");

    var tlfour = new TimelineLite();
    tlfour.to(duckFourMove, 1, {x:-200, y:-400});
    tlfour.to(duckFourMove, 1.7, {x:-400, y:0});
    tlfour.to(duckFourMove, 1.5, {x:-600, y:-400});
    tlfour.to(duckFourMove, 1, {x:-750, y:0});


    setTimeout(function(){ getWinner() }, 6000);

    // alert("player one score = "+playerOneScore " vs " + "player two score "+playerTwoScore)

  }

  function getWinner(playerOneTurn, playerTwoTurn) {
    if(playerOneScore === playerTwoScore){
      $(".game-info").fadeTo(0, 1).text("It's a tie")

    } else if (playerOneScore > playerTwoScore) {
      $(".game-info").fadeTo(0, 1).text("Player One Wins The Game!!")
    } else {
      $(".game-info").fadeTo(0, 1).text("Player Two Wins The Game!!")
    }

    $(".game-reload").fadeTo(0, 1).text("Play Again ?").on("click", function(){
      location.reload();
    })

  }

  // $(".ducks").on("click", function(){
  //   // console.log("duck clicked!")
  //   //duckOneMove.hide()
  //   if (playerOneTurn) {
      
  //   } else {
  //     playerTwoScore += 100
  //     console.log("player one points =" + playerTwoScore)
  //   }
    
  // })

})


