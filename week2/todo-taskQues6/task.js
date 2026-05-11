
import { validateTitle,validatePriority,validateDueDate } from "./validator.js";

const tasks=[];

function addTask(title,priority,dueDate){
    if(validateTitle(title) && validatePriority(priority) && validateDueDate(dueDate)){
        tasks.push({title,priority,dueDate})
        return "Task Updated"
    }
    else{
        return "Invalid task"
    }
}

function getAllTasks(){
    console.log("Tasks :",tasks)
}

function completeTask(task){
    let t=tasks.find(t=>t.title===task)
    console.log(t,"completed")
}

export{addTask,getAllTasks,completeTask}