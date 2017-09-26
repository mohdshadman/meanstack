module.factory("calcfactory",function(){
    

var calcObject={
    add:function(firstNo,secondNo){
        return parseInt(firstNo)+parseInt(secondNo);
    },

 sub:function(firstNo,secondNo){
        return parseInt(firstNo)-parseInt(secondNo);
    },

 mul:function(firstNo,secondNo){
        return parseInt(firstNo)*parseInt(secondNo);
    },


 div:function(firstNo,secondNo){
        return parseInt(firstNo)/parseInt(secondNo);
    },

}
return calcObject;
});