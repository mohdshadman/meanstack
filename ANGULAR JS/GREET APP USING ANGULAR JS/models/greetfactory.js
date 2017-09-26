//model can be factory or service
//define factory for the logic
//factory is basically a function and factory must return an object
//object contains a factory logic
module.factory("greetfactory",function(){
    var object={
        initCap:function(name){
            return name.charAt(0).toUpperCase()+name.substring(1).toLowerCase();
        }
    }
return object;  //factory returns object
    });