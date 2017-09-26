app.directive("classLevel",function(){
    return{
        controller:"myctrl1",
        link:function(scope,element,attrs){
            element[0].innerHTML="<b>This is a class level directive</b>";
        },
    restrict:"C"
    }
});