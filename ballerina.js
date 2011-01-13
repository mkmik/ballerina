var dir = 1;

function swap() {
    dir = -dir;
    console.log("direction swapped");
}

function start() { 
    var canvas = document.getElementById("a"); 
    var c = canvas.getContext("2d"); 
    
    var d=0;
    
    var step = 1000/30;
    


    function draw() {


        c.clearRect (0, 0, 300, 400);

        
        d+=360/30;
        
        var degree = d % 360;
        var xToYratio = 3;
        var radius = 20;

        
        var x = Math.cos(degree * 2 * Math.PI / 360) * radius * xToYratio;
        var y = Math.sin(degree * 2 * Math.PI / 360) * radius;

        if(y>-14)
            c.fillStyle="red";
        else
            c.fillStyle="black";


        c.beginPath();
        c.arc(140 + x * dir, 180 + y, 3, 0, Math.PI*2, true); 
        c.closePath();
        c.fill();


        setTimeout(draw, step);
    }
    
    
    draw();
}


$(function() {
      start();
      $("#swap").click(swap);
  });