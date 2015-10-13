var SineWave = function() {
  this.css = function(p) {
    var s = Math.sin(p*20)
    var x = 500 - p * 300 
    var y = s * 50 + 150
    var o = ((s+2)/4+0.1)
    return {top: y + "px", left: x + "px", opacity: o}
  } 
};


$().ready(function() {
  

  var Paths = {"arc":[], "bezier":[], "sine": []}
  
  var path_fns = {
    arc: function(i) {
      return new $.path.arc({
        center: [285,185],  
        radius: 100,  
        start: -i*20,
        end: i*100,
        dir: (i%2) ? 1 : -1
      })
    },
    bezier: function(i) {
      var x = i%2 ? 1 : -1
      return new $.path.bezier({
        start: { x:185, y:185, angle: i*20 * x},  
        end: {x:540,y:110, angle: i*10, length: i / 4.0}
      })
    },
    sine : function() {
      return new SineWave
    }
  }
  
  for(var type in Paths) {

    for(var i=0; i<10; i++ ) {
      if(i != 9 && type == "sine")
        continue
        
      var path = path_fns[type](i)
      Paths[type].push(path)

      var css = {
        "backgroundColor": (i%2) ? "red" : "yellow", 
        width: 20*(i+1), 
        height: 20*(i+1), 
        "-moz-border-radius": 10*(i+1), 
        "-webkit-border-radius": 10*(i+1), 
        marginLeft: -10*(i+1), // offset the div, so center is at origin
        marginTop: -10*(i+1) 
      }

      var $$ = $("<span class=pixel></span>").css(css)

      // initialize to start
      $$.css(path.css(1))
      $("#" + type).append($$)     
    }
        
  }

  
  $(".start").click(function() {
    var i =0;
    var type = $(this).closest("div").attr("id")
    
    $("#" + type + " .pixel").each(function() {
      $(this).stop().animate({path: Paths[type][i] }, 3000)
      i++;
    })
  })
  
  
    $(".plot").click(function() {

      var $$ = $("<div>")
      var type = $(this).closest("div").attr("id")
      
      for(var t=0; t<1;t+= 0.01) {    
        for(var i in Paths[type]) {
          var d = $("<span class=dot></span>").css(Paths[type][i].css(t))
          $$.append(d)
        }
      }
      $("#" + type ).append($$) 
    })

  
})
