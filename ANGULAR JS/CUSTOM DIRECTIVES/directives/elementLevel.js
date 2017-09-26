app.directive("elementLevel",function(){
    return{
        controller:"myctrl1",
        link:function(scope,element,attrs){
            element[0].innerHTML="<b>Test completed by ::</b> "+scope.firstName+" "+scope.secondName;
        },
   restrict:"E"
        
        }
});