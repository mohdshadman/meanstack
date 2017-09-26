window.addEventListener("DOMContentLoaded",init);
function init(){
    var butons=document.getElementsByTagName("button");
for(var i=0;i<butons.length;i++){
    var bt=butons[i];
    bt.addEventListener("click",doOperation);
}    


}

function doOperation(){
    var firstNo=document.getElementById("firstNo").value;
    var secondNo=document.getElementById("secondNo").value;
    var buttonValue=this.innerHTML;
    if(buttonValue==='+'){
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
}

document.getElementById("answer").innerHTML=result;


}