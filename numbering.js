var myDoc = app.activeDocument;
//숫자 선택
var selections = myDoc.selection;
//대지 
var artboard = myDoc.artboards;
var artboards_length =  artboard.length; // 대지 개수
var artboards_n = artboard.getActiveArtboardIndex(); //활성화된 대지 

//넘버링 레이어 추가
var layer = myDoc.layers.add();
layer.name = "pageNumber";

//selections 위치, 사이즈 잡기
/*
  $.writeln("selections : " + selections);
  $.writeln("positionx : " + positionx + ", positiony"  + positiony);
  $.writeln("selections.length : " + selections.length);
  */
  if(selections.length>0){
      var fontName = selections[0].textRange.characterAttributes.textFont;
       
        var fontSize = selections[0].textRange.characterAttributes.size;
        /*
         $.writeln("fontName : " + fontName);
        $.writeln("fontSize : " + fontSize);
*/
;
for(var i=0; i<artboards_length; i++){
        
    var pageNumb = i+1;
    var Numbertext = layer.textFrames.add(); 
    Numbertext.contents = pageNumb;
    
    //위치 잡기
    var activeArtBoard = artboard[i];
    var artBound = activeArtBoard.artboardRect;
    
    var gapX = selections[0].position[0] - artboard[0].artboardRect[0];
    var gapY = selections[0].position[1] -artboard[0].artboardRect[1];
      $.writeln("gapX : " + gapX);
    
    var positionx = artBound[0]+gapX;
    var positiony = artBound[1];
    $.writeln("artBound[1] : " + artBound[1] );
    
    var ableft = positionx;  
    var abtop = positiony;  
    
    Numbertext.left = ableft;  
    Numbertext.top = abtop;  
    
    Numbertext.textRange.paragraphAttributes.justification = Justification.LEFT; 
    Numbertext.textRange.characterAttributes.size = fontSize;
    Numbertext.textRange.characterAttributes.textFont = fontName;


}
//selections[0].remove();
      }
  