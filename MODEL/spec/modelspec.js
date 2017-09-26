//define TestSuite
//TestSuite is a collection of many test cases
describe("This is add test suite",function(){
    //Test Case
    it("add two integers test case",function(){
        var firstNo=10;
        var secondNo=20;
        var expectedResult=30;
        var result=add(firstNo,secondNo);
        expect(result).toBe(expectedResult);
        
    });
    //test case
    it("add n=5 integers",function(){
       var firstNo=10;
        var secondNo=20;
     var thirdNo=30;
        var fourthNo=40;
        var fifthNo=50;
       var expectedResult=150;
        var result=add(firstNo,secondNo,thirdNo,fourthNo,fifthNo);
        expect(result).toBe(expectedResult);
        });
    //test case
   it("add two string integers",function(){
     var firstNo="10";
       var secondNo="20";
       var expectedResult=30;
       var result=add(firstNo,secondNo);
       expect(result).toBe(expectedResult);
    
   });
    //test case
    it("add strings treated as zero",function(){
        var firstNo="hello";
        var secondNo="hai";
        var expectedResult=0;
        var result=add(firstNo,secondNo);
        expect(result).toBe(expectedResult);
        
});
//test case
    it("add mix of string and integers",function(){
        var firstNo="hello";
        var secondNo="hai";
        var thirdNo=10;
        var fourthNo=20;
        var fifthNo=30;
        var expectedResult=60;
        var result=add(firstNo,secondNo,thirdNo,fourthNo,fifthNo);
        expect(result).toBe(expectedResult);
        
    });
//test case
    it("add two functions",function(){
        function sum(){
            return 1000;
        }
    function plus(){
        return 2000;
    }
        var expectedResult=3000;
   var result=add(sum,plus);
        expect(result).toBe(expectedResult);
    });
    // test case
    it("add array",function(){
        var array=[10,20,30];
        var expectedResult=60;
        var result=add(array);
        expect(result).toBe(expectedResult);
    });
    //test case
    it("add mix of array,function,string,integers",function(){
        var firstNo=10;
        var secondNo=20;
        var thirdNo="hello";
        var array=[5,5,"10"];
        function sum(){
            return 1000;
        }
        var expectedResult=1050;
        var result=add(firstNo,secondNo,thirdNo,array,sum);
        expect(result).toBe(expectedResult);
    });
    
});