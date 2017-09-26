
window.addEventListener("DOMContentLoaded",init);


function init(){
    
document.getElementById("greetbt").addEventListener("click",greet);
    
}


function greet(){
    var firstName=document.getElementById("firstName").value;
        
    var middleName=document.getElementById("middleName").value;
        
    var lastName=document.getElementById("lastName").value;
    
    var result=soln(firstName,middleName,lastName);
   
    
    document.getElementById("msg").innerHTML=result;
  
    }
    