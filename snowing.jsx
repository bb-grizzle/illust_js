//2018.12.14
//written by Grizzle
//automatic snowing effects

var myDoc = app.activeDocument;

//load artboard size
var doc_w = myDoc.width;
var doc_h = myDoc.height;
$.writeln ("doc_w : " + doc_w);
$.writeln ("doc_h : " + doc_h);

//add layer
var layer = myDoc.layers.add();
layer.name = "snow";

//draw snow
var cir = myDoc.pathItems;
var size = 4;
var count = 10 0;
var snowColor = new GrayColor();
snowColor.gray = 0;


for(var i=0; i<count; i++){
    
    
    var temp_x = Math.random()*doc_w;
    var temp_y = Math.random()*doc_h*-1;
    var temp_size = size + Math.random()*8;
    $.writeln ("temp_x : " + temp_x);
    $.writeln ("temp_y : " + temp_y);
    
    //top, left, width, height
    var cir_temp = cir.ellipse(temp_y, temp_x,temp_size,temp_size);
    cir_temp.filled = true;
    cir_temp.fillColor = snowColor;
    cir_temp.stroked = false;
    
   // var test = cir_temp .graphicStyles.length;
    $.writeln ("cir_temp : " + cir_temp);
    
    }

//snow hill






