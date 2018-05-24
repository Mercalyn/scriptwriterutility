function println(printArgs){
    //the idea here is to only need to add one line to html, and adding the rest of the styles and functionality here
    //use println(arguments);
    
    //number of lines you actually want displayed from the bottom
    var displayLines = 30;
    
    //creation of the element
    var newElement = document.createElement("p");
    
    //adding class to each line so they can be counted to see number of lines using numLines.length
    newElement.className = "printClassLine";
    var numLines = document.getElementsByClassName("printClassLine");
    
    
    //creation and appending actual content--add  + numLines.length to see the length during execution debugging
    var newContent = document.createTextNode(printArgs);
    newElement.appendChild(newContent);
    
    //adding styles to newly created element
    //newElement.style.float = "right";
    newElement.style.position = "absolute";
    newElement.style.right = "0px";
    newElement.style.margin = "5px";
    newElement.style.fontFamily = "verdana, sans-serif";
    newElement.style.color = "gray";

    //because of semantics, need to add an id--and NOT a class!!-- to html before appending a child
    var addIdToBody = document.getElementsByTagName("HTML")[0];
    addIdToBody.setAttribute("id", "htmlId");

    //here we actually add the content inside .bodyClass
    var appendElement = document.getElementById("htmlId");
    appendElement.appendChild(newElement);
    
    
    //if loop checks first if numLines has exceeded predetermined amount then shift up
    if(numLines.length > displayLines){
        //this incidentally also destroys the class printClassLine with it, so no need to delete that
        //as it won't actually count it when numLines is counted
        numLines[0].outerHTML = "";
    };
        
    
    //for loop so it loops from the first line to the last line and orders them downwards, because bottom aligned text
    for (iterativeAmount = 0; iterativeAmount < numLines.length; iterativeAmount++){
        //reversed i is dynamically reversed version of i according to numLines.length
        //this is needed in the position calc because it needs to be reverse ordered
        var reversedi = numLines.length - iterativeAmount - 1;
        
        //elementArray[i] = numLines[i];
        numLines[iterativeAmount].style.bottom = reversedi * 21 + "px";
        
        //how to access the inner paragraph object and what iteration it is on
        //console.log(i + " " + numLines[i].innerHTML);
    };
};