//controller is acting as a glue b/w the model(factory) and view
//$scope- It is angular defined thing
//$ things are always angular things
//we are injecting $scope in controller
// $scope can get the data from the controller scope

// DI Dependency Injection (factory)
//here I am injecting factory in the controller

module.controller("greetctrl",function($scope,greetfactory){
 //take data from view and give it to the model
    $scope.greet=function(){
        var firstName=$scope.firstname;
        var secondName=$scope.secondname;
        $scope.result="Welcome "+greetfactory.initCap(firstName)+" "+greetfactory.initCap(secondName);
    }
$scope.clear=function(){
    $scope.firstname="";
    $scope.secondname="";
    $scope.result="";
}
});
