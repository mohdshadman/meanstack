app.factory("friendfactory",function($http,$q,url){
    var result={};
    var object={
        getFriengJSON:function(){
            var deferred=$q.defer();
            /*$http.get('../server/friends.json').success(function(data){
            result=data;
                deferred.resolve(data);
            }).error(function(error){
                result=error;
                deferred.reject(error);
            });*/
             
            
            $http.get(url).success(function(data){
            result=data;
                deferred.resolve(data);
            }).error(function(error){
                result=error;
                deferred.reject(error);
            });
       return deferred.promise;
        }
    }
return object;
    });