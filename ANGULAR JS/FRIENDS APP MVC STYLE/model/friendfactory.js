app.factory("friendfactory",function(){
    var object={
        getFriendsData:function(){
            var friends=[{name:'mike',phone:222,city:'delhi',pic:'../images/img1.jpg'},{name:'tom',phone:3333,city:'mumbai',pic:'../images/img2.gif'},{name:'rim',phone:444,city:'NewYork',pic:'../images/images2.jpg'}];
            return friends;
        }
    }
        return object;
    
});