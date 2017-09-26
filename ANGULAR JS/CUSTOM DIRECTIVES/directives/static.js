app.directive("myFirstDirective",function(){
   return{
    
        template:"<h1 class='hello' </h1> <b>Hello this is my custom directive and this is the example </b>",
            restrict:"E" // Element Level
    }
});

// Plain HTML directive