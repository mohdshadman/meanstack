var taskOperations={
    taskList:[],
    taskId:0,
    addTask:function(name,desc){
        var taskObject=new task(name,desc,++this.taskId);
        this.taskList.push(taskObject);
    },
searchTask:function(taskId){
    for(var i=0;i<this.taskList.length;i++){
        if(this.taskList[i].id==taskId){
            this.taskList[i].isCompleted=!this.taskList[i].isCompleted;
            break;
        }
    }
}
}