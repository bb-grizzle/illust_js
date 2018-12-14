//2018.12.14
//written by Grizzle
//automatic snowing effects

var myDoc = app.activeDocument;

//load artboard size
var doc_w = myDoc.width;
var doc_h = myDoc.height;
$.writeln ("doc_w : " + doc_w);
$.writeln ("doc_h : " + doc_h);

//draw snow
var cir = myDoc.pathItems;
var size = 10;
var count = 30;

for(var i=0; i<count; i++){
    var temp_x = Math.random()*doc_w;
    var temp_y = Math.random()*doc_h*-1;
    $.writeln ("temp_x : " + temp_x);
    $.writeln ("temp_y : " + temp_y);
    
    //top, left, width, height
    var cir_temp = cir.ellipse(temp_y, temp_x,size,size);
   // var test = cir_temp .graphicStyles.length;
     $.writeln ("cir_temp : " + cir_temp);
    }









