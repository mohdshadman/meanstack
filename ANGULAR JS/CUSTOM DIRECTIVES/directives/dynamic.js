app.directive("nameDirective",function(){
    return{
        
    template:"<b> Hello name is:: {{firstName}} {{secondName}} </b>",
        restrict:"E"  //Element Level
    
    }
});