$(function(){

  var playerOneScore = 0;
  var playerTwoScore = 0;
  // var duckPoints = 100;
  var winner
  var duckOneMove = document.getElementById("duck-one");
  var duckTwoMove = document.getElementById("duck-two");
  var duckThreeMove = document.getElementById("duck-three")
  var duckFourMove = document.getElementById("duck-four")

  var counter = 1;
  var gameStart = document.getElementById("gamestart")
  $(".game-start").on("click", playerOneTurn);


  function playerOneTurn() {

    alert("player 1 get ready")
    $(".playone-ducks").on("click", function(){
      playerOneScore += 100
      console.log("player one points =" + playerOneScore)
      
    })

      var tlone = new TimelineLite();
      tlone.to(duckOneMove, 1, {x:200, y:-400});
      tlone.to(duckOneMove, 1.2, {x:400, y:0});
      tlone.to(duckOneMove, 1.5, {x:600, y:-400});
      tlone.to(duckOneMove, 1.25, {x:750, y:0});

      //var duckTwoMove = document.getElementById("duck-two");

      var tltwo = new TimelineLite();
      tltwo.to(duckTwoMove, 1, {x:-200, y:-400});
      tltwo.to(duckTwoMove, 1.2, {x:-400, y:0});
      tltwo.to(duckTwoMove, 1.5, {x:-600, y:-400});
      tltwo.to(duckTwoMove, 1, {x:-750, y:0});


      // this sets the timeout for the current player game to end
      // then runs playerTwo Turn
      setTimeout(function(){  playerTwoTurn(); }, 7000);


  }

  function playerTwoTurn() {
    alert("player 2 get ready")

    $(".playtwo-ducks").on("click", function(){
      // console.log("duck clicked!")
      //duckOneMove.hide()
      playerTwoScore += 100
      console.log("player two points =" + playerTwoScore)
      
    })

    var tlthree = new TimelineLite();
    tlthree.to(duckThreeMove, 1, {x:200, y:-400});
    tlthree.to(duckThreeMove, 1.2, {x:400, y:0});
    tlthree.to(duckThreeMove, 1.5, {x:600, y:-400});
    tlthree.to(duckThreeMove, 1.25, {x:750, y:0});

    //var duckTwoMove = document.getElementById("duck-two");

    var tlfour = new TimelineLite();
    tlfour.to(duckFourMove, 1, {x:-200, y:-400});
    tlfour.to(duckFourMove, 1.2, {x:-400, y:0});
    tlfour.to(duckFourMove, 1.5, {x:-600, y:-400});
    tlfour.to(duckFourMove, 1, {x:-750, y:0});


    setTimeout(function(){ alert("game over")  }, 7000);

  }

  function getWinner() {


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

// need to add some function to show the winner by comparing player one score
// vs player 2 score



  // var
      // TweenMax.to(duckOneMove, 3, {left:"380px", top:"-10", repeat:3, yoyo:true});
      // TweenMax.from(duckOneMove, 4, {left:"-380px", top:"-380", repeat:5, yoyo:true});
  // function getAnimation() {
  //   TweenLite.set(duckOneMove, {x:-30, y:300})

  //   var bezTween = new TweenMax(duckOneMove, 6, {
  //     bezier:{
  //       type:"soft",
  //       values:[{x:60, y:80}, {x:150, y:30}, {x:400 + Math.random() *100,
  //        y:320*Math.random() + 50}, {x:500, y:320*Math.random() + 50}, {x:700, y:100}, {x:850, y:500}],

  //     },
  //     ease:Linear.easnone});
  //   return bezTween;
  // }

  // function buildTimeline() {
  //   tl = new TimelineMax({repeat: 2})
  //   tl.add(getAnimation());
  // }

  // buildTimeline();
  // tl.progress(0.5).timeScale(0)
  
  
      // TweenMax.to(duckTwoMove, 3, {left:"-420px", top:"-10",  repeat:3, yoyo:true});

  // function myFunction() {
  //   alert("animation complete")
  // }
  



  



//////////////////
//  Jquery Path //
/////////////////
// ;(function($){

//   $.path = {};

//   var V = {
//     rotate: function(p, degrees) {
//       var radians = degrees * Math.PI / 180,
//         c = Math.cos(radians),
//         s = Math.sin(radians);
//       return [c*p[0] - s*p[1], s*p[0] + c*p[1]];
//     },
//     scale: function(p, n) {
//       return [n*p[0], n*p[1]];
//     },
//     add: function(a, b) {
//       return [a[0]+b[0], a[1]+b[1]];
//     },
//     minus: function(a, b) {
//       return [a[0]-b[0], a[1]-b[1]];
//     }
//   };

//   $.path.bezier = function( params, rotate ) {
//     params.start = $.extend( {angle: 0, length: 0.3333}, params.start );
//     params.end = $.extend( {angle: 0, length: 0.3333}, params.end );

//     this.p1 = [params.start.x, params.start.y];
//     this.p4 = [params.end.x, params.end.y];

//     var v14 = V.minus( this.p4, this.p1 ),
//       v12 = V.scale( v14, params.start.length ),
//       v41 = V.scale( v14, -1 ),
//       v43 = V.scale( v41, params.end.length );

//     v12 = V.rotate( v12, params.start.angle );
//     this.p2 = V.add( this.p1, v12 );

//     v43 = V.rotate(v43, params.end.angle );
//     this.p3 = V.add( this.p4, v43 );

//     this.f1 = function(t) { return (t*t*t); };
//     this.f2 = function(t) { return (3*t*t*(1-t)); };
//     this.f3 = function(t) { return (3*t*(1-t)*(1-t)); };
//     this.f4 = function(t) { return ((1-t)*(1-t)*(1-t)); };

//     /* p from 0 to 1 */
//     this.css = function(p) {
//       var f1 = this.f1(p), f2 = this.f2(p), f3 = this.f3(p), f4=this.f4(p), css = {};
//       if (rotate) {
//         css.prevX = this.x;
//         css.prevY = this.y;
//       }
//       css.x = this.x = ( this.p1[0]*f1 + this.p2[0]*f2 +this.p3[0]*f3 + this.p4[0]*f4 +.5 )|0;
//       css.y = this.y = ( this.p1[1]*f1 + this.p2[1]*f2 +this.p3[1]*f3 + this.p4[1]*f4 +.5 )|0;
//       css.left = css.x + "px";
//       css.top = css.y + "px";
//       return css;
//     };
//   };

//   $.path.arc = function(params, rotate) {
//     for ( var i in params ) {
//       this[i] = params[i];
//     }

//     this.dir = this.dir || 1;

//     while ( this.start > this.end && this.dir > 0 ) {
//       this.start -= 360;
//     }

//     while ( this.start < this.end && this.dir < 0 ) {
//       this.start += 360;
//     }

//     this.css = function(p) {
//       var a = ( this.start * (p ) + this.end * (1-(p )) ) * Math.PI / 180,
//         css = {};

//       if (rotate) {
//         css.prevX = this.x;
//         css.prevY = this.y;
//       }
//       css.x = this.x = ( Math.sin(a) * this.radius + this.center[0] +.5 )|0;
//       css.y = this.y = ( Math.cos(a) * this.radius + this.center[1] +.5 )|0;
//       css.left = css.x + "px";
//       css.top = css.y + "px";
//       return css;
//     };
//   };

//   $.fx.step.path = function(fx) {
//     var css = fx.end.css( 1 - fx.pos );
//     if ( css.prevX != null ) {
//       $.cssHooks.transform.set( fx.elem, "rotate(" + Math.atan2(css.prevY - css.y, css.prevX - css.x) + ")" );
//     }
//     fx.elem.style.top = css.top;
//     fx.elem.style.left = css.left;
//   };

// })(jQuery);


// var animate, left=0, imgObj=null;

// function init(){

//    imgObj = document.getElementById('duck-move');
//    imgObj.style.position= 'absolute';
//    imgObj.style.top = '240px';
//    imgObj.style.left = '-300px';
//    imgObj.style.visibility='hidden';

//    moveRight();
// }

// function moveRight(){
//     left = parseInt(imgObj.style.left, 10);

//     if (10 >= left) {
//         imgObj.style.left = (left + 5) + 'px';
//         imgObj.style.visibility='visible';

//         animate = setTimeout(function(){moveRight();},20); // call moveRight in 20msec

//         //stopanimate = setTimeout(moveRight,20);
//     } else {
//         stop();
//     }
//     //f();
// }

// function stop(){
//    clearTimeout(animate);
// }

// window.onload = function() {init();};


// function duckMove(){
//   var SineWave = function() {
//     this.css = function(p) {
//       var s = Math.sin(p*20)
//       var x = 500 - p * 300 
//       var y = s * 50 + 150
//       var o = ((s+2)/4+0.1)
//       return {top: y + "px", left: x + "px", opacity: o}
//     } 
//   };
    
//   $(".duck-one").animate({path : new SineWave})
// }

// $(function(){
//   var playerOneScore;
//   var playerTwoScore;

//   sine : function() {
//         return new SineWave
//       }

//   $(".duck-one").on("click", function(){
//     alert("duck clicked!")
//   })
// })

// var SineWave = function() {
//   this.css = function(p) {
//     var s = Math.sin(p*20)
//     var x = 500 - p * 300 
//     var y = s * 50 + 150
//     var o = ((s+2)/4+0.1)
//     return {top: y + "px", left: x + "px", opacity: o}
//   } 
// };


// $().ready(function() {
  

//   var Paths = {"arc":[], "bezier":[], "sine": []}
  
//   var path_fns = {
//     arc: function(i) {
//       return new $.path.arc({
//         center: [285,185],  
//         radius: 100,  
//         start: -i*20,
//         end: i*100,
//         dir: (i%2) ? 1 : -1
//       })
//     },
//     bezier: function(i) {
//       var x = i%2 ? 1 : -1
//       return new $.path.bezier({
//         start: { x:185, y:185, angle: i*20 * x},  
//         end: {x:540,y:110, angle: i*10, length: i / 4.0}
//       })
//     },
//     sine : function() {
//       return new SineWave
//     }
//   }
  
//   for(var type in Paths) {

//     for(var i=0; i<10; i++ ) {
//       if(i != 9 && type == "sine")
//         continue
        
//       var path = path_fns[type](i)
//       Paths[type].push(path)

//       var css = {
//         "backgroundColor": (i%2) ? "red" : "yellow", 
//         width: 20*(i+1), 
//         height: 20*(i+1), 
//         "-moz-border-radius": 10*(i+1), 
//         "-webkit-border-radius": 10*(i+1), 
//         marginLeft: -10*(i+1), // offset the div, so center is at origin
//         marginTop: -10*(i+1) 
//       }

//       var $$ = $("<span class=pixel></span>").css(css)

//       // initialize to start
//       $$.css(path.css(1))
//       $("#" + type).append($$)     
//     }
        
//   }

  
//   $(".start").click(function() {
//     var i =0;
//     var type = $(this).closest("div").attr("id")
    
//     $("#" + type + " .pixel").each(function() {
//       $(this).stop().animate({path: Paths[type][i] }, 3000)
//       i++;
//     })
//   })
  
  
//     $(".plot").click(function() {

//       var $$ = $("<div>")
//       var type = $(this).closest("div").attr("id")
      
//       for(var t=0; t<1;t+= 0.01) {    
//         for(var i in Paths[type]) {
//           var d = $("<span class=dot></span>").css(Paths[type][i].css(t))
//           $$.append(d)
//         }
//       }
//       $("#" + type ).append($$) 
//     })

  
// })

