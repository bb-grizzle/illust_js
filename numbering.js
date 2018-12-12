var myDoc = app.activeDocument;
//숫자 선택

var selections;

if(myDoc.selection.length>0){
    selections = myDoc.selection;
    //인풋 받기
    var input = prompt ("추가할 텍스트를 입력하세요. \n없다면 확인을 누르세요.", "");
    $.writeln("input.length: " + input.length);
    
     //대지 
    var artboard = myDoc.artboards;
    var artboards_length =  artboard.length; // 대지 개수
    var artboards_n = artboard.getActiveArtboardIndex(); //활성화된 대지 

    //넘버링 레이어 추가
    var layer = myDoc.layers.add();
    layer.name = "pageNumber";

    //selections 위치, 사이즈 잡기
    var fontName = selections[0].textRange.characterAttributes.textFont;
    var fontSize = selections[0].textRange.characterAttributes.size;
        
    //selections info
    $.writeln("[selections info]");
    $.writeln("selections : " + selections);
    $.writeln("fontName : " + fontName);
    $.writeln("fontSize : " + fontSize);

    
     var selWidth = selections[0].width;
         
    for(var i=0; i<artboards_length; i++){
            
        var pageNumb = i+1;
        var Numbertext = layer.textFrames.add(); 
        if(input.length>0){
            Numbertext.contents = input+"  " + pageNumb;
        }else{
            Numbertext.contents = pageNumb;
        }
        
        
        //위치 잡기
        var activeArtBoard = artboard[i];
        var artBound = activeArtBoard.artboardRect;
        
         if(i==0){
            $.writeln("artBound[0] : " + artBound[0]);
            $.writeln("artBound[1] : " + artBound[1]);
            $.writeln("artBound[2] : " + artBound[2]);
            $.writeln("artBound[3] : " + artBound[3]);
        }
        
        //X position
        
        var gapX = selections[0].position[0] - artboard[0].artboardRect[0];
        var positionX = artBound[0]+gapX;
        var ableft = positionX; 

        //Y Position
        var gapY = selections[0].position[1] - artboard[0].artboardRect[1];
        var abbottom = artBound[1] + gapY;
       
        Numbertext.textRange.paragraphAttributes.justification = Justification.RIGHT; 
        Numbertext.textRange.characterAttributes.size = fontSize;
        Numbertext.textRange.characterAttributes.textFont = fontName;
        
         var textWidth = Numbertext.width;
        $.writeln("textWidth : " + textWidth);
        $.writeln("selWidth : " + selWidth);
        
        Numbertext.left = ableft - textWidth + selWidth;  
        Numbertext.top = abbottom;  
        $.writeln("gapY : " + gapY);
    }
    selections[0].remove();
}else{
        alert ("선택된 텍스트가 없습니다.\n 기준이 될 넘버링 텍스트 하나를 선택해주세요. ");
}  