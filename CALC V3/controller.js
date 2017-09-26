window.addEventListener("DOMContentLoaded",init);
function init(){
    var butons=document.getElementsByTagName("button");
for(var i=0;i<butons.length;i++){
    var bt=butons[i];
    bt.addEventListener("click",doOperation);
}    


}

function doOperation(event){
    var firstNo=document.getElementById("firstNo").value;
    var secondNo=document.getElementById("secondNo").value;
   // var buttonValue=this.innerHTML;
    
    //var buttonValue=event.srcElement.innerHTML;
    
 /*   if(buttonValue==='+'){
    var result=add(firstNo,secondNo);
    }
        if(buttonValue==='-'){
            var result=sub(firstNo,secondNo);
        }
    
    if(buttonValue==='*'){
        var result=mul(firstNo,secondNo);
    }
    
if(buttonValue==='/'){
    var result=div(firstNo,secondNo);
}  */

//var result=calcObject[this.getAttribute("do-operation")](firstNo,secondNo);//this is also correct
    
   var result=calcObject[event.srcElement.getAttribute("do-operation")](firstNo,secondNo); //we can use event.srcElement also
    document.getElementById("answer").innerHTML=result;


}