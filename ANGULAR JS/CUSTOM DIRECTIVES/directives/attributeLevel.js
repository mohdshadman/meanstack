app.directive("attributeLevel",function(){
    return{
        controller:"myctrl1",
        link:function(scope,element,attrs){
            element.bind("mouseenter",function(){
                element[0].innerHTML="This is an attribute (mouse enter) level directive";
            });
        element.bind("click",function(){
            alert("You clicked on the element");
        });
        element.bind("mouseleave",function(){
            element[0].innerHTML="This is an attribute (mouse leave) level directive";
        });
        
        },
    restrict:"E"
    }
});