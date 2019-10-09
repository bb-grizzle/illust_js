/*
var doc = app.activeDocument;
var doc_w = doc.width;
var doc_h = doc.height;
*/

var docRef = documents.add();
var textRef = docRef.textFrames.add();

textRef.contents = "hello test";
textRef.top = 400;
textRef.left = 100;
redraw();

var ip;
for(var i=0; i<(textRef.insertionPoints.length); i+=2){
        ip = textRef.insertionPoints[i];      
        ip.characters.add(" ");
    }
