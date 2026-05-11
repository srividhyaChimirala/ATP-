function validateTitle(title){
    if(!title){
        return "title required"
    }
    if(title.length>=3){
        return true
    }
    else{
        return "length must be atleast 3 chars"
    }
}

function validatePriority(priority){
    if(priority=='low'||priority=='high'||priority=='medium'){
        return true
    }
    else{
        return "Invalid priority"
    }
}

function validateDueDate(date){
    return true
}

export {validateTitle,validatePriority,validateDueDate}
