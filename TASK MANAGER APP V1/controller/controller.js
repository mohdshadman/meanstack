window.addEventListener("DOMContentLoaded",init);
function init(){
    document.getElementById("add").addEventListener("click",addNewTask)
    function addNewTask(){
        var taskName=document.getElementById("taskName").value;
        var taskDesc=document.getElementById("taskDesc").value;
        taskOperations.addTask(taskName,taskDesc);
        printTask(taskOperations.taskList[taskOperations.taskList.length-1]);
    }
function printTask(taskObject){
    var ul=document.getElementById("taskList");
    var li=document.createElement("li");
    li.innerHTML=taskObject.id+" "+taskObject.name+" "+taskObject.desc;
    li.addEventListener("click",toggleTask);
    ul.appendChild(li);
}
function toggleTask(event){
    event.srcElement.classList.toggle("completed");
    var taskId=event.srcElement.innerHTML.split(" ")[0];
    taskOperations.searchTask(taskId);
}

}