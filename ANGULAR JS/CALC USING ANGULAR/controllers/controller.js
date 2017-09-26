module.controller("calccontroller",function($scope,calcfactory){
    $scope.addition=function(){
        //console.log("add button clicked")
        var firstNumber=$scope.firstnumber;
        var secondNumber=$scope.secondnumber;
      $scope.result=calcfactory.add(firstNumber,secondNumber);
    
    }
  
    
 $scope.subtraction=function(){
        var firstNumber=$scope.firstnumber;
        var secondNumber=$scope.secondnumber;
    $scope.result=calcfactory.sub(firstNumber,secondNumber);
    }
     
 
  $scope.multiplication=function(){
        var firstNumber=$scope.firstnumber;
        var secondNumber=$scope.secondnumber;
          $scope.result=calcfactory.mul(firstNumber,secondNumber);

    }
    
   $scope.division=function(){
        var firstNumber=$scope.firstnumber;
        var secondNumber=$scope.secondnumber;
         $scope.result=calcfactory.div(firstNumber,secondNumber); 

    }

});
