app.controller("friendctrl",function($scope,friendfactory){
    $scope.loadFriends=function(){
    var promise=friendfactory.getFriengJSON();
    console.dir(promise);
        for(var i=1;i<=10;i++){
        console.log("some logic is going on");
    }
function success(data){
    $scope.result=data;
}
function error(error){
    $scope.result=error;
}
promise.then(success,error);
    }
    });